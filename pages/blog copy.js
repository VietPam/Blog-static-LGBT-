import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { AppContext } from '../context/context_search'
import React, { useState, useContext } from 'react'
export const POSTS_PER_PAGE = 5

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter('blog')
    const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    }

    return { props: { initialDisplayPosts, posts, pagination } }
}
export default function Blog({ posts, initialDisplayPosts, pagination }) {
    return (
        <>
            <div>
                <PageSEO title={`OurRainbow`} description={siteMetadata.description} />
                <ListLayout
                    posts={posts}
                    initialDisplayPosts={initialDisplayPosts}
                    pagination={pagination}
                    title="Tất cả bài viết"
                />
            </div>
        </>
    )
}