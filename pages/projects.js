import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from '../components/Link'
export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')
    return { props: { posts } }
}
export default function Projects({ posts }) {
    return (
        <>
            <PageSEO
                title={`Projects - ${siteMetadata.author}`}
                description={siteMetadata.description}
            />
            <div className="flex flex-col items-center p-7 md:p-12">
                <h1 className="text-center text-3xl font-bold md:text-5xl xl:text-7xl ">
                    XU HƯỚNG TÍNH DỤC
                </h1>
                <div className="mb-10 flex flex-col-reverse items-center justify-center  md:flex-col">
                    <div className="font-Montserrat md:p-10">
                        <p className="mt-10  rounded-xl bg-gradient  p-4 text-justify text-sm font-semibold drop-shadow-xl md:text-sm xl:text-xl">
                            " (Sexual Orientation): Khái niệm chỉ sự thu hút tình dục và tình cảm
                            đối với giới nào: cùng giới, khác giới, nhiều giới hay không một giới
                            nào. Sự thu hút tình dục và tình cảm của một số người có thể đồng nhất
                            với nhau, số khác thì không. "
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center  justify-center">
                        {posts.map((frontMatter) => {
                            const { slug, date, title, summary, image, tags } = frontMatter
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
                            return null
                        })}
                    </div>
                </div>
                <div className="transition-transform duration-300 hover:scale-110">
                    <Link href={'/blog'}>
                        <a className="rounded-full bg-gradient px-8 py-3 text-center font-Montserrat font-semibold text-white">
                            Xem thêm
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}
