import React from "react";
import Header from "../components/Header";
import Specialitymeanu from "../components/Specialitymeanu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const home = () => {
    return(
        <div>
             <Header/>
             <Specialitymeanu/>
             <TopDoctors/>
             <Banner/>
        </div>
    )
}
export default home 