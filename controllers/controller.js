const db = require('./db');
const pool = db;
var Showtable = function ()
{
  //const sqlshow = 'SELECT name FROM f_book';
  const sqlshow = 'SELECT * FROM f_author';
  const result =  pool.query(sqlshow,function(err,res)  {
  if (err)
  {//return console.error('ошибка какая-то',err,sql);
    throw err;
  }

  //console.log(res);
  console.log(res.rows);
  //console.dir({res});
  //console.table(res.fields);
  //console.table(res.rows);
  pool.end();
  });
}

var InsertTable = function()
{
    //const sqlinsert = 'INSERT into f_book(id, name, id_d_book_type, id_f_publisher,dpublish, file) values(4,"help",1,1,"1998-01-01",NULL) ';
    const sqlinsert ="Insert into f_author(id, surname, name, patronymic) values(5,'Тест','Тест', 'Тест')";

    const result =  pool.query(sqlinsert,function(err,res)  {
    if (err)
    {//return console.error('ошибка какая-то',err,sql);
      throw err;
    }

    //console.log(res);
    console.log('я вставил??');
    //console.dir({res});
    //console.table(res.fields);
    //console.table(res.rows);
    pool.end();
    });
}
module.exports = Showtable();
//module.exports = InsertTable();
