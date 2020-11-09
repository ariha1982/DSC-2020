import React, {useState} from 'react';

const Login = () => {
  const [form, setForm] = useState({
    id:'',
    pwd:'',
  });
  const {id, pwd} = form;
  const onChange = e => {
    const nextForm ={
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert('id: ' + id)
    setForm({
      id:'',
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>로그인</h1>
      <input
        type="text"
        name="id"
        placeholder="아이디"
        value={id}
        onChange={onChange}
      /><br />
      <input
        type="password"
        name="pwd"
        placeholder="비밀번호"
        value={pwd}
        onChange={onChange}
        onKeyPress={onKeyPress}
      /><br />
      <button onClick={onClick}>로그인</button><br />
      <button onClick={onClick}>회원가입</button>
    </div>
  );
};

export default Login;
