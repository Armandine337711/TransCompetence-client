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
<<<<<<< HEAD
			  <label>{this.props.label}</label>
			  <input
=======
			  <label>{this.props.label} </label>
			  <input 
>>>>>>> 8df600d525acefb26906ca9dd6ad9422e836a462
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