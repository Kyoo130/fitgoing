import React from "react";
import styled from "styled-components";
import { errorMessage } from "../shared/validation";

import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    name,
    label,
    errorData,
    placeholder,
    _onChange,
    _onBlur,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          name={name}
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </Grid>
    );
  }

  return (
    <>
      <Grid>
        {label && <Text margin="10px 0">{label}</Text>}
        {is_submit ? (
          <ElInput
            name={name}
            type={type}
            required
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            onBlur={_onBlur}
            required
          />
        )}
        {errorData && (
          <Text margin={"5px 0"} color={"red"}>
            {errorData[name] !== true ? errorMessage[errorData[name]] : ""}
          </Text>
        )}
      </Grid>
    </>
  );
};

Input.defaultProps = {
  multiLine: false,
  name: null,
  label: false,
  errorData: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  is_submit: false,
  onSubmit: () => {},
  _onChange: () => {},
  _onBlur: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #c4c4c4;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  border: 1px solid #c4c4c4;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
