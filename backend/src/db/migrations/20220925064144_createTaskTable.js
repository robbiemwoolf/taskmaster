exports.up = function(knex) {
    return knex.schema.createTable('task', (table) => {
        table.increments('task_id').primary()
        table.string('task_description').notNullable()
        table.date('complete_by')
        table.boolean('task_daily')
        table.boolean('task_ritual')
        table.boolean('task_brutal')
        table.boolean('task_complete')
        table.date('date_completed')
        table.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('task')
}