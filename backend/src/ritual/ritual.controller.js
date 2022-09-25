const asyncErrorBoundary = require('../errors/asyncErrorBoundary')
const ritualService = require('./ritual.service')

async function create(req, res, next) {
    const data = await ritualService.create(req.body.data)
    res.status(201).json({ data })
}

async function list(req, res) {
    const data = await ritualService.list()
    res.json({ data })
}

async function listArchived(req, res) {
    const data = await ritualService.listArchived()
    res.json({ data })
}

module.exports = {
    create: asyncErrorBoundary(create),
    list: asyncErrorBoundary(list),
    listArchived: asyncErrorBoundary(listArchived),
}
