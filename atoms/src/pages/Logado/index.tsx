import { Component } from "react";
import { AuthContext } from "../../contexts/Auth";
import { Home } from "../Home";

export class Logado extends Component {
  render() {
    return (
      <>
        <h1>Seila logado?</h1>
        <AuthContext>
          <Home></Home>
        </AuthContext>
      </>
    );
  }
}
