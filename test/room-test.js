import { rooms } from './test-data'
import { expect } from 'chai'
import Room from '../src/classes/room'

describe('Room', () => {
    let room1
    let room2

    beforeEach(() => {
        room1 = new Room(rooms[0])
        room2 = new Room(rooms[1])
    }) 

    it('should be a function', function() {
        expect(Room).to.be.a('function')
    })
})