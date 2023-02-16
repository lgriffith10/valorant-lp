import { 
    View, 
    Text, 
    Image, 
    StyleSheet 
} from 'react-native';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../img/valorant.png')} />
            <Text style={styles.text}>Welcome on the Valorant App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b1b1b',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default HomeScreen;
