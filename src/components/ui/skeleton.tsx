import type {
  SkeletonProps as ChakraSkeletonProps,
  CircleProps,
} from '@chakra-ui/react';
import { Skeleton as ChakraSkeleton, Circle, Stack } from '@chakra-ui/react';
import * as React from 'react';

export interface SkeletonCircleProps extends ChakraSkeletonProps {
  size?: CircleProps['size']
}

export const SkeletonCircle = React.forwardRef<
  HTMLDivElement,
  SkeletonCircleProps
>((props, ref) => {
  const { size, ...rest } = props;
  return (
    <Circle size={size} asChild ref={ref}>
      <ChakraSkeleton {...rest} />
    </Circle>
  );
});

export interface SkeletonTextProps extends ChakraSkeletonProps {
  noOfLines?: number
}

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(

  (props, ref) => {
    const { noOfLines = 3, gap, ...rest } = props;
    return (
      <Stack gap={gap} width="full" ref={ref}>
        {Array.from({ length: noOfLines }).map(() => (
          <ChakraSkeleton
            height="4"
            key={new Date().getTime()}
            {...props}
            _last={{ maxW: '80%' }}
            {...rest}
          />
        ))}
      </Stack>
    );
  },
);

export const Skeleton = ChakraSkeleton;
