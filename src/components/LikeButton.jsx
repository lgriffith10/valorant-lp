import Ionicons from '@expo/vector-icons/Ionicons';

import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useGetAgentByUuid } from '../api/agents/hooks';

const LikeButton = ({ agent }) => {
    const setAgentLiked = (agent) => {
        console.log(agent);
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