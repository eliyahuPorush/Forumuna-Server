const db = require('./config');


select_user_sql = 'SELECT name,date_of_joined, email FROM users where password = $1 and email = $2' ;
set_user_sql = `insert into users(name,date_of_joined, email, password, alies) VALUES($1, CURRENT_DATE, $2,$3, $4) ` ;
getEmail = 'select email from users where email=$1' ;


exports.getUser = (email, password) => {
        return db.any(select_user_sql, [password, email])
     .catch(err => console.log( 'error on call db , error: ',err))   
 }

 exports.setUser = (name, password, email, alies) => {
    return db.any(set_user_sql, [name,email,password, alies]).
        catch(err => console.log('error on call db: ',err))
 }

 exports.isEmailAlreadyExists = (email) => {
     return db.any(getEmail, [email]).
        catch(err => console.log('error: ', err))
 }

 
