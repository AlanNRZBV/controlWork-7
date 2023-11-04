import { FC } from 'react';
import { IOrderItem } from '../../types';
import Button from '../Button/Button.tsx';

const OrderItem: FC<IOrderItem> = ({name, price, quantity,onChangeQuant}) => {
  return (
    <div className="d-flex justify-content-between">
      <span>{name}</span>
      <Button onClick={()=>onChangeQuant?.(name, false,false)} innerText="Remove"/>
      <span>x{quantity}</span>
      <Button onClick={()=>onChangeQuant?.(name, true,false)} innerText="Add"/>
      <span>{price}KGS</span>
      <Button style="ms-2 btn-close" onClick={()=>onChangeQuant?.(name, false,true)}/>
    </div>
  );
};

export default OrderItem;