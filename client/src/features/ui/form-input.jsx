import { PropTypes } from "prop-types";

function FormInput ({ type, name, label, placeholder, value, onChange}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        name={name}
        id={name}
        placeholder={placeholder} 
        className="cluster" 
        value={value}
        onChange={onChange}
      />
    </>
  )
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
}

export default FormInput;