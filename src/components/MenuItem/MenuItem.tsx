import { FC } from 'react';
import { IMenuItem } from '../../types';

const MenuItem: FC<IMenuItem> = ({ name, price, type }) => {

  const iconsArray: string[] =[
    'restaurant', 'water_medium'
  ]

  let variableIcon = ''

  if (type === 'drink'){
    variableIcon = iconsArray[1]
  }else{
    variableIcon = iconsArray[0]
  }

  return (
    <div className="card">
      <div className="card-body">
        <span className="material-symbols-outlined">{variableIcon}</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
