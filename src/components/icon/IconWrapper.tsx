interface IconWrapperProps {
  isDarkTheme: boolean;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const IconWrapper = ({ icon: Icon, isDarkTheme }: IconWrapperProps) => {
  return <Icon fill={isDarkTheme ? "#FFFFFF" : "#4b6a9b"} />;
};
