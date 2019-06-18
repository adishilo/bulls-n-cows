import React, {ReactNode} from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends React.Component {
    public render(): ReactNode {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to details"
                    // @ts-ignore
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}
