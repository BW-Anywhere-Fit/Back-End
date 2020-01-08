const Auth = require('../users/users-model');

module.exports = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password ) {
        res.status(400).json( "Please provide username and password" );
    } else {
        Auth.findByUser({ username })
        .first()
        .then(user => {
            console.log(user);
            if (user) {
                res
                    .status(400)
                    .json( "Username already exists, Please try another" );
            } else {
                next();
            }
        })
        .catch(error => {
            res.status(500).json( "Error registering user" )
        });
    }
}