import React from 'react';

export interface IMenuItem {
  name: string,
  price: number,
  type: string
  onItemClick?: React.MouseEventHandler
}

export interface IOrderItem extends IMenuItem{
  quantity: number,
  type?: string
}

export interface IMessage {
  text: string
}