import { useCallback, useRef, useState } from "react";
import { PARTS } from "../../constants/parts";

export const useCharacter = () => {
  const [character, setCharacter] = useState({
    head: PARTS.head[0],
    eyes: PARTS.eyes[0],
    mouth: PARTS.mouth[0],
    accessory: PARTS.accessory[0],
  });

  const characterRef = useRef(character);

  characterRef.current = character;

  const generateRandomPart = useCallback((partName) => {
    const part =
      PARTS[partName][Math.floor(Math.random() * PARTS[partName].length)];

    setCharacter({ ...characterRef.current, [partName]: part });
  }, []);

  const generateRandomCharacter = useCallback(() => {
    const newCharacter = {};

    Object.keys(PARTS).forEach(
      (partName) =>
        (newCharacter[partName] =
          PARTS[partName][Math.floor(Math.random() * PARTS[partName].length)])
    );

    setCharacter(newCharacter);
  }, []);

  return { character, generateRandomPart, generateRandomCharacter };
};
