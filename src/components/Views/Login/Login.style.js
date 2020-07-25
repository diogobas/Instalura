import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputs: {
    width: width*0.8,
    textAlign: 'center',
    marginTop:40,
    fontSize:30
  },
  buttonView: {
    alignItems: 'center',
    marginBottom: 50
  },
});