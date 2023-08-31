import Image from './Image'
import Link from './Link'
const Card = ({ title, description, imgSrc, href }) => (
    <div className="p-3 md:p-10">
        <Link href={href} aria-label={`Link to ${title}`}>
            <div
                className={`${
                    imgSrc && 'h-full'
                }  overflow-hidden relative text-dark_blue hover:scale-110 transition-transform duration-300`}
            >
                {imgSrc &&
                    ((
                            <Image
                                alt={title}
                                src={imgSrc}
                                className="object-cover rounded-xl object-center"
                                width={600}
                                height={400}
                            />
                    ))}
                    <div className="opacity-0 transition-opacity flex duration-500 hover:opacity-100">
                        <p className="px-3 mb-1 absolute inset-0 rounded-br-xl rounded-bl-xl flex bg-gradient-to-b from-transparent to-white items-center justify-center">
                            <div className="-mb-28 font-Montserrat font-normal">
                                    {description.slice(0, 80)}...
                                    <a href={href} className="hover:text-pink-500 text-pink-900">xem thêm</a>
                            </div>

                        </p>
                    </div>
            </div>
        </Link>
    </div>
)

export default Card
