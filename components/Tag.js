import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
    return (
        <Link href={`/tags/${kebabCase(text)}`}>
            <a
                style={{ color: '#1E1457' }}
                className="text-xs md:text-sm font-semibold md:font-bold uppercase text-primary-500 hover:text-primary-600"
            >
                {text.split(' ').join(' ')}
            </a>
        </Link>
    )
}

export default Tag
