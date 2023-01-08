export default function Layout({ children }) {
  return (
    <>
      {/* <div className="bg-[#ffb9573c] w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
        <div className="h-full mix-blend-screen">
          <main>{children}</main>
        </div>
      </div> */}
      <div className="bg-[#ffb9573c] w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
        <div className="h-full">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
