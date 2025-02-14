import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import usePlatforms from '@/hooks/usePlatform';
import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='outline' size='lg'>
          Platforms <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms.map((platform) => (
          <MenuItem key={platform.id} value={platform.name} fontSize='lg'>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
