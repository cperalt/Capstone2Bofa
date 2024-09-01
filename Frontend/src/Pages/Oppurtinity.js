import React, { useEffect, useState } from 'react';

function Volunteers({ volunteersEndpoint }) {
    const [volunteers, setVolunteers] = useState([]); // Set volunteers to empty initially
    const [filteredVolunteers, setFilteredVolunteers] = useState([]); // Set filtered volunteers to empty initially
    const [filterName, setFilterName] = useState(''); // Set filtered name to empty
    const [filterCategory, setFilterCategory] = useState(''); // Set filtered category to empty
    const [filterPlace, setFilterPlace] = useState(''); // Set filtered place to empty
    const [filterType, setFilterType] = useState(''); // Set filtered type to empty

    // Fetch volunteers initially based on volunteersEndpoint
    useEffect(() => {
        fetchVolunteers(volunteersEndpoint);
    }, [volunteersEndpoint]);

    // Function to fetch volunteers from the server using props to pass endpoints dynamically
    const fetchVolunteers = () => {
        fetch(`http://localhost:8081/volunteering`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setVolunteers(data);
                // Apply filters after fetching new data
                applyFilters(data);
            })
            .catch(err => console.error('Error fetching volunteers:', err));
    };

    // Apply filters based on filterCategory, filterType, and filterPlace
    useEffect(() => {
        applyFilters(volunteers);
    }, [volunteers, filterName, filterCategory, filterType, filterPlace]); // Store changes in array

    // Function to apply filters
    function applyFilters(volunteers) {
        let filtered = volunteers.filter(volunteer => {
            // Filter by name based on if filterName is found in volunteer Name if false return those
            if (filterName && !volunteer.name.toLowerCase().includes(filterName.toLowerCase())) {
                return false;
            }
            // Filter by category if filterCategory is set
            if (filterCategory && volunteer.category !== filterCategory) {
                return false;
            }
            // Filter by place if filterPlace is set
            if (filterPlace && volunteer.place !== filterPlace) {
                return false;
            }
            // Filter by type if filterType is set
            if (filterType && volunteer.type !== filterType) {
                return false;
            }
            return true;
        });
        setFilteredVolunteers(filtered);
    };

    // Clear all filters and set them back to original state
    function clearFilters() {
        setFilterName('');
        setFilterCategory('');
        setFilterType('');
        setFilterPlace('');
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="font-bold text-3xl text-center mb-8">Volunteers</h1>

            {/* Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="flex items-center mb-4 md:mb-0">
                    <label className="text-gray-700">Name:</label>
                    <input 
                        type="text" 
                        value={filterName} 
                        onChange={e => setFilterName(e.target.value)} 
                        className="px-2 py-1 border border-gray-300 rounded-md ml-2" 
                    />
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                    <label className="text-gray-700">Category:</label>
                    <input 
                        type="text" 
                        value={filterCategory} 
                        onChange={e => setFilterCategory(e.target.value)} 
                        className="px-2 py-1 border border-gray-300 rounded-md ml-2" 
                    />
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                    <label className="text-gray-700">Place:</label>
                    <input 
                        type="text" 
                        value={filterPlace} 
                        onChange={e => setFilterPlace(e.target.value)} 
                        className="px-2 py-1 border border-gray-300 rounded-md ml-2" 
                    />
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                    <label className="text-gray-700">Type:</label>
                    {/* <input 
                        type="text" 
                        value={filterType} 
                        onChange={e => setFilterType(e.target.value)} 
                        className="px-2 py-1 border border-gray-300 rounded-md ml-2" 
                    /> */}
                </div>
                <button 
                    onClick={clearFilters} 
                    className="text-gray-700 hover:text-blue-500 focus:outline-none ml-2"
                >
                    Clear Filters
                </button>
            </div>

            {/* Volunteers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-4">
                {filteredVolunteers.map((volunteer, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="border border-gray-200 p-4 rounded-lg overflow-hidden shadow-xl w-64">
                            <img
                                src={volunteer.Image_URL}
                                alt="volunteer"
                                className="h-48 w-full object-contain cursor-pointer"
                            />
                            <div className="p-4">
                                <h2 className="text-xl mb-2 font-semibold">{volunteer.name}</h2>
                                <p className="text-gray-700 mb-2">{volunteer.place}</p> 
                                <p className="text-gray-700 mb-2">{volunteer.date}</p>
                                <p className="text-gray-700">{volunteer.category}</p>
                                {/* <p className="text-gray-700">{volunteer.type}</p> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Volunteers;
