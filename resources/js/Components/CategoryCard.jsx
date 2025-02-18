import { Link } from "@inertiajs/react";
import React from "react";
import { motion } from "motion/react"

const isCategories = (categories) => {
    const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

    return categories.map((data, i) => {
        return (
            <motion.div
            whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
            >
                <Link
                    href={route("category.show", {
                        id: data.id,
                    })}
                >
                    <div className="card bg-base-100 w-64 shadow-xl" key={i}>
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="p-4">
                            <h2 className="card-title">
                                {capitalizeFirstLetter(data.name)}
                            </h2>
                            <p className="mt-2">
                                If a dog chews shoes whose shoes does he choose?
                            </p>
                            <div className="card-actions mt-5 justify-end">
                                {/* <Link className="btn btn-primary">See</Link> */}
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    });
};

export const CategoryCard = ({ categories }) => {
    // Check if news array is empty
    return categories && categories.length > 0 ? (
        isCategories(categories)
    ) : (
        <div>No Categories</div>
    );
};
