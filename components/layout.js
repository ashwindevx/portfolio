export default function Layout({ children }) {
  return (
    <>
      <div className="bg-[#ffb9573c] w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
        <div className="h-full mix-blend-screen">
          <main className="xl:hidden">{children}</main>
          <section className="hidden xl:flex flex-col h-screen py-20 items-center justify-center">
            <p className="font-body text-center font-semibold text-4xl word-spacing md:text-2xl">
              The
              <br />
              newspaper
              <br />
              content is
              <br />
              currently only
              <br />
              displayed
              <br />
              on screen sizes
              <br />
              larger than
              <br />
              1280px.
            </p>
            <p className="font-body text-center font-semibold text-4xl word-spacing mt-10 md:text-2xl">
              We
              <br />
              apologize
              <br />
              for the
              <br />
              inconvenience
              <br />
              and are
              <br />
              working to
              <br />
              resolve the issue.
              <br />
              Thank you for
              <br />
              your patience.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
