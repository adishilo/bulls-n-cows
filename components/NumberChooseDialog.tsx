import React, {ReactNode} from 'react';
import Dialog from 'react-native-dialog';
import { View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface INumberChooseProps extends NavigationInjectedProps{
    isVisible: boolean,
    onNumberChosen: (chosenNumber: number) => void
}

export default class NumberChooseDialog extends React.Component<INumberChooseProps> {
    public render() {
        return (
            <View>
                <Dialog.Container visible={this.props.isVisible}>
                    <Dialog.Title>Number Choosing</Dialog.Title>
                    <Dialog.Description>Please Choose four distinct digits number.</Dialog.Description>
                    <Dialog.Input />
                    <Dialog.Button label="OK" onPress={() => this.props.onNumberChosen(12)} />
                    <Dialog.Button label="Cancel" onPress={() => this.props.navigation.navigate('Home')} />
                </Dialog.Container>
            </View>
        )
    }
}