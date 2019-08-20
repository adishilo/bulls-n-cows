import React, { ReactNode } from 'react';
import { View } from 'react-native';
import MenuButton from './MenuButton';
import { NavigationInjectedProps } from 'react-navigation';

export default class MainMenu extends React.Component<NavigationInjectedProps> {
    public render(): ReactNode {
        return (
            <View style={{borderStyle: 'solid', borderWidth: 5}}>
                <MenuButton title="Start Game" onPress={() => this.props.navigation.navigate('Player')} />
                <MenuButton title="Instructions" onPress={() => this.props.navigation.navigate('Instructions')} />
            </View>
        )
    }
}