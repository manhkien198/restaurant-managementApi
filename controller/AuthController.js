const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
class UserController {
  //POST /auth/register
  async login(req, res) {
    try {
      // Get user input
      const { email, password } = req.body;

      // Validate user input
      if (!(email && password)) {
        return res.status(400).send('All input is required');
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: '120s',
          }
        );
        const refreshToken = jwt.sign(
          { user_id: user._id, email },
          process.env.REFRESH_TOKEN,
          {
            expiresIn: '3h',
          }
        );
        // save user token
        user.token = token;
        user.refreshToken = refreshToken;
        // user
        return res.status(200).json({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          token: user.token,
          refreshToken: user.refreshToken,
        });
      }
      return res.status(400).send('Invalid Credentials');
    } catch (err) {
      console.log(err);
    }
  }
  //POST /auth/register
  async register(req, res) {
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;

      // Validate user input
      if (!(email && password && first_name && last_name)) {
        return res.status(400).send('All input is required');
      }

      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.status(409).send('User Already Exist. Please Login');
      }

      //Encrypt user password
      const encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });

      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '2h',
        }
      );
      // save user token
      user.token = token;

      // return new user
      return res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  }
  async refresh(req, res, next) {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      res.status(401).json({
        errors: [{ msg: 'Refresh token not found' }],
      });
    }
    try {
      const user = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
      const { email } = user;
      const userInfo = await User.findOne({ email });
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: '120s',
        }
      );
      const newRefreshToken = jwt.sign(
        { user_id: user._id, email },
        process.env.REFRESH_TOKEN,
        {
          expiresIn: '3h',
        }
      );
      userInfo.token = token;
      userInfo.refreshToken = newRefreshToken;
      // user
      return res.status(200).json({
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
        token: userInfo.token,
        refreshToken: userInfo.refreshToken,
      });
    } catch (error) {
      console.log('error :', error);
      res.status(403).json({ errors: [{ msg: 'Invalid token' }] });
    }
  }
}
module.exports = new UserController();
