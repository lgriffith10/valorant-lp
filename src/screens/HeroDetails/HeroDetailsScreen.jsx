import { View, StyleSheet } from 'react-native';
import { useGetAgentByUuid } from '../../api/agents/hooks';

import { GoBackButton } from '../../components';

const HeroDetailsScreen = ({ navigation, route }) => {
    const { agent } = useGetAgentByUuid(route.params.uuid);


    return (
        <View>
            <GoBackButton method={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    }
});

export default HeroDetailsScreen;
