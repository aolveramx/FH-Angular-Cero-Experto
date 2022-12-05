const bcrypt = require('bcryptjs');
const { response } = require("express");

const User = require('../models/User');
const { generateJWT } = require("../helpers/jwt");

const createUser = async( req, res = response ) => {
  const { name, email, password } = req.body;

  try {
    //Verify email
    const user = await User.findOne({ email });
    if( user ) {
      return res.status(500).json({ ok: false, msg: 'email already exists' });
    };
    //Create user based on model
    const dbUser = new User( req.body );
    //Hash password
    const salt = bcrypt.genSaltSync();
    dbUser.password = bcrypt.hashSync( password, salt );
    //Generate JWT
    const token = await generateJWT( dbUser.id, name );
    //Save user in DB
    await dbUser.save();
    //Sucess response
    return res.status(201).json({ 
      ok: true, 
      uid: dbUser.id, 
      name: dbUser.name,
      email: dbUser.email,
      token 
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: 'Something went wrong' });
  }
};

const loginUser = async( req, res = response ) => {
  const { email, password } = req.body;

  try {
    const dbUser = await User.findOne({ email });
    if( !dbUser ) {
      return res.status(400).json({
        ok: false,
        msg: 'Invalid credentials'
      });
    };
    //Match passwords and validate them
    const validPassword = bcrypt.compareSync( password, dbUser.password );
    if( !validPassword ) {
      return res.status(400).json({
        ok: false,
        msg: 'Invalid credentials'
      });
    };
    //Generate JWT
    const token = await generateJWT( dbUser.id, dbUser.name );
    //Response
    return res.json({ 
      ok: true,
      uid: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: 'Something went wrong' });
  }
};

const renewToken = async( req, res = response ) => {
  const { uid } = req;
  const dbUser = await User.findById( uid );

  const token = await generateJWT( uid, dbUser.name );
  return res.json({ 
    ok: true, 
    uid, 
    name: dbUser.name, 
    email: dbUser.email, 
    token 
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken
};