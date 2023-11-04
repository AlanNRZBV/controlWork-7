import React from 'react';

export interface IMenuItem {
  name: string;
  price: number;
  type: string;
  onItemClick?: React.MouseEventHandler;
}

export interface IOrderItem extends IMenuItem {
  quantity: number;
  type?: string;
  onChangeQuant?: (name: string, behavior: boolean, reset: boolean) => void;
}

export interface IMessage {
  text: string;
}

export interface IBill {
  total: number;
}

export interface IButton {
  innerText?: string;
  onClick: () => void;
  style?: string;
}
export interface IPanel extends React.PropsWithChildren {
  title: string;
  style: string;
  children: React.ReactNode;
}
