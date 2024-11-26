import React from 'react';

function Filter({ title, rate, setTitle, setRate }) {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Filter by title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Filter by rating"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
            />
        </div>
    );
}

export default Filter;
