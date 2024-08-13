import Carousel from "react-bootstrap/Carousel";
import BookStoreImg from "../assets/images/book-store.jpg";
import CosmeticStoreImg from "../assets/images/cosmetic-store.jpg";
import PharmacyStoreImg from "../assets/images/pharmacy.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

function Hero() {
   return (
      <Carousel data-bs-theme='dark' className='slideshow'>
         <Carousel.Item className='slideshow--item'>
            <LazyLoadImage
               className='img-fluid w-100'
               src={BookStoreImg}
               alt='First
            slide'
            />
            <Carousel.Caption>
               <h5 className='text-white fw-bold fs-2'>Book Store</h5>
               <p className='text-white fw-bold'>Upgrade your reading experience, with our wide selection of books stores.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item className='slideshow--item'>
            <LazyLoadImage className='img-fluid w-100' src={CosmeticStoreImg} alt='Second slide' />
            <Carousel.Caption>
               <h5 className='text-white fs-2 fw-bold'>Cosmetic Stores</h5>
               <p className='text-white fw-bold'>Come in and shop our wide selection of cosmetic stores.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item className='slideshow--item'>
            <LazyLoadImage className='img-fluid w-100' src={PharmacyStoreImg} alt='Third slide' />
            <Carousel.Caption>
               <h5 className='text-white fs-2 fw-bold'>Pharmacy Stores</h5>
               <p className='text-white fw-bold'>Come in and shop our wide selection of pharmacy stores.</p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}

export default Hero;
