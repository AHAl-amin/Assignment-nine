import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { Helmet } from "react-helmet-async";


const EstateDettails = () => {
    const EstateData = useLoaderData();
    const { id } = useParams();
    const Estate = EstateData.find(Estate => Estate.id == id)
    console.log(id, Estate);
    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = Estate;

    return (

        <div>
              <Helmet>
                <title>DreamHomeHub/EstateDettails</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="flex-1">
                        <img className="w-full h-full" src={image} />
                    </div>
                    <div className="flex-1">

                        <div className="card-body space-y-3">
                            <h2 className="card-title font-bold md:font-extrabold  text-3xl md:text-5xl">{segment_name}</h2>
                            <h2 className="card-title font-bold text-2xl md:text-3xl">{estate_title}</h2>
                            <p className="text-xl">{description}</p>
                            <div className="text-gray-400 grid grid-cols-2 gap-3">
                                <p><span className="font-bold">price</span> :{price}</p>
                                <p><span className="font-bold">status</span> :{status}</p>
                                <p><span className="font-bold ">area</span> :{area}</p>
                                <p className="flex items-center gap-2 text-[14px]"><span className="font-bold  "><CiLocationOn /></span> {location}</p>
                            </div>
                          <div>
                                <p ><span className="font-bold"> facilities :</span> <span className="text-gray-400">
                                    {facilities[0]} ,{facilities[1]},{facilities[2]},{facilities[3]}
                                </span>
                                </p>
                             

                            </div>
                            <div>
                                <button className="btn bg-blue-500">Buy now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDettails;