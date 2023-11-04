import { FC } from 'react';
import { IBill } from '../../types';

const Bill: FC<IBill> = ({total}) => {
  return (
    <div className="mt-auto align-self-end">
      <span>Total: {total} KGS</span>
    </div>
  );
};

export default Bill;