import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

import { Platform } from '@/hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='grey.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
