import { API_BASE } from '../config/env';
import axios from 'axios'

export const USERNAME_CHANGE       = "username_change";
export const USER_PHONE_CHANGE     = "user_phone_change";
export const USER_ADDRESS_CHANGE   = "user_address_change";
export const DESCRIPTION_CHANGE    = "description_change";
export const SEANS_DATE_CHANGE     = "seans_date_change";
export const COUNT_CHANGE          = "count_change";
export const NEXT_SEANS_CHANGE     = "next_seans_change";
export const SEANS_PRICE_CHANGE    = "seans_price_change";
export const PAYMENT_METHOD_CHANGE = "payment_method_change";
export const SEANS_PAID            = "seans_paid";
export const USER_BALANCE_CHANGE   = "user_balance_change";

export const FETCH_SEANS           = "fetch_seans";
export const ADD_SEANS             = "add_seans";
export const ADD_SEANS_SUCCESS     = "add_seans_susccess";
export const DELETE_SEANS          = "delete_seans";

export const usernameChange = (usernameText) => {
    return {
        type:    USERNAME_CHANGE,
        payload: usernameText
    }
}

export const userPhoneChange = (phoneText) => {
    return {
        type:    USER_PHONE_CHANGE,
        payload: phoneText
    }
}

export const userAddressChange = (addressText) => {
    return {
        type:    USER_ADDRESS_CHANGE,
        payload: addressText
    }
}

export const descriptionChange = (descriptionText) => {
    return {
        type:    DESCRIPTION_CHANGE,
        payload: descriptionText
    }
}

export const seansDateChange = (seansDateText) => {
    return {
        type:    SEANS_DATE_CHANGE,
        payload: seansDateText
    }
}

export const countChange = (countText) => {
    return {
        type:    COUNT_CHANGE,
        payload: countText
    }
}

export const nextSeansChange = (nextSeansText) => {
    return {
        type:    NEXT_SEANS_CHANGE,
        payload: nextSeansText
    }
}

export const seansPriceChange = (seansPriceText) => {
    return {
        type:    SEANS_PRICE_CHANGE,
        payload: seansPriceText
    }
}

export const paymentMethodChange = (paymentMethodText) => {
    return {
        type:    PAYMENT_METHOD_CHANGE,
        payload: paymentMethodText
    }
}

export const seansPaid = (paidText) => {
    return {
        type: SEANS_PAID,
        payload: paidText
    }
}

export const userBalanceChange = (userBalanaceText) => {
    return {
        type:    USER_BALANCE_CHANGE,
        payload: userBalanaceText
    }
}


export const fetchSeans = () => {
    return dispatch => {
        axios.get(`${API_BASE}/seans`)
            .then((result) => {
                const getSeans = result.data;
                dispatch({
                    type: FETCH_SEANS,
                    payload: getSeans
                })
            })
    }
}

export const addSeans = (ad, phone, address, description, seansDate, count, nextSeans, seansPrice, paymentMethod, seansPaid, userBalance) => {
    return dispatch => {
        dispatch({
            type: ADD_SEANS
        })
        axios.post(`${API_BASE}/users`, {
            ad,
            phone,
            address,
            userBalance
        })
        .then((result) => {
            axios.post(`${API_BASE}/payment`, {
                paymentMethod
            })
            .then((paymentResult) => {
                const userId = result.data.id
                const paymentId = paymentResult.data.id
                axios.post(`${API_BASE}/seans`, {
                    description,
                    seansDate,
                    count,
                    nextSeans,
                    seansPrice,
                    seansPaid,
                    userId,
                    paymentId
                })
            })
        })
    }
}

export const deleteSeans = (id) => {
    return dispatch => {
        dispatch({
            type: DELETE_SEANS,
            payload: axios.delete(`${API_BASE}/seans/${id}`)
                .then(result => Object.assign({}, result, {id})) // reducerda bu kartı hariç tutarak listelemeyi sağlar
        })
    }
}
