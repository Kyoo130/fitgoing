import { authService } from "../../shared/firebase";
import firebase from "firebase/app";

function signUpFB(email, password, user_name) {
  return async (dispatch, getState, { history }) => {
    await authService
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        authService.currentUser
          .updateProfile({ displayName: user_name })
          .then(() => {
            dispatch({
              type: "SET_USER",
              payload: {
                user_name: user_name,
                id: email,
                user_profile: "",
                uid: user.user.uid,
              },
            });
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
}

function logInFB(email, password) {
  return async (dispatch, getState, { history }) => {
    await authService
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        authService
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log(user);
            dispatch({
              type: "SET_USER",
              payload: {
                user_name: user.user.displayName,
                id: email,
                user_profile: "",
                uid: user.user.uid,
              },
            });
            history.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      });
  };
}

function logInCheckFB() {
  return async (dispatch, getState, { history }) => {
    await authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          payload: {
            user_name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          },
        });
      } else {
        dispatch({
          type: "LOG_OUT",
        });
      }
    });
  };
}

function socialLoginFB(name) {
  return async (dispatch, getState, { history }) => {
    let provider;
    if (name === "google") {
      console.log("google 작동");
      provider = new firebase.auth.GoogleAuthProvider();
    } else if (name === "facebook") {
      console.log("facebook 작동");
      provider = new firebase.auth.FacebookAuthProvider();
    } else if (name === "github") {
      console.log("github 작동");
      provider = new firebase.auth.GithubAuthProvider();
    }
    await authService
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        authService
          .signInWithPopup(provider)
          .then((user) => {
            console.log(user);
            dispatch({
              type: "SET_USER",
              payload: {
                user_name: user.user.displayName,
                id: user.user.email,
                user_profile: user.user.photoURL,
                uid: user.user.uid,
              },
            });
            history.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      });
  };
}

function logOutFB() {
  return async (dispatch, getState, { history }) => {
    await authService.signOut().then(() => {
      dispatch({
        type: "LOG_OUT",
      });
      history.replace("/login");
    });
  };
}

export const authAction = {
  signUpFB,
  logInFB,
  logInCheckFB,
  logOutFB,
  socialLoginFB,
};
