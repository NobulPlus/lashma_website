import React from 'react';
import Telemed from '../../../assets/All/import/telemedicine.jpg';
import AppStore from '../../../assets/All/import/AppStore.png';
import PlayStore from '../../../assets/All/import/PlayStore.png';
import { Link } from 'react-router-dom';

const Telemedicine = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full mb-12">
      <div className="md:flex-basis-60 w-full md:w-auto">
        <img className="w-full" src={Telemed} alt="Telemedicine" />
      </div>
      <div className="md:flex-basis-40 w-full md:w-auto bg-orange-200 p-8 flex flex-col items-center">
        <div className="mb-4">
          <h1 className="text-orange-500 uppercase text-2xl font-semibold">Telemedicine</h1>
        </div>
        <div className="mb-6 hidden md:block">
          <h3 className="text-2xl leading-10 font-light">Don’t <br />Google your <br />symptoms</h3>
        </div>
        <div className="italic mb-6">
          <p>Speak to a doctor from the comfort of your home</p>
        </div>
        <div className="flex justify-between w-64 md:w-96">
          <Link to="https://apple.com">
            <img className="px-2" src={AppStore} alt="App Store" />
          </Link>
          <Link to="https://google.com">
            <img className="px-2" src={PlayStore} alt="Play Store" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Telemedicine;
