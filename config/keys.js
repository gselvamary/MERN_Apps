const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    mongoose.connect("mongodb://mary:password1@ds133450.mlab.com:33450/mern_apps", { useNewUrlParser: true }).then(() => {
        console.log('MongoDB is connected')
    }).catch(err => {
        console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
        setTimeout(connectWithRetry, 5000)
    })
}

connectWithRetry()

