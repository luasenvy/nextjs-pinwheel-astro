export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export default function Tab({ ...props }: TabProps) {
  return <div {...props} />;
}
