import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '../components/Link'
export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')
    return { props: {posts} }
}
export default function Projects({posts}) {
    return (
        <>
            <PageSEO
                title={`Projects - ${siteMetadata.author}`}
                description={siteMetadata.description}
            />
            <div className="p-7 md:p-12 flex flex-col items-center">
                <h1 className="text-center font-bold text-3xl md:text-5xl xl:text-7xl ">XU HƯỚNG TÍNH DỤC</h1>
                <div className="mb-10 flex flex-col-reverse md:flex-col justify-center  items-center">
                    <div className="font-Montserrat md:p-10">
                            <p className="text-sm  md:text-sm xl:text-xl  text-justify mt-10 rounded-xl bg-gradient drop-shadow-xl p-4 font-semibold" >" (Sexual Orientation): Khái niệm chỉ sự thu hút tình dục và tình cảm đối với giới nào: cùng giới, khác giới, nhiều giới hay không một giới nào. Sự thu hút tình dục và tình cảm của một số người có thể đồng nhất với nhau, số khác thì không. "</p>
                    </div>

                    <div className="flex flex-wrap items-center  justify-center">
                    {posts.map((frontMatter) => {
                        const { slug, date, title, summary, image,tags } = frontMatter
                        if (image) {
                            return (
                              <div className="md:w-1/3" key={slug}>
                                <Card
                                  imgSrc={image}
                                  href={`/blog/${slug}`}
                                  description={summary}
                                />
                              </div>
                            )
                          }
                          return null;
                    })}
                    </div>
                </div>
                <div className="hover:scale-110 transition-transform duration-300">
                    <Link href={"/blog"}>
                        <a
                            className="rounded-full text-center bg-gradient text-white font-Montserrat font-semibold px-8 py-3"
                        >
                            Xem thêm
                        </a>
                    </Link> 
                </div>
            </div>
        </>
    )
}
