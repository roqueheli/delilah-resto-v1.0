import React, { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import '../../styles/navigator.scss';

function Navigator() {
  const { prods } = useContext(MainContext);

  return (
    <>
      <nav>
          <ul>
            {prods && prods.map((categories, index) => {
                return (
                  <li key={index}><a href={`#${categories.name.toLowerCase()}`}>{categories.name.toUpperCase()}</a></li>
                )
              })
            }
          </ul>
      </nav>
    </>
  )
}

export default Navigator