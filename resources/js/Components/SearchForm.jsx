import { MagnifyingGlassIcon, NewspaperIcon } from "@heroicons/react/24/solid";
import React from "react";

export const SearchForm = ({ placeholder, value, onSubmit, onChange }) => {
    return (
        <form className="flex items-center max-w-xl shrink-0" onSubmit={onSubmit}>
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <NewspaperIcon className="size-5" />
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={placeholder || "Search"}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <button
                type="submit"
                className="p-3 ms-2 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                <MagnifyingGlassIcon className="size-4" />
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
};
