import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};


// export const saveHotel = async (hotel: Character): Promise<boolean> => {
//   return true;
// };
