import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as api from "./api";
import { createEmptyHotel, Character } from "./character.vm";
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from "./character.mappers";
import { Lookup } from "#common/models";
import { CharacterComponent } from "./character.component";

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyHotel()
  );
  const { id } = useParams<{ id: string }>();

  const handleCharacterCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleCharacterCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiHotel = mapCharacterFromVmToApi(character);
    // const success = await api.saveCharacter(apiCharacter);
    // if (success) {
    //   navigate(-1);
    // } else {
    //   alert("Error on save character");
    // }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
  // return <CharacterComponent character={character} />;
};
