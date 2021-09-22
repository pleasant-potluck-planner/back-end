exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('user_name').notNullable().unique()
      users.string('user_password').notNullable()
    })
    .createTable('items', item => {
      item.increments('item_id')
      item.string('item_name').notNullable().unique()
    })
    .createTable('potlucks', potluck => {
      potluck.increments('potluck_id')
      potluck.string('potluck_name').notNullable()
      potluck.string('potluck_location')
      potluck.time('potluck_time') //expect (hh:mm:ss)
      potluck.date('potluck_date') //expect (mm-dd-yyyy)
      potluck.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
    })
    .createTable('users_potlucks', user_potluck => {      
      user_potluck.boolean('guest').defaultTo(0) //if 1: guest confirmed 
      user_potluck.integer('user_id')
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
      user_potluck.integer('potluck_id')
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
    })
    .createTable('potlucks_items', potluck_item => {      
      potluck_item.integer('user_id') //if null: no users handle this item so far
        .references('user_id')
        .inTable('users')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
      potluck_item.integer('potluck_id')
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
      potluck_item.integer('item_id')
        .notNullable()
        .references('item_id')
        .inTable('items')
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT")
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('potlucks_items')
    .dropTableIfExists('users_potlucks')
    .dropTableIfExists('potlucks')
    .dropTableIfExists('items')
    .dropTableIfExists('users')

}
