
import { Text, View, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const buttonPressHandler = () => {
    setCount(state => state + 1);
    console.log(`Counter increased to ${count + 1}`)
    alert(`You increased your counter by 1`);
  }

  return (
     <View>
      <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 50 }}>Hello World!</Text>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>Welcome to React Native!</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>This is a simple React Native app.</Text>
        <Image
          source={require('./images/react-native.png')}
          style={{ alignSelf: 'center', marginTop: 20 }}
        />
      </View>

         <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>This app uses Expo.</Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdrLCwypm8BBsju5_miTYcBykTPfDreiIkfHp5IJEfhw&s',
          }}
          style={{
            alignSelf: 'center',
            marginTop: 20,
            width: 200,
            height: 100,
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 10 }}>Increment your Counter: {count}</Text>
        <Button title="Increment" onPress={buttonPressHandler} />
      </View>

      </View>
      
  );
}


