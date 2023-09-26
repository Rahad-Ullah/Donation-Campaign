
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Utility/localStorage";


const Statistics = () => {
    const features = useLoaderData()
    const [donationDone, setDonationDone] = useState(4)
    console.log(donationDone)

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
            setDonationDone(completedDonations.length)
        }
    }, [])

    
     const data = [
        ["Donate", "Per Order"],
        ["Your Donation", donationDone],
        ["Total Donation", (12 - donationDone)]
      ];
      
       const options = {
        title: "",
      };

    return (
        <div>
            <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
            />
        </div>
    );
};

export default Statistics;