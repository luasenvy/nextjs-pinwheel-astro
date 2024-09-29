import Counter from "./Counter";

interface CounterItem {
  number: number;
  name: string;
  messurment: string;
  color: string;
}

export interface CounterComponentProps {
  counter: Array<CounterItem>;
}

const speed = 700;

export default function CounterComponent({ counter }: CounterComponentProps) {
  return (
    <div className="counter mt-16">
      <div className="row mx-0 rounded-[20px] bg-white px-10 shadow-lg lg:py-10">
        {counter.map(({ number, color, name }, i) => (
          <div
            key={i}
            className="border-border sm:col-6 lg:col-3 px-10 py-10 text-center lg:border-r lg:py-0 last:lg:border-none"
          >
            <h2>
              <Counter speed={speed} number={number} />
              <span className="text-primary" style={{ color }}>
                +
              </span>
            </h2>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
