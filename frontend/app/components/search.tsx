import { InputField, Input } from '@/components/ui/input';
import { Search } from 'lucide-react-native';
import { View } from 'react-native';

function SearchBar() {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <View className="flex flex-row justify-center items-center w-auto p-2">
        <Search />
        <InputField placeholder="Find a Recipe..." />
      </View>
    </Input>
  );
}

export default SearchBar;
