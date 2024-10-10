
import axios from 'axios'

const getResponseFromServer = async (message) => {
    let response = await axios({
        method: 'GET',
        url: `http://127.0.0.1:1024/response?question=${message}`
    })

    return response.data.response
}

export default getResponseFromServer