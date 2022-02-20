const initialState = {
    users: [
        { email: 'email_in_redux', password: 'password_in_redux', token: 'token_45456464' }
    ]
};

export default function SignInReducer(state = initialState, action){
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, users: [ ...state.users, action.data ] };
        default:
            return state;
    }
}