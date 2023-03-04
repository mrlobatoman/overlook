class Customer {
    constructor(customerObj) {
        this.id = customerObj.id
        this.name = customerObj.name
        this.spent = 0
        this.pastBookings = []
        this.upcomingBookings = []
        this.allBookings = []
    }
    findCustomerBookings(bookingData) {
        this.allBookings = bookingData.filter(currBooking => {
            return currBooking.userID === this.id
        })
    }
    getCurrentDate() {
        const date = new Date()
        let currentDay = ('0' + (date.getDate())).slice(-2)
        let currentMonth = ('0' + (date.getMonth()+1)).slice(-2)
        let currentYear = date.getFullYear()
        let currentDate = `${currentYear}${currentMonth}${currentDay}`
        return currentDate = Number(currentDate)
    }
    getUpcomingBookings(bookings) {
        let currentDate = this.getCurrentDate()
        let upcomingStay

        this.upcomingBookings = bookings.filter(currentBooking => {
            let chosenDate = currentBooking.date.split('/')
            chosenDate = Number(chosenDate.join(''))
            if(chosenDate >= currentDate) {
                upcomingStay = true
            } else {
                upcomingStay = false
            }
            return currentBooking.userID === this.id && upcomingStay
        })
    }
    
    getPastBookings(bookings) {
        let currentDate = this.getCurrentDate()
        let pastBooking

        this.pastBookings = bookings.filter(currentBooking => {
            let chosenDate = currentBooking.date.split('/')
            chosenDate = Number(chosenDate.join(''))
            if(chosenDate <= currentDate) {
                pastBooking = true
            } else {
                pastBooking = false
            }
            return currentBooking.userID === this.id && pastBooking
        })
    }

    totalCost(rooms) {
       this.spent = this.allBookings.reduce((total, room) => {
        total += rooms.find(booking => booking.number === room.roomNumber).costPerNight
        return total
       }, 0)
    }
}




export default Customer