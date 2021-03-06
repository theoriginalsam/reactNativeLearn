import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import yelp from '../api/yelp'

const Tab = ({ navigation }) => {

    const [results, setResults] = useState([])



    const id = navigation.getParam("id")



    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`)



        setResults(response.data)
    }

    useEffect(() => {
        getResults(id)

    }, [])




    return <View>

        <Text> Welcome to {results.name}</Text>

    </View>
};

const styles = StyleSheet.create({});

export default Tab;
