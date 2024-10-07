import Link from "@/components/ViewTransitionLink";

const title = "Helping teams in the world with focus";
const description =
  "Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus, sed condimentum volutpat.";
const label = "Download The Theme";
const link = "https://themefisher.com/products/pinwheel-astro";

export default function Cta() {
  return (
    <section className="px-5 py-20 xl:py-[120px]">
      <div className="container">
        <div className="bg-gradient row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16">
          <div className="lg:col-11">
            <div className="row">
              <div className="lg:col-7">
                <h2 className="h1 text-white">{title}</h2>
                <Link className="btn btn-white mt-8" href={link}>
                  {label}
                </Link>
              </div>
              <div className="mt-8 lg:col-5 lg:mt-0">
                <p className="text-white">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
