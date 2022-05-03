import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../redux/actions/authAction";
import { emailCheck, passwordCheck, userNameCheck } from "../shared/validation";

import { Grid, Input, Text, Button } from "../elements";

const SignUp = () => {
  const dispatch = useDispatch();

  const [initialData, setInitialData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [errorData, setErrorData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const signUp = () => {
    const { email, userName, password } = initialData;
    dispatch(authAction.signUpFB(email, password, userName));
  };

  const checkRegex = (inputName) => {
    let result;
    const value = initialData[inputName];
    if (value.length === 0) {
      result = "required";
    } else {
      switch (inputName) {
        case "email":
          result = emailCheck(value) ? true : "invalidId";
          break;
        case "userName":
          result = userNameCheck(value) ? true : "invalidUserName";
          break;
        case "password":
          result = passwordCheck(value) ? true : "invalidPw";
          checkRegex("confirmPassword");
          break;
        case "confirmPassword":
          result =
            value === initialData["password"] ? true : "invalidConfirmPw";
          break;
        default:
          return;
      }
    }
    setErrorData((prev) => ({ ...prev, [inputName]: result }));
  };

  return (
    <Grid padding="16px 16px">
      <Text size="32px" bold>
        회원가입
      </Text>

      <Grid padding="16px 0">
        <Input
          name="email"
          label="아이디"
          placeholder="아이디(Email)를 입력해주세요."
          errorData={errorData}
          _onChange={(e) =>
            setInitialData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          _onBlur={(e) => checkRegex(e.target.name)}
        />
      </Grid>

      <Grid padding="16px 0">
        <Input
          name="userName"
          label="name"
          placeholder="닉네임을 입력해주세요."
          errorData={errorData}
          _onChange={(e) =>
            setInitialData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          _onBlur={(e) => checkRegex(e.target.name)}
        />
      </Grid>

      <Grid padding="16px 0">
        <Input
          name="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          errorData={errorData}
          _onChange={(e) =>
            setInitialData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          _onBlur={(e) => checkRegex(e.target.name)}
        />
      </Grid>

      <Grid padding="16px 0">
        <Input
          name="confirmPassword"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          type="password"
          errorData={errorData}
          _onChange={(e) =>
            setInitialData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          _onBlur={(e) => checkRegex(e.target.name)}
        />
      </Grid>
      <Button margin="16px 0" text="회원가입하기" _onClick={signUp} />
    </Grid>
  );
};

export default SignUp;
