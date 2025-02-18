import { Link } from '@inertiajs/react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="absolute w-72 md:hidden min-h-screen p-4 bg-base-200 shadow-lg">
                    <ul className="menu ">
                        <li>
                            <Link href="#" className="text-base-content">
                                <span className="font-semibold">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-base-content">
                                <span className="font-semibold">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-base-content">
                                <span className="font-semibold">Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-base-content">
                                <span className="font-semibold">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
  )
}

export default Sidebar