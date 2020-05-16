const obterInformacoes = async (setInformacoes) => {
    const infoHttp = await fetch("http://localhost:3030/feed");
    const infoJson = await infoHttp.json();

    setInformacoes(infoJson);
}

export default obterInformacoes;