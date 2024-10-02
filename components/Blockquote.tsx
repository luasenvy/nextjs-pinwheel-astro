interface BlockquoteProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
}

export default function Blockquote({ name, children }: BlockquoteProps) {
  return (
    <div className="blockquote my-10 rounded-xl bg-white px-16 py-8 lg:px-20">
      <blockquote className="text-2xl text-dark">{children}</blockquote>
      <p className="mb-0 mt-4">{name}</p>
    </div>
  );
}
