import Modal from "@/Components/Dashboard/Modal";
import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"; // Import icons
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Posts({ news }) {
    // Handle edit action
    const handleEdit = (id) => {
        console.log("Edit news with ID:", id);
        // Add your edit logic here (e.g., redirect to edit page)
    };



    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState('')

    // Handle delete action
    const handleDelete = (id) => {
        setIsDeleteModalOpen(true); 
        setSelectedId(id); 
    };

    const handleClose = () => {
        setIsDeleteModalOpen(false);
    }

    const handleDeleteActionClick = () => {
        router.delete(`/posts/delete/${selectedId}`, {
            onSuccess: () => {
                setIsDeleteModalOpen(false); // Close the modal on success
                setSelectedId(''); // Clear the selected ID
            },
        });
    };

    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
        
         <Head title="Posts" />
           
            <Modal
                title="Delete"
                isOpen={isDeleteModalOpen}
                onClose={handleClose}
                actionText="Delete"
                content="Are you sure want to delete this record?"
                onAction={handleDeleteActionClick}

            />

            


            <div className="w-full bg-base-100 rounded-md p-4">
                <div className="overflow-x-auto border-base-200  bg-gray-50 rounded-md">
                    <table className="table">
                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Category</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {news.data.map((item, i) => (
                                <tr key={item.id}>
                                    <td>{i+1}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        {item.content.length > 50
                                            ? `${item.content.substring(
                                                  0,
                                                  50
                                              )}...` // Truncate content if too long
                                            : item.content}
                                    </td>
                                    <td>{item.category.name}</td>
                                    <td>
                                        {new Date(
                                            item.created_at
                                        ).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <div className="flex space-x-2">
                                            {/* Edit Button */}
                                            <button
                                                onClick={() =>
                                                    handleEdit(item.id)
                                                }
                                                className="text-blue-500 hover:text-blue-700"
                                                title="Edit"
                                            >
                                                <PencilIcon className="h-5 w-5" />
                                            </button>
                                            {/* Delete Button */}
                                            <button
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                                className="text-red-500 hover:text-red-700"
                                                title="Delete"
                                            >
                                                <TrashIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-5">
                    <Pagination links={news.links} />
                </div>
            </div>
        </DashboardLayout>
    );
}
