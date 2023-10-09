import Image from './Image'
import Link from './Link'
const Card = ({ title, description, imgSrc, href }) => (
    <div className="p-3 md:p-10">
        <Link href={href} aria-label={`Link to ${title}`}>
            <div
                className={`${
                    imgSrc && 'h-full'
                }  relative overflow-hidden text-dark_blue transition-transform duration-300 hover:scale-110`}
            >
                {imgSrc && (
                    <Image
                        alt={title}
                        src={imgSrc}
                        className="rounded-xl object-cover object-center"
                        width={600}
                        height={400}
                    />
                )}
                <div className="flex opacity-0 transition-opacity duration-500 hover:opacity-100">
                    <p className="absolute inset-0 mb-1 flex items-center justify-center rounded-br-xl rounded-bl-xl bg-gradient-to-b from-transparent to-white px-3">
                        <div className="-mb-28 font-Montserrat font-normal">
                            {description.slice(0, 80)}...
                            <a href={href} className="text-pink-900 hover:text-pink-500">
                                xem thêm
                            </a>
                        </div>
                    </p>
                </div>
            </div>
        </Link>
    </div>
)

export default Card
