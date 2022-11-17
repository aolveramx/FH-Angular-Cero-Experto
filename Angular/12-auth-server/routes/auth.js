const { Router } = require('express');
const { check } = require('express-validator');

const { createUser, loginUser, renewToken } = require('../controllers/auth');
const { fieldValidators } = require('../middleware/field-validators');
const { jwtValidator } = require('../middleware/validate-jwt');

const router = Router();

//Create user
router.post( '/new', [
  check( 'name', 'name is required' ).not().isEmpty(),
  check( 'email', 'email is required' ).isEmail(),
  check( 'password', 'password is required' ).isLength({ min: 6 }),
  fieldValidators
], createUser );

//Login user
router.post( '/', [
  check( 'email', 'Email is required' ).isEmail(),
  check( 'password', 'Password is required' ).isLength({ min: 6 }),
  fieldValidators
], loginUser );

//Renew token
router.get( '/renew', jwtValidator, renewToken );

module.exports = router;