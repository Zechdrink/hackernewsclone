const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy
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