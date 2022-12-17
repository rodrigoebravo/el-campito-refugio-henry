const models = {
    usersModel: require("./nosql/users"),
    dogModel: require("./nosql/dogs"),
    adoptionsModel: require("./nosql/adoptions"),
    volunteersModel: require("./nosql/volunteers"),
    pressModel: require("./nosql/press"),
    contibutionsModel: require("./nosql/contributions")
}

module.exports = models; 