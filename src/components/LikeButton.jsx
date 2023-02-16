import Ionicons from '@expo/vector-icons/Ionicons';

import { Pressable, StyleSheet, View } from 'react-native';

const LikeButton = ({ agent }) => {
    const setAgentLiked = (agent) => {
        console.log(agent);
    } 

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setAgentLiked(agent)}>
                <View style={styles.containerContent}>
                    <Ionicons name="heart" size={30} color="white" />
                </View>
            </Pressable>
        </View>
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