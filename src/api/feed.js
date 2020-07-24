import { Platform } from "react-native";

const obterInformacoes = async (setInformacoes) => {
    //const infoHttp = await fetch("http://104.163.188.217:3030/feed");
    const url = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

    const infoHttp = await fetch(`http://${url}:3030/feed`);

    const infoJson = await infoHttp.json();

    setInformacoes(infoJson);
}

export default obterInformacoes;