import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import style from './style';

const Photo = ({ 
  urlPhoto,
  description,
  qtdLikes,
  likePhoto,
  imgLike 
}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(qtdLikes);

  const onLikePhoto = () => {
    const [newStateLiked, qtd] = likePhoto(liked, likes);

    setLikes(qtd);
    setLiked(newStateLiked);
  }

  return (
    <>
      <Image source={{uri: urlPhoto}} style={style.image} />
      <Text>{description}</Text>

      <View style={style.viewLike}>
        <TouchableOpacity onPress={onLikePhoto}>
          <Image source={imgLike(liked)} style={style.like} />
        </TouchableOpacity>

        <Text>Likes: {likes}</Text>
      </View>
    </>
  );
};

export default Photo;
