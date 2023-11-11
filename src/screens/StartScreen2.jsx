import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import BottomBar from '../../(components)/BottomBar';

const StartScreen2 = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ flex: 3, width: "90%" }}>

                <Image
                    source={require('../../Assets/Group6932.png')}
                />
            </View>
            <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
                <Text style={styles.heading}>Customize your High-end travel</Text>
            </View>
            <View style={{ flex: 1, }}>
                <Text>Countless high-end entertainment facilities</Text>
            </View>
            <Button
                style={{ flex: 1, }}
                title="Go to Next"
                onPress={() => navigation.navigate('StartScreen3')}
            />
            <View style={{ flex: 1, }}>
                <BottomBar />
            </View>

        </View>
    )
}

export default StartScreen2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {

        fontSize: 34,
        textAlign: 'center',
        color: '#000000',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        alignContent: 'center',

    }
});