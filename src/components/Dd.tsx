interface DtProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
}

export const Dd = ({ children, ...delegate }: DtProps) => {
  return (
    <dd
      className="font-bold leading-6 text-light-2B3442 row-start-2"
      {...delegate}
    >
      {children}
    </dd>
  );
};
