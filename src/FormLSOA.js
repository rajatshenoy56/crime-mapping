import React from 'react';
import axios from 'axios';
import './form.css'
export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { lsoa_code: '', nov_pred:''};
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are submitting " + this.state.lsoa_code);
      axios.get(`http://127.0.0.1:8887/final_data.json`)
      .then(res => {
          for(var i = 0; i < res.data.length; i++) {
            var row = res.data[i]
            if(row.lsoa_code === this.state.lsoa_code)
            {  
              this.setState({nov_pred: row.pred11});
            }
          }
      });
    }
    myChangeHandler = (event) => {
      this.setState({lsoa_code: event.target.value});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>LSOA Code {this.state.lsoa_code}</h1>
        <p>Enter your LSOA Code, and submit:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <input
          type='submit'
        />
        <h1>Number of Crimes expected in the Current Month {this.state.nov_pred}</h1>
        </form>
      );
    }
  }

