import Home from './screens/HomeScreen';
import Details from './screens/DetailsScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const appNavigator = createStackNavigator(
    {
        Home: {screen: Home},
        Details: {screen: Details}
    },
    {
        initialRouteName: 'Home'
    });

export default createAppContainer(appNavigator);