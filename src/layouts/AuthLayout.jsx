import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <h2>This is Auth Layout</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;