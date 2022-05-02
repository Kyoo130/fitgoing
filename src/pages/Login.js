import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/actions/authAction";

import { Grid, Input, Text, Button } from "../elements";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    dispatch(authAction.logInFB(email, password));
  };

  const socialLogin = (event) => {
    const {
      target: { name },
    } = event;
    dispatch(authAction.socialLoginFB(name))
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
            value={email}
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
            value={password}
            is_submit
            onSubmit={login}
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
        <Button
          margin="16px 0"
          text="로그인하기"
          bg="#C4C4C4"
          hover_bg
          _onClick={login}
        />

        <Grid>
          <Text bold margin="32px 0 16px 0" size="20px">
            SNS 로그인
          </Text>
          <Grid is_flex>
            <Button
              name="google"
              margin={"8px 0"}
              bg="#B24334"
              text="Google"
              _onClick={socialLogin}
            />
            <Button
              name="facebook"
              margin={"8px 0"}
              bg="#3F64B7"
              text="FaceBook"
              _onClick={socialLogin}
            />
            <Button
              name="github"
              margin={"8px 0"}
              bg="#444444"
              text="GitHub"
              _onClick={socialLogin}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
