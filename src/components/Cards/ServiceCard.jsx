import React from 'react';

const Servicecard = ({service}) => {
    const {title,img,price} = service || {};
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
   <img height={120} width={430} src={img} alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   
    <div className="card-actions justify-between">
        <h6 className='text-primary font-semibold'>Price: ${price}</h6>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Servicecard;