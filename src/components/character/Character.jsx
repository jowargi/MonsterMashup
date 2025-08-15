import { useCharacter } from "./useCharacter";
import styles from "./Character.module.css";

export default function Character() {
  const { character, generateRandomPart, generateRandomCharacter } =
    useCharacter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Создай своего персонажа!</h1>
      <div className={styles.character}>
        <div className={styles.accessory}>{character.accessory}</div>
        <div className={styles.head}>{character.head}</div>
        <div className={styles.eyes}>{character.eyes}</div>
        <div className={styles.mouth}>{character.mouth}</div>
      </div>
      <div className={styles.controls}>
        <button onClick={() => generateRandomPart("accessory")}>
          Аксессуар
        </button>
        <button onClick={() => generateRandomPart("head")}>Голова</button>
        <button onClick={() => generateRandomPart("eyes")}>Глаза</button>
        <button onClick={() => generateRandomPart("mouth")}>Рот</button>
        <button
          onClick={() => generateRandomCharacter()}
          className={styles.random}
        >
          Случайный персонаж!
        </button>
      </div>
    </div>
  );
}
