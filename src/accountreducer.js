export const initialState = {
    account_email_address: '',
    account_name: '',
    account_phone_number: '',
    account_type: '',
    account_website: '',
    chamber_of_commerce_number: '',
    id: 1,
    industry: '',
};

export const accountReducer = (state, action) => {
    switch (action.type) {
        case 'field':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'FETCH_SUCCES':
            //Object.assign(state, action.payload);
            const payload = {...state, ...action.payload };
            return {
                ...payload
            }
        case 'FETCH_ERROR':
            return {}
        case 'PUT_SUCCES':
            return {
                ...state
            }
        case 'PUT_ERROR':
            return state

        default:
            return state;
    }
}