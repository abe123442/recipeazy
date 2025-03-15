import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@/components/ui/icon";
import { View } from "react-native";

function DropDownFilter() {
  return (
    <View className="flex flex-col gap-y-4 justify-center p-5">
      {/* Kitchen Staples */}
      <Select className="w-auto">
        <SelectTrigger variant="outline" size="xl">
          <SelectInput placeholder="Kitchen Staples" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="1" value="1" />
            <SelectItem label="2" value="2" />
            <SelectItem label="3" value="3" isDisabled={true} />
            <SelectItem label="4" value="4" />
          </SelectContent>
        </SelectPortal>
      </Select>

      {/* Vegetables & Fruits */}
      <Select className="w-auto">
        <SelectTrigger variant="outline" size="xl">
          <SelectInput placeholder="Vegetables & Fruits" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="1" value="1" />
            <SelectItem label="2" value="2" />
            <SelectItem label="3" value="3" isDisabled={true} />
            <SelectItem label="4" value="4" />
          </SelectContent>
        </SelectPortal>
      </Select>

      {/* Dairy */}
      <Select className="w-auto">
        <SelectTrigger variant="outline" size="xl">
          <SelectInput placeholder="Dairy" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="1" value="1" />
            <SelectItem label="2" value="2" />
            <SelectItem label="3" value="3" isDisabled={true} />
            <SelectItem label="4" value="4" />
          </SelectContent>
        </SelectPortal>
      </Select>

      {/* Meats */}
      <Select className="w-auto">
        <SelectTrigger variant="outline" size="xl">
          <SelectInput placeholder="Meats" />
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="1" value="1" />
            <SelectItem label="2" value="2" />
            <SelectItem label="3" value="3" isDisabled={true} />
            <SelectItem label="4" value="4" />
          </SelectContent>
        </SelectPortal>
      </Select>
    </View>
  );
}

export default DropDownFilter;
