// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/booking-logo.png'
import Customer from './classes/customer.js'
import Booking from './classes/booking.js'
import Room from './classes/room.js'
import { fetchData } from './api-calls'


let allCustomers, allRooms, allBookings

Promise.all([fetchData('customers'), fetchData('rooms'), fetchData('bookings')])
.then(data => {
    allCustomers = data[0].customers
    allRooms = data[1].rooms.map(room => new Room(room))
    allBookings = data[2].bookings.map(booking => new Booking(booking))
    console.log(allCustomers)
    console.log(allRooms)
    console.log(allBookings)
})
 
let bookingData 
let customerData = 0
let roomsData
let customer
let clientNumber
let userUpcomingBookings
let userPastBookings


let customerURL
const bookingsURL = 'http://localhost:3001/api/v1/bookings'
const roomsURL = 'http://localhost:3001/api/v1/rooms'

const loginForm = document.querySelector('#loginForm')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const loginButton = document.querySelector('#loginButton')
const incorrectLogin = document.querySelector('#incorrectLoginText')
const loginView = document.querySelector('#loginView')
const currentUser = document.querySelector('#userText')
const upcomingBookingsList = document.querySelector('#upcomingBookingsList')

loginButton.addEventListener('click', verifyLogin)
loginForm.addEventListener('click', preventLoad)



   //========================Functions=========================

   function verifyLogin(){
    let usernameInput = username.value
    let passwordInput = password.value
    let userID
    let userName

    let getID = usernameInput.split('')
    if(getID.length === 9 || getID.length === 10) {
        userID = getID.splice(8,2).join('')
        userName = getID.splice(0,8).join('')

        if(userName === 'customer' || (parseInt(userID) > 1 || parseInt(userID) < 50)) {
            Promise.all([fetchData(`customers/${userID}`)])
            .then(data => {
                customer = new Customer(data[0], allRooms, allBookings)
                displayAccountInfo()
                setCurrentDate()
                console.log(customer)
            })
        }
    }
}

    function displayAccountInfo() {
        gatherAccountInfo()
        upComingBookingsDiplay()
        pastBookingsDiplay()
    } 

    function gatherAccountInfo() {
        customer.getUpcomingBookings(allBookings)
        userUpcomingBookings = customer.upcomingBookings
        customer.getPastBookings(allBookings)
        userPastBookings = customer.pastBookings
    } 

    function capitalizeFirstChar(data) {
        return data.charAt(0).toUpperCase() + data.slice(1)
    }

    function upComingBookingsDiplay() {
let displayFormatedBookings = bookingsDisplay(userUpcomingBookings)
displayFormatedBookings.forEach(booking => {
    console.log(booking)
    upcomingBookingsList.innerHTML +=
    `<article class="upcoming -booking-container">
     <article>
     <article>
        <h3 class="test">
        ${booking.date},
        ${capitalizeFirstChar(booking.roomType)},
        ${capitalizeFirstChar(booking.bedSize)},
        Beds:${booking.numBeds}
        </h3>
     </article>
     </article
    `
    })  
}

function pastBookingsDiplay() {
    let displayFormatedBookings = bookingsDisplay(userPastBookings)
    displayFormatedBookings.forEach(booking => {
        console.log('COST', booking.costPerNight)
        pastBookingsList.innerHTML +=
        `<article class="past-booking-container">
         <article>
         <article>
            <h3 class="test">
            ${booking.date},
            ${capitalizeFirstChar(booking.roomType)},
            Bill: $${booking.costPerNight}
            </h3>
         </article>
         </article
        `
        })  
    }

function bookingsDisplay(bookings) {
    const formatedDisplay = bookings.map(currentBooking => {
        let userBookingInfo = {}
        userBookingInfo.date = currentBooking.date
        userBookingInfo.id = currentBooking.id
        userBookingInfo.dateNumber = currentBooking.date.split('/').join('')
        let roomInfo = allRooms.find(currentRoom => {
            return currentRoom.number === currentBooking.roomNumber
        })
        userBookingInfo.roomType = roomInfo.type
        userBookingInfo.bidet = roomInfo.bidet
        userBookingInfo.bedSize = roomInfo.bedSize
        userBookingInfo.numBeds = roomInfo.numBeds
        userBookingInfo.costPerNight = roomInfo.cost
        console.log('roomInfo', userBookingInfo)
        return userBookingInfo
    })
    return formatedDisplay.sort((a, b) => a.dateNumber - b.dateNumber)
}

let currentDate

function setCurrentDate(){
    const date = new Date()
    let currentDay = date.getDate()
    let currentMonth = date.getMonth() + 1
    let currentYear = date.getFullYear()
    currentDate = `${currentYear}${currentMonth}${currentDay}`
    currentDate = Number(currentDate)
}

function preventLoad(event) {
    event.preventDefault()
}
