import React, { useState } from "react";
import { Grid, Input, Text, Button } from "../elements";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch(authAction.logInFB(email, password));
  };

  return (
    <>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0">
          <Input
            label="아이디"
            placeholder="아이디(Email)를 입력해주세요."
            _onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Button text="로그인하기" bg="#C4C4C4" _onClick={login} />
      </Grid>
    </>
  );
};

export default Login;
