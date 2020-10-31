const db = require('./config');


select_user_sql = 'SELECT name,date_of_joined, email, id, alies FROM users where password = $1 and email = $2' ;
set_user_sql = `insert into users(name,date_of_joined, email, password, alies) VALUES($1, CURRENT_DATE, $2,$3, $4) ` ;
getEmail = 'select email from users where email=$1' ;
updateProfileSQL = 'UPDATE users SET name = $1, email = $2, alies = $3 WHERE id = $4' ;


exports.getUser = (email, password) => {
        return db.any(select_user_sql, [password, email])
     .catch(err => console.log( 'error on call db , error: ',err))   
 }

 exports.setUser = (name, password, email, image) => {
    return db.any(set_user_sql, [name,email,password, image]).
        catch(err => console.log('error on call db: ',err))
 }

 exports.isEmailAlreadyExists = (email) => {
     return db.any(getEmail, [email]).
        catch(err => console.log('error: ', err))
 }

 exports.updateProfile = profileObj => {
     return db.any(updateProfileSQL, [profileObj.name, profileObj.email, profileObj.buffer, profileObj.id])
        .catch(err => console.log('ERROR ON UPDATE PROFILE: ', err))
 }

 
