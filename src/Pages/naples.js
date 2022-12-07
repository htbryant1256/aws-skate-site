import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Text,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "../graphql/queries";

import './naples.css'

import { Link } from 'react-router-dom';
{/*Website Naples skate spots page*/ }


const NaplesPage = () => {


    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listNotes });
        const notesFromAPI = apiData.data.listNotes.items;
        setNotes(notesFromAPI);
    }











    const [data, setData] = React.useState(null);


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.naples_locations));
    }, []);







    var result = notes.find(function (e) {
        return e.locationID == "1" && e.location == "naples";
    });

    





    return (

        <div className="Naples-Page">
            <div className="Naples-Page-Header">
                <div className="Naples-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>
                </div>
            </div>

            <div className="Naples-Page-Column">
                    <div className="Naples-Page-Naples-Link">

                        <Link to="/naples">Naples Page</Link>
                    </div>
                    <div className="Naples-Page-Ft-Myers-Link">

                        <Link to="/ft-myers">Ft.Myers Page</Link>
                    </div>


            </div>

            <div className="Naples-Page-Body">
                Naples Skate Spots Page
                <div className="Naples-Location-List">
                    <Link to="/naples/baker-park">{!result ? "loading..." : result.name}</Link>
                    <p>{!data ? "loading..." : data[1]}</p>
                </div>

                <div>

                </div>

                <div>
   
                </div>

                <div>
                    
                </div>
                
            </div>




        </div>



    );


}

export default NaplesPage;


