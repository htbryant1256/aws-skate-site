import './naples.css'
import React from "react";

import { Link } from 'react-router-dom';
{/*Website Naples skate spots page*/ }


const NaplesPage = () => {
    const [data, setData] = React.useState(null);


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.naples_locations));
    }, []);


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
                    <Link to="/naples/baker-park">{!data ? "loading..." : data[0][0]}</Link>
                    <p>{!data ? "loading..." : data[1]}</p>
                    </div>
           

                
            </div>




        </div>



    );


}

export default NaplesPage;


