import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
   const cardComp = robots.map((user, i)=> <Card key={i} id={user.id} name={user.name} email={user.email} />);
   return (
      <div>
        {cardComp}
      </div>
   )
}

export default CardList;