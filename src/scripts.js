console.log('hello')

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/booking-logo.png'
import Customer from './classes/customer.js'
import Booking from './classes/booking.js'
import Room from './classes/room.js'

let bookingData 
let customerData = 0
let roomsData


let allMotelData

const customersDataF = fetch('http://localhost:3001/api/v1/customers')
    .then(resp => resp.json())

 const roomsDataF = fetch('http://localhost:3001/api/v1/rooms')
    .then(resp => resp.json())

 const bookingsDataF = fetch('http://localhost:3001/api/v1/bookings')
    .then(resp => resp.json())

console.log(bookingsDataF)




 Promise.all([customersDataF, roomsDataF, bookingsDataF])
    .then((data) => {
        allMotelData = {
            customers: data[0].customers,
            rooms: data[1].rooms,
            bookings: data[2].bookings
        }
        return allMotelData
    })
    .then(
        (allMotelData) => {
            customerData = new Customer(allMotelData.customers[0])
            bookingData = allMotelData.bookings.map(booking => new Booking(booking))
            roomsData = allMotelData.rooms.map(room => new Room(room))
            console.log(customerData)
            console.log(bookingData)
            console.log(roomsData)
        }
    )

    function loadCustomer(data) {
        currentCustomer = new Customer(data)
        allBookings = currentCustomer.createBooking(allMotelData.bookings)
        return currentCustomer
    }

    function displayUserInfo() {
        gatherAccountInfo()
    }

    function loadRooms(data) {
        allRooms = data.map(currentBooking => new Room(currentBooking))
    }

    function gatherAccountInfo() {
        currentCustomer.getUpcomingBookings(allBookings)
        userUpcomingBookings = currentCustomer.upcomingBookings
        currentCustomer.getPastBookings(allBookings)
        userPastBookings = currentCustomer.pastBookings
       
    } 





console.log('This is the JavaScript entry file - your code begins here.');
