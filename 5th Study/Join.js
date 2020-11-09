import React, {useState} from 'react';

const Join = () => {
  const [form, setForm] = useState({
    id:'',
    pwd:'',
    repwd:'',
    username:'',
    phoneNum:''
  });
  const {id, pwd, repwd, username, phoneNum, sex, birthday} = form;
  const onChange = e => {
    const nextForm ={
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert('id: '+ id +'\n이름: ' + username +'\n생년월일: '+ birthday +'\n성별:  '+ sex +'\n전화번호: '+ phoneNum)
    setForm({
      id:'',
      pwd:'',
      repwd:'',
      username:'',
      phoneNum:''
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>회원가입</h1>
      <input
        type="text"
        name="id"
        placeholder="아이디"
        value={id}
        onChange={onChange}
      /><br />
      <input
        type="text"
        name="pwd"
        placeholder="비밀번호"
        value={pwd}
        onChange={onChange}
      /><br />
      <input
        type="text"
        name="repwd"
        placeholder="비밀번호 재확인"
        value={repwd}
        onChange={onChange}
      /><br />
      <input
        type="text"
        name="username"
        placeholder="이름"
        value={username}
        onChange={onChange}
      /><br />
      <input
        type="date"
        name="birthday"
        placeholder="생년월일"
        value={birthday}
        onChange={onChange}
      /><br />
      <select name="sex">
        <option value="female">여성</option>
        <option value="male">남성</option>
      </select><br />
      <input
        type="text"
        name="phoneNum"
        placeholder="휴대전화"
        value={phoneNum}
        onChange={onChange}
        onKeyPress={onKeyPress}
      /><br />
      <button onClick={onClick}>가입</button>
    </div>
  );
};

export default Join;
