var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "expensedb.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
   if (err) {
      console.error(err.message)
      throw err
   }else{
      console.log('Connected to the SQLite database.')
      db.run(`CREATE TABLE Owner (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         name text, 
         dateOfBirth text, 
         address text 
         )`,
            (err) => {
               if (err) {
                  console.log(err);
               }else{
                  var insert = 'INSERT INTO Owner (name, dateOfBirth, address) VALUES (?,?,?)'

                  db.run(insert, ['Kyaw Kyaw', '10/10/2000', 'Yangon'])
                  db.run(insert, ['Aye Aye', '10/10/2000', 'Mdy'])
                  db.run(insert, ['Su Su', '10/10/2000', 'Bago'])
                  db.run(insert, ['Mg Mg', '10/10/2000', 'Yangon'])
                  db.run(insert, ['Mu Mu', '10/10/2000', 'Mdy'])
               }
            }
      ); 
      
   }
});

module.exports = db