module.exports = {
    port: process.env.PORT || 3001,
    db: "mongodb://<dbuser>:<dbpassword>@ds053419.mlab.com:53419/heroku_shqschsp" || 'mongodb://localhost:27017/recipedb'
}