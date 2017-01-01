const React = require('react');

class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleInputChange(field, event) {
        this.setState({
            [field]: event.target.value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state

        if (!username || !password) {
            return;
        }

        this.props.onSubmit({
            username,
            password
        })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        id="test-username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange.bind(this, 'username')}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        id="test-password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange.bind(this, 'password')}
                    />
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    onSubmit: React.PropTypes.func,
}

module.exports = LoginForm;
