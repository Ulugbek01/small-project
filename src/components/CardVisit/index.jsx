import React from 'react'
import {useParams} from 'react-router-dom';
import { tools } from '../../utils/tools';

export const CardVisit = () => {

  const {id} = useParams();

  return (
    <div>
      {tools.filter((value) => value.id === Number(id.replace(':', ''))).map((item) => 
        <div key={item.id}>
          <p style={{color:'#fff'}}>{item.name}</p>
        </div>
      )}
    </div>
  )
}

export default CardVisit;