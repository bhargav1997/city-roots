import { useState } from "react";

import CouponImg from "../assets/images/coupon.jpg";
import DiscountCoupon2 from "../assets/images/discount-coupon.jpg";
import QRCodeImage from "../assets/images/QRCodeImage.png";
import { Button, Card, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

// Sample coupon data
const couponData = [
   {
      id: 1,
      category: "Electronics",
      title: "10% off on Laptops",
      text: "Get 10% off on all laptop purchases.",
      img: `${CouponImg}`,
      description: "Use this coupon to get a 10% discount on any laptop purchase.",
      expiration: "Expires: Dec 31, 2024",
      terms: "Valid only on select models.",
   },
   {
      id: 2,
      category: "Fashion",
      title: "20% off on Clothing",
      text: "Get 20% off on all clothing items.",
      img: `${DiscountCoupon2}`,
      description: "Shop now and save 20% on all clothing items.",
      expiration: "Expires: Nov 30, 2024",
      terms: "Cannot be combined with other offers.",
   },
   {
      id: 3,
      category: "Groceries",
      title: "5% off on Groceries",
      text: "Save 5% on your grocery shopping.",
      img: `${CouponImg}`,
      description: "Save on your grocery bill with this 5% discount.",
      expiration: "Expires: Oct 15, 2024",
      terms: "Valid in-store only.",
   },
];

function CouponCard({ coupon, onRedeem }) {
   const { title, text, img } = coupon;
   return (
      <Card className='mb-4' style={{ width: "30%" }}>
         <Card.Img variant='top' src={img} className='img-fluid' style={{ height: "200px" }} />
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant='primary' onClick={() => onRedeem(coupon)}>
               Redeem
            </Button>
         </Card.Body>
      </Card>
   );
}

CouponCard.propTypes = {
   onRedeem: PropTypes.func,
   coupon: PropTypes.object,
};

function LastChancesCoupons({ couponTitle }) {
   const [searchTerm, setSearchTerm] = useState("");
   const [filterCategory, setFilterCategory] = useState("All");
   const [selectedCoupon, setSelectedCoupon] = useState(null);

   const filteredCoupons = couponData.filter(
      (coupon) =>
         (filterCategory === "All" || coupon.category === filterCategory) && coupon.title.toLowerCase().includes(searchTerm.toLowerCase()),
   );

   const handleRedeem = (coupon) => {
      setSelectedCoupon(coupon);
   };

   const handleClose = () => setSelectedCoupon(null);

   return (
      <div className='mt-4 tasks-container'>
         <h2 className='mb-4 fw-bold'>{couponTitle}</h2>

         {/* Displaying Coupons */}
         <div className='d-flex flex-wrap justify-content-between w-100'>
            {filteredCoupons.length > 0 ? (
               filteredCoupons.map((coupon) => <CouponCard key={coupon.id} coupon={coupon} onRedeem={handleRedeem} />)
            ) : (
               <p>No coupons found for the selected category or search term.</p>
            )}
         </div>
         {/* Redeem Modal */}
         <Modal show={!!selectedCoupon} onHide={handleClose} centered>
            <Modal.Header closeButton>
               <Modal.Title>Redeem Coupon</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {selectedCoupon && (
                  <>
                     <Card.Img variant='top' src={selectedCoupon.img} />
                     <h4 className='mt-3'>{selectedCoupon.title}</h4>
                     <p>{selectedCoupon.description}</p>
                     <p>
                        <strong>Expiration:</strong> {selectedCoupon.expiration}
                     </p>
                     <p>
                        <strong>Terms:</strong> {selectedCoupon.terms}
                     </p>
                     <div className='text-center'>
                        <h4 className='m-0'>Scan Me</h4>
                        <img src={QRCodeImage} alt='QR Code' className='img-fluid' />
                     </div>
                  </>
               )}
            </Modal.Body>
            <Modal.Footer>
               <Button variant='secondary' onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
}

LastChancesCoupons.defaultProps = {
   couponTitle: "Last Chances Coupons",
};

LastChancesCoupons.propTypes = {
   couponTitle: PropTypes.string,
};

export default LastChancesCoupons;
