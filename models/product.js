const express = require('express');
const app = express();

const db = require('../util/database');
const path = require('path');
module.exports = class Product {
    constructor(username, phoneNumber, email) {
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    save() {
        db.execute('INSERT INTO products (username, phoneNumber, email) VALUES (?, ?, ?)', [this.username, this.phoneNumber, this.email])
            .then(result => {
                console.log('Product saved successfully.');
            })
            .catch(error => {
                console.log('An error occurred while saving the product:', error);
            });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }
};
