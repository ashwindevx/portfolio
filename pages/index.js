import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
import Profile from "../public/profile.jpg";
import Laying from "../public/laying.png";
import { fetchedData } from "./api/hello.js";
import Projects from "/projects.json";

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
      <div className="h-full py-8 xl:py-20 lg:py-4">
        <div className="max-w-7xl px-8 lg:px-4 mx-auto xs:px-2">
          {/* whole frame */}
          <div className="border-2 border-black">
            {/* heading frame */}
            <div className="border-b-2 border-black p-8 md:px-4 xs:px-2">
              <div className="mx-auto w-fit text-center">
                <div className="flex justify-between items-end xs:flex-col xs:items-center">
                  <p className="font-body basis-1/3 text-start text-base sm:text-xs xs:text-base">
                    {day}
                  </p>
                  <h4 className="font-[Chomsky] lg:text-[1.75em] leading-7 md:text-2xl xs:text-3xl sm:text-xl sm:leading-5 md:leading-6 font-normal text-4xl basis-1/3 text-black capatalize">
                    Ashwin&apos;s Portfolio
                  </h4>
                  <p className="font-body justify-self-start text-base text-end basis-1/3 sm:text-xs xs:text-base">
                    {dateString}
                  </p>
                </div>
                <div className="w-full border-4 border-black my-2 md:border-2"></div>
                <h1 className="font-heading font-normal sm:mb-2 sm:text-[4.75em] xs:text-[5em] uppercase text-9xl xl:text-[7em] lg:text-[5.25em] md:text-[4.5em]">
                  Frontend Developer
                </h1>
                <div className="flex justify-between sm:flex-col">
                  <h3 className="font-heading xs:text-[1.8em] font-normal text-5xl sm:mb-2 xl:text-[2.75em] sm:text-[2em] lg:text-[2em] md:text-[1.75em] text-black">
                    Ashwin Chauhan, 20
                  </h3>
                  <h3 className="font-heading xs:text-[1.8em] font-normal text-5xl xl:text-[2.75em] sm:text-[2em] lg:text-[2em] md:text-[1.75em] text-black">
                    30°42&apos;56.7&quot;N 76°39&apos;06.8&quot;E
                  </h3>
                </div>
              </div>
            </div>
            {/* content frame */}
            <div className="border-b-2 border-black flex justify-between lg:flex-col">
              {/* who am i section */}
              <div className=" w-full p-4 flex-[50%] xs:px-2 border-r-2 border-black lg:border-r-0 lg:border-b-2 flex flex-col justify-between">
                <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter text-black md:text-3xl">
                  The Story...
                </h4>
                <div className="flex items-stretch">
                  <div className="lg:flex-[70%]">
                    <Image src={Profile} alt="" className="mb-6 w-full" />
                  </div>
                  <div className="bg-black w-full hidden lg:block mb-6 ml-4 lg:flex-[30%] sm:hidden">
                    hello
                  </div>
                </div>
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
                <div className="bg-black w-full h-full mt-6 lg:hidden"></div>
              </div>
              {/* project section */}
              <div className="p-4 xs:px-2 w-full flex flex-col">
                <h4 className="font-subHeading mb-6 font-bold md:text-3xl text-4xl tracking-tighter text-black">
                  Ashwin&apos;s Projects
                </h4>
                <div>
                  {Projects.map((project) => {
                    const { name, description, liveLink, githubLink } = project;
                    return (
                      <div
                        className="flex flex-col items-start mb-4 border-b-[1px] border-black pb-4 last:border-0 last:mb-0"
                        key={name}
                      >
                        <span className="flex justify-between w-full items-center">
                          <a
                            href={liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="font-subHeading md:text-xl underline tracking-tight text-2xl font-semibold uppercase"
                          >
                            {name}
                          </a>
                          <a
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="font-body font-semibold text-base text-black underline leading-7"
                          >
                            github
                          </a>
                        </span>
                        <p className="font-body font-normal text-lg text-black leading-7 word-spacing mt-3 mb-1">
                          {description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-black w-full h-full lg:hidden"></div>
              </div>
            </div>
            <div className="flex justify-between lg:flex-col">
              {/* writing section */}
              <div className="p-4 xs:px-2 border-r-2 border-black w-full flex-[40%] lg:border-r-0 lg:border-b-2 xl:flex-[30%] flex flex-col">
                <div className="xl:max-w-sm lg:max-w-none">
                  <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter text-black md:text-3xl">
                    Notes
                  </h4>
                  {posts.map((post) => {
                    return (
                      <>
                        <a
                          href={`https://ashwincodes.hashnode.dev/${post.slug}`}
                          target="_blank"
                          className="font-body block font-normal xl:truncate text-lg underline mb-2 text-black leading-7"
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
                </div>
                <div className="bg-black w-full h-full mt-6 lg:hidden"></div>
              </div>
              {/* contact section */}
              <div className="flex flex-col relative items-start p-4 xs:px-2 justify-between w-full xl:flex-[70%] flex-[60%]">
                <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter md:text-3xl text-black w-[75%] sm:w-full xl:w-2/3">
                  Please reach out to Ashwin if you need assistance with
                  centering your div
                </h4>
                <div className="font-body font-normal text-lg underline text-black leading-7 sm:flex sm:flex-col">
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
                    className="mx-2 sm:mx-0 my-1"
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
                <div className="bg-black w-full h-full mt-6 lg:h-28 sm:h-24"></div>
                <Image
                  src={Laying}
                  alt=""
                  className="absolute right-0 xl:-bottom-20 lg:-bottom-4 sm:w-[325px]"
                />
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
