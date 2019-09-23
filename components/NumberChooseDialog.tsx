import React, {ReactNode} from 'react';
import Dialog from 'react-native-dialog';
import { View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

type InputState = 'init' | 'error' | 'accepted';

interface INumberChooseProps extends NavigationInjectedProps{
    isVisible: boolean;
    onNumberChosen: (chosenNumber: string) => void;
}

interface INumberChooseState {
    inputState: InputState;
}

export default class NumberChooseDialog extends React.Component<INumberChooseProps, INumberChooseState> {
    private choosenNumber: string;

    public constructor(props: INumberChooseProps) {
        super(props);

        this.state = {
            inputState: 'init'
        }
    }

    public render() {
        return (
            <View>
                <Dialog.Container visible={this.props.isVisible}>
                    <Dialog.Title>Number Choosing</Dialog.Title>
                    <Dialog.Description>Please Choose a number with four distinct digits.</Dialog.Description>
                    <Dialog.Input
                        borderColor={this.state.inputState === 'init'
                            ? 'gainsboro'
                            : this.state.inputState === 'error'
                                ? 'crimson'
                                : 'green'}
                        borderWidth={1}
                        keyboardType="number-pad"
                        onChangeText={(newUserInput: string) => { this.onDialogTextChanged(newUserInput); }} />
                    <Dialog.Button
                        disabled={this.state.inputState !== 'accepted'}
                        label="OK"
                        onPress={() => this.props.onNumberChosen(this.choosenNumber)} />
                    <Dialog.Button label="Cancel" onPress={() => this.props.navigation.navigate('Home')} />
                </Dialog.Container>
            </View>
        )
    }

    private onDialogTextChanged(newUserInput: string) {
        if (!/[0-9]{4}/.test(newUserInput)) {
            this.setState({
                inputState: 'error'
            });

            return;
        }

        if (newUserInput.length !== 4) {
            this.setState({
                inputState: 'error',
            });

            return;
        }

        let pivotIndex = 1;
        const numArray = Array.from(newUserInput);
        for (let num of numArray) {
            for (let i = pivotIndex; i < numArray.length; i++) {
                if (numArray[i] === num) {
                    this.setState({
                        inputState: 'error'
                    });

                    return;
                }
            }

            pivotIndex++;
        }

        this.setState({
            inputState: 'accepted', 
        });
        this.choosenNumber = newUserInput;
    }
}