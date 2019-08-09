import { Room } from "./room";
import { Device, Type } from "./device";

interface ISmartHouse {
  rooms: Room[];
}

class SmartHouse implements ISmartHouse {
  rooms: Room[] = [];
  constructor() {}
  addRoom(name: string, photo: string) {
    let newRoom = new Room(name, photo);
    return this.rooms.push(newRoom);
  }
  removeRoom(roomname: string) {
    this.rooms.forEach(function(item, index) {
      if (item.name == roomname) {
        /* this.rooms.splice(index, 1); */
      }
    });
  }
  startMonitoring() {
    this.rooms.forEach(element => {
      element.devices.forEach(item => {
        if (item.status == true) {
          return console.log(item);
        }
      });
    });
  }
}

const smarthouse1 = new SmartHouse();
smarthouse1.addRoom("room2", "url2");
smarthouse1.addRoom("room3", "url3");

console.log(smarthouse1);
/* smarthouse1.removeRoom("room3");
console.log(smarthouse1); */
smarthouse1.startMonitoring();
