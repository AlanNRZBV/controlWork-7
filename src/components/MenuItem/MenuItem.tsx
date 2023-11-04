import { FC } from 'react';
import { IMenuItem } from '../../types';

const MenuItem: FC<IMenuItem> = ({ name, price, type, onItemClick }) => {
  const iconsArray: string[] = ['restaurant', 'water_medium'];

  const menuItemBgStyles: string[] = ['bg-info bg-gradient bg-opacity-10', 'bg-warning bg-gradient bg-opacity-10'];

  let variableIcon: string;
  let variableMenuBg = 'card mb-3 ';

  if (type === 'drink') {
    variableIcon = iconsArray[1];
    variableMenuBg += menuItemBgStyles[0];
  } else {
    variableIcon = iconsArray[0];
    variableMenuBg += menuItemBgStyles[1];
  }

  return (
    <div onClick={onItemClick} className={variableMenuBg}>
      <div className="card-body d-flex">
        <span className="material-symbols-outlined">{variableIcon}</span>
        <span className="mx-2 fw-bold">{name}</span>
        <span>
          Price: <b>{price}</b> KGS
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
