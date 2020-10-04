const db = require('./config');


const insert = 'INSERT INTO person(name) VALUES($1)' ;
const select = 'SELECT * FROM person' ;
const selectFromPosts = 'SELECT p.title,p.content,u.name FROM posts as p join users as u on p.user_id = u.id'  ;


const getPosts = () => {
   return db.any(selectFromPosts, [true])
    .catch(err => console.log(err))
}

module.exports = getPosts ;

  