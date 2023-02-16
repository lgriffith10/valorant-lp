import { HeroListScreen } from '../screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HeroListStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="HeroList"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HeroList" component={HeroListScreen} />
        </Stack.Navigator>
    )
}

export default HeroListStack;
