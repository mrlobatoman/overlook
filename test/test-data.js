const bookings = [
    {
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 1,
        "date": "2024/04/22",
        "roomNumber": 15,
    
      },
      {
        "id": "5fwrgu4i7k55hl6t5",
        "userID": 2,
        "date": "2022/01/24",
        "roomNumber": 24,
      },
      {
        "id": "5fwrgu4i7k55hl6t8",
        "userID": 13,
        "date": "2022/02/05",
        "roomNumber": 12,
    
      },
      {
        "id": "5fwrgu4i7k55hl6t9",
        "userID": 2,
        "date": "2023/12/14",
        "roomNumber": 14,
    
      }

    ]

    const rooms = [
        {
            "number": 15,
            "roomType": "residential suite",
            "bidet": true,
            "bedSize": "queen",
            "numBeds": 1,
            "costPerNight": 358.4
          },
          {
            "number": 24,
            "roomType": "suite",
            "bidet": false,
            "bedSize": "full",
            "numBeds": 2,
            "costPerNight": 477.38
          }
    ]

    const customers = [
        {
            "id": 1,
            "name": "Leatha Ullrich"
          },
          {
            "id": 2,
            "name": "Rocio Schuster"
          }
    ]

    export {bookings, customers, rooms}