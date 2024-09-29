import Image from "next/image";

import FloatingBubble1 from "@/public/images/floating-bubble-1.png";
import FloatingBubble2 from "@/public/images/floating-bubble-2.png";
import FloatingBubble3 from "@/public/images/floating-bubble-3.png";

export default function Shape() {
  return (
    <>
      <Image
        className="floating-bubble-1 absolute right-0 top-0"
        src={FloatingBubble1}
        alt=""
        height={98}
        width={103}
      />
      <Image
        className="floating-bubble-2 absolute left-0 top-[387px] -z-[1]"
        src={FloatingBubble2}
        alt=""
        height={66}
        width={33}
      />
      <Image
        className="floating-bubble-3 absolute right-0 top-[605px] -z-[1]"
        src={FloatingBubble3}
        alt=""
        height={99}
        width={50}
      />
    </>
  );
}
