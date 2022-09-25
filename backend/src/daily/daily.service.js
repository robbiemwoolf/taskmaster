const knex = require('../db/connection')

function create(task) {
    return knex('task')
        .insert(task)
        .returning('task_description')
        .then((createdTasks) => createdTasks[0])
}

function list() {
    return knex('task')
        .select('task_description')
        .where({ task_daily: true, task_complete: false })
        .then((tasks) => tasks)
}

function listArchived() {
    return knex('task')
        .orderBy('date_completed', 'desc')
        .select('task_description', 'date_completed')
        .where({ task_daily: true, task_complete: true })
        .then((tasks) => tasks)
}

module.exports = {
    create,
    list,
    listArchived,
}
