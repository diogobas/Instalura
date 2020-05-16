import React, { useState, useEffect } from 'react';
import {  ScrollView, FlatList, SafeAreaView } from 'react-native';
import { Header } from './src/components/Header';
import { Photo } from './src/components/Photo';
import { Comments } from './src/components/Comments';
import obterInformacoes from './src/api/feed';
import style from './App.style';

const App = () => {
  const [informacoes, setInformacoes] = useState([]);

  useEffect(() => {
    obterInformacoes(setInformacoes);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <FlatList
          data={informacoes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <>
              <Header userName={item.userName} urlImage={item.userURL} />
              <Photo urlPhoto={item.url} description={item.description} qtdLikes={item.likes} />
              <Comments comments={item.comentarios} />
            </>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
