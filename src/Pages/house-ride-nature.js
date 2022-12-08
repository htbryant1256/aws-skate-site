import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Text,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "../graphql/queries";

import './house-ride-nature.css'

import { Link } from 'react-router-dom';

{/*Website Ft.Myers skate spots page*/ }

const HouseRideNature = () => {


    const [data, setData] = React.useState(null);


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.naples_locations));
    }, []);



    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listNotes });
        const notesFromAPI = apiData.data.listNotes.items;
        setNotes(notesFromAPI);
    }


    var pageData = notes.find(function (e) {
        return e.locationID == "1" && e.location == "ft-myers";
    });





    return (
        <div className="house-ride-nature-Page">
            <div className="house-ride-nature-Page-Header">
                <div className="house-ride-nature-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>

                </div>
                <div className="house-ride-nature-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                    <Link to="/ft-myers">&emsp;Ft.Myers Page</Link>

                </div>
                <div className="house-ride-nature-Page-Ft-Myers-Link">

                </div>
            </div>


            <div className="house-ride-nature-Page-Body">
                <div>
                    <span>{!pageData ? "loading..." : pageData.name}</span>
                </div>

                <img src="https://i.pinimg.com/736x/b7/7e/f9/b77ef9b5b358da11cb922d488bd60994--fort-myers-nature.jpg" scale=".5" />

                <div className="house-ride-nature-Location-List">
                    <div>
                        <span>Website: {!pageData ? "loading..." : pageData.website}</span>
                    </div>
                    <p/>
                    <div>
                        <span>Address: {!pageData ? "loading..." : pageData.address}</span>
                    </div>
                    <p />

                    <div>
                        <span>Description: {!pageData ? "loading..." : pageData.description}</span>
                    </div>
                    <p />

                    <div>
                        <span>Tags: {!pageData ? "loading..." : pageData.tags}</span>
                    </div>
                </div>


            </div>




        </div>



    );


}

export default HouseRideNature;


