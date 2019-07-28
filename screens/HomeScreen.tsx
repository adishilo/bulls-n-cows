import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import MainMenu from '../components/menu';

class HomeScreen extends React.Component<NavigationInjectedProps> {
    public static navigationOptions = {
        title: 'Bulls n Cows',
        headerStyle: {
            backgroundColor: '#f4511e',
        }
    };

    public render(): ReactNode {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <MainMenu />
            </View>
        )
    }
}

export default withNavigation(HomeScreen);
