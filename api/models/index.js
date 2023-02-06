const models = {
    usersModel: require("./nosql/users.js"),
    dogModel: require("./nosql/dogs"),
    adoptionsModel: require("./nosql/adoptions"),
    volunteersModel: require("./nosql/volunteers"),
    pressModel: require("./nosql/press"),
    contributionsModel: require("./nosql/contributions"),
    interfacesModel: require("./nosql/interfaces"),
    escolarModel: require("./nosql/escolar")

}

module.exports = models; 