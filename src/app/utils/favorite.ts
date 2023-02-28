export const isFavorite = (favorites: any, id: any) => {
    if (!favorites) return null
    const favItems = favorites.find((item: any) => item?.petId === id.toString());
    if (!favItems) {
      return 'white';
    } else {
      return '#FF5E5B';
    }
  };