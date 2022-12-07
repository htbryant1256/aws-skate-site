import './ft-myers.css'
import React from "react";

import { Link } from 'react-router-dom';

{/*Website Ft.Myers skate spots page*/ }

const FtMyersPage = () => {


    const [data, setData] = React.useState(null);


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.ft_myers_locations));
    }, []);

    return (
        <div className="Ft-Myers-Page">
            <div className="Ft-Myers-Page-Header">
                <div className="Ft-Myers-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>
                </div>
            </div>
            <div className="Ft-Myers-Page-Column">

                <div className="Ft-Myers-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                </div>
                <div className="Ft-Myers-Page-Ft-Myers-Link">

                    <Link to="/ft-myers">Ft.Myers Page</Link>
                </div>



            </div>


            <div className="Ft-Myers-Page-Body">
                Ft.Myers Skate Spots Page
                <div className="Ft-Myers-Location-List">
                    <p>{!data ? "loading..." : data[0]}</p>
                    <p>{!data ? "loading..." : data[1]}</p>
         
                </div>


            </div>




        </div>



    );


}

export default FtMyersPage;


