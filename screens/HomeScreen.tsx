import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import MainMenu from '../components/MainMenu';
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
                <Text>Bulls N Cows</Text>
                <MainMenu navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default withNavigation(HomeScreen);
