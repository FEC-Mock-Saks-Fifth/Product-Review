const helpers = require('../db/helpers.js')

const controllers = {

  post: (req,res) => {
    helpers.postReview(req.body,(err,result) => {

     if(err) res.status(404).send(err)
     else res.status(200).send(result)

    })
  },
  get: (req,res) => {
    helpers.getReviews(req.query,(err,result) => {
      if(err){
        console.log('error getting reviews figure it out')
        res.status(405).send(err)
      } else {
        console.log(req.query)
        res.status(200).send(result)
      }
    })
  },
  yes:(req,res) => {
    helpers.addYes(req,(err,result) => {
      if(err) {
        console.log('hmmmm')
        res.status(404).send(err)
      }
      else res.status(200).send(result)
    })
  },
  no: (req,res) => {
    helpers.addNo(req,(err,result) => {
      if(err) {
        console.log('hmmmm')
        res.status(404).send(err)
      }
      else res.status(200).send(result)
    })
  }

}

module.exports = controllers;