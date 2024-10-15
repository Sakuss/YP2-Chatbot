
import axios from 'axios'
import { getMockToken, cacheResponse, getCachedResponse } from './SessionManagement'


const getResponseFromServer = async (question) => {
    const cachedResponse = getCachedResponse(question);
    if (cachedResponse) {
        console.log("Using cahced response");
        return cachedResponse;
    }

    try {
        const token = getMockToken();
        if (!token) {
            console.error("No token available");
            throw new Error("No mock token found");
        }

        const response = await axios.get(`http://127.0.0.1:1024/response`, {
            params: { question: encodeURIComponent(question)},
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        cacheResponse(question, response.data.response);
        return response.data.response;
    } catch (error) {
        console.error("Error during API request", error);
        throw error;
    }
};

export default getResponseFromServer