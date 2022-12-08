import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Text,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "../graphql/queries";

import './centennial-park.css'

import { Link } from 'react-router-dom';

{/*Website Ft.Myers skate spots page*/ }

const CentennialPark = () => {


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
        return e.locationID == "2" && e.location == "ft-myers";
    });





    return (
        <div className="centennial-park-Page">
            <div className="centennial-park-Page-Header">
                <div className="centennial-park-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>

                </div>
                <div className="centennial-park-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                    <Link to="/ft-myers">&emsp;Ft.Myers Page</Link>

                </div>
                <div className="centennial-park-Page-Ft-Myers-Link">

                </div>
            </div>


            <div className="centennial-park-Page-Body">
                <div>
                    <span>{!pageData ? "loading..." : pageData.name}</span>
                </div>

                <img src="https://u.realgeeks.media/lifeinbonitasprings/Centenial_Park_Artwork.jpg" scale=".5" />

                <div className="centennial-park-Location-List">
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

export default CentennialPark;


