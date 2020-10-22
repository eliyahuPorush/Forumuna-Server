
let postQueries = require('../database/queries')
const json = {
    answer: "my answer",
    owner: "I am owner"
}
exports.addForum = (req,res) => {
    try{
        let newForum = req.body ;
        postQueries.addNewPost(newForum).then(() => {
            res.status(200).send(JSON.stringify(newForum))
        })
    }
    catch(err) {
        console.log("error on adding forum: ", err);
    }
} ;


exports.getPosts = async (req,res) => {
    postQueries.getPosts().then(data => {
        res.send(data);
    })
} ;

exports.getUserPosts = async (req,res) => {
    postQueries.getUserPosts(req.params.userID).then(data => { res.status(200).send(data)})
}

exports.deletePost = async (req,res) => {
    postQueries.deletePost(req.params.postID).then(res => res.status(200).send())
}

exports.addAnswer = async (req,res) => {
    postQueries.addAnswer(req.body).then(data => res.status(200).send())
}


exports.getAnswers = async (req,res) => {
    postQueries.getAnswers(req.params.postId).then(data => {
        console.log('data: ', data);
        res.status(200).send(JSON.parse(json))
    })
    
}