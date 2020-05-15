/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, Image, ScrollView, Dimensions, StyleSheet, FlatList } from 'react-native';
const informacoes = [{
  usuario: "Diogo",
}, {
  usuario: "Debora",
}, {
  usuario: "Dominique",
}, {
  usuario: "Elias",
}]

const largura = Dimensions.get("screen").width;
const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        renderItem={({item}) => (
          <>
            <Text>{item.usuario}</Text>
            <Image source={require("./res/img/alura.jpg")} style={style.image} />
          </>
        )}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  image: {
    width: largura, 
    height: largura
  }
});

export default App;
