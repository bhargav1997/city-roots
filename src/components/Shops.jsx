import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";
import BookStoreImg from "../assets/images/book-store.jpg";
import CosmeticStoreImg from "../assets/images/cosmetic-store.jpg";
import PharmacyStoreImg from "../assets/images/pharmacy.jpg";
import PropTypes from "prop-types";

// Sample shop data
const shopData = [
   {
      id: 1,
      name: "Tech Haven",
      category: "Electronics",
      img: `${BookStoreImg}`,
      description: "Your one-stop shop for the latest in electronics.",
      location: "1234 Maple Street, Toronto, ON",
      rating: 4.5,
   },
   {
      id: 2,
      name: "Fashion Forward",
      category: "Fashion",
      img: `${CosmeticStoreImg}`,
      description: "Trendy clothing and accessories for all seasons.",
      location: "5678 Oak Avenue, Toronto, ON",
      rating: 4.7,
   },
   {
      id: 3,
      name: "Fresh Market",
      category: "Groceries",
      img: `${PharmacyStoreImg}`,
      description: "Fresh and organic produce at great prices.",
      location: "9102 Birch Road, Toronto, ON",
      rating: 4.2,
   },
   // Add more shops here
];

function ShopCard({ shop, onViewDetails }) {
   return (
      <Card className='mb-4' style={{ width: "30%" }}>
         <Card.Img variant='top' src={shop.img} className='img-fluid' style={{ height: "200px" }} />
         <Card.Body>
            <Card.Title>{shop.name}</Card.Title>
            <Card.Text>{shop.description}</Card.Text>
            <Button variant='primary' onClick={() => onViewDetails(shop)}>
               View Details
            </Button>
         </Card.Body>
      </Card>
   );
}

ShopCard.propTypes = {
   shop: PropTypes.object,
   onViewDetails: PropTypes.func,
};

function Shops() {
   const [searchTerm, setSearchTerm] = useState("");
   const [filterCategory, setFilterCategory] = useState("All");
   const [selectedShop, setSelectedShop] = useState(null);

   const filteredShops = shopData.filter(
      (shop) =>
         (filterCategory === "All" || shop.category === filterCategory) && shop.name.toLowerCase().includes(searchTerm.toLowerCase()),
   );

   const handleViewDetails = (shop) => {
      setSelectedShop(shop);
   };

   const handleClose = () => setSelectedShop(null);

   return (
      <div className='container mt-4'>
         <h1 className='mb-4 fw-bold'>Local Shops</h1>

         {/* Search and Filter Section */}
         <InputGroup className='mb-4'>
            <Form.Control placeholder='Search for shops...' onChange={(e) => setSearchTerm(e.target.value)} />
            <DropdownButton
               variant='outline-secondary'
               title={filterCategory}
               id='input-group-dropdown-1'
               onSelect={(eventKey) => setFilterCategory(eventKey)}>
               <Dropdown.Item eventKey='All'>All</Dropdown.Item>
               <Dropdown.Item eventKey='Electronics'>Electronics</Dropdown.Item>
               <Dropdown.Item eventKey='Fashion'>Fashion</Dropdown.Item>
               <Dropdown.Item eventKey='Groceries'>Groceries</Dropdown.Item>
               {/* Add more categories here */}
            </DropdownButton>
         </InputGroup>

         {/* Displaying Shops */}
         <div className='d-flex flex-wrap justify-content-between'>
            {filteredShops.length > 0 ? (
               filteredShops.map((shop) => <ShopCard key={shop.id} shop={shop} onViewDetails={handleViewDetails} />)
            ) : (
               <p>No shops found for the selected category or search term.</p>
            )}
         </div>

         {/* Shop Details Modal */}
         <Modal show={!!selectedShop} onHide={handleClose} centered>
            <Modal.Header closeButton>
               <Modal.Title>{selectedShop ? selectedShop.name : "Shop Details"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {selectedShop && (
                  <>
                     <Card.Img variant='top' src={selectedShop.img} />
                     <h4 className='mt-3'>{selectedShop.name}</h4>
                     <p>{selectedShop.description}</p>
                     <p>
                        <strong>Location:</strong> {selectedShop.location}
                     </p>
                     <p>
                        <strong>Rating:</strong> {selectedShop.rating} ★
                     </p>
                     <Button
                        variant='secondary'
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedShop.location)}`}
                        target='_blank'>
                        View on Map
                     </Button>
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

export default Shops;
