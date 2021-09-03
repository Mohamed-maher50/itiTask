import "./App.css";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import { Route, Switch } from "react-router";
import Register from "./components/Register";
import Home from "./components/Home";
import { Component } from "react";
import axios from "axios";
import Info from "./components/info";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      this.setState({
        data: res.data,
      })
    );
  };
  add = (ele) => {
    if (ele !== "undefined") {
      this.state.data.push(ele);
    }
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            path="/Register"
            render={() => <Register count={this.state.data} add={this.add} />}
          />
          <Route exact path="/Home" component={Home} />
          <Route
            exact
            path="/users"
            render={() => <Users data={this.state.data} />}
          />
          <Route
            path="/users/:id"
            render={(props) => <Info {...props} data={this.state.data} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
