import { Button, View } from "react-native";
import { ReactNode } from "react";
import React from "react";

interface IMenuButtonProps {
    title: string,
    onPress: () => void
}

export default class MenuButton extends React.Component<IMenuButtonProps> {
    public render(): ReactNode {
        return (
            <View>
                <Button
                    title={this.props.title}
                    onPress={this.props.onPress}>
                </Button>
            </View>
        )
    }
}