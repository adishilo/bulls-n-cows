import Home from './screens/HomeScreen';
import Player from './screens/PlayerScreen';
import Instructions from './screens/InstructionsScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const appNavigator = createStackNavigator(
    {
        Home: {screen: Home},
        Player: {screen: Player},
        Instructions: {screen: Instructions}
    },
    {
        initialRouteName: 'Home'
    });

export default createAppContainer(appNavigator);