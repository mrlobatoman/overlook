import { customers, bookings, rooms } from './test-data'
import { expect } from 'chai'
import Customer from '../src/classes/customer'
import Booking from '../src/classes/booking'
import Room from '../src/classes/room'

let currentDate

describe('Customer', () => {
    let customer1
    let customer2
    let bookingData
    let roomData
    

    beforeEach(() => {
        bookingData = bookings.map(booking => new Booking(booking, roomData))
        roomData = rooms.map(room => new Room(room))

        customer1 = new Customer(customers[0])
        customer2 = new Customer(customers[1])
        
        const date = new Date()
        let currentDay = date.getDate()
        let currentMonth = date.getMonth()
        let currentYear = date.getFullYear()
        let currentDate = `${currentDay}${currentMonth}${currentYear}`
        return currentDate = Number(currentDate)
    }) 

    it('should be a function', function() {
        expect(Customer).to.be.a('function')
    })

    it('should create a new instance of customer', function() {
        expect(customer1).to.be.an.instanceOf(Customer)
        expect(customer2).to.be.an.instanceOf(Customer)
    })

    it('should have an id value', function() {
        expect(customer1.id).to.equal(1)
        expect(customer2.id).to.equal(2)
    })

    it('should have name of customer', function() {
        expect(customer1.name).to.equal('Leatha Ullrich')
        expect(customer2.name).to.equal('Rocio Schuster')
    })

    it('should start with 0 spent', function() {
        expect(customer1.spent).to.equal(0)
        expect(customer2.spent).to.equal(0)
    })

    it('should be able to store past bookings', function() {
        expect(customer1.pastBookings).to.deep.equal([])
        expect(customer2.pastBookings).to.deep.equal([])
    })

    it('should be able to store upcoming bookings', function() {
        expect(customer1.upcomingBookings).to.deep.equal([])
        expect(customer2.upcomingBookings).to.deep.equal([])
    })

    it('should be able to store all bookings', function() {
        expect(customer1.allBookings).to.deep.equal([])
        expect(customer2.allBookings).to.deep.equal([])
    })

    it('should be able to find customer bookings', function() {
      customer1.findCustomerBookings(bookings)
      expect(customer1.allBookings).to.deep.equal([bookings[0]])
     
      customer2.findCustomerBookings(bookings)
      expect(customer2.allBookings).to.deep.equal([bookings[1], bookings[3]])
    })

    it('should add total spent on rooms', function() {
        customer1.findCustomerBookings(bookings)
        customer1.totalCost(rooms)
        expect(customer1.spent).to.equal(358.4)

        // customer2.findCustomerBookings(bookings)
        // customer2.totalCost(rooms)
        // expect(customer2.spent).to.equal(477.38)
    })

    it('should get todays date in number format', function() {
        let result1 = customer1.getCurrentDate()
        expect(result1).to.equal(result1)
    })

    it('should get upcoming bookings', function() {
        customer1.getUpcomingBookings(bookings)
        expect(customer1.upcomingBookings).to.deep.equal([{
            "id": "5fwrgu4i7k55hl6sz",
            "userID": 1,
            "date": "2024/04/22",
            "roomNumber": 15
        }
        ])
    })
    it('should get past bookings', function() {
        customer2.getPastBookings(bookings)
        expect(customer2.pastBookings).to.deep.equal([{
            "id": "5fwrgu4i7k55hl6t5",
            "userID": 2,
            "date": "2022/01/24",
            "roomNumber": 24
        }
        ])
    })

    it('should find all available rooms based on date', function() {
        let result1 = customer1.findAvailableRooms(20240422, bookingData, roomData)
        expect(result1.length).to.equal(1)
    })

    it('should find sum of users total spent on rooms', function() {
      customer1 = new Customer(customers[0], roomData, bookingData)
      console.log('CUSTOMER1', this.allRooms)
      customer1.totalCost()
 
      expect(customer1.spent).to.equal(358.4)
      
    })

 })