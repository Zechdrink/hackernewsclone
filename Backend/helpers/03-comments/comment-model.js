const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy,
    getPostComments
}

function find(){
    return db("comment")
}

function findById(id){
    return db("comment").where({ id }).first();
}

async function add(comment){
    
    const [id] = await db("comment").insert(comment);

    return db('comment').where({ id }).first()
}

function destroy(id){
    return db("comment").where({ id }).del()
}

function getPostComments(postId){   
    return db("comment")
    .join("post", "post.id", "comment.post_id")
    .select("comment.*")
    .where("comment.post_id", postId)
}