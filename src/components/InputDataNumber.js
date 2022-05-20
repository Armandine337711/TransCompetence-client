import React, { Component } from 'react';
import '../style/style.css'

class InputDataNumber extends Component {
    constructor(props){
        super(props);
        let IDs = this.props.label.substring(0,3)

        this.state = {
            id: IDs,
            value: ''
        };
        this.handleChange = this.handleChange.bind(this)
    };
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    
    render(){
        return(
            <div className='Input-data'>
            
            <label>{this.props.label} </label>
            <input 
                type="number" 
                id = {this.state.id}
                value= {this.state.value}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
        
              />
			</div>
        )
    }
}
export default InputDataNumber;