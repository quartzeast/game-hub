import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  const orderBy = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'date-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: 'release-date', label: 'Release date' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'average rating', label: 'Average rating' },
  ];

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='outline' size='lg'>
          Order by: Relevance <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {orderBy.map((order) => (
          <MenuItem key={order.value} value={order.value} fontSize='lg'>
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
