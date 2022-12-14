import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Text,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "../graphql/queries";

import './home-page.css'
import { Link } from 'react-router-dom';
{/*Website Home Page*/ }


const HomePage = ({ signOut }) => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listNotes });
        const notesFromAPI = apiData.data.listNotes.items;
        setNotes(notesFromAPI);
    }

    return (
        <div className="Home-Page">
            <div className="Home-Page-Header">
                <div className="Home-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>

                </div>
                <div className="Home-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                    <Link to="/ft-myers">&emsp;Ft.Myers Page</Link>

                </div>
                <div className="Home-Page-Ft-Myers-Link">

                </div>
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/5c62ee2277b903c0d70590bb/1591212465727-AI8N8FGDSV8ZMEWF140J/IMG_3457.JPG" scale="1" />
            <div className="Home-Page-Body">
                <div>

                    <Button onClick={signOut}>Sign Out</Button>
                </div>
            </div>

                  
        </div>
        
        
        
        );


}

export default withAuthenticator(HomePage);


