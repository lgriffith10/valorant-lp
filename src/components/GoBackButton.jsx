import Ionicons from '@expo/vector-icons/Ionicons';

import { Pressable, StyleSheet, View } from 'react-native';

const GoBackButton = ({ method }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => method()}>
                <View style={styles.containerContent}>
                    <Ionicons name="arrow-back" size={30} color="white" />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10,
        left: 10,
    },
    containerContent: {
        backgroundColor: '#fa4454',
        padding: 10,
        borderRadius: 100,
    }
});

export default GoBackButton;
