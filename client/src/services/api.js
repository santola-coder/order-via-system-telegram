import axios from "axios";
import { AppleIcon } from "lucide-react";



export const fetchProducts = async () => {
  const res = await axios.get(
    "https://fakestoreapi.com/products"
  );
  return res.data;
};

export default AppleIcon;

export const submitOrder = async (orderData) => {
  return axios.post(
    "http://localhost:5000/api/orders",
    orderData
  );
};