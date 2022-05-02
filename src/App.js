import "./App.css";
import { useEffect } from "react";
import { Route } from "react-router-dom";

import {useDispatch} from "react-redux";
import {authAction} from "./redux/actions/authAction";
import {apiKey} from "./shared/firebase";

import { Home, Login, Post, SignUp } from "./pages";
import { Footer, Header } from "./components";

function App() {
  const dispatch = useDispatch();

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = !!sessionStorage.getItem(_session_key);

  useEffect(() => {
    if(is_session){
      dispatch(authAction.logInCheckFB());
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={Login} />
      <Route path="/post" exact component={Post} />
      <Footer />
    </div>
  );
}

export default App;
