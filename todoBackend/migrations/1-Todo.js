'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Todos", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "Todo",
    "created": "2022-04-04T05:54:32.630Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "Todos",
        {
            "id": {
                "type": Sequelize.INTEGER,
                "field": "id",
                "primaryKey": true
            },
            "task": {
                "type": Sequelize.STRING,
                "field": "task"
            },
            "status": {
                "type": Sequelize.STRING,
                "field": "status"
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
