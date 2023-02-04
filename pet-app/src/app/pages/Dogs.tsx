import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { getBreeds } from "../slice/breedsSlice";

export const Dogs = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBreeds(`https://api.petfinder.com/v2/types/dog/breeds`));
  }, [dispatch]);

  return <div>Dogs</div>;
};
