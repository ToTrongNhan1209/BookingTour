import React, { useState } from 'react';

// Interface cho dữ liệu du thuyền
interface CruiseData {
    id: number;
    name: string;
    location: string;
    description: string;
    price: string;
    image: string;
    alt: string;
    launchYear: string;
    material: string;
    rooms: number;
    rating: number;
    reviewCount: number;
    amenities: string[];
}

const Pagination: React.FC = () => {


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 73; // Tổng số du thuyền như trong hình


    // Pagination logic
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };



    return (

        <div className="pagination-container">
        <div className="pagination-info">
            <span>Đang xem: {startItem} của {totalItems}</span>
        </div>
        <div className="pagination-controls">
            <button
                className="pagination-btn prev-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Trước
            </button>

            <div className="pagination-numbers">
                {currentPage > 3 && (
                    <>
                        <button
                            className="pagination-number"
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </button>
                        {currentPage > 4 && <span className="pagination-ellipsis">...</span>}
                    </>
                )}

                {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                    const page = Math.max(1, currentPage - 1) + i;
                    if (page > totalPages) return null;
                    return (
                        <button
                            key={page}
                            className={`pagination-number ${page === currentPage ? 'active' : ''}`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    );
                })}

                {currentPage < totalPages - 2 && (
                    <>
                        {currentPage < totalPages - 3 && <span className="pagination-ellipsis">...</span>}
                        <button
                            className="pagination-number"
                            onClick={() => handlePageChange(totalPages)}
                        >
                            {totalPages}
                        </button>
                    </>
                )}
            </div>

            <button
                className="pagination-btn next-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Tiếp
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    </div>          



    );
};

export default Pagination;
