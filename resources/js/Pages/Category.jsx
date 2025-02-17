import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Category = ({ news, category, categories }) => {
    console.log(news);
    const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
    return (
        <GuestLayout categories={categories}>
            <Head title={capitalizeFirstLetter(category.name)} />
            <div>
                <p>Newest {category.name} News</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    <div class="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="https://via.placeholder.com/640x480.png/0000bb?text=news+officia"
                                alt="News Image"
                                class="w-full h-48 object-cover"
                            />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Ut ea accusantium eum incidunt est est
                                voluptatem.
                            </h2>
                            <p>
                                Doloribus reiciendis nobis accusamus.
                                Exercitation… autem rem et. Aperiam mollitia
                                nemo et quo quis.
                            </p>
                            <div class="card-actions justify-end">
                                <div class="badge badge-primary">
                                    Category 1
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </GuestLayout>
    );
};

export default Category;
