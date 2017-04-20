'use strict';
const Mongo = require('mongodb').MongoClient;
const uri = "mongodb://....";

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
          upset: true
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
