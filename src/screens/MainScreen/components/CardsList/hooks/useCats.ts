import { useEffect, useState } from "react";
import { ICat, ICatFull } from "src/types/cat";
import { fetchCatImage, fetchCats } from "src/services/catApi";

export const useCats = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCats = async () => {
      try {
        const breeds = await fetchCats();

        const catsWithImages = await Promise.all(
          breeds.map(async (breed: ICatFull) => {
            let imageUrl: string | undefined;

            if (breed.reference_image_id) {
              try {
                const imageData = await fetchCatImage(breed.reference_image_id);
                imageUrl = imageData.url;
              } catch {
                imageUrl = undefined;
              }
            }

            return {
              id: breed.id,
              name: breed.name,
              description: breed.description,
              imageUrl,
              affection_level: breed.affection_level,
              origin: breed.origin,
              reference_image_id: breed.reference_image_id,
            };
          })
        );

        setCats(catsWithImages.filter((cat) => !!cat.imageUrl));
      } catch (err) {
        setError("Error fetching cats");
      } finally {
        setIsLoading(false);
      }
    };

    loadCats();
  }, []);

  return { cats, isLoading, error };
};
