import { View, Pressable, FlatList, StyleSheet } from 'react-native';
import { HeroCard } from '../../components';

import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage'; 

const LikedHeroesScreen = ({ navigation }) => {
    const [agents, setAgents] = useState([]);

    
    const likedAgents = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@agents')
            const objectToArray = Object.values(JSON.parse(jsonValue));

            setAgents(objectToArray);
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        likedAgents();
    });
    
    return (
        <View>
            <View style={styles.container}>
                <FlatList
                    data={agents}
                    renderItem={({ item }) => 
                        <Pressable onPress={() => navigation.navigate('LikedHeroDetail', { uuid: item })}>
                            <HeroCard uuid={item} route={navigation} />
                        </Pressable>
                    }
                    keyExtractor={item => item}
                ></FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});

export default LikedHeroesScreen;
