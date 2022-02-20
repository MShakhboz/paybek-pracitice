const initialState = [];

export default function SignInReducer(state = initialState, action){
    switch (action.type) {
        case 'FILTER_USER_DATA':
            return [ ...action.data ];
        default:
            return state;
    }
}