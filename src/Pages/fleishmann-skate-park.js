import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Text,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "../graphql/queries";
import './fleishmann-skate-park.css'

import { Link } from 'react-router-dom';

{/*Website Ft.Myers skate spots page*/ }

const FleishmannParkPage = () => {


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
        return e.locationID == "2" && e.location == "naples";
    });










    return (
        <div className="fleishmann-skate-park-Page">
            <div className="fleishmann-skate-park-Page-Header">
                <div className="fleishmann-skate-park-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>

                </div>
                <div className="fleishmann-skate-park-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                    <Link to="/ft-myers">&emsp;Ft.Myers Page</Link>

                </div>
                <div className="fleishmann-skate-park-Page-Ft-Myers-Link">

                </div>
            </div>


   

            <div className="fleishmann-skate-park-Page-Body">
                <div>
                    <span>{!pageData ? "loading..." : pageData.name}</span>
                </div>

                <img src="https://www.divinenaples.com/wp-content/uploads/2016/12/fleischmann-park.jpg" scale="1" />

                <div className="fleishmann-skate-park-Location-List">
                    <div>
                        <span>Website: {!pageData ? "loading..." : pageData.website}</span>
                    </div>
                    <p />
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

export default FleishmannParkPage;


