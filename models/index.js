const User = require('./User');
const Quote = require('./quote');
const UserSaved = require('./userSaved');

Quote.belongsToMany(User, {
  through: {
    model: UserSaved,
    unique: false
  },
  as: 'saved_quotes'
});

User.belongsToMany(Quote, {
  through: {
    model: UserSaved,
    unique: false
  },
  as: 'users_saved'
});

module.exports = { User, Quote, UserSaved };
