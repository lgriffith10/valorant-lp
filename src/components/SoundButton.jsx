import Ionicons from '@expo/vector-icons/Ionicons';
import { Audio } from 'expo-av';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';

const SoundButton = ({ soundUrl }) => {
    const [sound, setSound] = useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync({ uri: soundUrl });
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
            }
        : undefined;
    }, [sound]);


    return (
        <View>
            <TouchableOpacity  onPress={() => playSound()}>
                <View style={styles.containerContent}>
                    <Ionicons name="play" size={30} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerContent: {
        backgroundColor: '#fa4454',
        padding: 10,
        borderRadius: 100,
    }
});

export default SoundButton;