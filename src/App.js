import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./styles.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";

export default function App() {
  return (
    <BrowserRouter>
      {
        //BrouserRouterはRouter設定する場所に必要
      }
      <div className="App">
        {
          //Linkはハイパーリンクを表示するのに必要
        }
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        {
          //Switchの中でどのパスの場合にどのコンポーネントを表示するかを決められる
        }
        <Route exact path="/">
          <Home />
        </Route>

        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />

        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
