const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  onUsernameChange(event){
    this.setState(Object.assign({}, this.state, {
      username: event.target.value
    }))
  }

  onPasswordChange(event){
    this.setState(Object.assign({}, this.state, {
      password: event.target.value
    }))
  }

  handleSubmit(event){
    event.preventDefault()
    if (this.state.username != '' && this.state.password != ''){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.onUsernameChange} id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.onPasswordChange} id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
