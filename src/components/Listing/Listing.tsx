import Item from '../Item/Item.tsx';

type ListingProps = {
  items : any[];
}


function Listing( {items}: ListingProps ) {
  return (

    <div className='item-list'>
      {items.map((item) => (
        <Item item={item} key={item.listing_id} />
      ))}
    </div>
  )
}

export default Listing
