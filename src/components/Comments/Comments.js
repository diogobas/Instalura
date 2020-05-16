import React, { useState } from 'react';
import { Text, FlatList, TextInput, Image, View, TouchableOpacity } from 'react-native';
import style from './style';

const Comments = ({ comments }) => {
    const [stateComments, setComments] = useState(comments);


    const addComment = () => {
      inputField.clear();

      const newComment = {
        date: Date.now(),
        text: contentComment,
        userName: "Tcholas"
      }

      setComments([...stateComments, newComment]);
    };

    let contentComment = "";
    let inputField;

    return (
        <>
          <FlatList
            data={stateComments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={style.inline}>
                <Text>{item.userName} </Text>
                <Text>{item.text}</Text>
              </View>
            )}
          />
          <View style={style.inline}>
            <TextInput
              ref={textInput => inputField = textInput}
              placeholder={"Add a comment..."}
              style={style.container}
              onChangeText={text => contentComment = text}
            />
            <TouchableOpacity onPress={addComment}>
              <Image
                source={require("../../../res/img/send.png")}
                style={style.imgSend}
              />
            </TouchableOpacity>
          </View>
        </>
    );
};

export default Comments;