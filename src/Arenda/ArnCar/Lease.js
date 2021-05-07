import React, {Fragment} from "react";
import Header from "../Header/Header";
import Footer from "../../Global/Footer/Footer";
import Search from "../Search/Search";
import Card from "../Card/Card"

const Lease = () => (
    <Fragment>
        <Header/>
        <Search/>
        <Card/>

        <Footer/>
    </Fragment>
)

export default Lease;