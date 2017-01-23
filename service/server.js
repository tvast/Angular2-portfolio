// BASE SETUP
// =============================================================================
// TUTO : https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// call the packages we need
//mongodb://test:test@waffle.modulusmongo.net:27017/poP5epon


var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var cors       = require('cors')
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

app.use(cors());

// app.get('/api/oeuvres', function(req, res, next){
//   res.json({msg: 'This is CORS-enabled for all origins!'});
// });

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8081; // set our port

var mongoose   = require('mongoose');
//mongoose.connect('mongodb://localhost:27017'); // connect to our database  mongodb://<user>:<pass>@waffle.modulusmongo.net:27017/yzY5qewy
mongoose.connect('mongodb://test:test@jello.modulusmongo.net:27017/natur3oJ');
var Oeuvre     = require('./app/models/oeuvre');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /oeuvres
// ----------------------------------------------------
router.route('/oeuvres')

	// create a oeuvre (accessed at POST http://localhost:8080/oeuvres)
	.post(function(req, res) {

		var oeuvre = new Oeuvre();		// create a new instance of the oeuvre model
		oeuvre.nom = req.body.nom;  // set the oeuvres name (comes from the request)
		oeuvre.img = req.body.img;
		oeuvre.dimensionLarg = req.body.dimensionLarg;
		oeuvre.dimensionLong = req.body.dimensionLong;
		oeuvre.date = req.body.date;
		
		oeuvre.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Oeuvre created!' });
		});


	})

	// get all the oeuvres (accessed at GET http://localhost:8080/api/oeuvres)
	.get(function(req, res) {
		Oeuvre.find(function(err, oeuvres) {
			if (err)
				res.send(err);

			res.json(oeuvres);
		});
	});

// on routes that end in /oeuvres/:oeuvre_id
// ----------------------------------------------------
router.route('/oeuvres/:oeuvre_id')

	// get the oeuvre with that id
	.get(function(req, res) {
		Oeuvre.findById(req.params.oeuvre_id, function(err, oeuvre) {
			if (err)
				res.send(err);
			res.json(oeuvre);
		});
	})

	// update the oeuvre with this id
	.put(function(req, res) {
		Oeuvre.findById(req.params.oeuvre_id, function(err, oeuvre) {

			if (err)
				res.send(err);

			oeuvre.name = req.body.name;

			oeuvre.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'oeuvre updated!' });
			});

		});
	})

	.delete(function(req, res) {
		Oeuvre.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
