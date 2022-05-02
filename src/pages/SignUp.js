import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/actions/authAction";
import { Grid, Input, Text, Button } from "../elements";

const SignUp = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [userName, setUserName] = useState("");

  const signUp = () => {
    dispatch(authAction.signUpFB(email, password, userName));
  };

  return (
    <Grid padding="16px 16px">
      <Text size="32px" bold>
        회원가입
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
          label="닉네임"
          placeholder="닉네임을 입력해주세요."
          _onChange={(e) => {
            setUserName(e.target.value);
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

      <Grid padding="16px 0">
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          type="password"
          _onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
      </Grid>

      <Button margin="16px 0" text="회원가입하기" _onClick={signUp} />
    </Grid>
  );
};

export default SignUp;
