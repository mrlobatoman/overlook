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
}
 
    
)

let bookingData 
let customerData = 0
let roomsData
let customer
let clientNumber


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
        console.log(userID)
        console.log(userName)

    if(userName !== 'customer' || (parseInt(userID) < 1 || parseInt(userID) > 50)) {
        incorrectLogin.classList.remove('hidden')
        }
    } else {
        Promise.all(customersDataF`/${userID}`)
    }
}

    
    function createCustomer(data) {
        customer = new Customer(data)
        console.log(customer)
        return customer
    }
        
 

    function displayAccountInfo() {
        currentUser.innerText = customer.name + "'s account"
        gatherAccountInfo()
    } 

    function gatherAccountInfo() {
        customer.getUpcomingBookings(allBookings)
        userUpcomingBookings = customer.upcomingBookings
        customer.getPastBookings(allBookings)
        userPastBookings = customer.pastBookings
    } 





function preventLoad(event) {
    event.preventDefault()
}
