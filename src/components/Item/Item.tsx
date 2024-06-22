import React from 'react'
import { ItemType } from '../../types/item';

interface ItemProps {
    item: ItemType;
  }
  function Item({ item }: ItemProps) {
    if (item.state !== 'active') {
        return null; 
      }
    let currency = item.currency_code;
    currency = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : currency + ' ';
    let level = item.quantity < 10 ? 'level-low' : item.quantity < 20 ? 'level-medium' : 'level-high';

    return (
        <div className="item">
            <div className="item-image">
            <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                <img src={item.MainImage.url_570xN} alt="" />
            </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title.length > 50? item.title.slice(0,50) + '...' : item.title}</p>
                <p className="item-price">{currency}{item.price}</p>
                <p className={'item-quantity '+level}>{item.quantity} left</p>
            </div>
        </div>
    );
  }
  
  export default Item;