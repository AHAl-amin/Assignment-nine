import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import 'animate.css/animate.min.css';

import Banner from "./Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Estate from "./Estate/Estate";
import { Helmet } from "react-helmet-async";



const Home = () => {
    const EstateData = useLoaderData();
    console.log(EstateData)
    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    return (
        <div>
            <Helmet>
                <title>DreamHomeHub/home</title>
            </Helmet>
            <Banner></Banner>
            <div className="mb-10 ">
                <h2 className="text-4xl font-bold text-center py-6"> Estate</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {
                        EstateData.map(data => <Estate key={data.id} data={data}></Estate>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;