class Room {
    constructor(roomObj) {
        this.number = roomObj.number
        this.type = roomObj.roomType
        this.bidet = roomObj.bidet
        this.bedSize = roomObj.bedSize
        this.numBeds = roomObj.numBeds
        this.cost = roomObj.costPerNight
    }
}

export default Room