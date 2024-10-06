

const Banner = () => {
    return (

        <div className="carousel w-full my-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/1LbyMyF/pexels-pixabay-210617.jpg" style={{width:"100%" ,height:"100vh"}} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <p className="text-2xl text-orange-600 font-bold lg:text-5xl lg:font-extrabold animate__animated animate__backInRight">Our Residential</p>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/k39sp5q/pexels-binyamin-mellish-1396122.jpg" style={{width:"100%" ,height:"100vh"}}/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <p className="text-2xl font-bold lg:text-5xl text-orange-500 lg:font-extrabold " 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">Our Residential</p>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jV276QQ/pexels-pixabay-259588.jpg"style={{width:"100%" ,height:"100vh"}}/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <p className="text-2xl text-white font-bold lg:text-5xl lg:font-extrabold "data-aos="fade-up"
                    data-aos-duration="3000">Our Residential</p>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/4g0jtXd/pexels-terry-magallanes-2635038.jpg" style={{width:"100%" ,height:"100vh"}} />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <p className="text-2xl font-bold lg:text-5xl text-green-200 lg:font-extrabold "
                    data-aos="fade-up"
                    data-aos-duration="3000">Our Residential</p>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>

  

    );
};

export default Banner;