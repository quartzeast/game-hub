import { Card, Heading, HStack, Image } from '@chakra-ui/react';

import { Game } from '@/hooks/useGames';
import getCroppedImageUrl from '@/services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
