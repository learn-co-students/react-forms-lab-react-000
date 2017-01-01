const React = require('react');

class TwitterMessage extends React.Component {
    constructor() {
        super();

        this.state = {
            tweet: ''
        };

        this.handleTweet = this.handleTweet.bind(this);
    }

    handleTweet(event) {
        this.setState({
            tweet: event.target.value,
        })
    }

    render() {
        let remainingCharacters = (this.props.maxChars - this.state.tweet.length)

        return (
            <div>
                <strong>Your message:</strong>
                <input
                    type="text"
                    value={this.state.tweet}
                    onChange={this.handleTweet}
                />
                <p>Remaining Characters: {remainingCharacters}</p>
            </div>
        );
    }
}

TwitterMessage.propTypes = {
    maxChars: React.PropTypes.number,
}

TwitterMessage.defaultProps = {
    maxChars: 140,
}

module.exports = TwitterMessage;
