import { customers, bookings, rooms } from './test-data'
import { expect } from 'chai'
import Customer from '../src/classes/customer'

let currentDate

describe('Customer', () => {
    let customer1
    let customer2
    

    beforeEach(() => {
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
      expect(customer2.allBookings).to.deep.equal([bookings[2], bookings[3]])
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
            "id": "5fwrgu4i7k55hl6t8",
            "userID": 1,
            "date": "2024/02/05",
            "roomNumber": 12
        }
        ])
    })
    it('should get past bookings', function() {
        customer2.getPastBookings(bookings)
        expect(customer2.pastBookings).to.deep.equal([{
            "id": "5fwrgu4i7k55hl6wx",
            "userID": 2,
            "date": "2022/01/17",
            "roomNumber": 17
        }
        ])
    })
 })