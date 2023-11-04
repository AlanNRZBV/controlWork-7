import { useState } from 'react';
import { IMenuItem, IOrderItem } from '../../types';
import MenuItem from '../../components/MenuItem/MenuItem.tsx';
import '../../styles/material-icons/icons.css';
import Message from '../../components/Message/Message.tsx';
import OrderItem from '../../components/OrderItem/OrderItem.tsx';

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

  const addOrderItem = (index: number, name: string, price: number) => {
    console.log(index, name, price, 'test');
    const ordersCopy = [...orders]
    const currentItem = {
      name: name,
      price: price,
      quantity: 1
    }
    ordersCopy.push(currentItem)
    setOrders(ordersCopy)
  };

  const noOrdersMsg = 'Orders is empty!';

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col border border-1 me-2">
          {orders.length === 0 ? <Message text={noOrdersMsg} />
            :
            <div>
              {orders.map((item, index)=>(
                <OrderItem key={index} quantity={1} name={item.name} price={item.price}/>
              ))}
            </div>}
        </div>
        <div className="col border border-1 ms-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              price={item.price}
              type={item.type}
              onItemClick={() => addOrderItem(index, item.name, item.price)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
