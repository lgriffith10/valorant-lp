// Components
import { View, FlatList, StyleSheet, Pressable } from 'react-native';
import {
    HeroCard
} from '../../components'

// Hooks
import { useGetAgents } from '../../api/agents/hooks';

const HeroListScreen = ({ navigation }) => {

    const { agents } = useGetAgents();

    return (
        <View style={styles.container}>
            <FlatList
                data={agents.data}
                renderItem={({ item }) => 
                    <Pressable onPress={() => navigation.navigate('HeroDetails', { uuid: item.uuid })}>
                        <HeroCard uuid={item.uuid} />
                    </Pressable>
                }
                keyExtractor={item => item.uuid}
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
