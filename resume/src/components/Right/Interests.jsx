import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Interests = () => {
    //! Querying page data
    const data = useStaticQuery(graphql`
        {
            dataJson {
                interests
            }
        }
    `);

    //! Render Interests UI
    return (
        <div className={interestsContainer}>
            <h1 className={title}>Interests</h1>
            <p className="text-gray-600 text-sm">{data.dataJson.interests}</p>
        </div>
    );
};

//! styles
const { interestsContainer, title } = {
    interestsContainer: "flex flex-col space-y-4",
    title: "text-blue-500 text-2xl font-bold tracking-wide",
};

export default Interests;
