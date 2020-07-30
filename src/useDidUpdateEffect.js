const { useEffect, useRef } = require('react');

function useDidUpdateEffect(func, inputs) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      func();
    } else {
      didMountRef.current = true
    }
  }, inputs);
}

module.exports = useDidUpdateEffect;