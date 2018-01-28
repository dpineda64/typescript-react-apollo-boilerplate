import * as React from 'react';

interface Props {
  message: string;
  type?: string;
  icon?: string;
}

const notification: React.SFC<Props> = (props) => {
  return (
    <div className="m-ntf" data-type={props.type}>
      {props.icon && <i className={props.icon} />}
      <span> {props.message} </span>
    </div>
  );
};

export default notification;
