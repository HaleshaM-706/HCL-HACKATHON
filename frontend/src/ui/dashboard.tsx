import ShiftDetails from "./shiftDetails";
import StaffDeatils from "./staffDetails";

const Dashboard: React.FC = () =>{
  return(
    <div>
      <StaffDeatils/>
      <ShiftDetails/>
    </div>
  )
}

export default Dashboard;