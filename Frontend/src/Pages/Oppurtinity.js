import React, { useEffect, useState } from 'react';
import "../Styles/Volunteering.css";

function Volunteers({ volunteersEndpoint }) {
    const [volunteers, setVolunteers] = useState([]);
    const [filteredVolunteers, setFilteredVolunteers] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [filterPlace, setFilterPlace] = useState('');
    const [filterType, setFilterType] = useState('');

    useEffect(() => {
        fetchVolunteers(volunteersEndpoint);
    }, [volunteersEndpoint]);

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
                applyFilters(data);
            })
            .catch(err => console.error('Error fetching volunteers:', err));
    };

    useEffect(() => {
        applyFilters(volunteers);
    }, [volunteers, filterName, filterCategory, filterType, filterPlace]);

    function applyFilters(volunteers) {
        let filtered = volunteers.filter(volunteer => {
            if (filterName && !volunteer.name.toLowerCase().includes(filterName.toLowerCase())) {
                return false;
            }
            if (filterCategory && volunteer.category !== filterCategory) {
                return false;
            }
            if (filterPlace && volunteer.place !== filterPlace) {
                return false;
            }
            if (filterType && volunteer.type !== filterType) {
                return false;
            }
            return true;
        });
        setFilteredVolunteers(filtered);
    };

    function clearFilters() {
        setFilterName('');
        setFilterCategory('');
        setFilterType('');
        setFilterPlace('');
    };

    return (
        <div className="volunteers-container">
            <h1 className="volunteers-title">Start Your Service Story</h1>

            {/* Filters */}
            <div className="volunteers-filters">
                <div className="filter-item">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={filterName} 
                        onChange={e => setFilterName(e.target.value)} 
                        className="filter-input" 
                    />
                </div>
                <div className="filter-item">
                    <label>Category:</label>
                    <select 
                        value={filterCategory} 
                        onChange={e => setFilterCategory(e.target.value)} 
                        className="filter-input"
                    >
                        <option value="">All Categories</option>
                        <option value="education">education</option>
                        <option value="health">health</option>
                        <option value="disaster">disaster</option>
                    </select>
                </div>
                <div className="filter-item">
                    <label>Place:</label>
                    <input 
                        type="text" 
                        value={filterPlace} 
                        onChange={e => setFilterPlace(e.target.value)} 
                        className="filter-input" 
                    />
                </div>
                <button 
                    onClick={clearFilters} 
                    className="clear-filters-button"
                >
                    Clear Filters
                </button>
            </div>

            {/* Volunteers Grid */}
            <div className="volunteers-grid">
                {filteredVolunteers.map((volunteer, index) => (
                    <div key={index} className="volunteer-card">
                        <div className="volunteer-card-content">
                            <img
                                src={volunteer.Image_URL}
                                alt="volunteer"
                                className="volunteer-image"
                            />
                            <div className="volunteer-details">
                                <h2 className="volunteer-name">{volunteer.name}</h2>
                                <p className="volunteer-place">{volunteer.place}</p> 
                                <p className="volunteer-date">{volunteer.date}</p>
                                <p className="volunteer-category">{volunteer.category}</p>
                                {/* <p className="volunteer-type">{volunteer.type}</p> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Volunteers;
