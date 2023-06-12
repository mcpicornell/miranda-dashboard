
export interface IRooms {
    roomId: number,
    roomName: string,
    isAvaliable: boolean
    offerPrice: number,
    price: number,
    roomNumber: number,
    roomType: string,
    amenities: string[],
    photos: string[]
}

export interface IUsers{
    contact: number,
    descriptionJob: string,
    email: string,
    name: string,
    _id?: number,
    photo: string,
    startDate: string,
    isActive: boolean
}
export interface IBookings{
    guest: string,
    orderDate: string,
    checkIn: string,
    bookingId: number,
    checkOut: string,
    specialRequest: string,
    roomId: number,
    status: string
}
export interface IContacts {
    id: number,
    contactDate: string,
    contactId: number,
    guest: string,
    email: string,
    contact: number,
    title: string,
    text: string
}

    export interface IBookingsTitles {
        guestName: string,
        orderDate: string,
        checkIn: string,
        checkOut: string,
        specialRequest: string,
        roomType: string,
        status: string
     }

     export interface IUsersTitles {
        name: string,
        description: string,
        contact: string,
        status: string,
     }

     export interface IRoomsTitles {
        roomName: string,
        roomType: string,
        amenities: string,
        price: string,
        offerPrice: string,
        status: string
     }