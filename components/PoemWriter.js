const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.updatePoem = this.updatePoem.bind(this);
    this.validatePoem = this.validatePoem.bind(this);

    this.state = {
      poem: '',
      valid: false
    };
  }

  updatePoem(event){
    this.setState(Object.assign({}, this.state, {
      poem: event.target.value
    }), this.validatePoem)
  }

  validatePoem(){
    let poemLines = this.state.poem.split('\n');
    var goodPoem = false;
    if (poemLines.length == 3){
      goodPoem = poemLines.reduce((previous, line, index, rows) => {
        previous == undefined ? previous = true : previous;
        if(index == 1){
          return (line.trim().split(' ').length == 3) && previous
        }else if(index == 0 || index == 2){
          return (line.trim().split(' ').length == 5) && previous
        }else{
          return false
        }
      })
    }else{
      goodPoem = false
    }
    debugger;
    this.setState(Object.assign({}, this.state, {valid: goodPoem}))
  }

  render() {
    return (
      <div>
        <textarea value={this.state.poem} onChange={this.updatePoem} rows="3" cols="60" />
        {this.state.valid ? null : <div id="poem-validation-error" style={{color: 'red'}}>'This poem is not written in the right structure!'</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
