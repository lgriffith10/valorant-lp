import Ionicons from '@expo/vector-icons/Ionicons';

import { TouchableOpacity, StyleSheet, View } from 'react-native';

const LikeButton = ({ agent }) => {
    const setAgentLiked = (agent) => {
        console.log(agent);
    } 

    return (
        <TouchableOpacity onPress={() => setAgentLiked(agent)}>
            <View style={styles.container}>
                    <View style={styles.containerContent}>
                        <Ionicons name="heart" size={30} color="white" />
                    </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
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