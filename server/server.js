const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    session = require('express-session')

const checkForSession = require('./middleware/checkForSession')
const { secret } = require('./config/secret')

// Import controllers
const listingsController = require('./controllers/listings_controller')

// Middleware
let app = express();
app.use( bodyParser.json() );
app.use( session({
    secret,
    resave: false,
    saveUninitialized: false
}) );
app.use( checkForSession );
app.use( cors() );

let port = 9070;

///////////// Connecting database
// postgres://[username]:[password]@[host]:[port]/[database]
massive( 'postgres://postgres:database@localhost:9000/houser' ).then( db => {
        app.set( 'db', db );
        app.get('db').init.seed().then( res => console.log( res ) )
    } ).catch( err => {
        console.log( err );
})

// Massive Calls
app.get('/api/properties', listingsController.getListings ); // Get everything for the display
app.post('/api/properties', listingsController.createListing ); // Post a new house after getting all of the information
app.delete('/api/properties/:id', listingsController.removeListing );  // Delete listing with specified id
app.get('/api/properties/filter', listingsController.filterListings ); // Get filtered properties for the display


app.listen( port, () =>{
console.log(`listening on port ${port}`)
} )