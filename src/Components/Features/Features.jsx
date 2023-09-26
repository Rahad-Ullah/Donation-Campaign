import { useEffect, useState } from "react";
import Feature from "../Feature/Feature";

const Features = () => {
    const [features, setFeatures] = useState([])

    useEffect(() => {
        fetch('features.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, [])
 
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {
                features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
            }
        </div>
    );
};

export default Features;