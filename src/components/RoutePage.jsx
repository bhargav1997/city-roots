import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Coupons from "./Coupon";
import Shops from "./Shops";
import Blogs from "./Blogs";

function RoutePage() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' index element={<Body />} />
            <Route path='/coupons' element={<Coupons />} />
            <Route path='/shops' element={<Shops />} />
            <Route path='/blogs' element={<Blogs />} />
         </Routes>
      </BrowserRouter>
   );
}

export default RoutePage;
