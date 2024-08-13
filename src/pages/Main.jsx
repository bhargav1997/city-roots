import RoutePage from "../components/RoutePage";
import Sidebar from "./Sidebar";

function Main() {
   return (
      <div className='main-container d-flex'>
         <div className='w-25 sidebar'>
            <Sidebar isOpen={true} />
         </div>
         <div className='body-container w-75'>
            <RoutePage />
         </div>
      </div>
   );
}

export default Main;
