import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { ChevronDownIcon } from "@/components/ui/icon"
	
function DropDownFilter() {
  return (
    <Select>
          <SelectTrigger variant="outline" size="md" >
            <SelectInput placeholder="Select option" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop/>
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="UX Research" value="ux" />
              <SelectItem label="Web Development" value="web" />
              <SelectItem
                label="Cross Platform Development Process"
                value="Cross Platform Development Process"
              />
              <SelectItem
                label="UI Designing"
                value="ui"
                isDisabled={true}
              />
              <SelectItem
                label="Backend Development"
                value="backend"
              />
            </SelectContent>
          </SelectPortal>
        </Select>
  );
}

export default DropDownFilter;