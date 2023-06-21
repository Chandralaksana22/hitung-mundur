import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/id';

dayjs.extend(duration);
dayjs.locale('id');

function App() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const targetYear = new Date().getFullYear() + 1; // Tahun target (tahun berikutnya)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = dayjs();
      const targetTime = dayjs(`${targetYear}-01-01`);

      const duration = dayjs.duration(targetTime.diff(currentTime));

      const days = Math.floor(duration.asDays()); // Bulatkan jumlah hari ke bawah
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setCountdown({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      backgroundImage: "url('peakpx.jpg')",
      height: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
       <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold pt-10 mb-5 text-gray-900">Menuju Tahun {targetYear}</h1>
      <div className="flex gap-5 flex justify-center mt-60">
        <div className='text-gray-900'>
          <span className="countdown font-mono text-6xl text-gray-900">
          {countdown.days}
          </span>
          days
        </div> 
        <div className='text-gray-900'>
          <span className="countdown font-mono text-6xl text-gray-900">
              <span style={{ '--value': countdown.hours }}></span>
          </span>
          hours
        </div> 
        <div className='text-gray-900'>
          <span className="countdown font-mono text-6xl text-gray-900">
            <span style={{ '--value': countdown.minutes }}></span>
          </span>
          min
        </div> 
        <div className='text-gray-900'>
          <span className="countdown font-mono text-6xl text-gray-900">
            <span style={{ '--value': countdown.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
