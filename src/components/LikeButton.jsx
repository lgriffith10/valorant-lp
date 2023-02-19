import Ionicons from '@expo/vector-icons/Ionicons';

import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import { uniq } from 'lodash';


const LikeButton = ({ agent }) => {
    const [liked, setLiked] = useState([]);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@agents')
            const objectToArray = Object.values(JSON.parse(jsonValue));

            setLiked(objectToArray);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const setAgentLiked = async () => {
        try {
            let allLiked = uniq([...liked, agent]);

            if (liked.includes(agent)) {
                allLiked = liked.filter(item => item !== agent);
            }

            const jsonValue = JSON.stringify({...allLiked})
            await AsyncStorage.setItem('@agents', jsonValue)
        } catch (e) {
            console.log(e)
        }
    } 

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setAgentLiked(agent)}>
                <View style={styles.containerContent}>
                    <Ionicons name="heart" size={30} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex : 1,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    containerContent: {
        backgroundColor: '#fa4454',
        padding: 10,
        borderRadius: 100,
    }
});

export default LikeButton;