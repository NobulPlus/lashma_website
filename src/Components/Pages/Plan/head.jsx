import React from 'react'
import img1 from '../../../assets/images/img5.png';

const head = () => {
    return (
        <>
        <div className='py-8 bg-orange-50'>
          <div className="container px-4 py-12 mx-auto">
            <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-orange-600 md:text-4xl">
                  Health Insurance that’s <span>sweeter than you imagined</span>
                </h1>
                <p className="text-lg leading-relaxed text-gray-600">
                  Cost effective and flexible healthcare that gives you peace of mind and access to the best of care without any hassles.
                </p>
                <p>
                  <a
                    href="#plans"
                    className="inline-flex items-center px-6 py-3 font-semibold text-white transition bg-orange-600 rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    See All Plans
                  </a>
                </p>
              </div>
              <div className="flex justify-center">
                <img src={img1} alt="Health Insurance" className="rounded-full shadow-md w-fit" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 bg-white">
          <div className="container px-4 mx-auto text-center">
            <div className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
              Now that You’re Here. <span className="text-orange-600">See Our Plans</span>
            </div>
            <div className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
              Yes, the plans are as juicy as they sound. Specially designed to give you and/or your family a fantastic care experience no matter your needs.
            </div>
          </div>
        </div>
        </>
      );
}

export default head
