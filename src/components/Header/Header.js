import React from 'react';
import { Text, Image, View } from "react-native";
import style from "./style.js";

const Header = ({userName, urlImage}) => {
    return (
        <View style={style.header}>
            <Image source={{uri: urlImage}} style={style.image} />
            <Text>{userName}</Text>
        </View>
    );
}

export default Header;