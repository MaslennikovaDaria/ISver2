const db = require('../db');
//const pool = db;

class bookController{

  async getBooks(req,res){
    //const sqlshow = 'SELECT * FROM f_author';
    const books = await db.query('SELECT * FROM f_author');
  //  console.log(res.rows);
    res.json(books.rows);
    //next();
  };

  async addBooks(req,res){
    //const sqlinsert = "INSERT into f_book(id, name, id_d_book_type, id_f_publisher,dpublish, file) values(4,'help',1,1,'1998-01-01','') "";
    //const newBook = await db.query( "INSERT into f_book(id, name, id_d_book_type, id_f_publisher,dpublish, file) values(4,'help',1,1,'2019-02-21','')");
    //res(newBook);
  };

}
