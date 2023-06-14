const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    
    // Check if any of the required fields are undefined
    if (username === undefined || email === undefined) {
        console.log('Error: Username or email is undefined.');
        console.log('username:', username);
        console.log('email:', email);
        return res.redirect('/');
    }

    const product = new Product(username, phoneNumber, email);
    product.save();
    res.redirect('/');
};


exports.getIndex = (req, res, next) => {
    Product.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('appointment', {
                appointments: rows,
                path: '/'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
};
