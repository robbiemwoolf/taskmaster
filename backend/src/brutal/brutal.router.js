const router = require('express').Router({ mergeParams: true })
const controller = require('./brutal.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .route("/archived")
    .get(controller.listArchived)
    .all(methodNotAllowed)

router
    .route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

module.exports = router