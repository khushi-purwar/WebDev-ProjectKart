const { sequelize, Sequelize } = require('../../config/sequelize');

const Url = sequelize.define('Url', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  longUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numLogs: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Url;

// urlSchema.pre('save', function (next) {
//   var doc = this;
//   counter.findByIdAndUpdate({ _id: 'url_count' }, { $inc: { seq: 1 } }, function (error, counter) {
//     if (error)
//       return next(error);
//     doc.created_at = new Date();
//     doc._id = counter.seq;
//     next();
//   });
// });
