import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ApiPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to API docs
    navigate("/docs", { replace: true });
  }, [navigate]);

  return null;
}
