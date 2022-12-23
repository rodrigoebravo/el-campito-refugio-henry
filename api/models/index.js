const models = {
    usersModel: require("./nosql/users"),
    dogModel: require("./nosql/dogs"),
    adoptionsModel: require("./nosql/adoptions"),
    volunteersModel: require("./nosql/volunteers"),
    pressModel: require("./nosql/press"),
    contributionsModel: require("./nosql/contributions"),
    interfacesModel: require("./nosql/interfaces")

}

module.exports = models; 