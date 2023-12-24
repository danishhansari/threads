import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("user");
    if (!token) {
      return navigate("/login");
    }
  }, []);
  return <div>{element}</div>;
};

export default ProtectedRoute;
