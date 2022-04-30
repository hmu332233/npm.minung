import { useEffect, useRef } from 'react';

function useDidUpdateEffect(func: () => void, deps: any[]) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      func();
    } else {
      didMountRef.current = true
    }
  }, deps);
}

export default useDidUpdateEffect;