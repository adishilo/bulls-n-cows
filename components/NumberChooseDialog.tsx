import React, {ReactNode} from 'react';
import Dialog from 'react-native-dialog';
import { View } from 'react-native';

interface INumberChooseProps {
    isVisible: boolean
}

export default class NumberChooseDialog extends React.Component<INumberChooseProps> {
    public render() {
        return (
            <View>
                <Dialog.Container visible={this.props.isVisible}>
                    <Dialog.Title>Number Choosing</Dialog.Title>
                    <Dialog.Description>Please Choose four distinct digits number.</Dialog.Description>
                    <Dialog.Input />
                    <Dialog.Button label="OK" />
                    <Dialog.Button label="Cancel" />
                </Dialog.Container>
            </View>
        )
    }
}