import Home from './screens/HomeScreen';
import Game from './screens/GameScreen';
import Instructions from './screens/InstructionsScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const appNavigator = createStackNavigator(
    {
        Home: {screen: Home},
        Game: {screen: Game},
        Instructions: {screen: Instructions}
    },
    {
        initialRouteName: 'Home'
    });

export default createAppContainer(appNavigator);