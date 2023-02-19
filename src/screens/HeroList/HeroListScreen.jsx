// Components
import { View, FlatList, StyleSheet, Pressable } from 'react-native';
import {
    HeroCard
} from '../../components'

// Hooks
import { useState, useEffect } from 'react';
import { useGetAgents } from '../../api/agents/hooks';

const HeroListScreen = ({ navigation }) => {
    const [pagination, setPagination] = useState(0);
    const [paginatedAgents, setPaginatedAgents] = useState([]);

    const { agents } = useGetAgents();

    useEffect(() => {
        setPagination(pagination + 4)
    }, [])

    useEffect(() => {
        
        if(pagination && agents.data) {
            if (!agents.data[pagination - 1])
                setPaginatedAgents(agents)
        }

        setPaginatedAgents(agents.data ?agents.data.slice(0, pagination) : [])
    }, [pagination, agents])

    return (
        <View style={styles.container}>
            <FlatList
                data={paginatedAgents}
                renderItem={({ item }) => 
                    <Pressable onPress={() => navigation.navigate('HeroDetails', { uuid: item.uuid })}>
                        <HeroCard uuid={item.uuid} />
                    </Pressable>
                }
                keyExtractor={item => item.uuid}
                onEndReached={() => setPagination(pagination + 4)}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});

export default HeroListScreen;
