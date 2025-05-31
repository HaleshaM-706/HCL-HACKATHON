import { useEffect } from "react";
import ShiftDetails from "./shiftDetails";
import StaffDeatils from "./staffDetails";
import { SignOn, checkAuth } from "slayer/service-layer";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // handleCheckAuth();
  }, []);

  // const handleCheckAuth = async () => {
  //   const res = await checkAuth();
  //   console.log('fd',res)
  //   if (!res.status) {
  //     navigate("/");
  //   }
  // };
  return (
    <div>
      <StaffDeatils />
      <ShiftDetails />
    </div>
  );
};

export default Dashboard;
