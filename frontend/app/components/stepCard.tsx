import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

interface StepCardProps {
    name: string;
    content: string; 
}
	
function StepCard({ name, content}: StepCardProps) {
  return (
    <Card size="md" variant="elevated"  className="m-3">
      <Heading size="md" className="mb-1">
        {name}
      </Heading>
      <Text size="sm">{content}</Text>
    </Card>
  );
}

export default StepCard;