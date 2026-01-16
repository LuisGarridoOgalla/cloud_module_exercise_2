import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';


export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    return response.data.results;
  } catch (err) {
    return Promise.reject(err);
  }
};

