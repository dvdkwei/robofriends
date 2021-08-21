import React from "react";
import Card from "./Card";

const CardList =  ({ robots }) => {
    return (
      <div className={'cardList'}>
          {
              robots.map( user => {
                   return <Card
                        key = {user.id}
                        name = {user.name}
                        email = {user.email}
                    />
                  }
              )
          }
      </div>
    );
}

export default CardList;