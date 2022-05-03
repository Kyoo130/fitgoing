export const emailCheck = (email) => {
  let _reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return _reg.test(email);
};

export const userNameCheck = (name) => {
  let _reg = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

  return _reg.test(name);
};

export const passwordCheck = (pwd) => {
  let _reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

  return _reg.test(pwd);
};

// const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
// const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

export const ERROR_MSG = {
  required: "필수 정보입니다.",
  invalidId: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
  invalidPw: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
  invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
  invalidUserName: "2~16자의 한글, 영문 대 소문자, 숫자만 사용 가능합니다.",
};
