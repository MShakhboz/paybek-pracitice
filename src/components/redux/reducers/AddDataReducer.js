const initialState = [
        {id: 1, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 2, country: "Russia", language: 'Russian', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 3, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 4, country: "Korea", language: 'Korean', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
        {id: 5, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 6, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 7, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 8, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
        {id: 9, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 10, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 11, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 12, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
        {id: 13, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 14, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 15, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 16, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
        {id: 17, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 18, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 19, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 20, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
        {id: 21, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 22, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 23, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 24, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
        {id: 25, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 26, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 27, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 28, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
        {id: 29, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 30, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 31, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 32, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
        {id: 33, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 34, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Successful', date: ['12.02.2021', '12:30'], deliveries: '1000', opens: 757, action: '...'},
        {id: 35, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Scheduled', date: ['12.02.2021', '12:30'], deliveries: '', opens: '', action: '...'},
        {id: 36, country: "Uzbekistan", language: 'Uzbek', title: 'Get a coupon', status: 'Canceled', date: '', deliveries: '1000', opens: 757, action: '...'},
];

export default function AddDataReducer(state = initialState, {type, data}) {
    switch(type) {
        case 'ADD_USER_DATA':
            return [...state, data]
        default:
            return state;
    }
}


