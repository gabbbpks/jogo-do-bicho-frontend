
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const NextDrawTimer = () => {
  const [nextDrawTime, setNextDrawTime] = useState<string>("");
  
  useEffect(() => {
    calculateNextDrawTime();
    
    // Update every minute
    const interval = setInterval(() => {
      calculateNextDrawTime();
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const calculateNextDrawTime = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    let nextDrawHour = 0;
    let nextDrawMinutes = 0;
    
    // Logic for weekdays (Monday to Friday)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      if (hours < 8 || (hours === 8 && minutes < 30)) {
        nextDrawHour = 8;
        nextDrawMinutes = 30;
      } else if (hours < 10) {
        nextDrawHour = 10;
        nextDrawMinutes = 0;
      } else if (hours < 12) {
        nextDrawHour = 12;
        nextDrawMinutes = 0;
      } else if (hours < 14) {
        nextDrawHour = 14;
        nextDrawMinutes = 0;
      } else {
        // After the last draw of the day, show next day's first draw
        nextDrawHour = 8;
        nextDrawMinutes = 30;
      }
    } 
    // Logic for Saturday
    else if (dayOfWeek === 6) {
      if (hours < 10) {
        nextDrawHour = 10;
        nextDrawMinutes = 0;
      } else if (hours < 12) {
        nextDrawHour = 12;
        nextDrawMinutes = 0;
      } else if (hours < 14) {
        nextDrawHour = 14;
        nextDrawMinutes = 0;
      } else if (hours < 16 || (hours === 16 && minutes < 20)) {
        nextDrawHour = 16;
        nextDrawMinutes = 20;
      } else {
        // After the last draw on Saturday, show next Sunday's first draw
        nextDrawHour = 10;
        nextDrawMinutes = 0;
      }
    }
    // Logic for Sunday
    else {
      if (hours < 10) {
        nextDrawHour = 10;
        nextDrawMinutes = 0;
      } else if (hours < 12) {
        nextDrawHour = 12;
        nextDrawMinutes = 0;
      } else if (hours < 15) {
        nextDrawHour = 15;
        nextDrawMinutes = 0;
      } else if (hours < 18 || (hours === 18 && minutes < 30)) {
        nextDrawHour = 18;
        nextDrawMinutes = 30;
      } else {
        // After the last draw on Sunday, show next Monday's first draw
        nextDrawHour = 8;
        nextDrawMinutes = 30;
      }
    }
    
    // Format the time string
    const timeString = `${nextDrawHour.toString().padStart(2, '0')}:${nextDrawMinutes.toString().padStart(2, '0')}h`;
    setNextDrawTime(timeString);
  };
  
  return (
    <div className="flex items-center text-[#3B82F6]">
      <Clock className="h-4 w-4 mr-1.5" />
      <span className="text-sm">Próximo sorteio: <span className="font-semibold">{nextDrawTime}</span></span>
    </div>
  );
};

export default NextDrawTimer;
