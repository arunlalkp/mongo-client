var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
}

// MongoClient Connection Method
exports.connect = (url, done)=> {
  if (state.db) return done()

  MongoClient.connect(url, {useNewUrlParser: true} , (err, db)=> {
    if (err) return done(err)
    state.db = db
    done()
  })
}

// Get connection state
exports.get = ()=> {
  return state.db
}

// Close the connection
exports.close = (done)=> {
  if (state.db) {
    state.db.close((err, result)=> {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

