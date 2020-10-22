let orm = require("../config/orm.js")

let burger = {

    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    insertOne: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burgers;