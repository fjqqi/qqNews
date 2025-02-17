import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <div className="text-black">
            <Link
                {...props}
                className={
                    "text-black" +
                    (active
                        ? "border-indigo-400  focus:border-indigo-700"
                        : "border-transparent hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700") +
                    className
                }
            >
                {children}
            </Link>
        </div>
    );
}
