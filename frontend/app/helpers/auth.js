import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_URL}/api/users`

export const getUser = async () => {
    const token = JSON.parse(localStorage.getItem('user'))['token']
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await axios.get(API_URL + '/me', config)
        return response.data

    } catch (error) {
        if (error.response.status === 400) {
            // throw new Error(error.response.data.msg)
        } else {
            // throw new Error("An error occurred!")
        }
    }
}

export const updateUser = async (userData) => {
    const token = JSON.parse(localStorage.getItem('user'))['token']
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const response = await axios.post(API_URL + '/me/update', userData, config)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}