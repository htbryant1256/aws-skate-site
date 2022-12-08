import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Text,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "../graphql/queries";
import './ft-myers.css'

import { Link } from 'react-router-dom';

{/*Website Ft.Myers skate spots page*/ }

const FtMyersPage = () => {


    const [data, setData] = React.useState(null);


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.ft_myers_locations));
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






    var houseOfRideData = notes.find(function (e) {
        return e.locationID == "1" && e.location == "ft-myers";
    });

    var centennialData  = notes.find(function (e) {
        return e.locationID == "2" && e.location == "ft-myers";
    });








    return (
        <div className="Ft-Myers-Page">
            <div className="Ft-Myers-Page-Header">
                <div className="Ft-Myers-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>

                </div>
                <div className="Ft-Myers-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                    <Link to="/ft-myers">&emsp;Ft.Myers Page</Link>

                </div>
                <div className="Ft-Myers-Page-Ft-Myers-Link">

                </div>
            </div>


            <div className="Ft-Myers-Page-Body">
                Ft.Myers Skate Spots Page
                <div className="Ft-Myers-Location-List">
                    <div>
                        <span>Location&emsp;</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</span>
                        <span>Address</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</span>

                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</span>
                        <span>Tags</span>


                    </div>


                    <div>
                        <Link to="/naples/house-ride-nature">{!houseOfRideData ? "loading..." : houseOfRideData.name}</Link>
                        <span>&emsp;&nbsp;&nbsp;</span>

                        <span>{!houseOfRideData ? "loading..." : houseOfRideData.address}</span>
                        <span>&emsp;&emsp;&emsp;&nbsp;</span>

                        <span>{!houseOfRideData ? "loading..." : houseOfRideData.tags}</span>

                    </div>
                    <div>
                        <Link to="/naples/centennial-park">{!centennialData ? "loading..." : centennialData.name}</Link>
                        <span>&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;{!centennialData ? "loading..." : centennialData.address}</span>
                        <span>&emsp;&emsp;&nbsp;&nbsp;&emsp;{!centennialData ? "loading..." : centennialData.tags}</span>

                    </div>
                </div>


            </div>




        </div>



    );


}

export default FtMyersPage;


