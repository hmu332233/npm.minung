import React from 'react';
import { useEffect } from 'react';
import { Box, Text } from 'ink';

import useTypingEffect from './useTypingEffect';

const TEXTS = [
  `Hi! I'm Minung!`,
  `I'm working as a software engineer at Goorm.`,
  ``,
  `Github: https://github.com/hmu332233`,
  `BuyMeACoffe: https://www.buymeacoffee.com/minungHan`,
].join('\n');

function Minung() {
  const { displayText, setPlay } = useTypingEffect({
    text: TEXTS,
  });

  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <Box flexDirection="column" padding={2}>
      <Text>
        {displayText}
      </Text>
    </Box>
  );
};

export default Minung;
