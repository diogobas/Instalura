import React, { useState, useEffect } from 'react';
import {  ScrollView, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Header } from '../../Header';
import { Photo } from '../../Photo';
import { Comments } from '../../Comments';
import obterInformacoes from '../../../api/feed';
import { likePhoto, imgLike } from '../../../api/likes';
import addComment from '../../../api/comments';
import style from './Feed.style';

const Feed = () => {
  const [informacoes, setInformacoes] = useState([]);

  useEffect(() => {
    obterInformacoes(setInformacoes);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <StatusBar backgroundColor="white" style="dark-content" />
        <FlatList
          data={informacoes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <>
              <Header userName={item.userName} urlImage={item.userURL} />
              <Photo
                urlPhoto={item.url}
                description={item.description}
                qtdLikes={item.likes}
                likePhoto={likePhoto}
                imgLike={imgLike}
              />
              <Comments comments={item.comentarios} addComment={addComment} />
            </>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
