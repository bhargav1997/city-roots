import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CouponImg from "../assets/images/coupon.jpg";

function DailyTasks() {
   const tasks = [
      {
         id: 1,
         storeName: "Cafe Delight",
         imageUrl: `${CouponImg}`,
         openingHours: "8:00 AM - 10:00 PM",
         couponsAvailable: true,
         points: 50,
      },
      {
         id: 2,
         storeName: "Book Haven",
         imageUrl: `${CouponImg}`,
         openingHours: "9:00 AM - 8:00 PM",
         couponsAvailable: false,
         points: 30,
      },
      {
         id: 3,
         storeName: "Fitness Hub",
         imageUrl: `${CouponImg}`,
         openingHours: "6:00 AM - 10:00 PM",
         couponsAvailable: true,
         points: 100,
      },
   ];

   return (
      <div className='tasks-container'>
         <h2 className='tasks-title fw-bold'>{"Daily Tasks"}</h2>
         <div className='tasks-grid'>
            {tasks.map((task) => (
               <Card key={task.id} className='task-card'>
                  <Card.Img variant='top' src={task.imageUrl} alt={task.storeName} style={{ height: "200px" }} className='img-fluid' />
                  <Card.Body>
                     <Card.Title>{task.storeName}</Card.Title>
                     <Card.Text>
                        <strong>Opening Hours:</strong> {task.openingHours} <br />
                        <strong>Points:</strong> {task.points} <br />
                        {task.couponsAvailable ? (
                           <Button variant='success' href={`/shops`}>
                              Coupons Available
                           </Button>
                        ) : (
                           <Button variant='secondary' disabled>
                              No Coupons
                           </Button>
                        )}
                     </Card.Text>
                  </Card.Body>
               </Card>
            ))}
         </div>
      </div>
   );
}

export default DailyTasks;
