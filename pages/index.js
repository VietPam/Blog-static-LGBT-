import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'
import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '../context/context_search'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')
    const tags = await getAllTags('blog')
    return { props: { posts, tags } }
}
export default function Home({ tags }) {
    const [data, setData] = useContext(AppContext)
    const router = useRouter()
    const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
    const [randomTags] = useState(() => {
        const shuffledTags = sortedTags.sort(() => Math.random() - 0.5)
        return shuffledTags.slice(0, 6)
    })
    return (
        <div>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className="min-h-screen bg-image bg-cover bg-fixed bg-center bg-no-repeat">
                <div className="flex max-h-full flex-col items-center justify-center pt-10">
                    <div className=" shadow-drop-2xl w-6/12 font-Montserrat">
                        <h1 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:font-Montserrat md:text-5xl md:leading-14 xl:text-7xl xl:leading-relaxed">
                            {siteMetadata.headerTitle}
                        </h1>
                        <p className="text-center text-sm font-extralight text-gray-500 dark:text-gray-100 sm:text-lg ">
                            {siteMetadata.description}
                        </p>
                        <div className="pt-10">
                            <p className="text-center text-xl font-bold text-gray-500 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-xl md:leading-13 xl:text-xl">
                                BẠN MUỐN TÌM NỘI DUNG NÀO?
                            </p>
                        </div>
                    </div>
                    <div className="relative flex w-3/4 items-center pt-3 sm:w-5/12">
                        <input
                            aria-label="Search articles"
                            type="text"
                            onKeyDown={async (e) => {
                                await setData(e.target.value)
                                if (e.key === 'Enter') {
                                    router.push('/blog')
                                }
                            }}
                            placeholder="Tìm gì đi má"
                            className=" ml-16 block w-full rounded-tr-3xl rounded-br-3xl  bg-white px-4 py-2 text-gray-100 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-100 dark:text-gray-900"
                        />
                        <span className="absolute">
                            <Image
                                src="/static/images/search_icon.png" // Thay đổi "/path/to/logo.png" thành đường dẫn đến tệp hình ảnh logo thực tế
                                alt="Logo"
                                height={100} // Thay đổi kích thước chiều cao của logo
                                width={100} // Thay đổi kích thước chiều rộng của logo
                            />
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center divide-y divide-gray-200 pt-10 dark:divide-gray-700">
                    <div className="flex max-w-lg flex-wrap items-center justify-center">
                        {Object.keys(tags).length === 0 && 'No tags found.'}
                        {randomTags.map((t) => {
                            return (
                                <div
                                    key={t}
                                    className="mt-2 mb-2 mr-5 inline-flex  items-center rounded-md bg-white bg-opacity-50 p-2"
                                >
                                    <Tag text={t} />
                                    <Link
                                        href={`/tags/${kebabCase(t)}`}
                                        className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                                    ></Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
