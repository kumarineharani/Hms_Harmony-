import { createContext, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets.js"; // Ensure the path is correct

// Create the context
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [doctorList, setDoctorList] = useState(doctors); // Store doctors in state

    console.log("Doctors in context:", doctorList); // Debugging

    const value = {
        doctors: doctorList, // Ensure doctors are passed in value
    };

    return (
        <AppContext.Provider value={value}>  {/* Ensure 'value' is passed */}
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
