const User = require('./user');
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

/*Quote.belongsTo(User, {
  foreignKey: "user_id"
})

User.belongsToMany(Quote, {
  foreignKey: "user_id"
})*/

module.exports = { User, Quote, UserSaved };
