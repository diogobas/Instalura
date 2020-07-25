const addComment = (text, userName) => {
    const newComment = {
      date: Date.now(),
      text,
      userName
    };

    return newComment;
};

export default addComment;