import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/navigator.scss';

function Navigator() {
  const { data } = useContext(MainContext);

  return (
    <nav>
        <ul>
          {data && data.map((categories, index) => {
              return (
                <li key={index}><a href={`#${categories.name.toLowerCase()}`}>{categories.name.toUpperCase()}</a></li>
              )
            })
          }
        </ul>
    </nav>
  )
}

export default Navigator