// import { useState } from 'react';
import { PropTypes } from "prop-types";
import FormInput from "../ui/form-input";
import { useFields } from './useFields';

function AuthForm({ 
  login = false,
  title, 
  btnLabel, 
  onSubmit 
}) {
  const { fields, handleInputChange } = useFields({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = fields;
  
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, email, password });
  }

  return (
    <div className="flow">
      <h1 className="text-center">{title}</h1>
      <div className="box">
        <form className="authform | flow" onSubmit={handleSubmit}>
          {login ? 
            ""
            :
            <FormInput 
              type="text"
              name="name"
              label="Name:"
              placeholder="Your Name"
              value={name}
              onChange={handleInputChange}
            />
          }

          <FormInput
            type="email"
            name="email"
            label="Email:"
            placeholder="Your email address"
            value={email}
            onChange={handleInputChange}
          />

          <FormInput 
            type="text"
            name="password"
            label="Pasword:"
            placeholder="Your password"
            value={password}
            onChange={handleInputChange}
          />

          <button type="submit" className="btn">
            {btnLabel}
          </button>
        </form>
      </div>
    </div>
  )
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  login: PropTypes.bool,
}

export default AuthForm;