const axios = require("axios");

const userToken = JSON.parse(localStorage.getItem('user'))?.token;

if (!userToken) {
    throw new Error("User token not found. Please ensure the user is logged in.");
}

const config = {
    headers: { Authorization: `Bearer ${userToken}` }
};

const createWork = async (data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/admin/work/create-work`, data, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const editWork = async ({ id, data }) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/admin/work/${id}`, data, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteWork = async (id) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/admin/work/${id}`, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createWork,
    editWork,
    deleteWork
};
