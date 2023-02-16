import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens';
import { HeroListStack, LikedStack } from './src/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

export default function App() {
  const removeHeader = [
    'Home'
  ]

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: removeHeader.includes(route.name) ? false : true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Heroes') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Liked') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fa4454',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Heroes" component={HeroListStack} />
        <Tab.Screen name="Liked" component={LikedStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}