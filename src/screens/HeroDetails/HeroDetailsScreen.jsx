import { 
    View, 
    StyleSheet, 
    Image,
    Text 
} from 'react-native';
import { GoBackButton, LikeButton, SoundButton } from '../../components';

import { useGetAgentByUuid } from '../../api/agents/hooks';

const HeroDetailsScreen = ({ navigation, route }) => {
    const { agent } = useGetAgentByUuid(route.params.uuid);

    return (
        <View>
            <GoBackButton method={() => navigation.goBack()} />
            <LikeButton agent={agent.uuid} />

            <View style={styles.container}>
                <Image 
                    source={{ uri: agent.bustPortrait }}
                    style={{ 
                        width: 400, 
                        height: 400 
                    }}
                />
                <View style={styles.content}>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                            }}>
                                {agent.displayName}
                            </Text>
                            {agent.voiceLine.mediaList[0] && (
                                <SoundButton soundUrl={agent.voiceLine.mediaList[0].wave} />
                            )}
                        </View>
                        <View 
                            style={{ 
                                flexDirection: 'row', 
                                alignItems: 'center',
                                marginTop: 10,
                                width: 330,
                            }}
                        >
                            <View style={styles.roleIconContainer}>
                                <Image 
                                    style={{
                                        width: 40,
                                        height: 40,
                                    }} 
                                    source={{ uri: agent.role.displayIcon }} 
                                />
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                }}>
                                    {agent.role.displayName}
                                </Text>
                                <Text style={{
                                    paddingRight: 10,
                                }}>
                                    {agent.role.description}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    roleIconContainer: {
        marginRight: 10,
        backgroundColor: '#fa4454',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    }
})

export default HeroDetailsScreen;
