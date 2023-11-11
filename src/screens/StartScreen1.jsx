import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import BottomBar from '../../(components)/BottomBar';

const StartScreen1 = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ flex: 3, width: "100%" }}>

                <Image
                    
                    source={require('../../Assets/Traveling_Monochromatic.png')}
                />
            </View>
            <View style={{ flex: 1, }}>
                <Text style={styles.heading}>Make your own private travel plan</Text>
            </View>
            <View style={{ flex: 1,}}>
                <Text>Formulate your strategy to receive wonderful gift packs</Text>
            </View>
            <Button
                title="Go to Next"
                onPress={() => navigation.navigate('StartScreen2')}
            />
            <View style={{ flex: 1,  }}>
                <BottomBar/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading:{
        color: "black",
        fontSize: 34,

    }
});

export default StartScreen1;
