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
    totalCost() {
        this.spent = this.allBookings.reduce((total, booking) => {
            total += this.allBookings
   
    })
}


}




export default Customer