import React from "react";
import UserProfile from "../../components/user-profile/UserProfile";
import Title from "../../components/title/Title";
import Navbar from "../../components/navbar/Navbar";
import WelcomeBanner from "../../components/welcome-banner/WelcomeBanner";
import SimpleTabs from "../../components/simple-tabs/SimpleTabs";
import LicensePlans from "../../components/license-plans/LicensePlans";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/footer/Footer";

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