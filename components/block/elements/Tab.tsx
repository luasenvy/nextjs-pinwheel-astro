export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export default function Tab({ ...props }: TabProps) {
  return <div {...props} />;
}
