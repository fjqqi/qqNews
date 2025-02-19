import React from "react";

const Chevron = ({ arrow, size }) => {
    return (
        <>
            {arrow === "right" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 25"
                    strokeWidth="1"
                    stroke="currentColor"
                    className={`size-${size}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            )}

            {arrow === "left" && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    className={`size-${size}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
            )}
        </>
    );
};

export default Chevron;
