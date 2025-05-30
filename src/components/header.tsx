import { ShoppingCart, Search } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className='bg-blue-700 w-full h-16 flex justify-between items-center px-8'>
      <div className="logo text-white">Logo</div>

      <div className="input mx-8 w-1/3 relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
        <input
          type="text"
          placeholder='Search For Products....'
          className="w-full border-2 outline-none border-white text-white placeholder:text-white px-2 py-1 rounded pl-8"
        />
      </div>

      <div className="btns flex items-center gap-5">
        <div className="relative flex items-center gap-1 bg-blue-700 px-2 py-1 rounded">
          <ShoppingCart className="text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
          <span className="text-white">Cart</span>
        </div>
        <div className="profile bg-white rounded-full w-8 h-8"></div>
      </div>
    </div>
  );
};

export default Header;
