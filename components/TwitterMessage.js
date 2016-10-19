const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      message: ''
    };
  }

  handleChange(event){
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.handleChange} type="text" />
        <p>
          You have {this.props.maxChars - this.state.message.length} characters left
        </p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
