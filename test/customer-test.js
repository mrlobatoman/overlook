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
})