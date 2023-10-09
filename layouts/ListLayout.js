import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState, useContext } from 'react'
import Pagination from '@/components/Pagination'
import ReadMore from '@/components/readmore'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import { AppContext } from '../context/context_search'
export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
    const [data, setData] = useContext(AppContext)
    const [searchValue, setSearchValue] = useState(data)
    const filteredBlogPosts = posts.filter((frontMatter) => {
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts =
        initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts
    return (
        <>
            <div className="min-h-screen divide-y divide-gray-200 pl-10 pr-10 md:pl-24 md:pr-24">
                <div className="items-center space-y-2 pt-10 pb-0 text-center md:space-y-5 md:pb-8">
                    <div className="max-w-screen relative flex scale-75 items-center md:scale-100">
                        <input
                            aria-label="Search articles"
                            type="text"
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder={data !== '' ? data : 'Tìm gì đi má'}
                            className=" ml-16 block w-full rounded-md border border-gray-300 bg-white px-4 text-gray-100 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-100 dark:text-gray-900"
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
                    <h1 className="text-xl font-extrabold leading-9 tracking-tight text-dark_blue sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
                        {title}
                    </h1>
                </div>
                <ul>
                    <div className="text-dark_blue">
                        {!filteredBlogPosts.length && 'No posts found.'}
                    </div>
                    {displayPosts.map((frontMatter) => {
                        const { slug, date, title, summary, tags } = frontMatter
                        return (
                            <li key={slug} className="py-4">
                                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-dark_blue">
                                            <time dateTime={date}>{formatDate(date)}</time>
                                        </dd>
                                    </dl>

                                    <div className="space-y-3 xl:col-span-3">
                                        <div>
                                            <h3 className="text-lg font-bold leading-8 tracking-tight md:text-2xl">
                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="text-dark_blue"
                                                >
                                                    {title}
                                                </Link>
                                            </h3>

                                            <div className="flex">
                                                {tags.map((tag) => {
                                                    return (
                                                        <div
                                                            key={tag}
                                                            className="mt-1 mb-1 mr-2 inline-flex items-center rounded-xl bg-white bg-opacity-50 p-2 transition-transform duration-300 hover:scale-110 md:mr-3 md:p-2"
                                                        >
                                                            <Tag text={tag} />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div className="prose max-w-none text-sm text-gray-700 md:text-lg">
                                            <ReadMore>{summary}</ReadMore>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {pagination && pagination.totalPages > 1 && !searchValue && (
                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                />
            )}
        </>
    )
}
