import { AnimalCard } from "../components/AnimalCard/AnimalCard";

export const Search = () => {
  return (
    <div>
      Search Page
      <AnimalCard
        name="Cheetah"
        breed="Lab"
        age="Young"
        src={
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59780541/2/?bust=1675128278"
        }
      />
    </div>
  );
};
