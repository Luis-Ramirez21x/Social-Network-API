const connection = require('../config/connection');
const { User, Thoughts} = require('../models');
const userData = require('./userData.json');
const thoughtData = require('./thoughtData.json');

connection.on('error', (err) => err);

connection.once('open', async () => {

    console.log('connected');

    await User.deleteMany({});

    await Thoughts.deleteMany({});

    
    //await Thoughts.insertMany(thoughtData);
    await User.insertMany(userData);

    console.table(userData);
    console.timeEnd('seeding complete 🌱');
    process.exit(0);

});