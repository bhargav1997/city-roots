// import Carousel from "react-bootstrap/Carousel";
// import BookStoreImg from "../assets/images/book-store.jpg";
// import CosmeticStoreImg from "../assets/images/cosmetic-store.jpg";
// import PharmacyStoreImg from "../assets/images/pharmacy.jpg";

// import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "react-bootstrap";

function Hero() {
   return (
      <div className='hero-container'>
         <div className='hero-content'>
            <h1>Discover Your Local Community</h1>
            <p>Explore shops, events, and more in your area.</p>
            <Button variant='primary' size='lg' href='#shops'>
               Explore Local Shops
            </Button>
         </div>
      </div>
   );
}

export default Hero;
