import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";
import BlogImage from "../assets/images/blog.jpg";
import BlogImage2 from "../assets/images/blog3.png";

// Sample blog data
const blogData = [
   {
      id: 1,
      title: "Exploring the Future of Technology",
      img: `${BlogImage}`,
      author: "John Doe",
      date: "August 10, 2024",
      category: "Technology",
      excerpt: "An in-depth look at the advancements shaping our world.",
   },
   {
      id: 2,
      title: "Sustainable Fashion: The Next Big Thing",
      img: `${BlogImage2}`,
      author: "Jane Smith",
      date: "August 12, 2024",
      category: "Fashion",
      excerpt: "How sustainability is transforming the fashion industry.",
   },
   {
      id: 3,
      title: "Top Travel Destinations for 2024",
      img: `${BlogImage}`,
      author: "Emily White",
      date: "August 14, 2024",
      category: "Travel",
      excerpt: "Discover the must-visit places around the globe this year.",
   },
   // Add more blogs here
];

function BlogCard({ blog }) {
   return (
      <Card style={{ width: "30%" }} className='mb-4'>
         <Card.Img variant='top' src={blog.img} className='img-fluid' style={{ height: "200px" }} />
         <Card.Body>
            <Badge bg='primary'>{blog.category}</Badge>
            <Card.Title className='mt-2'>{blog.title}</Card.Title>
            <Card.Text>{blog.excerpt}</Card.Text>
            <Button variant='link' href={`/blog/${blog.id}`} className='p-0'>
               Read More
            </Button>
         </Card.Body>
         <Card.Footer>
            <small className='text-muted'>
               By {blog.author} | {blog.date}
            </small>
         </Card.Footer>
      </Card>
   );
}

BlogCard.propTypes = {
   blog: PropTypes.object,
};

function Blogs() {
   const [searchTerm, setSearchTerm] = useState("");

   const filteredBlogs = blogData.filter(
      (blog) =>
         blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
   );

   return (
      <div className='container mt-4'>
         <h1 className='mb-4 fw-bold'>Our Blog</h1>

         {/* Search Section */}
         <InputGroup className='mb-4'>
            <Form.Control placeholder='Search for blog posts...' onChange={(e) => setSearchTerm(e.target.value)} />
         </InputGroup>

         {/* Blog Posts */}
         <div className='d-flex flex-wrap justify-content-between'>
            {filteredBlogs.length > 0 ? filteredBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />) : <p>No blog posts found.</p>}
         </div>

         {/* Sidebar with Categories and Recent Posts */}
         <div className='mt-3'>
            <h4 className="fw-bold" >Categories</h4>
            <ListGroup>
               <ListGroup.Item action href='#technology'>
                  Technology
               </ListGroup.Item>
               <ListGroup.Item action href='#fashion'>
                  Fashion
               </ListGroup.Item>
               <ListGroup.Item action href='#travel'>
                  Travel
               </ListGroup.Item>
               {/* Add more categories here */}
            </ListGroup>
         </div>

         <div className='my-3'>
            <h4 className="fw-bold">Recent Posts</h4>
            <ListGroup>
               {blogData.slice(0, 3).map((blog) => (
                  <ListGroup.Item action href={`/blog/${blog.id}`} key={blog.id}>
                     {blog.title}
                  </ListGroup.Item>
               ))}
            </ListGroup>
         </div>
      </div>
   );
}

export default Blogs;
