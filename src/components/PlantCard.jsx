import { useNavigate } from "react-router-dom";

const PlantCard = ({ title, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/plant/${title}`);
    };

    return (
        <div
            onClick={handleClick}
            className="w-full max-w-xs bg-white shadow-md rounded-3xl h-96 px-4 hover:shadow-xl transition duration-300 cursor-pointer"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <div className="flex justify-between items-center">
                <p className="text-md  p-2 mb-2 text-green-900 font-serif font-bold">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default PlantCard;
