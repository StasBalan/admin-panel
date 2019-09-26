import React, { Component } from 'react';

import TextField from '../../components/TextField';

import './FormStyle.css';

class Form extends Component {

  state = {
    ...this.props.fields.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.id]: null
      }),
      {}
    )
  }

  handleChange = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render () {
    const { fields } = this.props;
    const formFields = fields.map((field) => {
      return (
        <div key={field.id} className='field'>
          <TextField
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
            onChange={event => this.handleChange(event, field.id)}/>
        </div>
      );
    })

    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <h1 className='form-title'>LOGIN</h1>
        {formFields}
        <button className='form-button'>LOGIN</button>
      </form>
    );
  }
}

export default Form;
