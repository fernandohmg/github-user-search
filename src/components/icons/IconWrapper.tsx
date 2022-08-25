interface IconWrapperProps {
  isDarkTheme: boolean;
  disable: boolean;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const IconWrapper = ({
  icon: Icon,
  isDarkTheme,
  disable = false,
}: IconWrapperProps) => {
  const fill = disable ? "#A4B3CC" : isDarkTheme ? "#FFFFFF" : "#4b6a9b";
  return <Icon fill={fill} />;
};
