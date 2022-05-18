import React, { Component } from 'react';

class InputDataNumber extends Component {
    constructor(props){
        super(props);

        this.state = {
            label:'',
            ref: '',
            value: ''
        };
    };
    render(){
        return(
            <div className='Input-data'>
			  <label>{this.props.label}</label>
			  <input 
                type="number" 
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={(event) => this.setState({value: event.target.value })}

              />
			</div>
        )
    }
}
export default InputDataNumber;