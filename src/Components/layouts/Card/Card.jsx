/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: 'Explore our plans',
    title_icon: <i className="fa-solid fa-file title-icon text-white"></i>,
    card_text: 'Our care has gone into crafting each of our plans to ensure that you, your family, or your team will have complete coverage for medical needs.',
    more: <Link to="/plans"><i className='fa fa-long-arrow-alt-right'></i></Link>
  },
  {
    id: 2,
    title: 'Hello!',
    title_icon: <i className="fa-solid fa-headset text-white"></i>,
    card_text: 'Our customer support team is available 24/7 to assist you with anything.',
    more: <Link to="/contact"><i className='fa fa-long-arrow-alt-right'></i></Link>
  },
  {
    id: 3,
    title: 'Become A Provider',
    title_icon: <i className="fa-solid fa-user-gear text-white"></i>,
    card_text: 'Our providers enjoy prompt and paperless settlement of claims and support.',
    more: <Link to="https://ileraeko.com"><i className='fa fa-long-arrow-alt-right'></i></Link>
  },
  {
    id: 4,
    title: 'Regulation',
    title_icon: <i className="fa-solid fa-hospital-user text-white"></i>,
    card_text: 'Ensuring quality health service is provided as agreed by the health facility and expanding access to high-quality care through licensed HMO companies.',
    more: <Link to="https://lshsregulations.com/"><i className='fa fa-long-arrow-alt-right'></i></Link>
  }
];

const Card = () => {
  return (
    <div className="px-12 py-8 w-full bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map(({ id, title, title_icon, card_text, more }) => (
          <div key={id} className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white">
              <h3 className="text-xl font-bold flex-grow">{title}</h3>
              <div className="text-2xl">{title_icon}</div>
            </div>
            <div className="p-4 flex-grow text-gray-700">
              <p>{card_text}</p>
            </div>
            <div className="p-4 flex justify-end">
              <Link to="#" className="inline-block w-fit h-fit p-2 border border-orange-600 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white transition-colors">
                {more}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
