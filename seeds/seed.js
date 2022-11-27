const sequelize = require('../config/connection');
const { User, Quote, UserSaved } = require('../models');

const userData = require('./userData.json');
const quoteData = require('./quoteData.json');
const userSavedData = require('./userSavedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const quote of quoteData) {
    await Quote.create({
      ...quote,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // await Quote.bulkCreate(quoteData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await UserSaved.bulkCreate(userSavedData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
