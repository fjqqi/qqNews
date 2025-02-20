import React from "react";

const AuthLayout = ({ children }) => {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-8 rounded-md bg-base-200">{children}</div>
            </div>
        </>
    )
};

export default AuthLayout;
