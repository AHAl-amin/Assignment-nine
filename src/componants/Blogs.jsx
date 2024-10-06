

import React from 'react';
import { Helmet } from 'react-helmet-async';
import SwiperCarusel from './SwiperCarusel/SwiperCarusel';

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>DreamHomeHub/Blog</title>
            </Helmet>
            <h2 className='text-2xl lg:text-5xl font-bold text-center ' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">Residantial Blogs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-10 mx-2'>

                <div className="card bg-base-100 shadow-xl " data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <figure><img src="https://i.ibb.co/yR5zck1/deborah-cortelazzi-g-REqu-CUXQLI-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body" >
                        <h2 className="card-title">student housing</h2>
                        <p>Residential is an adjective that expresses a relationship with homes, apartments, or any place where people live. You might refer to a residential building, a residential neighborhood, or a residential block.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure><img src="https://i.ibb.co/jgtsRVn/istockphoto-1297933338-1024x1024.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Single-family homes </h2>
                        <p>Residential is an adjective that expresses a relationship with homes, apartments, or any place where people live. You might refer to a residential building, a residential neighborhood, or a residential block.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <figure><img src="https://i.ibb.co/BtDF6gG/istockphoto-1449212413-170667a.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">townhouses</h2>
                        <p>Residential is an adjective that expresses a relationship with homes, apartments, or any place where people live. You might refer to a residential building, a residential neighborhood, or a residential block.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <figure><img src="https://i.ibb.co/hyy7bHT/download-23.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> apartments</h2>
                        <p>Residential is an adjective that expresses a relationship with homes, apartments, or any place where people live. You might refer to a residential building, a residential neighborhood, or a residential block.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" data-aos="fade-up"
                    data-aos-duration="3000">
                    <figure><img src="https://i.ibb.co/tBhVGtf/young-kids-trick-treating-halloween-53876-49106.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> senior living communities</h2>
                        <p>Residential is an adjective that expresses a relationship with homes, apartments, or any place where people live. You might refer to a residential building, a residential neighborhood, or a residential block.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <figure><img src="https://i.ibb.co/HFTBqzJ/0-z6-Tdy-Uyjf-DTSg6yc.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">vacation rentals</h2>
                        <p>Residential is an adjective that expresses a relationship with homes, apartments, or any place where people live. You might refer to a residential building, a residential neighborhood, or a residential block.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Show Dettails</button>
                        </div>
                    </div>
                </div>

            </div>
            <SwiperCarusel></SwiperCarusel>
        </div>

    );
};

export default Blogs;