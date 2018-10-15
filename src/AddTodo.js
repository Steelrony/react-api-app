import React from 'react';

class AddTodo extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            name : "",
            msg : ""
        }
        this._handleTextChange = this.handleTextChange.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
    }

    handleTextChange(event){
        this.setState({name : event.target.value})
        this.setState({msg : ""})
    }

    submitTodo(){
        if(this.state.name === ""){
            this.setState({msg : "Name cannot be empty"})
        }
    }

    render(){
        return (
        <div>
            <b>{this.state.msg}</b>
            <input onChange={this._handleTextChange} />
            <input type="button" value="Submit" onClick={this.submitTodo} />
        </div>)
    }
}

export default AddTodo;