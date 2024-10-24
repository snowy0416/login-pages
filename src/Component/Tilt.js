import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export const useTilt = (options) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }

    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return tiltRef;
};
