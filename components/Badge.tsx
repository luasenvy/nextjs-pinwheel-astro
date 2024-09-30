import classnames from "classnames";

interface BadgeProps extends React.PropsWithChildren {
  type: string;
}

export default function Badge({ type, children }: BadgeProps) {
  return <span className={classnames("badge", type)}>{children}</span>;
}
