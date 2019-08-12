import { NavigationInjectedProps } from "react-navigation";
import React, { ReactNode } from "react";
import { View, Text, Button } from "react-native";
import { withNavigation } from "react-navigation";

class InstructionsScreen extends React.Component<NavigationInjectedProps> {
    public render(): ReactNode {
        return (
            <View>
                <Text>Instructions</Text>
                <Button
                    title="Main Menu"
                    onPress={() => this.props.navigation.navigate('Home')}>
                </Button>
            </View>
        );
    }
}

export default withNavigation(InstructionsScreen);