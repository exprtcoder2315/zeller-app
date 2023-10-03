const phoneLogin = () => 'login';
const verifyOTP = () => 'check_otp';
const category = () => 'categories';
const addProduct = () => 'products';
const uploadProductImage = () => 'products/product_images';
const searchProduct = (query: string) => `products/search?${query}`;
export default {
  phoneLogin,
  verifyOTP,
  category,
  searchProduct,
  addProduct,
  uploadProductImage,
};
