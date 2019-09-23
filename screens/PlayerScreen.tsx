import React, {ReactNode} from 'react';
import {View, Button, TextInput} from 'react-native';
import { NavigationInjectedProps, NavigationParams } from 'react-navigation';
import NumberChooseDialog from "../components/NumberChooseDialog";
import HistoryItem from '../components/HistoryItem';
 
interface IPlayerScreenState {
    numberChooseVisible: boolean
}

export default class PlayerScreen extends React.Component<NavigationInjectedProps, IPlayerScreenState> {
    private playerNumber: string;

    public constructor(props: Readonly<NavigationInjectedProps<NavigationParams>>) {
        super(props);

        this.state = {
            numberChooseVisible: true
        };
    }

    public render(): ReactNode {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <NumberChooseDialog
                    isVisible={this.state.numberChooseVisible}
                    navigation={this.props.navigation}
                    onNumberChosen={chosenNumber => {
                        this.playerNumber = chosenNumber; console.log(chosenNumber);
                        this.setState({
                            numberChooseVisible: false
                        });
                    }} />
                <HistoryItem>
                </HistoryItem>
            </View>
        )
    }
}