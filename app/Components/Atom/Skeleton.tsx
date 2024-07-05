import { Color } from "@/app/constants/Color";
import { Leading } from "@/app/constants/Leading";
import { Typography } from "@/app/constants/Typograph";
import { Skeleton as MotiSkeleton } from "moti/skeleton";
import { ComponentProps, ReactNode, useMemo } from "react";



interface BaseProps {
  circle?: boolean;
  radius?: Leading;
  children: ReactNode;
  loading?: boolean;
}

type Size = number | string;

interface TypographyProps extends BaseProps {
  typography: Typography;
  width: Size;
  size?: never;
  height?: never;
}

interface SizeProps extends BaseProps {
  size: Size;
  typography?: never;
  width?: never;
  height?: never;
}

interface WidthHeightProps extends BaseProps {
  width: Size;
  height: Size;
  typography?: never;
  size?: never;
}

type Props = TypographyProps | SizeProps | WidthHeightProps;

type MotiSkeletonProps = ComponentProps<typeof MotiSkeleton>;

export const Skeleton = ({ circle, radius, size, width, height, typography, loading = false, children }: Props) => {
  const props: MotiSkeletonProps = useMemo(() => {
    const p: MotiSkeletonProps = {
      radius: circle ? "round" : radius ?? Leading.Two,
      backgroundColor: Color.Gray,
      colors: [Color.Red, Color.Blue, Color.Green],
    };

    if (typography) {
      const styles = Typography[typography];
      p.height = styles.fontSize * 1.14;
      p.width = width;
    } else if (size) {
      p.width = size;
      p.height = size;
    } else {
      p.width = width;
      p.height = height;
    }
    return p;
  }, []);

  if (loading) return <MotiSkeleton {...props} />;
  return <>{children}</>;
};
