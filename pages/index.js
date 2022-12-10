import Image from "next/image";
import Layout from "../components/layout";
import Profile from "../public/profile.jpg";
import Laying from "../public/laying.png";
import { fetchedData } from "./api/hello.js";

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
                <Image src={Profile} alt="" priority className="mb-6" />
                <p className="font-body font-normal text-lg text-black leading-7">
                  My name is Ashwin Chauhan, I am 19 years old, originally from
                  Meerut now living in Mohali. I was pursuing BTECH in CS but
                  dropped out in 2020 because I wasn’t ending any value in it. I
                  did my High schooling from MPS school, Meerut in Science. As
                  my interest was in Coding hence I immediately after my high
                  schooling I joined Devsnest Bootcamp for 7 months course and I
                  started learning from free sources. Then started teaching
                  myself to Code and Design. In early 2021 I joined Cato now
                  Navgurukul Labs as a volunteer Front End Web Developer and Web
                  Designer. After working a couple of months as a volunteer I
                  joined as a full time developer there. So, it’s been a year
                  and a half since working there.
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
                      priority
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
                      priority
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
                <Image
                  src={Laying}
                  priority
                  alt=""
                  className="absolute right-0"
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
  };
}
