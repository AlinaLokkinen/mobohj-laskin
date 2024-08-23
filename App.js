import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [eka, setEka] = useState(0);
  const [toka, setToka] = useState(0);
  const [tulos, setTulos] = useState('');

  const addition = () => {
    setTulos(parseInt(eka) + parseInt(toka));
  }

  const subtraction = () => {
    setTulos(eka - toka);
  }

  return (
    <View style={styles.container}>
        <View>
          <Text>Tulos: {tulos}</Text>
          
          <TextInput 
            placeholder='first number'
            keyboardType='numeric'
            onChangeText={n => setEka(n)}
          />
          <TextInput 
            placeholder='second number'
            keyboardType='numeric'
            onChangeText={n => setToka(n)}
          />
      </View>

      <View style={styles.button}>

        <Pressable 
          style={({ pressed }) => styles.button}
          onPress={addition}
          >
          <Text>+</Text>
        </Pressable>

        <Pressable 
          style={({ pressed }) => styles.button}
          onPress={subtraction}  
        >
          <Text>-</Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  button: {
    flexDirection: 'row',
    backgroundColor: '#159fcf',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 3,
  },
})

