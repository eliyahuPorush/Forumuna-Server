const db = require('./config');


const selectFromPosts = 'SELECT p.id,p.title,p.content,u.name FROM posts as p join users as u on p.user_id = u.id order by p.id desc'; 
const addForum = 'INSERT INTO posts(title, content, user_id, date_created) VALUES($1, $2, $3, CURRENT_DATE)' ;
const selectUserPosts = 'SELECT * from posts WHERE posts.user_id = $1' ;
const deletePostSQL = 'DELETE FROM posts WHERE id = $1' ;
const addAnswerSQL = 'INSERT INTO answers(user_id, post_id, content) VALUES($1, $2, $3)' ;
const getAnswersSQL = 'SELECT a.content,u.name from answers as a join users as u on a.user_id=u.id where a.post_id = $1 '  ;



const getPosts = () => {
   return db.any(selectFromPosts, [true])
    .catch(err => console.log(err))
}

const addNewPost = (newPost) => { 
    return db.any(addForum, [newPost.title, newPost.content, newPost.userID ])
    .catch(err => console.log(err));
} 

const getUserPosts = (userID) => {
    return db.any(selectUserPosts,[userID])
    .catch(err => console.log(err))
}

const deletePost = (postID) => {
    return db.any(deletePostSQL, [postID])
    .catch(err => console.log(err))
}

const addAnswer = (answer) => {
    return db.any(addAnswerSQL, [answer.user_id, answer.post_id, answer.content])
    .catch(err => console.log("error 2: ", err))
}

const getAnswers = (postID) => {
    return db.any(getAnswersSQL, [postID])
    .catch(err => console.log("error 1: ", err))
}


module.exports = {
    addNewPost: addNewPost,
    getPosts: getPosts,
    getUserPosts: getUserPosts,
    deletePost: deletePost,
    addAnswer: addAnswer,
    getAnswers: getAnswers
};  