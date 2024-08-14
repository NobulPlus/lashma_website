import React from 'react';
import Telemed from '../../../assets/All/import/telemedicine.jpg';
import AppStore from '../../../assets/All/import/AppStore.png';
import PlayStore from '../../../assets/All/import/PlayStore.png';
import { Link } from 'react-router-dom';

const Telemedicine = () => {
  return (
    <div className="flex flex-col justify-between w-full mb-12 md:flex-row">
      <div className="w-full md:flex-basis-60 md:w-auto">
        <img className="w-full" src={Telemed} alt="Telemedicine" />
      </div>
      <div className="flex flex-col items-center w-full p-8 bg-orange-200 md:flex-basis-40 md:w-auto">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-orange-500 uppercase">Telemedicine</h1>
        </div>
        <div className="hidden mb-6 md:block">
          <h3 className="text-2xl font-light leading-10">Don’t <br />Google your <br />symptoms</h3>
        </div>
        <div className="mb-6 italic">
          <p>Speak to a doctor from the comfort of your home</p>
        </div>
        <div className="flex justify-between w-64 md:w-96">
          <Link to="https://apple.com">
            <img className="px-2" src={AppStore} alt="App Store" />
          </Link>
          <Link to="https://play.google.com/store/apps/details?id=com.lashma.app">
            <img className="px-2" src={PlayStore} alt="Play Store" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Telemedicine;
