
import { useFonts } from 'expo-font';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';





export default function App() {
  const [fontsLoaded] = useFonts({
       'ReenieBeanie-Regular': require('./assets/font/Reenie_Beanie/ReenieBeanie-Regular.ttf'),
       'KumbhSans-SemiBold': require('./assets/font/Kumbh_Sans/static/KumbhSans-SemiBold.ttf'),
       'KumbhSans-Bold': require('./assets/font/Kumbh_Sans/static/KumbhSans-Bold.ttf'),
       'KumbhSans-ExtraBold': require('./assets/font/Kumbh_Sans/static/KumbhSans-ExtraBold.ttf'),
       'KumbhSans-Black': require('./assets/font/Kumbh_Sans/static/KumbhSans-Black.ttf'),
      });
  const onPress = () => {
    // Define the action to take when the button is pressed
  };

  return (
    <View
          style={[
            styles.container2,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'column',
            },
          ]}>
    <View style={styles.container}>
      <Text style={styles.text}>easyshirdi.com</Text>
      <Text style={styles.text2}>Luxurious travel experience</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/sai2.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.image2Container}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Get Started ➡</Text>
        </TouchableOpacity>
     
      <View style={styles.imageRow}>
      <TouchableOpacity  style={styles.sd1}>
        <Image source={require('./assets/cal.png')} style={styles.image223} />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.sd}>
          <Image source={require('./assets/car.png')} style={styles.image222} />
        </TouchableOpacity>
       
         <TouchableOpacity style={styles.sd}>
      <Image source={require('./assets/stay.png')} style={styles.image222} />
    </TouchableOpacity>
        <TouchableOpacity  style={styles.sd}>
          <Image source={require('./assets/food2.png')} style={styles.image2222} />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.sd}>
          <Image source={require('./assets/temple2.png')} style={styles.image222} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textgrey}>Rest assured. We make sure it is luxurious</Text>
      </View>
      <View>
        <Text style={styles.textblack}>Made in Paregaon <Text style={styles.textred}> Live  </Text><Text style={styles.textexblack}>by the baap company</Text></Text>
      </View>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2:{
flex:1,

  },
  image2Container:{
    flex:3,
  },
  sd: {
    width: 50, // Set the desired width
    height: 50, // Set the desired height
    borderRadius: 50, // 50% border radius to make it rounded
    backgroundColor: 'white', // Background color
    shadowColor:'#00000029', // Shadow color
    shadowOffset:{ width: 6, height: 6 }, // Shadow offset
    shadowRadius: 12, // Shadow radius
    shadowOpacity: 2, // Shadow opacity
    elevation:8, 
    marginTop:60,
    marginLeft:17// For Android shadow
    
  },
  sd1: {
    width: 50, // Set the desired width
    height: 50, // Set the desired height
    borderRadius: 50, // 50% border radius to make it rounded
    backgroundColor: 'white', // Background color
    shadowColor:'#00000029', // Shadow color
    shadowOffset:{ width: 6, height: 6 }, // Shadow offset
    shadowRadius: 12, // Shadow radius
    shadowOpacity: 2, // Shadow opacity
    elevation:8, 
    marginTop:60,
    marginLeft:10// For Android shadow
    
  },
  image222: {
    width: 30, // Set the desired width for the image
    height: 30, // Set the desired height for the image
    resizeMode: 'contain',
    marginTop:6,
    marginLeft:9 
    
  },
  image2222: {
    width: 30, // Set the desired width for the image
    height: 30, // Set the desired height for the image
    resizeMode: 'contain',
    marginTop:9,
    marginLeft:10 
   
  },
  image223: {
    width: 30, // Set the desired width for the image
    height: 30, // Set the desired height for the image
    resizeMode: 'contain',
    marginTop:10,
    marginLeft:9
    
  },
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textgrey: {
    color: 'grey',
    fontSize: 15,
    marginTop:70,
    fontFamily:'KumbhSans-SemiBold'
  },
  textblack: {
    color: 'black',
    fontSize: 14,
    marginTop:10,
    fontWeight:'bold',
    fontFamily:'KumbhSans-SemiBold'
  },
  textred: {
    color: 'red',
    fontSize: 14,
    fontFamily:'KumbhSans-ExtraBold'
  },
  textexblack: {
    color: 'black',
    fontSize:16,
   fontFamily:'KumbhSans-Black'
  },
  text: {
    fontWeight: 'normal',
    fontFamily: 'ReenieBeanie-Regular',
    fontSize: 41,
    color: '#06B9D1',
    marginTop: 40,
    width: 185,
    height: 41,
  },
  text2: {
    fontWeight: 'normal',
    fontFamily: 'ReenieBeanie-Regular',
    fontSize: 16,
    color: 'black',
    width: 150,
    height: 16,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    opacity:1, 
    flex:2,
  },
  image: {
    width: 402,
    height: 402,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    
    
  },
  
  text9: {
    backgroundColor: 'white',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'black',
    width: 167,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor:'#EDEDED',
    padding: 10,
    borderRadius: 50,
    marginTop:100,
    shadowColor: '#00000029',
    shadowOffset:{width:12, height: 8},
    shadowOpacity:1,
    shadowRadius: 16.00,
    elevation:24,
    width:167,
    marginLeft:80
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
   fontFamily:'KumbhSans-Bold',
    marginLeft:18,
   
  },
  
  r1:{
    width: 34,
    height: 34,
    marginRight: 30,
    marginTop: 40,
    backgroundColor:'white',
    borderRadius:48,
    borderWidth: 5,
  }
});



// import React from 'react';
// import { StyleSheet, View } from 'react-native';

// const Flex = () => {
//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           // Try setting `flexDirection` to `"row"`.
//           flexDirection: 'column',
//         },
//       ]}>
//       <View style={{flex: 1, backgroundColor: 'red'}} />
//       <View style={{flex: 2, backgroundColor: 'darkorange'}} />
//       <View style={{flex: 3, backgroundColor: 'green'}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// export default Flex;
