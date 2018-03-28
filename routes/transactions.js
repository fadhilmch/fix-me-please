const express = require('express');
const router = express.Router()
var transactionController = require('../controllers/transactions');

router.get('/', transactionController.all)
router.post('/', transactionController.create)
router.put('/:id', transactionController.update)
router.delete('/:id', transactionController.delete)

module.exports = router;