import './baker-park.css'
import React from "react";

import { Link } from 'react-router-dom';

{/*Website Ft.Myers skate spots page*/ }

const BakerParkPage = () => {


    const [data, setData] = React.useState(null);


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.naples_locations));
    }, []);

    return (
        <div className="baker-park-Page">
            <div className="baker-park-Page-Header">
                <div className="baker-park-Page-Home-Link">

                    <Link to="/">SWFL Skate Spots</Link>

                </div>
                <div className="baker-park-Page-Naples-Link">

                    <Link to="/naples">Naples Page</Link>
                    <Link to="/ft-myers">&emsp;Ft.Myers Page</Link>

                </div>
                <div className="baker-park-Page-Ft-Myers-Link">

                </div>
            </div>


            <div className="baker-park-Page-Body">
                <p>{!data ? "loading..." : data[0][0]}</p>
                <img src="https://manhattanconstructiongroup.com/manhattan-construction-company/wp-content/uploads/sites/5/2020/10/Baker-Park-8.jpg" scale=".5" />

                <div className="baker-park-Location-List">

                    <p> Address: {!data ? "loading..." : data[0][1]}</p>
                    <p> Description: {!data ? "loading..." : data[0][2]}</p>

                </div>


            </div>




        </div>



    );


}

export default BakerParkPage;


