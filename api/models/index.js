const models = {
    usersModel: require("./nosql/users"),
    dogModel: require("./nosql/dogs"),
    adoptionsModel: require("./nosql/adoptions"),
    volunteersModel: require("./nosql/volunteers.js"),
    pressModel: require("./nosql/press"),
    contibutionsModel: require("./nosql/contributions.js")
}

module.exports = models; 