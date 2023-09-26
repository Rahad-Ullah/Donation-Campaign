import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Utility/localStorage";
import SingleDonation from "../SingleDonation/SingleDonation";

const Donation = () => {
    const features = useLoaderData()
    const [donationDone, setDonationDone] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        const storedDonationIds = getStoredDonations()
        if(features.length > 0 ){

            const completedDonations = [];
            for(const id of storedDonationIds){
                const feature = features.find(feature => feature.id === id)
                if(feature){
                    completedDonations.push(feature)
                }
            }
            setDonationDone(completedDonations)
        }
    }, [])
    
    return (
        <div className="pb-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                donationDone.slice(0, dataLength).map((card, index) => <SingleDonation key={index} cardData={card}></SingleDonation>)
            }
            </div>
            <div className={`py-10 flex justify-center  ${dataLength === donationDone.length && 'hidden'}`}>
                <button onClick={() => setDataLength(donationDone.length)}  className="btn btn-error border-none text-white normal-case rounded px-6" style={{backgroundColor: '#009444'}}>See All</button>
            </div>
        </div>
    );
};

export default Donation;