
export const storeMockToken = (token) => {
    try {
        localStorage.setItem('mock_token', token);
    } catch (error) {
        console.error("Error storing the mock token:", error);
    }
};

export const getMockToken = () => {
    const token = localStorage.getItem('mock_token');
    if (!token) {
        console.warn("No mock token found in localStorage");
    }
    return token;
};

export const removeMockToken = () => {
    localStorage.removeItem('mock_token');
};

const messageCache = {};

export const cacheResponse = (question, response) => {
    return messageCache[question] = response;
};

export const getCachedResponse = (question) => {
    return messageCache[question] || null;
};

export const clearCache = () => {
    for (const key in messageCache) {
        delete messageCache[key];
    }
};

export const clearSessionOnUnload = () => {
    window.addEventListener('beforeunload', () => {
        removeMockToken();
    });
};


