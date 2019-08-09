"use strict";
exports.__esModule = true;
var device_1 = require("./device");
var Room = /** @class */ (function () {
    function Room(name, photo) {
        this.name = name;
        this.photo = photo;
        this.devices = [];
    }
    Room.prototype.addDevice = function (status, name, type) {
        var newDevice = new device_1.Device(status, name, type);
        return this.devices.push(newDevice);
    };
    Room.prototype.deviceCount = function () {
        return this.devices.length;
    };
    return Room;
}());
exports.Room = Room;
/* const room1 = new Room("room1", "url1");
room1.addDevice(true, "device5", Type.Motion);
room1.addDevice(true, "device6", Type.Vibration);
console.log(room1);
console.log(room1.deviceCount()); */
