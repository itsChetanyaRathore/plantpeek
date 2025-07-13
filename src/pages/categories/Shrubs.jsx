import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shrubs = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/categories?type=shrubs");
    }, [navigate]);

    return null;
};

export default Shrubs;
