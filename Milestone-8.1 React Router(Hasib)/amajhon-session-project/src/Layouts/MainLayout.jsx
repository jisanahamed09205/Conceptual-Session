import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Spinner from "../Conponents/Spinner/Spinner";

const MainLayout = () => {

    const navigation = useNavigation()
    // console.log(navigation.state === 'loading');

    const isLoadingData = navigation.state === 'loading'
    console.log(isLoadingData);

    return (
        <div>
            <section className=" flex justify-between px-10 shadow-md py-7">
                <div>
                    <h2 className=" text-xl font-bold">Amaji</h2>
                </div>
                <nav>
                    <ul className=" flex gap-5">
                        
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500 underline" : ""}>Home</NavLink>
                        <NavLink to="/products" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500 underline" : ""}>Products</NavLink>
                        <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-blue-500 underline " : ""}>Dashboard</NavLink>                        
                    </ul>
                </nav>
            </section>
            

                {isLoadingData ? (<Spinner></Spinner>) :( <div className=" min-h-screen">
                        <Outlet></Outlet>
                    </div>
                    )}


            <Footer></Footer>
        </div>
    );
};

export default MainLayout;