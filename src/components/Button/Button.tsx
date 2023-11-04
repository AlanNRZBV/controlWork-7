import { FC } from 'react';
import { IButton } from '../../types';

const Button: FC<IButton> = ({ onClick, innerText, style }) => {
  let buttonStyle = 'btn btn-primary';

  if (style) {
    buttonStyle = style;
  }

  return (
    <button onClick={onClick} type="button" className={buttonStyle}>
      {innerText}
    </button>
  );
};

export default Button;
