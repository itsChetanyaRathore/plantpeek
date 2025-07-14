import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Flowers = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/categories?type=flowering");
    }, [navigate]);

    return null;
};

export default Flowers;
