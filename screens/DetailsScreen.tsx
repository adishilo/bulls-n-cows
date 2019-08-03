import React, {ReactNode} from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

export default class DetailsScreen extends React.Component<NavigationInjectedProps> {
    public render(): ReactNode {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Homescreen"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}