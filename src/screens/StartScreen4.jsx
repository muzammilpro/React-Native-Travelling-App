// import { StyleSheet, View, TextInput, Button } from 'react-native'
// import { NativeBaseProvider, Text, Box, Input} from "native-base"
// import React  from 'react'
// import  { useState } from 'react'

// const StartScreen4 = () => {

//     const [show, setShow] = React.useState(false)
//     const handleClick = () => {
//         setShow(!show);
//     };
//     return (

//         <NativeBaseProvider>
//             <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
//                 <View>
//                     <Text>E-mail address</Text>
//                     <Input mx="3" variant="rounded" placeholder="Input" w="70%" />
//                 </View>
//                 <View>
//                     <Text>Password</Text>
//                     {/* <Input mx="3" variant="rounded" placeholder="Input" w="70%" /> */}
               
//                     <Input type={show ? "text" : "password"} w="100%" py="0" InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
//             {show ? "Hide" : "Show"}
//           </Button>} placeholder="Password" />
               
//                 </View>
//                 <View>
//                     <Text>Authenticate</Text>
//                     <Input mx="3" variant="rounded" placeholder="Input" w="70%" />
//                 </View>
//             </Box>
//         </NativeBaseProvider>
//     )
// }

// export default StartScreen4

// const styles = StyleSheet.create({})


import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, Text, Box, Input, Button } from 'native-base';

const StartScreen4 = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <View>
          <Text>E-mail address</Text>
          <Input mx="3" variant="rounded" placeholder="Input" w="70%" />
        </View>
        <View>
          <Text>Password</Text>
          <Input
            type={showPassword ? 'text' : 'password'}
            w="75%" 
            variant="rounded" 
            py="0"
            InputRightElement={
              <Button
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                onPress={handleClick}
              >
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            }
            placeholder="Password"
          />
        </View>
        <View>
          <Text>Authenticate</Text>
          <Input mx="3" variant="rounded" placeholder="Input" w="70%" />
        </View>
      </Box>
    </NativeBaseProvider>
  );
};

export default StartScreen4;

const styles = StyleSheet.create({});
