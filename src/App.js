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

const App = ({ signOut }) => {
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





        <View className="App">


            <Heading level={2}>Current Notes</Heading>
            <View margin="3rem 0">
                {notes.map((note) => (
                    <Flex
                        key={note.id || note.name}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>
                            {note.name}
                        </Text>
                        <Text as="span">{note.description}</Text>
                        <Text as="span">{note.tags}</Text>
                        <Text as="span">{note.address}</Text>
                        <Text as="span">{note.website}</Text>

                    </Flex>
                   
                ))}




                {notes.map((note) => (
                    <Text as="span">{note.description}</Text>
                ))}




            </View>
            <Button onClick={signOut}>Sign Out</Button>
        </View>







    );
};

export default withAuthenticator(App);;