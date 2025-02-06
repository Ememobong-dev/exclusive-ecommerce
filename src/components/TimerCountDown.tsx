import moment from "moment";
import React, { useState, useEffect, Fragment } from "react";

const TimerCountDown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const savedEndTime = localStorage.getItem("countdown-end-time");

    if (!savedEndTime) {
      localStorage.setItem("countdown-end-time", targetDate);
    }

    const interval = setInterval(() => {
      const now = moment();
      const endTime = moment(savedEndTime || targetDate);
      const duration = moment.duration(endTime.diff(now));

      if (duration.asSeconds() <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        localStorage.removeItem("countdown-end-time");
      } else {
        setTimeLeft({
          days: Math.floor(duration.asDays()),
          hours: Math.floor(duration.hours()),
          minutes: Math.floor(duration.minutes()),
          seconds: Math.floor(duration.seconds()),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 text-center">
      {Object.entries(timeLeft).map(([unit, value], index, array) => (
        <Fragment key={unit}>
          {/* Timer Section */}
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-sm text-gray-500 uppercase">{unit}</span>
          </div>

          {index < array.length - 1 && (
            <span className="text-4xl font-bold text-red-secondary-two">:</span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default TimerCountDown;
