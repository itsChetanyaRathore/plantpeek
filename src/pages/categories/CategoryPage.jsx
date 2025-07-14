import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PlantCard from "../../components/PlantCard";
import SearchFilterBar from "../../components/SearchFilterBar";

const CategoryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const initialFilter = params.get("type") || "all";

    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState(initialFilter);
    const [plantData, setPlantData] = useState([]);

    useEffect(() => {
        axios
            .get("https://kapiva.dev/plant-peek/plants-data.php")
            .then((response) => {
                const apiData = response.data;

                const allPlants = apiData.categories
                    .map((cat) =>
                        cat.plants.map((plant) => ({
                            ...plant,
                            title: plant.name,
                            category: cat.category.toLowerCase(),
                        }))
                    )
                    .reduce((acc, curr) => acc.concat(curr), []);

                setPlantData(allPlants);
            })
            .catch((error) => {
                console.error("Error fetching plant data:", error);
            });
    }, []);

    const filteredPlants = plantData.filter((plant) => {
        const matchesFilter = filter === "all" || plant.category === filter;
        const matchesSearch = plant.title?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-10">
            <div className="w-full max-w-6xl">
                <SearchFilterBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    filter={filter}
                    setFilter={setFilter}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-8">
                    {filteredPlants.length > 0 ? (
                        filteredPlants.map((plant, index) => (
                            <PlantCard
                                key={index}
                                title={plant.name}
                                image={plant.image}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-600 col-span-full">
                            No plants found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
