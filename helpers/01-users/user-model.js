const db = require('../../database/dbConfig');

module.exports = {
    find,
    getBy,
    findById,
    destroy,
    add
}

function find(){
    return db('user')
}

function findById(id) {
    return db('user')
      .where({ id })
      .first();
  }

async function add(user){
    const [id] = await db('user').insert(user);

    return db('user').where({ id }).first()
}

function getBy(select){
    return db('user').where(select).first();
}


function destroy(id){
    return db('user').where({ id }).del()
}