import { View, StyleSheet } from 'react-native';
import { useGetAgentByUuid } from '../../api/agents/hooks';

import { GoBackButton, LikeButton} from '../../components';

const HeroDetailsScreen = ({ navigation, route }) => {
    const { agent } = useGetAgentByUuid(route.params.uuid);
    console.log(agent.uuid);

    return (
        <View>
            <GoBackButton method={() => navigation.goBack()} />
            <LikeButton agent={agent.uuid} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    }
});

export default HeroDetailsScreen;
