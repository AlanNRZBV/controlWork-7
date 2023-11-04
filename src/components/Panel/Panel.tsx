import { FC } from 'react';
import { IPanel } from '../../types';

const Panel: FC<IPanel> = ({ title, children, style }) => {
  const defaultStyle = 'text-center ' + style;

  return (
    <div className={defaultStyle}>
      <span className="d-block mb-3 fw-bold text-primary">{title}</span>
      {children}
    </div>
  );
};

export default Panel;
