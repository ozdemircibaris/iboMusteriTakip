import {
    USERNAME_CHANGE,
    USER_PHONE_CHANGE,
    USER_ADDRESS_CHANGE,
    DESCRIPTION_CHANGE,
    SEANS_DATE_CHANGE,
    COUNT_CHANGE,
    NEXT_SEANS_CHANGE,
    SEANS_PRICE_CHANGE,
    USER_BALANCE_CHANGE,
    PAYMENT_METHOD_CHANGE,
    SEANS_PAID,
    FETCH_SEANS,
    ADD_SEANS,
    ADD_SEANS_SUCCESS,
    DELETE_SEANS,
} from '../actions/seansListAction';
import moment from 'moment';

const INITIAL_STATE = {
    usernameInput:      "",
    userPhoneInput:     "",
    userAddressInput:   "",
    descriptionInput:   "",
    seansDateInput:     moment(),
    countInput:         "",
    nextSeansInput:     moment(),
    seansPriceInput:    "",
    paymentMethodInput: "",
    seansPaidInput:     "",
    userBalanceInput:   "",
    fetchSeansList:     [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGE:
            return {
                ...state,
                usernameInput: action.payload
            }
        case USER_PHONE_CHANGE:
            return {
                ...state,
                userPhoneInput: action.payload
            }
        case USER_ADDRESS_CHANGE:
            return {
                ...state,
                userAddressInput: action.payload
            }
        case DESCRIPTION_CHANGE:
            return {
                ...state,
                descriptionInput: action.payload
            }
        case SEANS_DATE_CHANGE:
            return {
                ...state,
                seansDateInput: action.payload
            }
        case COUNT_CHANGE:
            return {
                ...state,
                countInput: action.payload
            }
        case NEXT_SEANS_CHANGE:
            return {
                ...state,
                nextSeansInput: action.payload
            }
        case SEANS_PRICE_CHANGE:
            return {
                ...state,
                seansPriceInput: action.payload
            }
        case PAYMENT_METHOD_CHANGE:
            return {
                ...state,
                paymentMethodInput: action.payload
            }
        case SEANS_PAID:
            return {
                ...state,
                seansPaidInput: action.payload
            }
        case USER_BALANCE_CHANGE:
            return {
                ...state,
                userBalanceInput: action.payload
            }
        case FETCH_SEANS:
            return {
                ...state,
                fetchSeansList: action.payload
            }
        case ADD_SEANS:
            return {
                ...state,
            }
        case ADD_SEANS_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }
        case DELETE_SEANS:
            return {
                ...state
            }
        default:
            return state;
    }
}