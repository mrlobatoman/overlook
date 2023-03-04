import { customers } from './test-data'
import { expect } from 'chai'
import Customer from '../src/classes/customer'

describe('Customer', () => {
    let customer1
    let customer2

    beforeEach(() => {
        customer1 = new Customer(customers[0])
        customer2 = new Customer(customers[1])
    }) 

    it('should be a function', function() {
        expect(Customer).to.be.a('function')
    })

    it('should create a new instance of customer', function() {
        expect(customer1).to.be.an.instanceOf(Customer)
        expect(customer2).to.be.an.instanceOf(Customer)
        console.log(customer1)
    })

    it('should have an id value', function() {
        expect(customer1.id).to.equal(1)
        expect(customer2.id).to.equal(2)
    })

    it('should have name of customer', function() {
        expect(customer1.name).to.equal('Leatha Ullrich')
        expect(customer2.name).to.equal('Rocio Schuster')
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


})