import Image from "next/image";

export default function Shape() {
  return (
    <>
      <Image
        className="floating-bubble-1 absolute right-0 top-0"
        src="/images/floating-bubble-1.png"
        alt=""
        height={98}
        width={103}
      />
      <Image
        className="floating-bubble-2 absolute left-0 top-[387px] -z-[1]"
        src="/images/floating-bubble-2.png"
        alt=""
        height={66}
        width={33}
      />
      <Image
        className="floating-bubble-3 absolute right-0 top-[605px] -z-[1]"
        src="/images/floating-bubble-3.png"
        alt=""
        height={99}
        width={50}
      />
    </>
  );
}
