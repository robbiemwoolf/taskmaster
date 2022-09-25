const knex = require('../db/connection')

function list() {
    return knex('task')
        .orderBy('date_completed', 'desc')
        .select('task_description', 'date_completed')
        .where({ task_complete: true })
        .then((tasks) => tasks)
        // TODO: filter tasks with the designated created_at date   
}

module.exports = {
    list,
}