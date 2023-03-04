import { bookings } from './test-data'
import { expect } from 'chai'
import Booking from '../src/classes/booking'


describe('Booking', () => {
    let booking1
    let booking2

    beforeEach(() => {
        booking1 = new Booking(bookings[0])
        booking2 = new Booking(bookings[1])
    }) 

    it('should be a function', function() {
        expect(Booking).to.be.a('function')
    })
})