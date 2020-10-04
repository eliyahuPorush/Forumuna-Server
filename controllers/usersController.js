let auth = require('../database/auth_queries') ;


exports.login = async function(req, res, next) {                    ///     add validations !!!
    // await auth.isEmailAlreadyExists(req.params.email).then(d => { console.log('answer:' ,d)})
    await auth.getUser(req.params.email, req.params.password).
    then(d => {
        console.log(d);
        res.send(d[0]) ;
     }) ;
  } ; 

  exports.signup = (req, res) => {  
        console.log('sign up func - userControler');
        let params = req.params ;
        let emailValid = false ;
        checkEmailValidity(params.email).then(bool => {emailValid = bool; console.log(bool)})
        if(
          checkNameValidity(params.name) &&
          checkPasswordValidity(params.password, params.passwordConfirm) &&
          emailValid
          ){
            auth.setUser(params.name, params.password, params.email, params.alies).
              then((user) => {
                console.log('sign up func - updating the db');
                res.status(200).send(user) ;
              }).catch(err => console.log('error = ' ,err));
           }
           else{
             console.log(emailValid);
             req.status(200).send("details invalid!")
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