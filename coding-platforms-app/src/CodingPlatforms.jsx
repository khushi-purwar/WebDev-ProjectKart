import React from 'react'
import Data from './Data'

import Card from './Card'

const Coding = () => {
    return(
    Data.map(card => {
        return(
          <Card
            key = {card.id}
            title = {card.title}
            img = {card.img}
            link = {card.link}
          />
        )
    }))
}

export default Coding;