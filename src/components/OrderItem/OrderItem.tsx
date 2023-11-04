import { FC } from 'react';
import { IOrderItem } from '../../types';
import Button from '../Button/Button.tsx';

const OrderItem: FC<IOrderItem> = ({ name, price, quantity, onChangeQuant }) => {
  return (
    <div className="d-flex mb-3 justify-content-between align-items-center border border-1 rounded-3 px-2 py-2">
      <span className="fw-bold">{name}</span>
      <div>
        <Button onClick={() => onChangeQuant?.(name, false, false)} innerText="Remove" style="btn btn-danger" />
        <span className="mx-2">x{quantity}</span>
        <Button onClick={() => onChangeQuant?.(name, true, false)} innerText="Add" style="btn btn-success" />
      </div>
      <span>
        <b>{price}</b> KGS
      </span>
      <Button style="ms-2 btn-close" onClick={() => onChangeQuant?.(name, false, true)} />
    </div>
  );
};

export default OrderItem;
