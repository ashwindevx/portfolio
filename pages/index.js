import Image from "next/image";
import Layout from "../components/layout";
import Profile from "../public/profile.jpg";
import Laying from "../public/laying.png";
import { fetchedData } from "./api/hello.js";

export const config = {
  unstable_runtimeJS: false,
};

export default function Home({ blogs }) {
  const posts = blogs.data.user.publication.posts.slice(0, 3);

  return (
    <Layout>
      <div className="h-full py-8">
        <div className="max-w-7xl mx-auto">
          {/* whole frame */}
          <div className="border-2 border-black">
            {/* heading frame */}
            <div className="border-b-2 border-black p-8">
              <div className="mx-auto w-fit text-center">
                <h4 className="font-[Chomsky] font-normal text-4xl text-black capatalize mb-6">
                  The Ashwin News
                </h4>
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
                  Who am I?
                </h4>
                <Image src={Profile} alt="" className="mb-6" />
                <p className="font-body font-normal text-lg text-black leading-7 word-spacing mb-3">
                  Hi there! I&apos;m Ashwin and I&apos;m passionate about the
                  power of the web and how it all comes together. I love
                  exploring the world of front-end development and using my
                  skills to create engaging, dynamic experiences for users.
                </p>
                <p className="font-body font-normal text-lg text-black leading-7 word-spacing mb-3">
                  &nbsp;&nbsp;I come from the city of Meerut. I skipped formal
                  college education to learn the How, What, and Why of Frontend
                  Development. Since then I have taught myself everything from
                  how the web works to building web apps.
                </p>
                <p className="font-body font-normal text-lg text-black leading-7 word-spacing">
                  &nbsp;&nbsp;When I&apos;m not coding, you can find me reading
                  and writing about various topics such as philosophy,
                  psychology, self-improvement, and technology.
                </p>
                <div className="bg-black w-full h-full mt-6"></div>
              </div>
              {/* project section */}
              <div className="p-4 w-full flex flex-col justify-between">
                <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter text-black">
                  Projects I have worked on
                </h4>
                <div>
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
                </div>
                <div className="bg-black w-full h-full mt-6"></div>
              </div>
            </div>
            <div className="flex justify-between">
              {/* writing section */}
              <div className="p-4 border-r-2 border-black w-full flex-[40%] flex flex-col">
                <h4 className="font-subHeading mb-6 font-bold text-4xl tracking-tighter text-black">
                  Writings
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
                  Please reach out to me if you need assistance with centering
                  your div
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
