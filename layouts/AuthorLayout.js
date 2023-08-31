import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
    const { name, avatar, occupation, company, email, twitter, linkedin, facebook} = frontMatter

    return (
        <>
            <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
            <div className="min-h-screen p-8 divide-y divide-gray-200 font-Montserrat">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Thông tin dự án
                    </h1>
                </div>
                <div className="items-start space-y-2  xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                    <div className="flex flex-col items-center pt-8">
                        <Image
                            src={avatar}
                            alt="avatar"
                            width="192px"
                            height="192px"
                            className="h-48 w-48 rounded-full"
                        />
                        <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                            {name}
                        </h3>
                        <div className="text-white">{occupation}</div>
                        <div className="text-white">{company}</div>
                        <div className="flex space-x-3 pt-6">
                            <SocialIcon kind="mail" href={`mailto:${email}`} />
                            <SocialIcon kind="facebook" href={facebook} />
                        </div>
                    </div>
                    <div className="rounded-2xl text-lg prose max-w-none text-justify pt-8 pb-8 text-white xl:col-span-2">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
