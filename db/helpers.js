const db = require('./index.js')

const helpers = {

  postReview: ({date,rating,ps,reccomend,fit,revTitle,rev_desc,country,city,states,gender,age,yes,nah, item_id},cb) => {
    db.query(`INSERT INTO revs (dateAdded, rating, ps, reccomend, fit, revTitle, rev_desc, country, city, states,gender,age,yes,nah, item_id) VALUES ("${date}","${rating}","${ps}","${reccomend}","${fit}","${revTitle}","${rev_desc}","${country}","${city}","${states}","${gender}","${age}","${yes}","${nah}", "${item_id}");
    `,(err,result) => {
      if(err){
        console.log('error adding review')
        cb(err)
      } else {
        console.log('succesfully added review')
        cb(null,result)
      }
    })
  },
  getReviews: ({data},cb) => {
    db.query(`SELECT * FROM revs WHERE item_id = ${data}`, (err,result) => {
      if(err) cb(err)
      else cb(null,result)
    })
  },
  addYes: (req,cb) => {
    db.query(`UPDATE revs SET yes="${req.body.yes}" WHERE id=${req.params.id}`,(err,result) => {
      if(err) cb(err)
      else cb(null,result)
    })
  },
  addNo: (req,cb) => {
    db.query(`UPDATE revs SET nah="${req.body.nah}" WHERE id=${req.params.id}`,(err,result) => {
      if(err) cb(err)
      else cb(null,result)
    })
  }
}

module.exports = helpers

