const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy, 
    findBy
}

function find(){
    return db("like")
}

function findById(id){
    return db("like").where({ id }).first();
}

function findBy(user_id, post_id){
    return db("like").where({user_id}).andWhere({post_id}).first();
}

async function add(like){
    
    const [id] = await db("like").insert(like);

    return db('like').where({ id }).first()
}

function destroy(id){
    return db("like").where({ id }).del()
}