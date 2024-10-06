import { Link } from "react-router-dom";


const Estate = ({ data }) => {
    const { image, estate_title, segment_name, description, price, status, area, location, facilities, id } = data;


    const EstateHandleClick = () => {
        console.log('hlw')

    }
    return (
        <div >
            <div className="card card-compact  bg-base-100 shadow-xl h-full">

                <figure><img className="h-[200px w-full]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{segment_name}</h2>
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="text-xl">{description}</p>
                    <div className="text-gray-400 grid grid-cols-2 gap-3">
                        <p><span className="font-bold">price</span> :{price}</p>
                        <p><span className="font-bold">status</span> :{status}</p>
                        <p><span className="font-bold">area</span> :{area}</p>
                        <p><span className="font-bold">location</span> :{location}</p>
                    </div>
                    <div>
                        <p ><span className="font-bold"> facilities :</span> <span className="text-gray-400">
                            {facilities[0]} ,{facilities[1]},{facilities[2]},{facilities[3]}
                        </span></p>
                       

                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/data/${id}`}>
                            <button onClick={EstateHandleClick} className="btn btn-primary" >View Property</button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Estate;