// Components
import { HeroListScreen } from '../screens';
import { HeroDetailsScreen } from '../screens';

// Functions
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HeroListStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HeroList"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HeroList" component={HeroListScreen} />
            <Stack.Screen name="HeroDetails" component={HeroDetailsScreen} />
        </Stack.Navigator>
    )
}

export default HeroListStack;
