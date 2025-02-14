import getCroppedImageUrl from '@/services/image-url';
import { Button, HStack, Image, List, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';

interface GenreListProp {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProp) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root listStyle='none' as='ol'>
      {genres?.map((genre) => (
        <List.Item key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize='lg'
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              variant='ghost'
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
