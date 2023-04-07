import React from "react";

class FetchRandomUser extends React.Component {
  constructor() {
    super()

    this.fetchRandomUser = this.fetchRandomUser.bind(this)

    this.state = {
      loading: true,
      randomPeople: [],
    }
  }

  async fetchRandomUser() {
    const requestRandomUser = await fetch('https://api.randomuser.me/');
    const randomUserToJson = await requestRandomUser.json()
    console.log(randomUserToJson.results[0].email);
    this.setState({
      randomPeople: randomUserToJson.results[0]
    })
  }

  componentDidMount(){
    this.fetchRandomUser()
  }

  render() {
    return (
      <div className="randomPerson">
        <h2>Dados da pessoa</h2>
      </div>
    )
  }
}

export default FetchRandomUser;