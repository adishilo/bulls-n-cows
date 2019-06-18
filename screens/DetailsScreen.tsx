import React, {ReactNode} from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailsScreen extends React.Component {
    public render(): ReactNode {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Homescreen"
                    // @ts-ignore
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}