import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../Utility/localStorage";

const FeatureDetails = () => {
    const features = useLoaderData()
    const {id} = useParams()
    const feature = features.find(feature => feature.id == id)
    const {title, image, description, amount, text_color} = feature

    const handleDonation = () => {
        saveDonation(id)
        toast.success('Donation Successful')
    }
     
    return (
        <div>
            <div className="mb-14 relative">
                <img src={image} alt="" className="w-full rounded-none"/>
                <div className="p-4 md:p-8 bg-midnight bg-opacity-30 absolute bottom-0 w-full">
                    <button onClick={handleDonation} className="btn btn-sm md:btn-md btn-error text-white border-none" style={{backgroundColor: text_color}}>Donate ${amount}</button>
                </div>
                <ToastContainer />
            </div>
            <h1 className="text-black text-4xl font-bold mb-6">{title}</h1>
            <p className="pb-16">{description}</p>
        </div>
    );
};

export default FeatureDetails;