import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

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

export default CouponCard;
