interface DdProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
}

export const Dt = ({ children, ...delegate }: DdProps) => {
  return (
    <dt
      className="text-xxs font-normal leading-4 text-light-4B6A9B dark:text-white row-start-1 "
      {...delegate}
    >
      {children}
    </dt>
  );
};
