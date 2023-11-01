import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'press-start': require('./assets/fonts/pressStart.ttf'),
    'karla-bold': require('./assets/fonts/Karla-ExtraBold.ttf'),
    'karla-light': require('./assets/fonts/Karla-ExtraLight.ttf')
  })

  if(!fontsLoaded){
    return <Text>Loading fonts..</Text>
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={styles.div}>
        <Text style={styles.titleText}>Title</Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    backgroundColor: '#1768AC',
    width: '100%',
    height: 130,
    position: 'absolute',
    top: 0,
    alignItems: 'center'
  },
  titleText: {
    position: 'relative',
    top: 75,
    fontSize: 30,
    fontFamily: 'karla-bold'
  }
});
