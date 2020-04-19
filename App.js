import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() 
{

  const [outputText, setoutText] = useState('Clique no Botão');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title ="Botão" onPress = {() => 
        {setoutText(megaSena())}}/>
    </View>
  );

}

function megaSena(){

  var conjunto = [];

  for(var i = 0; i < 6; i++){
    let num = 1+Math.trunc(Math.random() * 100000)%60;
    for(let j = 0; j <= conjunto.length; j++){
      while(conjunto[j]==num){
        num = 1+Math.trunc(Math.random() * 100000)%60;

      }

    }

    conjunto [i] = num;

  }

  conjunto.sort(function(a, b) {return a - b});
  return conjunto.join(" - ");

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});
