import axios from "./axios"
const product = async (data)=>{
    var response = await axios.post('/product',data);
    return response.data;
}
const viewProduct = async ()=>{
    var response = await axios.get('/product');
    return response.data;
}
export {product}
export {viewProduct}