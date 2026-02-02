import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const Arrows = (props) => {
  const { className, onClickLeft,onClickRight } = props;

  return (
    <section className={className}>
      <button className="btn prev" onClick={onClickLeft}>
        <Icon icon="si:chevron-left-duotone" color="#333333" height={20} width={20} />
      </button>
      <button className="btn next " onClick={onClickRight}>
        <Icon icon="mdi:chevron-right" color="#ffffff" height={20} width={20} />
      </button>
    </section>
  )
}
export default Arrows