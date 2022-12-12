import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
import Profile from "../public/profile.jpg";
import Laying from "../public/laying.png";
import { fetchedData } from "./api/hello.js";

export const config = {
  unstable_runtimeJS: false,
};

export default function Home({ blogs }) {
  const posts = blogs.data.user.publication.posts.slice(0, 3);
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "long",
  });

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = weekday[today.getDay()];

  return (
    <Layout>
      <Head>
        <title>Ashwin - Frontend Developer</title>
        <meta name="description" content="Ashwin Chauhan's portfolio website" />
        <link rel="icon" href="/Frame 14.png" />
        <meta property="og:url" content="https://www.ashwin.codes/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ashwin - Frontend Developer" />
        <meta
          property="og:description"
          content="Ashwin Chauhan's portfolio website"
        />
      </Head>
      <div className="h-full py-8">
        <div className="max-w-7xl mx-auto">
          {/* whole frame */}
          <div className="border-2 border-black">
            {/* heading frame */}
            <div className="border-b-2 border-black p-8">
              <div className="mx-auto w-fit text-center">
                <div className="flex justify-between items-end">
                  <p className="font-body basis-1/3 text-start text-base">
                    {day}
                  </p>
                  <h4 className="font-[Chomsky] font-normal text-4xl basis-1/3 text-black capatalize">
                    Ashwin&apos;s Portfolio
                  </h4>
                  <p className="font-body justify-self-start text-base text-end basis-1/3">
                    {dateString}
                  </p>
                </div>
                <div className="w-full border-4 border-black my-2"></div>
                <h1 className="font-heading font-normal uppercase text-9xl">
                  Frontend Developer
                </h1>
                <div className="flex justify-between">
                  <h3 className="font-heading font-normal text-5xl text-black">
                    Ashwin Chauhan, 20
                  </h3>
                  <h3 className="font-heading font-normal text-5xl text-black">
                    30°42&apos;56.7&quot;N 76°39&apos;06.8&quot;E
                  </h3>
                </div>
              </div>
            </div>
            {/* content frame */}
            <div className="border-b-2 border-black flex justify-between">
              {/* who am i section */}
              <div className=" w-full p-4 flex-[50%] border-r-2 border-black flex flex-col justify-between">
                <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter text-black">
                  The Story...
                </h4>
                <Image src={Profile} alt="" className="mb-6" />
                <p className="font-body font-normal text-lg text-black leading-7 word-spacing mb-3">
                  Ashwin is passionate about the power of the web and how it all
                  comes together. He loves exploring the world of front-end
                  development and using his skills to create engaging, dynamic
                  experiences for users.
                </p>
                <p className="font-body font-normal text-lg text-black leading-7 word-spacing mb-3">
                  &nbsp;&nbsp;Ashwin comes from the city of Meerut. He skipped
                  formal college education to learn the How, What, and Why of
                  Frontend Development. Since then, he has taught himself
                  everything from how the web works to building web apps.
                </p>
                <p className="font-body font-normal text-lg text-black leading-7 word-spacing">
                  &nbsp;&nbsp;When Ashwin is not coding, you can find him
                  reading and writing about various topics such as philosophy,
                  psychology, self-improvement, and technology.
                </p>
                <div className="bg-black w-full h-full mt-6"></div>
              </div>
              {/* project section */}
              <div className="p-4 w-full flex flex-col justify-between">
                <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter text-black">
                  Ashwin&apos;s Projects
                </h4>
                {/* <div>
                  <div className="flex justify-between items-start mb-4">
                    <Image
                      src={Profile}
                      alt=""
                      className="w-[312px] h-[200px] mr-4"
                    />
                    <div>
                      <h6 className="font-subHeading tracking-[-2%] text-2xl font-semibold uppercase mb-1">
                        Career Taxi Website
                      </h6>
                      <p className="font-body font-normal text-lg text-black leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore non incidunt libero odio labore assumenda, sit
                        nemo laboriosam animi cumque?
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <Image
                      src={Profile}
                      alt=""
                      className="w-[312px] h-[200px] mr-4"
                    />
                    <div>
                      <h6 className="font-subHeading tracking-[-2%] text-2xl font-semibold uppercase mb-1">
                        Career Taxi Website
                      </h6>
                      <p className="font-body font-normal text-lg text-black leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore non incidunt libero odio labore assumenda, sit
                        nemo laboriosam animi cumque?
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <Image
                      src={Profile}
                      alt=""
                      className="w-[312px] h-[200px] mr-4"
                    />
                    <div>
                      <h6 className="font-subHeading tracking-[-2%] text-2xl font-semibold uppercase mb-1">
                        Career Taxi Website
                      </h6>
                      <p className="font-body font-normal text-lg text-black leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore non incidunt libero odio labore assumenda, sit
                        nemo laboriosam animi cumque?
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <Image
                      src={Profile}
                      alt=""
                      className="w-[312px] h-[200px] mr-4"
                    />
                    <div>
                      <h6 className="font-subHeading tracking-[-2%] text-2xl font-semibold uppercase mb-1">
                        Career Taxi Website
                      </h6>
                      <p className="font-body font-normal text-lg text-black leading-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore non incidunt libero odio labore assumenda, sit
                        nemo laboriosam animi cumque?
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="bg-black w-full h-full text-white flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-body uppercase font-semibold text-4xl word-spacing">
                      This
                      <br />
                      section
                      <br />
                      of the
                      <br />
                      newspaper
                      <br />
                      is being
                      <br />
                      worked
                      <br />
                      on by the
                      <br />
                      publisher.
                    </p>{" "}
                    <p className="uppercase word-spacing text-black bg-white font-body mt-4 text-2xl">
                      please stay tuned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              {/* writing section */}
              <div className="p-4 border-r-2 border-black w-full flex-[40%] flex flex-col">
                <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter text-black">
                  Notes
                </h4>
                {posts.map((post) => {
                  return (
                    <>
                      <a
                        href={`https://ashwincodes.hashnode.dev/${post.slug}`}
                        target="_blank"
                        className="font-body block font-normal text-lg underline mb-2 text-black leading-7"
                        rel="noreferrer"
                      >
                        {post.title}
                      </a>
                    </>
                  );
                })}
                <a
                  href="https://ashwincodes.hashnode.dev/"
                  className="font-body block font-normal text-lg underline mb-2 text-black leading-7"
                >
                  More ➚
                </a>
                <div className="bg-black w-full h-full mt-6"></div>
              </div>
              {/* contact section */}
              <div className="flex flex-col relative items-start p-4 justify-between w-full flex-[60%]">
                <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter text-black w-[75%]">
                  Please reach out to Ashwin if you need assistance with
                  centering your div
                </h4>
                <div className="font-body font-normal text-lg underline text-black leading-7">
                  <a
                    href="mailto:ashwindevx@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    gmail
                  </a>
                  <a
                    href="https://twitter.com/ashwincodes"
                    target="_blank"
                    className="mx-2"
                    rel="noreferrer"
                  >
                    twitter
                  </a>
                  <a
                    href="https://github.com/ashwindevx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>
                </div>
                <div className="bg-black w-full h-full mt-6"></div>
                <Image src={Laying} alt="" className="absolute right-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = (await fetchedData()) ?? [];
  return {
    props: { blogs },
    revalidate: 10, // seconds
  };
}
