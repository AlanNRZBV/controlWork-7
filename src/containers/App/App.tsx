import { useState } from 'react';
import { IMenuItem, IOrderItem } from '../../types';
import MenuItem from '../../components/MenuItem/MenuItem.tsx';
import '../../styles/material-icons/icons.css';
import Message from '../../components/Message/Message.tsx';
import OrderItem from '../../components/OrderItem/OrderItem.tsx';
import Bill from '../../components/Bill/Bill.tsx';

const App = () => {
  const [orders, setOrders] = useState<IOrderItem[]>([]);

  const menuItems: IMenuItem[] = [
    { name: 'Hamburger', price: 80, type: 'food' },
    { name: 'Cheeseburger', price: 90, type: 'food' },
    { name: 'Fries', price: 45, type: 'food' },
    { name: 'Coffee', price: 70, type: 'drink' },
    { name: 'Tea', price: 50, type: 'drink' },
    { name: 'Cola', price: 40, type: 'drink' },
  ];

  const addOrderItem = ( name: string, price: number) => {
    const ordersCopy = [...orders];
    const isAdded = ordersCopy.findIndex((order) => order.name === name);
    if (isAdded !== -1) {
      ordersCopy[isAdded].quantity += 1;
      setOrders(ordersCopy);
    } else {
      const currentItem = {
        name: name,
        price: price,
        quantity: 1,
      };
      ordersCopy.push(currentItem);
      setOrders(ordersCopy);
    }

  };

  const getTotal = () => {
    let total = 0;

    for (let i = 0; i < orders.length; i++) {
      total += orders[i].price * orders[i].quantity;
    }

    return total;
  };

  const noOrdersMsg = 'Orders is empty!';

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col border border-1 me-2 d-flex">
          {orders.length === 0 ? (
            <Message text={noOrdersMsg} />
          ) : (
            <div className="d-flex flex-column flex-grow-1">
              {orders.map((item, index) => (
                <OrderItem key={index} quantity={item.quantity} name={item.name} price={item.price} />
              ))}
              <Bill total={getTotal()} />
            </div>
          )}
        </div>
        <div className="col border border-1 ms-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              price={item.price}
              type={item.type}
              onItemClick={() => addOrderItem( item.name, item.price)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
