import React from 'react'

const Gmaps = () => {
  return (
    <div className="App">
        <iframe src="https://www.google.com/maps/d/embed?mid=1pUzoXzW-59hgwo7UUjUaT8_5tp-_Zlk&hl=en&ehbc=2E312F"
            width="100%"
            height="580"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
        >        
        </iframe>
    </div>
  )
}

export default Gmaps
