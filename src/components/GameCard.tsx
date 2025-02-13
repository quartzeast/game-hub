import { Game } from '@/hooks/useGames';
import { Card, Heading, Image } from '@chakra-ui/react';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
