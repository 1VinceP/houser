module.exports = {

    getListings: ( req, res, next ) => {
        req.app.get('db').selectListings().then( listings => res.status(200).send( listings ) );
    },

    createListing: ( req, res, next ) => {
        let { name, description, address, city, state, zip, img, loanAmount, monthlyMortgage, desiredRent } = req.body;

        req.app.get('db').postListing( [name, description, address, city, state, zip, img, loanAmount, monthlyMortgage, desiredRent] )
                         .then( property => res.status(200).send( property ) );
    },

    removeListing: ( req, res, next ) => {
        let { params } = req

        req.app.get('db').deleteListing( params.id ).then( () => res.status(200).send() )
                         .catch( () => {
                             res.status(500).send()
                             console.log('Item was not deleted')
                         } )
    },

    filterListings: ( req, res, next ) => {
        let { query } = req

        req.app.get('db').filter( query.desiredrent ).then( filtered => res.status(200).send( filtered ) )
                         .catch( () => {
                             res.status(500).send()
                             console.log( 'Did not filter' )
                         } )
    }

}