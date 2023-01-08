const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require("body-parser");
const con = require('./models/taskModel');
const moment = require('moment');

const app = express();

app.use(express.static('public'));

// set how to handle the hbs file : define helpers, folder for the view, default main file, what is the hbs extension
app.engine('hbs', hbs.engine({
	helpers: {
        isCompleted: function (status) {
            if (status == "completed") {
                return true
            } else {
                return false
            }
        },
		dateFormat: (date) => {
			return moment(date).format('DD/MM/YYYY')
		}
    },
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main',
    extname: '.hbs'
}));
				
// hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

// by default, the default handlebars directory structure is as follow:
//.
//├── app.js  
//└── views
//    ├── index.hbs
//    └── layouts
//       └── main.hbs
// in main.hbs, the {{{body}}} is replaced by the content of index.hbs


// set 'hbs' extension as the extension for rendering, see ligne 52 : "       res.render('index', {"
// set the view engine that we want to use
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    let query = "SELECT * FROM Tasktest";
    let items = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        items = result;
        console.log("get", items)
        res.render('index', {			// rendering on the index.hbs page
            items: items
        })
    })
});

app.get('/:status/:taskId', (req, res) => {
    console.log(req.params)
    let query = "UPDATE Tasktest SET status='" + req.params.status + "' WHERE taskId=" + req.params.taskId;
    con.query(query, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.redirect('/')
    })
});

// page non utilisée dans le reste de l'appli pour voir la liste des taches en cours
app.get('/statusOngoing', (req, res) => {
	let query = "SELECT * FROM Tasktest WHERE status='ongoing'";
    let items = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        items = result;
        console.log("ongoing status", items);
        res.render('index', {
            items: items
        })
    })
});


app.get('/:taskId', (req, res) => {
    console.log(req.params)
    let query = "DELETE FROM Tasktest WHERE taskId=" + req.params.taskId;
    con.query(query, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.redirect('/')
    })
});

// app.post('/', (req, res) => {
    // console.log(req.body)
    // res.redirect('/')
// })

app.post('/', (req, res) => {
    console.log("post", req.body)
    let query = "INSERT INTO Tasktest (taskName, projectId, fellowId, startDate, endDate, status) VALUES ?";
	b=req.body;
    data = [
        [b.taskName, b.projectId, b.fellowId, b.startDate, b.endDate, "ongoing"]
    ];
    con.query(query, [data], (err, result) => {
        if (err) throw err;
        console.log("post", result)
        res.redirect('/')
    })
})

// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});