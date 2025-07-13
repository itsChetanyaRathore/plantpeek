import { useNavigate } from "react-router-dom";

const SearchFilterBar = ({ searchQuery, setSearchQuery, filter, setFilter }) => {
    const navigate = useNavigate();

    return (
        <div className="py-2 mb-4">
            <button
                onClick={() => navigate("/")}
                className="text-green-800 font-bold flex items-center mb-4"
            >
                <span className="text-2xl mr-2">←</span> Back to Homepage
            </button>
            <div className="flex flex-col sm:flex-row items-center justify-between mx-10 gap-20">
                <input
                    type="text"
                    placeholder="Search plants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input rounded-3xl w-full focus:outline-none focus:ring-0 focus:border-green-800"
                />
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select rounded-3xl w-1/2 focus:outline-none focus:ring-0 focus:border-green-800"
                >
                    <option value="all">All Categories</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="shrubs">Shrubs</option>
                    <option value="flowers">Flowers</option>
                </select>
            </div>
        </div>
    );
};

export default SearchFilterBar;
