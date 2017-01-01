const React = require('react');

function countWords(line) {
    return line.split(' ').filter(word => word).length
}

function validatePoem(poem) {
    const poemLines = poem.split('\n').filter(line => line)
    const correctLineCount = poemLines.length === 3
    const correctWordCount = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5
    return correctLineCount && correctWordCount
}

class PoemWriter extends React.Component {
    constructor() {
        super();

        this.state = {
            poem: '',
            isValid: false,
        };

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const poem = event.target.value

        if (poem) {
            this.setState({
                poem: poem,
                isValid: validatePoem(poem)
            })
        }
    }

    render() {
        const errorMessage = !this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null

        return (
            <div>
                <h3>Poem Rules:</h3>
                <ol>
                    <li>The Poem can only cotain 3 lines</li>
                    <li>The First line only contains 5 words</li>
                    <li>The Second line only contains 3 words</li>
                    <li>The Third line only contains 5 words</li>
                </ol>
                <textarea
                    rows="3"
                    cols="60"
                    value={this.state.poem}
                    onChange={this.handleChange}
                />
                {errorMessage}
          </div>
        );
    }
}

module.exports = PoemWriter;
