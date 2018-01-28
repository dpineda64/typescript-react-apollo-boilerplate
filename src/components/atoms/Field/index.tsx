import * as React from 'react';

interface Props {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
}

class field extends React.Component<Props, any>{
  state = {
    isEmpty: true,
    hasError: false,
    error: '',
  };
  input: any;
  private validate = (e: any) => {
    const target = e.target;
    const type = target.type;

    const { error, hasError } = this.checkErrors(target);

    this.setState({
      hasError,
      error,
      isEmpty: (target.value === ''),
    });
  }

  private checkErrors = (target: any)  => {
    const { value, required, type } = target;
    let hasError = false;
    let error = '';

    if (value === '' && required) {
      hasError = true;
      error = 'field is required';
    }

    return { hasError, error };
  }

  render() {
    const { label, name, type = 'text', placeholder, required = false } = this.props;
    const { isEmpty, hasError } = this.state;
    return (
      <div className={`m-field ${(hasError) ? 'with-error' : ''}`}>
        <input
          id={name}
          type={type}
          required={required}
          className={(isEmpty) ? 'empty' : ''}
          name={name}
          onBlur={this.validate}
          ref={(input) => { this.input = input; }}
        />
        <label htmlFor={name}>
          {label}
        </label>
        <div className="bar"></div>
      </div>
    );
  }
}

export default field;
