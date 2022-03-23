import React from 'react';
import '../../styles/mydata.scss';

function ModalMyData() {
  return (
    <article className='mydata_container' onClick={(e) => e.stopPropagation()}>
      <h1>Mis Datos</h1>
      <div className='mydata_container'>
        <label>Nombre</label>
        <input type='text' name='name' id='name' disabled value='Roqueheli Arenas' />      
        <label>Correo electrónico</label>
        <input type='email' name='email' id='email' disabled value='roqueheliarenas@gmail.com' />
        <label>Teléfono</label>
        <input type='tel' name='phone' id='phone' disabled value='+56 9 9246 9431' />
      </div>
    </article>
  )
}

export default ModalMyData;