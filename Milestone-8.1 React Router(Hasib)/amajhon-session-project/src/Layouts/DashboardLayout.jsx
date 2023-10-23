import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className=" flex">
            <div className="w-[20%] bg-red-200">
                <ul>
                    <li>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/profile'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/editProfile'>Edit Profile</NavLink>
                    </li>
                </ul>
            </div>
            <div className="w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;