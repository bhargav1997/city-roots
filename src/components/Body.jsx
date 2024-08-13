import "../assets/styles/Body.css";
import DailyTasks from "./DailyTasks";
import Hero from "./Hero";
import LastChancesCoupons from "./LastChancesCoupons";
function Body() {
   return (
      <div className='content-body'>
         <Hero />
         <div className='after-hero-content'>
            <h2 className='fw-bold'>Local Businesses</h2>
            <p>Find the best local businesses in your area, from cafes to boutiques.</p>
         </div>

         <DailyTasks />

         <LastChancesCoupons />
      </div>
   );
}

export default Body;
