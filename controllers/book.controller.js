const db = require('../db');
//const pool = db;
//var async = require('async');

//class BookController{
    exports.book_list = function(req,res){
    //  const sqlshow = 'SELECT name FROM f_author';
      //const books =  db.query('SELECT * FROM f_author');
      //const onebookcheck=books.rows;
      const sqlshow = 'SELECT * FROM f_author';
        const result =  db.query(sqlshow,function(err,res)  {
        if (err)
        {//return console.error('ошибка какая-то',err,sql);
          throw err;
        }
      });
        //res.render('index', { title: 'книгелист' });
        res.json(result.rows);
    //res.render('book_list', { title: 'книгелист' }, {book_list:onebookcheck});//res.json(books.rows);
    }



 //async getBooks(req,res){
  //  const sqlshow = 'SELECT * FROM f_author';
    //const books = await db.query(sqlshow);
  //  console.log(res.rows);
    //res.json(books.rows);
    //next();
  //}

//  async addBooks(req,res){
    //const sqlinsert = "INSERT into f_book(id, name, id_d_book_type, id_f_publisher,dpublish, file) values(4,'help',1,1,'1998-01-01','') "";
    //const newBook = await db.query( "INSERT into f_book(id, name, id_d_book_type, id_f_publisher,dpublish, file) values(4,'help',1,1,'2019-02-21','')");
    //res(newBook);
//  };
