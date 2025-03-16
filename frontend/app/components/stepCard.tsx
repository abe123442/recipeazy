import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react-native';

interface StepCardProps {
  name: string;
  content: string;
}

function StepCard({ name, content }: StepCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const animationHeight = useRef(new Animated.Value(0)).current; // Animation for height

  // Function to toggle expansion
  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
    Animated.timing(animationHeight, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const contentHeight = animationHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  return (
    <Card size="md" variant="elevated" className="m-3">
      {/* Header with toggle button */}
      <TouchableOpacity
        onPress={toggleExpansion}
        className="flex flex-row gap-2 justify-center align-middle items-center"
      >
        <Heading size="md" className="mb-1">
          {name}
        </Heading>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </TouchableOpacity>

      {/* Collapsible content */}
      <Animated.View style={{ height: contentHeight, overflow: 'hidden' }}>
        <Text size="sm">{content}</Text>
      </Animated.View>
    </Card>
  );
}

export default StepCard;
