const Sequelize = require('sequelize');
const db = require('../database/index');
// Models
const User = require('./User');
const Profile = require('./Profile');
const Roasts = require('./Roast');
const UserAuth = require('./UserAuth');


// User to UserAuth relation
User.hasMany(UserAuth, { onDelete: 'CASCADE' });
Profile.belongsTo(User);

// User to Profile relation
User.hasOne(Profile, { onDelete: 'CASCADE' });
Profile.belongsTo(User, { onDelete: 'CASCADE' });

// User to Roast relation
User.hasMany(Roasts, { onDelete: 'CASCADE' });
Roasts.belongsTo(User);