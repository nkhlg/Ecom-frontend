import axios from "./axios"

const login = async (data)=>{
    var response = await axios.post('/login', data);
    return response.data;
}

export {login}