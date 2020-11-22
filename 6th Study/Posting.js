import React, {useState} from 'react';

  const Posting = () => {
    const [names, setNames] = useState([]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [nextId, setNextId] = useState(0);

    const onChangeTitle = (e) => setInputTitle(e.target.value);
    const onChangeContent = (e) => setInputContent(e.target.value);

    const remove = (id) => {
      const nextNames = names.filter((name) => name.id !== id);
      setNames(nextNames);
    };

    const onClick = () => {
      const nextNames=names.concat({
        id: nextId,
        title: inputTitle,
        content: inputContent
      });
      setNextId(nextId+1);
      setNames(nextNames);
      setInputTitle('');
      setInputContent('');
    };

    const nameList = names.map((name) => (
      <li
        key={name.id}
        onDoubleClick={()=>remove(name.id)}>
        {'제목: ' + name.title}
        <br />
        {'내용: ' + name.content}
      </li>
    ));

    const onKeyPress = e => {
      if (e.key === 'Enter') {
        onClick();
      }
    };

    return (
      <>
        <h1>게시판</h1>
        <input
          type="text"
          name="title"
          placeholder="글 제목"
          value={inputTitle}
          onChange={onChangeTitle}
        /><br />
        <input
          type="textarea"
          name="content"
          placeholder="내용"
          value={inputContent}
          onChange={onChangeContent}
        /><br />
        <button onClick={onClick}>작성</button>
        <ul>{nameList}</ul>
      </>
    );
};
export default Posting;
