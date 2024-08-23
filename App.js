import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [eka, setEka] = useState(0);
  const [toka, setToka] = useState(0);
  const [tulos, setTulos] = useState(0);

 

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View>
          <Text>Tulos: </Text>
          <TextInput
            keyboardType='numeric'
            placeholder='Ensimmäinen numero'
            onChangeText={n => setEka(n)}
            value={eka}
          />
          <TextInput 
            keyboardType='numeric'
            placeholder='Toinen numero'
            onChangeText={n => setToka(n)}
          />
        
      
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          
          
          <Pressable
          style={({ pressed }) => [
            styles.button
          ]}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>

          <Pressable 
          style={({ pressed }) => [
            styles.button
          ]}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#159fcf',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 3
  },
  buttonText: {
    color: 'white'
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
