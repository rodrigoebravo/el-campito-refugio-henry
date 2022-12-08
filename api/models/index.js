const models = {
    usersModel: require("./nosql/users"),
    visitsModel: require("./nosql/visits"),
    dogModel: require("./nosql/dogs"),
    adoptionModel: require("./nosql/adoption"),
    volunteerModel: require("./nosql/volunteer"),
    patronageModel: require("./nosql/patronage"),
    contibutionsModel: require("./nosql/contributions.js")
}

module.exports = models; 