import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this._handleChange = this.handleChange.bind(this);
        this._handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert('A name was submitted: '+ this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>
                <label>Name:
                    <input type="text" value=
                    {this.state.value} onChange={this._handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NameForm;