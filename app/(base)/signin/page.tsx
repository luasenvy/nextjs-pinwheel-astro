import SigninSlider from "@/components/SigninSlider";

export default function SigninPage() {
  return (
    <section>
      <div className="container max-w-full">
        <div className="row">
          <div className="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]">
            <div className="mx-auto w-full max-w-[480px]">
              <img className="mb-8" src="/images/flower.png" alt="" />
              <h1 className="mb-4">Sing In</h1>
              <p>Donec sollicitudin molestie malesda sollitudin</p>
              <div className="signin-options mt-10">
                <a className="btn btn-outline-white block w-full text-dark" href="#">
                  Sign In With Google
                </a>
              </div>
              <div className="relative my-8 text-center after:absolute after:left-0 after:top-1/2 after:z-[0] after:w-full after:border-b after:border-border after:content-['']">
                <span className="relative z-[1] inline-block bg-white px-2">
                  Or Sign In With Email
                </span>
              </div>

              <form action="#">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Adrdess
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Your Password"
                  />
                </div>
                <input
                  className="btn btn-primary mt-10 block w-full"
                  type="submit"
                  value="Sign In"
                />
                <p className="mt-6 text-center">
                  Can't <a className="text-dark">log in</a>?
                  <a className="text-dark" href="/signup">
                    Sign up
                  </a>{" "}
                  for create account
                </p>
              </form>
            </div>
          </div>
          <SigninSlider title=" Turn your All ideas into<br /> your reality" />
        </div>
      </div>
    </section>
  );
}
