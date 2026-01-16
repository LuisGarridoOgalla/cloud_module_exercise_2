import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useCharacterCollection } from "./character-collection.hook";
import { CharacterCollectionComponent } from "./character-collection.component";
export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleEdit = (id: string) => {
    navigate(`/characters/${id}`);
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
function deleteCharacter(id: string) {
  throw new Error("Function not implemented.");
}
