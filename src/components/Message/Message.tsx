import { FC } from 'react';
import { IMessage } from '../../types';

const Message: FC<IMessage> = ({text}) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Message;