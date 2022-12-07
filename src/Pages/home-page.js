import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
    Button,
    Flex,
    Heading,
    Text,
    View,
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
                
            </div>

            <div className="Home-Page-Column">

                <div className="Home-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                </div>
                <div className="Home-Page-Ft-Myers-Link">

                    <Link to="/ft-myers">Ft.Myers Page</Link>
                </div>
            </div>

            <div className="Home-Page-Body">
                Home Page

                <div>

                    {notes.map((note) => (
                        <Text as="span">{note.description}</Text>
                    ))}

                </div>

                <div>

                    <Button onClick={signOut}>Sign Out</Button>
                </div>
            </div>

                  
        </div>
        
        
        
        );


}

export default withAuthenticator(HomePage);


