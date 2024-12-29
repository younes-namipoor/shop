import React from 'react';
import useStore from '../../app/store/store';
import Image from 'next/image';

const Cart = () => {
  const data = useStore(state => state.data);

  return (
    <div className="bg-gray-100 p-6 w-[300px] rounded-lg mt-6 absolute top-12   group-hover:flex    -right-20 hidden ">
      {data.length === 0 ? (
        <p className="text-md text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4 w-full">
          {data.map(item => (
            <li key={item.id} className="flex justify-between w-full items-center bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center w-[80%]">
                <Image src={item.image} height={50} width={50} className='rounded-md ' alt='' />
                <span className="font-semibold text-[12px] pl-5 text-gray-500">{item.name}</span>
                <span className="text-sm text-gray-500 ml-2"></span>
              </div>
              <span className="text-lg text-green-500">${item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;