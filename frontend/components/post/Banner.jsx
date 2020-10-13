import React, { useEffect } from "react";
import { initJarallax } from "../../utils/theme";

const Banner = ({image}) => {
    useEffect(() => {
        initJarallax();
    });
    return (
        <>
            <div data-jarallax data-speed=".8" className="py-12 py-md-15 bg-cover jarallax">
                <img className="jarallax-img" src={image} alt="jarallax-img" />
            </div>
        </>
    )
};

export default Banner;