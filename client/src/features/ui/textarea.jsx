import { PropTypes } from 'prop-types';

export default function TextArea({ onChange, value }) {
  return (
    <textarea 
      autoFocus
      value={value}
      className="textarea"
      onChange={onChange}
    />
  )
}

TextArea.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
}