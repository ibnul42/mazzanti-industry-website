const axios = require("axios");

const userToken = JSON.parse(localStorage.getItem('user'))?.token;

if (!userToken) {
    throw new Error("User token not found. Please ensure the user is logged in.");
}

const config = {
    headers: { Authorization: `Bearer ${userToken}` }
};

const createGoal = async (data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/admin/home/create-goal`, data, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const editGoal = async ({ id, data }) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/admin/home/goal/${id}`, data, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteGoal = async (id) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/admin/home/goal/${id}`, config);

        return response.data;
    } catch (error) {
        throw error;
    }
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

const createProbate = async (data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/admin/probate/create-probate`, data, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const editProbate = async ({ id, data }) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/admin/probate/${id}`, data, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteProbate = async (id) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/admin/probate/${id}`, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const createForeclosure = async (data) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/admin/foreclosure/create-foreclosure`, data, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const editForeclosure = async ({ id, data }) => {
    try {
        const response = await axios.put(`${process.env.NEXT_PUBLIC_API}/admin/foreclosure/${id}`, data, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteForeclosure = async (id) => {
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API}/admin/foreclosure/${id}`, config);

        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createGoal,
    editGoal,
    deleteGoal,
    createWork,
    editWork,
    deleteWork,
    createProbate,
    editProbate,
    deleteProbate,
    createForeclosure,
    editForeclosure,
    deleteForeclosure,
};
