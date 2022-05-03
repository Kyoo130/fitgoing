export const emailCheck = (email) => {
  let _reg =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  return _reg.test(email);
};

export const passwordCheck = (pwd) => {
  let _reg = /^[a-zA-Z0-9]{8,20}$/;
  return _reg.test(pwd);
};

export const userNameCheck = (name) => {
  let _reg = /^[가-힣a-zA-Z]{2,8}$/;
  return _reg.test(name);
};

export const errorMessage = {
  required: "필수 정보입니다.",
  invalidId: "이메일을 올바르게 입력해주세요.",
  invalidPw: "8~20자 영문 대 소문자, 숫자만 사용 가능합니다.",
  invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
  invalidUserName: "2~8자의 한글, 영문 대 소문자만 사용 가능합니다.",
};