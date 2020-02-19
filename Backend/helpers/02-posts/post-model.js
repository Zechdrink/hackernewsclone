const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy,
    likeUpdater
}

function find(){
    return db("post")
}

function findById(id){
    return db("post").where({ id }).first();
}

async function add(post){
    
    const [id] = await db("post").insert(post);

    return db('post').where({ id }).first()
}

function destroy(id){
    return db("post").where({ id }).del()
}

function likeUpdater(id, changes){
    return db('post')
    .where({ id })
    .update({ likes: changes })
}