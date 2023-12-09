
import { useState } from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

const Home = () => {
    const [searchKey, setSearchKey] = useState('')
    console.log(searchKey)
    return (
        <div>
            <Banner setSearchKey={setSearchKey}></Banner>
            <Features></Features>
        </div>
    );
};

export default Home;