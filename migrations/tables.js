
exports.up = function(knex) {
  
    return knex.schema.createTable('user', (tbl) => {
  
        tbl.increments();

        tbl.string('name', 255)
        tbl.string('email', 255)
        tbl.string('username', 255)
           .notNullable()
           .unique()
        
        
        tbl.string('password', 255)

    })

    .createTable('post', (tbl) => {

        tbl.increments();

        tbl.string('title', 255)

        tbl.string('link', 255)

        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    })

    .createTable('comment', (tbl) => {

        tbl.increments();

        tbl.string('comment', 255).notNullable();

        tbl.integer('post_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('post')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    })

    .createTable('reply', (tbl) => {

        tbl.increments();

        tbl.string('reply', 255).notNullable();

        tbl.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.integer('comment_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('comment')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('post')
    .dropTableIfExists('comment')
    .dropTableIfExists('reply')
};
