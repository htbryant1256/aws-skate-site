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







    var bakerData = notes.find(function (e) {
        return e.locationID == "1" && e.location == "naples";
    });

    var fleishmannSkateData = notes.find(function (e) {
        return e.locationID == "2" && e.location == "naples";
    });






    return (

        <div className="Naples-Page">
            <div className="Naples-Page-Header">
                <div className="Naples-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>

                </div>
                <div className="Naples-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                    <Link to="/ft-myers">&emsp;Ft.Myers Page</Link>

                </div>
                <div className="Naples-Page-Ft-Myers-Link">

                </div>
            </div>

 



            <div className="Naples-Page-Body">
                Naples Skate Spots Page

                <div className="Naples-Location-List">
                    <div>
                        <span>Location&emsp;</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</span>
                        <span>Address</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</span>

                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</span>
                        <span>Tags</span>


                    </div>


                    <div>
                        <Link to="/naples/baker-park">{!bakerData ? "loading..." : bakerData.name}</Link>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</span>

                        <span>{!bakerData ? "loading..." : bakerData.address}</span>
                        <span>&emsp;&emsp;&emsp;&emsp;&emsp;</span>

                        <span>{!bakerData ? "loading..." : bakerData.tags}</span>

                    </div>
                    <div>
                        <Link to="/naples/fleishmann-skate-park">{!fleishmannSkateData ? "loading..." : fleishmannSkateData.name}</Link>
                        <span>&nbsp;&nbsp;&nbsp;{!fleishmannSkateData ? "loading..." : fleishmannSkateData.address}</span>
                        <span>&emsp;&nbsp;&nbsp;&nbsp;{!fleishmannSkateData ? "loading..." : fleishmannSkateData.tags}</span>

                    </div>
                </div>

   

            </div>




        </div>



    );


}

export default NaplesPage;
