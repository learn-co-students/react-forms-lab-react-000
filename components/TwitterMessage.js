const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingChars: props.maxChars,
      text: '' 
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var maxChars = this.props.maxChars;
    var chars = event.target.value.length;
    var text = event.target.value;
    var remainingCharacters = maxChars - chars;
    this.setState({
      remainingChars: remainingCharacters,
      text: text
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.text}/>
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
