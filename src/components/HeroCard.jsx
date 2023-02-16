import { View, Text, StyleSheet, Image } from 'react-native';

import { useGetAgentByUuid } from '../api/agents/hooks'; 

const HeroCard = (props) => {
    const { agent } = useGetAgentByUuid(props.uuid);

    if (agent) {
        return (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Image
                        resizeMode="cover"
                        source={{uri: agent.displayIcon}}
                        style={styles.cardImage}
                    />
                    <Text style={styles.cardText}>{agent.displayName}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.card}>
            <Text>Loading...</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fa4454',
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    cardText: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardImage: {
        width: 150,
        height: 150,
    }
});

export default HeroCard;
