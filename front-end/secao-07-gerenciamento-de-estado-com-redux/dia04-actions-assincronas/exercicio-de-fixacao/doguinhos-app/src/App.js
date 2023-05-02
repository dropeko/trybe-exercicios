// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchDogImage } from "./redux/actions";
import "./style.css"

class App extends React.Component {
  render() {
    const { isFetching, imageURL, dispatch } = this.props;

    if (isFetching) return (
      <>
        <h1>Clique e receba um Doguinho aleatório</h1>
        <p>Carregando...</p>
      </>
    );

    return (
      <div>
        <h1>Clique e receba um Doguinho aleatório</h1>
        <button
          onClick={() => { dispatch(fetchDogImage()) }}
          type="button"
        >
          Novo Doguinho
        </button>
        {
          imageURL &&
          <img
            src={imageURL}
            alt="Imagem de um cachorro aleatório"
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
});

export default connect(mapStateToProps)(App);
