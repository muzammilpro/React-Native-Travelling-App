import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BottomBar = () => {
  return (
    <View style={styles.container}>
          <Image
        
        source={require('../Assets/Zaps.png')}
      />
      <Text>Nordic Vacation Sponsor</Text>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
    container:{
       display: 'flex',
       flexDirection: "row",
    },
   
})