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




let allMotelData

const customersDataF = fetch('http://localhost:3001/api/v1/customers')
    .then(resp => resp.json())

 const roomsDataF = fetch('http://localhost:3001/api/v1/rooms')
    .then(resp => resp.json())

 const bookingsDataF = fetch('http://localhost:3001/api/v1/bookings')
    .then(resp => resp.json())

console.log(bookingsDataF)





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

    if(userName === 'customer' && (userID > 0 && userID <=50)) {
        clientNumber = (Number(userID)).toString()
        customerURL = `http://localhost:3001/api/v1/customers/${clientNumber}`
        }
    } else {
        incorrectLogin.classList.remove('hidden')
    }
}

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
        customerData = allMotelData.customers.map(customer => new Customer(customer))
        bookingData = allMotelData.bookings.map(booking => new Booking(booking))
        roomsData = allMotelData.rooms.map(room => new Room(room))
        console.log(customerData)
        console.log(bookingData)
        console.log(roomsData)
    }
)
    
    
        
 

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
