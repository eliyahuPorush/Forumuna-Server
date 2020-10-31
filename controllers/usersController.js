let auth = require('../database/auth_queries') ;
let {user_schema} = require('../database/schemas/user.schema') ;


exports.login = async function(req, res, next) {                    ///     add validations !!!
    await auth.getUser(req.params.email, req.params.password).
    then(d => {
        res.send(d[0]) ;
     }) ;
  } ; 

  exports.signup = (req, res) => {  
        let params = req.body.newUser;
        checkEmailValidity(params.email).then(bool => {emailValid = bool; console.log(bool)})
        if(
          checkNameValidity(params.name) &&
          checkPasswordValidity(params.password, params.passwordConfirm) &&
          checkEmailValidity(params.email)
          ){
            auth.setUser(params.name, params.password, params.email, params.image).
              then(() => auth.getUser(params.email, params.password))
              .then(user => res.status(200).send(user[0]))
              .catch(err => console.log('error = ' ,err));
           }
           else{
            res.status(404).send() ;
            console.log('name: ', checkNameValidity(params.name)) ;
            console.log('pass: ', checkPasswordValidity(params.password, params.passwordConfirm)) ;
            console.log('email: ', checkEmailValidity(params.email))
           }
  } 
  // check validations - start
  checkNameValidity  = (name) => {
    return (typeof name == 'string' && name.length > 1) ;
  }
  checkPasswordValidity  = (password, passwordConfirm) => { 
    return(
        typeof password == 'string' &&
        password.length >= 6 && 
        password.length <= 20 && 
        password == passwordConfirm && 
        /\d/gi.test(password) // if there is a digit
        // need to add character check
      ) 
  }
  checkEmailValidity = async (email) => {
    let emailExists = false ;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    await auth.isEmailAlreadyExists(email).then(d => { 
      if(d.length > 0) emailExists = true; 
      return re.test(String(email).toLowerCase()) && emailExists ;
    });
}
// end of validations

exports.updateProfile = async (req,res) => {
  let buffer = req.file.buffer ;
  await auth.updateProfile({...req.body,buffer})
    .then( () => res.status(200).send())
}