"use strict";
exports.__esModule = true;
var Type;
(function (Type) {
    Type[Type["Temperature"] = 0] = "Temperature";
    Type[Type["Light"] = 1] = "Light";
    Type[Type["Motion"] = 2] = "Motion";
    Type[Type["Sound"] = 3] = "Sound";
    Type[Type["Vibration"] = 4] = "Vibration";
})(Type = exports.Type || (exports.Type = {}));
var Device = /** @class */ (function () {
    function Device(status, name, type) {
        this.status = status;
        this.name = name;
        this.type = type;
        this.value = null;
        if (this.status == false) {
            this.value = 0;
        }
        switch (this.type) {
            case Type.Light:
                this.value = +(Math.random() * (100 - 0) + 0).toFixed(2);
                break;
            case Type.Temperature:
                this.value = +(Math.random() * (50 - -30) + -30).toFixed(2);
                break;
            case Type.Motion || Type.Sound:
                this.value = +(Math.random() * (1 - 0) + 0).toFixed(2);
                break;
            case Type.Vibration:
                this.value = +(Math.random() * (10 - 0) + 0).toFixed(2);
                break;
        }
    }
    Device.prototype.turnOn = function () {
        this.status = true;
    };
    Device.prototype.turnOff = function () {
        this.status = false;
        this.value = 0;
    };
    return Device;
}());
exports.Device = Device;
/* const device1 = new Device(true, "device1", Type.Light);
const device2 = new Device(false, "device2", Type.Temperature);
const device3 = new Device(true, "device3", Type.Motion);
const device4 = new Device(true, "device4", Type.Vibration);
device2.turnOn();
console.log(device1, device2, device3, device4); */
