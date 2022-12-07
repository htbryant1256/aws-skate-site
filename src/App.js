import React, { useState, useEffect } from "react";
import "./App.css";
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
import { listNotes } from "./graphql/queries";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/home-page.js';
import NaplesPage from './Pages/naples.js';
import FtMyersPage from './Pages/ft-myers';
import BakerParkPage from './Pages/baker-park';

const App = ({ signOut }) => {




    





    return (




        <View className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/naples" element={<NaplesPage />} />
                    <Route path="/ft-myers" element={<FtMyersPage />} />
                    <Route path="/naples/baker-park" element={<BakerParkPage />} />

                </Routes>
            </BrowserRouter>


        </View>







    );
};

export default withAuthenticator(App);;