import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Outdoor = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/categories?type=outdoor");
    }, [navigate]);

    return null;
};

export default Outdoor;
