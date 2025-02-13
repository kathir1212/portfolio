import React from 'react';
import Profileimg from './assets/kathirvel.jpeg';

function Header() {
  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <div className="header  flex justify-between items-center p-4 shadow-lg">
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <div className="profile-image p-2">
          <img
            src={Profileimg}
            alt="profileimg"
            className="rounded-full w-24 h-24 object-cover"
          />
        </div>
        <div className="profile-name  text-2xl">
          <h3>Kathirvel R</h3>
        </div>
      </div>

      {/* Menu Section */}
      <div className="menu flex space-x-6">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item  text-lg hover:text-gray-300 cursor-pointer">
            <h4>{item}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
