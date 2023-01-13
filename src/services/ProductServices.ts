import axios from "./axios"
const product = async (data:any)=>{
    var response = await axios.post('/product',data);
    console.log(response.data)
    return response.data;
}
const viewProduct = async ()=>{
    var response = await axios.get('/product');
    console.log(response.data)
    return response.data;
}
const viewSortedProduct = async (min:any,max:any,ord:any)=>{
    var response = await axios.get('/product',{ params: { sort: ord,min:min,max:max } });
    console.log(response.data)
    return response.data;
}
const viewFilteredProduct = async (s:any)=>{
    
    var response = await axios.get('/product',{ params: { min: s.min,max:s.max,sort:s.ord } });
    console.log(response.data)
    return response.data;
}
export {product}
export {viewProduct}
export {viewSortedProduct}
export {viewFilteredProduct}