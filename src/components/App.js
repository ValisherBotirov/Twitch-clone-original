import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamCreateContainer from "../redux/containers/StreamCreateContainer";
import RegisterContainer from "../redux/containers/RegisterContainer";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams" exact component={StreamShow} />
          <Route path="/streams/new" exact>
            <StreamCreateContainer />
          </Route>
          <Route path="/register" exact>
            <RegisterContainer />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
