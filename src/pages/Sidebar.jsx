import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBagShopping, faBlog, faFolder, faBars } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import "../assets/styles/SideBar.css";

const SideBar = ({ toggle }) => {
   return (
      <>
         <div className='sidebar-header'>
            <button onClick={toggle}>
               <FontAwesomeIcon icon={faBars} />
            </button>
         </div>
         <Nav className='flex-column pt-2 d-flex justify-content-center'>
            <Nav.Item className='my-4'>
               <Nav.Link href='/' className='text-white fw-bold fs-5'>
                  <FontAwesomeIcon icon={faHome} className='mr-2' /> Home
               </Nav.Link>
            </Nav.Item>
            <Nav.Item className='my-4'>
               <Nav.Link href='/coupons' className='text-white fw-bold fs-5'>
                  <FontAwesomeIcon icon={faFolder} className='mr-2' /> Coupons
               </Nav.Link>
            </Nav.Item>
            <Nav.Item className='my-4'>
               <Nav.Link href='/shops' className='text-white fw-bold fs-5'>
                  <FontAwesomeIcon icon={faBagShopping} className='mr-2' /> Shops
               </Nav.Link>
            </Nav.Item>
            <Nav.Item className='my-4'>
               <Nav.Link href='/blogs' className='text-white fw-bold fs-5'>
                  <FontAwesomeIcon icon={faBlog} className='mr-2' /> Blogs
               </Nav.Link>
            </Nav.Item>
         </Nav>
      </>
   );
};

SideBar.defaultProps = {
   toggle: () => {},
};

SideBar.propTypes = {
   toggle: PropTypes.func,
};

export default SideBar;
