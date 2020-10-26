import React from "react";
import UserProfile from "../user-profile/UserProfile";
import Title from "../title/Title";
import Navbar from "../navbar/Navbar";
import WelcomeBanner from "../welcome-banner/WelcomeBanner";
import SimpleTabs from "../simple-tabs/SimpleTabs";
import LicensePlans from "../license-plans/LicensePlans";
import Faq from "../Faq/Faq";
import Footer from "../footer/Footer";

export default function Layout(){
    return(
        <div>
            <UserProfile/>
            <Title/>
            <Navbar />
            <WelcomeBanner />
            <SimpleTabs />
            <LicensePlans />
            <Faq />
            <Footer />
        </div>
    );
}