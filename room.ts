import { Device } from "./device";
import { Type } from "./device";

interface IRoom {
  name: string;
  photo: string;
  devices: Device[];
}

export class Room implements IRoom {
  public devices: Device[] = [];
  constructor(public name: string, public photo: string) {}
  addDevice(status: boolean, name: string, type: Type) {
    let newDevice = new Device(status, name, type);
    return this.devices.push(newDevice);
  }
  deviceCount() {
    return this.devices.length;
  }
}

/* const room1 = new Room("room1", "url1");
room1.addDevice(true, "device5", Type.Motion);
room1.addDevice(true, "device6", Type.Vibration);
console.log(room1);
console.log(room1.deviceCount()); */
