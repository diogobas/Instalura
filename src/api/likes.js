export const imgLike = (liked) => {
    if (liked) {
        return require("../../res/img/s2-checked.png");
    } else {
        return require("../../res/img/s2.png")
    }
}

export const likePhoto = (liked, likes) => {
    let qtd = likes;

    if (liked) {
      qtd--;
    } else {
      qtd++;
    }

    return [!liked, qtd];
}
