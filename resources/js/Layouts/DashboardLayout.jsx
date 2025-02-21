import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import { Navbar } from "@/Components/Dashboard/Navbar";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Sidebar } from "@/Components/Dashboard/Sidebar";
import { Alert } from "@/Components/Alert";


export default function DashboardLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const { flash } = usePage().props;


    const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

return (
    <div className="flex min-h-screen">
        {/* Sidebar */}
       <Sidebar/>

        {/* Main content */}
        <div className="flex-1 flex flex-col bg-base-200">
            {/* Navbar */}
            <Navbar user={user}/>

            {/* Page content */}
            <div className="flex-1 p-5">
            {flash.success && (
              <>
                    <div className="pb-2">
                    <Alert type='success' message={flash.success}/>
                    </div>
              </>
        )}
                {children}
            </div>
        </div>
    </div>
);
}
