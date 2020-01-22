const db = require('../../database/dbConfig');

module.exports = {
    find,
    findById,
    add,
    destroy
}

function find(){
    return db("reply")
}

function findById(id){
    return db("reply").where({ id }).first();
}

async function add(reply){
    
    const [id] = await db("reply").insert(reply);

    return db('reply').where({ id }).first()
}

function destroy(id){
    return db("reply").where({ id }).del()
}