const db = require('./index.js')

const adjectives = ['I really ', 'AMAZING,', "OK, ", "WHATEVER, " , 'I got this as a gift for my friend I ', 'I ', "My sister actually ",  "i ", "I got this as a gift for my friend I ", "Who cares, " ,"Honestly, "];
const brand = ['liked', 'hated', 'love', 'loved',  'lovedddd', 'extremely disliked'];
const noun = ['this product it was actually amazing though not trolling', 'this but it kinda looks really good ', 'this thing but it was honestly not what I expected it to be like', 'this but honestly, went above and beyond my expectations despite everything', 'this was ok product despite bad things about it'];
const styles = ["Classic", "Fashion Forward", "Feminine", "Minimalist", "Relaxed", "Sporty"]
const width = ["Narrow", "Regular", "Wide"]
const rec = ["Yes", "No"]
const fit = ["Too Small", "A Little Small", "True to Size", "A Little Big", "Too Big"]
const city = ["Los Angeles", "Springfield", "Manchester", "Santa Monica", "Whoville", "Yarden", "Santa Clarita", "Santa Barbara", "San Jose"]
const state = ["CA", "AK", "MA", "NH"]
const gender = ["Male", "Female"]
const age = ["Under 18", "18 to 24", "25 to 34", "35 to 44", "45 to 54", "55 to 64", "Over 65"]
const date = ["January 25, 2016", "February 13, 2013", "August 8, 2019", "April 4, 2019", "December 2, 2019", "March 9, 2018", "October 18, 2017"]
const stars = ["1","2","3","4","5"]
var nums = ["1","2","3","4","5","6","7","8","9","10","1","2","3","4","5","6","7","8","9","10","1","2","3","4","5","6","7","8","9","10"]
const createProduct = () => {
  let review = {};
  review.title = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]} ${brand[Math.floor(Math.random(brand.length) * Math.floor(6))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}`;
  review.desc = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]} ${brand[Math.floor(Math.random(brand.length) * Math.floor(6))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}`;
  review.stars = `${stars[Math.floor(Math.random() * Math.floor(stars.length))]}`
  review.ps = `${styles[Math.floor(Math.random() * Math.floor(styles.length))]}`
  review.width = `${width[Math.floor(Math.random() * Math.floor(width.length))]}`
  review.recommend = `${rec[Math.floor(Math.random() * Math.floor(rec.length))]}`
  review.fit = `${fit[Math.floor(Math.random() * Math.floor(fit.length))]}`
  review.country = "US"
  review.city = `${city[Math.floor(Math.random() * Math.floor(city.length))]}`
  review.state = `${state[Math.floor(Math.random() * Math.floor(state.length))]}`
  review.gender = `${gender[Math.floor(Math.random() * Math.floor(gender.length))]}`
  review.age = `${age[Math.floor(Math.random() * Math.floor(age.length))]}`
  review.date =   `${date[Math.floor(Math.random() * Math.floor(date.length))]}`
  review.styles = `${styles[Math.floor(Math.random() * Math.floor(styles.length))]}`
  review.yes = `${stars[Math.floor(Math.random() * Math.floor(stars.length))]}`
  review.nah = `${stars[Math.floor(Math.random() * Math.floor(stars.length))]}`
  review.item_id = `${nums[Math.floor(Math.random() * Math.floor(nums.length))]}`
  return review
};

const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 100; i++){
    productsArr.push(createProduct())

  }
  console.log(productsArr)
  return productsArr
}

const insertMockData = function() {
  var r = createProducts()
  for(var i = 0; i < r.length; i++){
    db.query(`INSERT INTO revs (dateAdded, rating, ps, width, reccomend, fit, revTitle, rev_desc, country, city, states, gender, age, yes, nah, item_id) VALUES ("${r[i].date}","${r[i].stars}","${r[i].styles}","${r[i].width}","${r[i].recommend}","${r[i].fit}","${r[i].title}","${r[i].desc}","${r[i].country}","${r[i].city}","${r[i].state}","${r[i].gender}","${r[i].age}","${r[i].yes}","${r[i].nah}", "${r[i].item_id}");`)
  }
};
insertMockData()


