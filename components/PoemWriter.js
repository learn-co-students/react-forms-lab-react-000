const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: false 
    };
    
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    var text = event.target.value;
    var isValid = this.state.isValid;

    if (this.isValid(text)) {
      isValid = true;
    }

    this.setState({text: text, isValid: isValid});
  }

  isValid(text) {
    var lines = text.split(/\r\n|\r|\n/);
    var lineCount = lines.length;
    if (!lineCount === 3) { 
      return false; 
    }
    
    if (lineCount === 3) {
      var lineCount1 = lines[0].trim().split(" ").length;
      var lineCount2 = lines[1].trim().split(" ").length;
      var lineCount3 = lines[2].trim().split(" ").length;
      if (lineCount1 === 5 && lineCount2 === 3 && lineCount3 === 5 ){ 
        return true;
      } else {
        return false;
      }
    }
  }
  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleTextChange} />
        { !this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        : null }
      </div>
    );
  }
}

module.exports = PoemWriter;
