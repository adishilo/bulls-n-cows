import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

export default class MainMenu extends React.Component {
    public render(): ReactNode {
        return (
            <View style={{borderStyle: 'solid', borderWidth: 1}}>
                <Text>Lord Dror</Text>
            </View>
        )
    }
}