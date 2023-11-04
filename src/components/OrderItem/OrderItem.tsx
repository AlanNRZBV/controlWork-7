import { FC } from 'react';
import { IOrderItem } from '../../types';

const OrderItem: FC<IOrderItem> = ({name, price, quantity}) => {
  return (
    <div className="d-flex justify-content-between">
      <span>{name}</span>
      <span>x{quantity}</span>
      <span>{price}KGS</span>
    </div>
  );
};

export default OrderItem;