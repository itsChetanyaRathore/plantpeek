import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PlantDetailPage = () => {
    const { name } = useParams(); // plant name from URL
    const navigate = useNavigate();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlant = async () => {
            try {
                const res = await axios.get("https://kapiva.dev/plant-peek/plants-data.php");

                const plantArrays = res.data.categories.map((cat) =>
                    cat.plants.map((p) => ({
                        ...p,
                        category: cat.category,
                    }))
                );

                const allPlants = plantArrays.reduce((acc, curr) => acc.concat(curr), []);

                const selectedPlant = allPlants.find((p) => p.name === name);

                setPlant(selectedPlant);
                setLoading(false);
            } catch (err) {
                console.error("Error loading plant:", err);
                setLoading(false);
            }
        };

        fetchPlant();
    }, [name]);

    if (loading) return <div className="text-center mt-20">Loading...</div>;

    if (!plant) {
        return (
            <div className="text-center mt-20 text-red-600">
                Plant not found
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <button onClick={() => navigate(-1)} className="mb-6 text-green-700 hover:underline font-semibold">
                ← Back to categories
            </button>

            <div className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow">
                <div className="flex flex-row gap-10">
                    <img
                        src={plant.image}
                        alt={plant.name}
                        className="w-full md:w-1/2 h-96 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-green-800 mb-2">{plant.name}</h1>
                        <p className="text-sm italic text-gray-500 mb-4">Category: {plant.category}</p>

                        <ul className="space-y-2 text-sm text-gray-800">
                            <li><strong>Scientific Name:</strong> {plant.scientific_name}</li>
                            <li><strong>Height:</strong> {plant.height}</li>
                            <li><strong>Temperature:</strong> {plant.temperature}</li>
                            <li><strong>Water:</strong> {plant.water}</li>
                            <li><strong>Sunlight:</strong> {plant.sunlight}</li>
                            <li><strong>Soil:</strong> {plant.soil}</li>
                            <li><strong>Family:</strong> {plant.family}</li>
                            <li><strong>Plant Type:</strong> {plant.plant_type}</li>
                        </ul>
                    </div>
                </div>
                <div><p className="text-gray-700 mt-4">{plant.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PlantDetailPage;
