import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import BottomBar from '../../(components)/BottomBar';

const StartScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>

    <View style={{ flex: 3, width: "100%" }}>

        <Image
            source={require('../../Assets/Beach_Monochromatic.png')}
        />
    </View>
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
        <Text style={styles.heading}>High-end leisure projects to choose from</Text>
    </View>
    <View style={{ flex: 1, }}>
        <Text>The world's first-class modern leisure and entertainment method</Text>
    </View>
    <Button
        style={{ flex: 1, }}
        title="Go to Next"
        onPress={() => navigation.navigate('StartScreen4')}
    />
    <View style={{ flex: 1, }}>
        <BottomBar />
    </View>

</View>
  )
}

export default StartScreen3

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