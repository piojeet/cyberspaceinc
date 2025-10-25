// TestPage.jsx
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} username
 * @property {string} phone
 * @property {string} image
 * @property {Object} address
 * @property {string} address.city
 * @property {string} address.state
 */

const ITEMS_PER_PAGE = 12; // Har page pe 12 users

function TestPage() {
    // ===================================================================
    // State
    // ===================================================================
    /** @type {User[]} */
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // ===================================================================
    // 1. Fetch all users once
    // ===================================================================
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://dummyjson.com/users?limit=0");
                setUsers(response.data.users);
                setLoading(false);
            } catch (err) {
                console.error("API Error:", err);
                setError("Failed to load users.");
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    // ===================================================================
    // 2. Filter users by email
    // ===================================================================
    const filteredUsers = useMemo(() => {
        if (!search.trim()) return users;
        const query = search.toLowerCase();
        return users.filter((user) =>
            user.email.toLowerCase().includes(query)
        );
    }, [users, search]);

    // ===================================================================
    // 3. Pagination Logic
    // ===================================================================
    const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentUsers = filteredUsers.slice(startIndex, endIndex);

    // Reset to page 1 when search changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    // ===================================================================
    // 4. Pagination Controls
    // ===================================================================
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const renderPagination = () => {
        if (totalPages <= 1) return null;

        const pages = [];
        const maxVisible = 5;
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);

        if (endPage - startPage + 1 < maxVisible) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        // First Page
        if (startPage > 1) {
            pages.push(
                <button
                    key={1}
                    onClick={() => goToPage(1)}
                    className="px-3 py-2 rounded-lg border hover:bg-gray-100"
                >
                    1
                </button>
            );
            if (startPage > 2) {
                pages.push(<span key="start-ellipsis" className="px-2">...</span>);
            }
        }

        // Visible Pages
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`px-3 py-2 rounded-lg border ${i === currentPage
                            ? "bg-indigo-600 text-white border-indigo-600"
                            : "hover:bg-gray-100"
                        }`}
                >
                    {i}
                </button>
            );
        }

        // Last Page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(<span key="end-ellipsis" className="px-2">...</span>);
            }
            pages.push(
                <button
                    key={totalPages}
                    onClick={() => goToPage(totalPages)}
                    className="px-3 py-2 rounded-lg border hover:bg-gray-100"
                >
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    // ===================================================================
    // 5. Render UI
    // ===================================================================
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 pt-24">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                        User Email Search
                    </h1>
                    <p className="text-gray-600">
                        Search by email • {ITEMS_PER_PAGE} users per page
                    </p>
                </header>

                {/* Search */}
                <div className="mb-8 max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search by email..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-5 py-3 text-lg border border-gray-300 rounded-xl 
                       shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 
                       focus:border-transparent transition-all"
                        autoFocus
                    />
                </div>

                {/* Loading */}
                {loading && (
                    <div className="text-center py-16">
                        <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-indigo-500 border-t-transparent"></div>
                        <p className="mt-4 text-gray-600">Loading users...</p>
                    </div>
                )}

                {/* Error */}
                {error && !loading && (
                    <div className="text-center py-16 text-red-600 font-medium">
                        {error}
                    </div>
                )}

                {/* Results Info */}
                {!loading && !error && (
                    <div className="text-center mb-6 text-gray-700">
                        <strong>{filteredUsers.length}</strong> user{filteredUsers.length !== 1 ? "s" : ""} found
                        {totalPages > 1 && (
                            <span className="ml-2 text-sm">
                                • Page {currentPage} of {totalPages}
                            </span>
                        )}
                    </div>
                )}

                {/* User Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
                    {currentUsers.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl 
                         transition-all duration-300 overflow-hidden 
                         flex flex-col h-full group"
                        >
                            <div className="p-4 flex justify-center">
                                <img
                                    src={user.image}
                                    alt={user.firstName}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100 
                             group-hover:scale-110 transition-transform"
                                />
                            </div>

                            <div className="p-4 pt-2 flex-1">
                                <h3 className="font-bold text-lg text-gray-800 truncate">
                                    {user.firstName} {user.lastName}
                                </h3>
                                <p className="text-sm text-indigo-600">@{user.username}</p>
                                <a
                                    href={`mailto:${user.email}`}
                                    className="mt-2 block text-blue-600 hover:text-blue-800 underline text-sm break-all"
                                >
                                    {user.email}
                                </a>
                                <p className="mt-2 text-xs text-gray-500">{user.phone}</p>
                                <p className="mt-1 text-xs text-gray-400">
                                    {user.address.city}, {user.address.state}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 flex-wrap pb-8">
                        {/* Previous */}
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg border ${currentPage === 1
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "hover:bg-gray-100"
                                }`}
                        >
                            Previous
                        </button>

                        {/* Page Numbers */}
                        <div className="flex gap-1">{renderPagination()}</div>

                        {/* Next */}
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg border ${currentPage === totalPages
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    : "hover:bg-gray-100"
                                }`}
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* No Results */}
                {!loading && !error && filteredUsers.length === 0 && (
                    <div className="text-center py-16 text-gray-500">
                        <p className="text-lg">
                            No user found for <strong className="text-indigo-600">"{search}"</strong>
                        </p>
                        <p className="mt-2 text-sm">Try a different email</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TestPage;