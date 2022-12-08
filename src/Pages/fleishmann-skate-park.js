import './fleishmann-skate-park.css'
import React from "react";

import { Link } from 'react-router-dom';

{/*Website Ft.Myers skate spots page*/ }

const FleishmannParkPage = () => {


    const [data, setData] = React.useState(null);


    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.naples_locations));
    }, []);

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
                <p>{!data ? "loading..." : data[0][0]}</p>
                <img src="https://www.divinenaples.com/wp-content/uploads/2016/12/fleischmann-park.jpg" scale=".5" />

                <div className="fleishmann-skate-park-Location-List">

                    <p> Address: {!data ? "loading..." : data[0][1]}</p>
                    <p> Description: {!data ? "loading..." : data[0][2]}</p>

                </div>


            </div>




        </div>



    );


}

export default FleishmannParkPage;


