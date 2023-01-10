import axios from "./axios"
const profile = async ()=>{
    var response = await axios.get('/profile');
    return response.data;
}
export {profile}