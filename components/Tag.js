import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
    return (
        <Link href={`/tags/${kebabCase(text)}`}>
            <a
                style={{ color: '#1E1457' }}
                className="text-xs font-semibold uppercase text-primary-500 hover:text-primary-600 md:text-sm md:font-bold"
            >
                {text.split(' ').join(' ')}
            </a>
        </Link>
    )
}

export default Tag
