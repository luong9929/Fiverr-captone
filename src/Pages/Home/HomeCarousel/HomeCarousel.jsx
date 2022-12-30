import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '575px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => (
  <Carousel effect="fade" dots="" autoplay="blur">
    <div>
      <div style={contentStyle} >
        <div className='banner ' >
              <img src="./img/bg-hero-1-1792-x1.jpg" alt="" className='w-full h-full ' />
        </div>
          
          


      </div>
    </div>
    <div>
      <div style={contentStyle} >
        <div className='banner' >
              <img src="./img/bg-hero-2-1792-x1.jpg" alt="" className='w-full  h-full' />
        </div>
          
          


      </div>
    </div> <div>
      <div style={contentStyle} >
        <div className='banner' >
              <img src="./img/bg-hero-3-1792-x1.jpg" alt="" className='w-full h-full' />
        </div>
          
          


      </div>
    </div> <div>
      <div style={contentStyle} >
        <div className='banner' >
              <img src="./img/bg-hero-4-1792-x1.jpg" alt="" className='w-full h-full' />
        </div>
          
          


      </div>
    </div> <div>
      <div style={contentStyle} >
        <div className='banner' >
              <img src="./img/bg-hero-5-1792-x1.jpg" alt="" className='w-full h-full' />
        </div>
          
          


      </div>
    </div>
  </Carousel>
);
export default App;