import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, router, useForm } from "@inertiajs/react";

export default function Create({ categories, users }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        image: null, // Use `null` for file inputs
        category_id: '',
        user_id: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/posts', data);
    };

    return (
        <DashboardLayout>
            <Head title="Create News" />
            <h2 className="text-xl font-bold mb-4">Add New News</h2>
            <div className="w-full bg-base-100 rounded-md">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl py-4 px-8 bg-base-100"
                >
                    {/* Title */}
                    <div className="mb-4">
                        <label className="label">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="input input-bordered w-full"
                            required
                        />
                        {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                        <label className="label">Content</label>
                        <textarea
                            name="content"
                            value={data.content}
                            onChange={(e) => setData('content', e.target.value)}
                            className="textarea textarea-bordered w-full"
                            required
                        />
                        {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label className="label">Upload Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={(e) => setData('image', e.target.files[0])} // Use `e.target.files[0]` for file inputs
                            className="file-input file-input-bordered w-full"
                        />
                        {errors.image && <div className="text-red-500 text-sm">{errors.image}</div>}
                    </div>

                    {/* Category Selection */}
                    <div className="mb-4">
                        <label className="label">Category</label>
                        <select
                            name="category_id"
                            value={data.category_id}
                            onChange={(e) => setData('category_id', e.target.value)}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.category_id && <div className="text-red-500 text-sm">{errors.category_id}</div>}
                    </div>

                    {/* User Selection */}
                    <div className="mb-4">
                        <label className="label">User</label>
                        <select
                            name="user_id"
                            value={data.user_id}
                            onChange={(e) => setData('user_id', e.target.value)}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="" disabled>
                                Select a user
                            </option>
                            {users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        {errors.user_id && <div className="text-red-500 text-sm">{errors.user_id}</div>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full" disabled={processing}>
                        {processing ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </DashboardLayout>
    );
}