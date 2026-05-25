import { useState, useEffect } from "react";

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isUrgent: boolean;
}

export function useCountdown(targetIsoString: string): CountdownResult {
  const calculateTimeLeft = (): CountdownResult => {
    const difference = new Date(targetIsoString).getTime() - Date.now();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isUrgent: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Trigger urgent state styling if 2 days or less remain
    const isUrgent = days <= 2;

    return { days, hours, minutes, seconds, isUrgent };
  };

  const [timeLeft, setTimeLeft] =
    useState<CountdownResult>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIsoString]);

  return timeLeft;
}
