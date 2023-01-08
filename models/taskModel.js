// By default the Mysql databases are stored here C:\ProgramData\MySQL\MySQL Server 8.0\Data\

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root", // yourusername
  password: "ROe2N1bNMp6nsWzBGDrI", // yourpassword
  database: "tasknschedule" // yourmysqldb => quand aucune bdd n'existe, possible de se connecter avec un champ libre ""
});

// Connexion au serveur MYSQL et à la bdd et creation de la table task dans la bdd tasknschedule
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
// let query ="CREATE TABLE IF NOT EXISTS task (task_id int NOT NULL AUTO_INCREMENT, task VARCHAR(255) NOT NULL, status VARCHAR(255), PRIMARY KEY (task_id))";
// let query ="CREATE TABLE IF NOT EXISTS Task(id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,	projectId INTEGER, fellowId INTEGER, areaId INTEGER, startDate DATE DEFAULT (CURDATE()), endDate date DEFAULT (CURDATE()), taskDuration TIME, CONSTRAINT fk_project_id FOREIGN KEY (projectId) REFERENCES Project(id),CONSTRAINT fk_fellow_id FOREIGN KEY (fellowId) REFERENCES Fellow(id), CONSTRAINT fk_area_id FOREIGN KEY (areaId) REFERENCES Area(id), CONSTRAINT check_date CHECK (startDate < endDate))";

// let query1 ="DROP TABLE IF EXISTS Tasktest";
// con.query(query1, (err, result)=>{
      // if (err) throw err;
      // console.log(result)
// })

  let query ="CREATE TABLE IF NOT EXISTS Tasktest(taskId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, taskName VARCHAR(255) NOT NULL, projectId INTEGER, fellowId INTEGER, startDate DATE DEFAULT (CURDATE()), endDate DATE DEFAULT (CURDATE()), status VARCHAR(255))";
  con.query(query, (err, result)=>{
      if (err) throw err;
      console.log(result)
  })
});

module.exports = con;
