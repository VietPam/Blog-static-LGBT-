import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination, input }) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts.filter((frontMatter) => {
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })

    // If initialDisplayPosts exist, display it if no searchValue is specified
    const displayPosts = !searchValue ? [] : filteredBlogPosts

    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        {title}
                    </h1>
                    <div className="relative ml-10 flex max-w-lg items-center">
                        <input
                            aria-label="Search articles"
                            type="text"
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Tìm gì đi má"
                            className=" ml-16 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-100 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-100 dark:text-gray-900"
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
                <ul>
                    {!filteredBlogPosts.length && 'Chết rồi tui mình chưa có bài, bạn đợi hé'}
                    {displayPosts.map((frontMatter) => {
                        const { slug, date, title, summary, tags } = frontMatter
                        return (
                            <li key={slug} className="py-4">
                                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={date}>{formatDate(date)}</time>
                                        </dd>
                                    </dl>

                                    <div className="space-y-3 xl:col-span-3">
                                        <div>
                                            <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="text-gray-900 dark:text-gray-100"
                                                >
                                                    {title}
                                                </Link>
                                            </h3>

                                            <div className="flex flex-wrap">
                                                {tags.map((tag) => (
                                                    <Tag key={tag} text={tag} />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                            {summary}
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
