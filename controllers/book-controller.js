
const Book = require('../models/book');

const getAllBooks = async(req,res) => {
       try{
            const allBooks = await Book.find({});
            if(allBooks.length > 0){
                        res.status(200).json({
                                success:true,
                                message:'List of books',
                                data:allBooks
                        });
            }else{
                        res.status(404).json({
                                success:false,
                                message:'No Books found in DB!'
                        });
            }
       }catch(e){
            console.log(e);
            res.status(500).json({
                    success:false,
                    message:'Something went wrong! Please try again!'
            });          

       }
}

const getSingleBook = async(req,res) => {
    try{
        const bookId = req.params.id;
        
        const bookDetailsById = await Book.findById(bookId);
        if(!bookDetailsById){
                return res.status(404).json({
                        success:false,
                        message:'Book not found!!'
                });
        }
        res.status(200).json({
                success:true,
                data:bookDetailsById
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:'Something went wrong! Please try again!'
    });   
    }
    
}

const addNewBook = async(req,res) => {
    try{
            const newBookdata = req.body;
            const newlyCreatedBook = await Book.create(newBookdata);
            if(newBookdata){
                res.status(201).json({
                        success:true,
                        message:'Book added successfully!',
                        data:newlyCreatedBook
                });
            }
    }catch(e){
            console.log(e);
            res.status(500).json({
                success:false,
                message:'Something went wrong! Please try again!'
        });          
    }
    
}

const updateBook = async(req,res) => {
    try{
        const updatingBookID = req.params.id;
        const updateData = req.body;
        const bookData = await Book.findByIdAndUpdate(updatingBookID,updateData,{new:true});
        if(!bookData){
            return res.status(404).json({
                    success:false,
                    message:'Book details not found!'
            });
    }        
        res.status(200).json({
            success:true,
            data:bookData,
            message:'Book details updated'
        });

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:'Something went wrong! Please try again!'
    });          
}
    
}

const deleteBook = async(req,res) => {
    try{
        const deletedBookId = req.params.id;
        const deletingData = await Book.findByIdAndDelete(deletedBookId);
        if(!deletingData){
                return res.status(404).json({
                        success:false,
                        message:'No book found!'
                });
        }
        res.status(200).json({
                success:true,
                data:deletingData,
                message:'record deleted successfully'
        });

    }catch(e){
            console.log(e);
            res.status(500).json({
                success:false,
                message:'Something went wrong! Please try again!'
        });          
    }
    
}

module.exports = {getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook};