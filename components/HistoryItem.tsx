import React, {ReactNode} from 'react';
import { View, Text } from 'react-native';
 
export default class HistoryItem extends React.Component {
    public render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text>1234</Text>
                <Text>XOXO</Text>
            </View>
        )
    }
}