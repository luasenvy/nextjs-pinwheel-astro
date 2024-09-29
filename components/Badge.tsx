interface BadgeProps extends React.PropsWithChildren {
  type: string;
}

export default function Badge({ type, children }: BadgeProps) {
  return <span className={`badge ${type}`}>{children}</span>;
}
