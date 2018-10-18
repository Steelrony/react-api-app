import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {value: ''};
        // this.state = {value: 'Please write an essay about your favourite DOM element'};
        this.state = {value: 'coconut'};
        this._handleChange = this.handleChange.bind(this);
        this._handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        // this.setState({value: event.target.value.toUpperCase()});
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favourite flavour is: '+ this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>
                <label>
                    Please select your favourite flavour:  
                    <select value={this.state.value} 
                    onChange={this._handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    {/* Name:  */}
                    {/* Essay:  */}
                    {/* <textarea value={this.state.value} 
                    onChange={this._handleChange} /> */}
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NameForm;