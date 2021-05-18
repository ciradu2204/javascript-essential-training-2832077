class Room {
  constructor(color, bedSize, wardRobe, doorOpen) {
    (this.color = color),
      (this.bedSize = bedSize),
      (this.hasWardRobe = wardRobe),
      (this.doorOpen = doorOpen);
  }

  doorClose() {
    this.doorOpen = false;
  }

  doorOpen() {
    this.doorOpen = true;
  }
}

export default Room;
