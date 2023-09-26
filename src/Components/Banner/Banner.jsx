import banner_img from "../../assets/Banner_bg.png"
const Banner = () => {
    return (
        <div className={`bg-cover bg-center bg-no-repeat`} style={{ backgroundImage:`url(${banner_img})` }}>
            <div className={`flex flex-col items-center justify-center gap-10 h-72 bg-white  bg-opacity-95`}>
                <h2 className="text-4xl md:text-5xl font-bold text-center text-black">I Grow By Helping People In Need</h2>
                <div className="form-control w-full md:w-2/5">
                    <div className="input-group">
                        <input type="text" placeholder="Search here...." className="input input-bordered w-full" />
                        <button className="btn btn-error text-white bg-red">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;