import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Indoor = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/categories?type=indoor");
    }, [navigate]);

    return null;
};

export default Indoor;
