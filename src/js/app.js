/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
})
  .catch((error) => {
    console.log(error);
  });
