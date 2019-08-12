import React, {ReactNode} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

export default class GameScreen extends React.Component<NavigationInjectedProps> {
    public render(): ReactNode {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <TextInput placeholder="Enter number"></TextInput>
                <Button
                    title="Go to Homescreen"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}