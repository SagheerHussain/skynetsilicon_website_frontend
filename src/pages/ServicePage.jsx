import React, { useEffect, useState } from "react";
import "./style.css"
import { Footer, Navbar, NavbarMenuItems, ServiceDetails, ServiceHeader, Subscribe, TopBrands, WhyUs, WhyWeUse } from "../components/index";
import { useLocation, useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const ServicePage = ({ setApiLoading, apiLoading }) => {

    // State Variables
    const [isClick, setIsClick] = useState(false);
    const [service, setService] = useState(null);

    const [loader, setLoader] = useState(true);

    // Get Location
    const location = useLocation();

    // Handle Aside Menu
    const handleSideMenu = () => {
        setIsClick(!isClick);
    }

    // Get Params
    const { category } = useParams();

    // Service Api Call
    useEffect(() => {
        let isMounted = true;
        (async () => {
            setApiLoading(true);
            setIsClick(false);
            try {
                const response = await fetch(`https://skynetsiliconserver.vercel.app/api/services/${category}`);
                const data = await response.json();
                if (isMounted) {
                    setService(data);
                    setLoader(false);
                    setTimeout(() => {
                        setApiLoading(false)
                    }, 2800);
                    console.log("Fetched Data:", data);
                }
            } catch (error) {
                console.log("Error fetching service data:", error);
            }
        })();

    }, [category, location.pathname]);

    return (
        <>
            <div className={`container-full w-screen h-screen ${isClick ? "active overflow-y-clip " : ""}`} style={{ transformStyle: `${isClick ? "preserve-3d" : ""}` }}>
                {
                    service &&
                    <>
                        <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />


                        <div className={`main-container `}>
                            <div className={`main w-full h-screen z-50 origin-left transition-all duration-500`}>
                                <ServiceHeader service={service} isClick={isClick} />
                                <main id="main_sections" className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
                                    }`}>
                                    <ServiceDetails service={service} />
                                    <TopBrands />
                                    <WhyUs service={service} />
                                    <Subscribe />
                                    <WhyWeUse service={service} />
                                    <Footer />
                                </main>
                            </div>

                            <div className={`shadow one`}></div>
                            <div className={`shadow two`}></div>
                        </div>

                        <NavbarMenuItems isClick={isClick} />
                        <ScrollToTop />
                    </>
                }
            </div>
        </>
    )
}

export default ServicePage

