import type { StaticImageData } from "next/image";
import Image from "next/image";

interface MemberItem {
  image: StaticImageData;
  name: string;
  field: string;
}

export interface OurMembersProps {
  members: {
    title: string;
    description: string;
    member_list: Array<MemberItem>;
  };
}

export default function OurMembers({ members }: OurMembersProps) {
  const { title, description, member_list } = members;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-6">
            <h2>{title}</h2>
            <p className="mt-4">{description}</p>
          </div>
        </div>
        <div className="row mt-12 justify-center">
          <div className="lg:col-10">
            <div className="row">
              {member_list.map(({ image, name, field }, i) => (
                <div
                  key={i}
                  className="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center"
                >
                  <div className="member-avatar inline-flex justify-center">
                    <Image
                      height={112}
                      width={112}
                      className="rouded-full h-28 w-28"
                      src={image}
                      alt=""
                    />
                  </div>
                  <div className="mt-6 w-full flex-1 rounded-xl bg-white px-4 py-8 shadow-lg">
                    <h5 className="font-primary">{name}</h5>
                    <p className="mt-1.5">{field}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
