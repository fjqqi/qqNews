import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <DashboardLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className=" w-full bg-black">
                
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <InformationCircleIcon className="size-8"/>
                        </div>
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <AdjustmentsVerticalIcon className="size-8"/>
                        </div>
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>


                </div>
            </div>
        </DashboardLayout>
    );
}
