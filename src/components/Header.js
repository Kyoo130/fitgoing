import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text, Button } from "../elements";
import { history } from "../redux/reducers";
import { apiKey } from "../shared/firebase";
import { authAction } from "../redux/actions/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const { is_login } = useSelector((state) => state.auth);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = !!sessionStorage.getItem(_session_key);

  if (is_login && is_session) {
    return (
      <Grid is_flex padding="16px 16px">
        <Grid>
          <Text size="24px" bold color="#21BF48">
            Family Space
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            text="로그아웃"
            hover_bg
            _onClick={() => {
              dispatch(authAction.logOutFB());
            }}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid is_flex padding="16px 16px">
      <Grid>
        <Text size="24px" bold color="#21BF48">
          Family Space
        </Text>
      </Grid>
      <Grid is_flex>
        <Button
          text="로그인"
          hover_bg
          _onClick={() => {
            history.push("/login");
          }}
        />
        <Button
          text="회원가입"
          hover_bg
          _onClick={() => {
            history.push("/signup");
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
