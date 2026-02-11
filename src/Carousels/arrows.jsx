import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const Arrows = (props) => {
  const { className } = props;

  return (
    <section className={className}>
      <button className="btn prev" >
        <Icon icon="si:chevron-left-duotone" color="#333333" height={20} width={20} />
      </button>
      <button className="btn next " >
        <Icon icon="mdi:chevron-right" color="#333333" height={20} width={20} />
      </button>
    </section>
  )
}
export default Arrows