import { useLoaderData, useParams } from "react-router-dom";

const FeatureDetails = () => {
    const features = useLoaderData()
    const {id} = useParams()
    const feature = features.find(feature => feature.id == id)
    const {title, image, description, amount, text_color} = feature
    return (
        <div>
            <div className="mb-14 relative">
                <img src={image} alt="" className="w-full rounded-none"/>
                <div className="p-8 bg-midnight bg-opacity-30 absolute bottom-0 w-full">
                    <button className="btn btn-error text-white border-none" style={{backgroundColor: text_color}}>Donate ${amount}</button>
                </div>
            </div>
            <h1 className="text-black text-4xl font-bold mb-6">{title}</h1>
            <p className="pb-16">{description}</p>
        </div>
    );
};

export default FeatureDetails;