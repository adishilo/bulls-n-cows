import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import MainMenu from '../components/menu';
import Constants from "../common/constants";

class HomeScreen extends React.Component<NavigationInjectedProps> {
    public static navigationOptions = {
        title: 'Bulls n Cows',
        headerStyle: {
            backgroundColor: Constants.applicationTitleColor
        }
    };

    public render(): ReactNode {
        return (
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "flex-start"}}>
                <MainMenu />
            </View>
        )
    }
}

export default withNavigation(HomeScreen);
