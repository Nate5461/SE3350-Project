import Link from "next/link";
import Image from "next/image";


function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <div className="top-bar">
                <Link href="/">
                    <Image src="/olli.png"
                        width={50}
                        height={50}
                        alt="logo"
                    />


                </Link>
                <div className="title"><Link href="/">Cheer</Link></div>

                <div className="navigation">

                    <Link href="/"> {/* Use Link here */}
                        <div className="tab">Home</div>
                    </Link>

                    <Link href="/info/calendar"> {/* Use Link here */}
                        <div className="tab">Calendar</div>
                    </Link>

                    <Link href="/info/services"> {/* Use Link here */}
                        <div className="tab">Services</div>
                    </Link>

                    <Link href="/info/aboutus"> {/* Use Link here */}
                        <div className="tab">About Us</div>
                    </Link>

                    <Link href="/info/contact"> {/* Use Link here */}
                        <div className="tab">Contact</div>
                    </Link>

                    <Link href="/dashboard">
                        <div className="tab bg-black text-slate-200 rounded-lg">
                            <div className="text-slate-200 py-2 px-4">
                                login
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
            {children}

        </>
    )
}
export default LoginLayout;