'use strict';
const Mongo = require('mongodb').MongoClient;
const uri = "mongodb://fergus:1234@ds111851.mlab.com:11851/playbot";

module.exports = function(ctx, cb) {
  let mailID = ctx.data.replyData;
  if (mailID) {
    Mongo.connect(uri, function(error, db) {
      db.collection('players')
        .update({
          email: mailID
        }, {
          email: mailID
        }, {
          upsert: true
        }, (error, result) => {
          if (!error) {
            db.close();
            cb(null, {});
          }
        });
    });
  } else {
    cb(null, {});
  }
}
