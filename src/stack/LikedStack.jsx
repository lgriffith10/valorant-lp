import { HeroDetailsScreen, LikedHeroesScreen } from '../screens';

// Functions
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HeroListStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="LikedHeroes"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="LikedHeroes" component={LikedHeroesScreen} />
            <Stack.Screen name="LikedHeroDetail" component={HeroDetailsScreen} />
        </Stack.Navigator>
    )
}

export default HeroListStack;
