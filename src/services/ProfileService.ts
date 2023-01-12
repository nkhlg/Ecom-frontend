import axios from "./axios"
const profile = async ()=>{
    var response = await axios.get('/profile');
    console.log(response.data)
    return response.data;
}
export {profile}