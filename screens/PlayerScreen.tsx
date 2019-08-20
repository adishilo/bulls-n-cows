import React, {ReactNode} from 'react';
import {View, Button, TextInput} from 'react-native';
import { NavigationInjectedProps, NavigationParams } from 'react-navigation';
import NumberChooseDialog from "../components/NumberChooseDialog";

interface IPlayerScreenState {
    numberChooseVisible: boolean
}

export default class PlayerScreen extends React.Component<NavigationInjectedProps, IPlayerScreenState> {
    public constructor(props: Readonly<NavigationInjectedProps<NavigationParams>>) {
        super(props);

        // this.state = {
        //     numberChooseVisible: false
        // };
    }

    public render(): ReactNode {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <NumberChooseDialog isVisible={true} />
            </View>
        )
    }
}