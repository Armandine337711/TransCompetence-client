import React, { Component } from 'react';
<<<<<<< HEAD
=======
import '../style/style.css'
>>>>>>> ff855b16a3b93b74d73340c79ebe05dcfa29193e

class InputDataText extends Component {
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
			  <label>{this.props.label} </label>
			  <input 
                type="Text" 
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={(event) => this.setState({value: event.target.value })}
              />
			</div>
        )
    }
}
export default InputDataText;