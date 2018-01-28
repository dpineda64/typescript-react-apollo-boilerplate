import * as React from 'react';
namespace StateMessages {
  /**
   * error
   * @param props expects:
   */
  export const error: React.SFC<any> = (props) => {
    return (
      <div className="error">
        Error
      </div>
    );
  };
  /**
   * Loading message
   */
  export const loading: React.SFC<any> = () => {
    return (
      <div className="loader">
        loading
      </div>
    );
  };
  /**
   * Auth required message
   */
  export const auth: React.SFC<any> = () => {
    return (
      <div className="loader">
        Authenticate
      </div>
    );
  };
  /**
   * Empty message
   */
  export const empty: React.SFC<any> = (props?) => {
    return  (
      <div className={`state__message state__message--empty ${props.align}`}>
        <i className="jam-cactus"/>
        <span className="message">
          {props.message}
        </span>
      </div>
    );
  };
}

export default StateMessages;
