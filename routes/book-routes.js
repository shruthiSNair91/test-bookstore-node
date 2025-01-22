const express = require('express');
const {getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook} = require('../controllers/book-controller');

const router = express.Router();

router.get('/booklist',getAllBooks);
router.get('/booklist/:id',getSingleBook);
router.post('/addbook',addNewBook);
router.put('/updatebook/:id',updateBook);
router.delete('/deletebook/:id',deleteBook);

module.exports = router;