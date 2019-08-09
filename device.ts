export enum Type {
  Temperature,
  Light,
  Motion,
  Sound,
  Vibration
}

interface IDevice {
  status: boolean;
  name: string;
  type: Type;
  value: number;
}

export class Device implements IDevice {
  value = null;
  constructor(public status: boolean, public name: string, public type: Type) {
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
  public turnOn() {
    this.status = true;
  }
  public turnOff() {
    this.status = false;
    this.value = 0;
  }
}

/* const device1 = new Device(true, "device1", Type.Light);
const device2 = new Device(false, "device2", Type.Temperature);
const device3 = new Device(true, "device3", Type.Motion);
const device4 = new Device(true, "device4", Type.Vibration);
device2.turnOn();
console.log(device1, device2, device3, device4); */
