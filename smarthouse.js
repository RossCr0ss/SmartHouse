"use strict";
exports.__esModule = true;
var room_1 = require("./room");
var SmartHouse = /** @class */ (function () {
    function SmartHouse() {
        this.rooms = [];
    }
    SmartHouse.prototype.addRoom = function (name, photo) {
        var newRoom = new room_1.Room(name, photo);
        return this.rooms.push(newRoom);
    };
    SmartHouse.prototype.removeRoom = function (roomname) {
        this.rooms.forEach(function (item, index) {
            if (item.name == roomname) {
                /* this.rooms.splice(index, 1); */
            }
        });
    };
    SmartHouse.prototype.startMonitoring = function () {
        this.rooms.forEach(function (element) {
            element.devices.forEach(function (item) {
                if (item.status == true) {
                    return console.log(item);
                }
            });
        });
    };
    return SmartHouse;
}());
var smarthouse1 = new SmartHouse();
smarthouse1.addRoom("room2", "url2");
smarthouse1.addRoom("room3", "url3");
console.log(smarthouse1);
/* smarthouse1.removeRoom("room3");
console.log(smarthouse1); */
smarthouse1.startMonitoring();
