import DottedBackground from "@/components/BackgroundHero";
import { cohort } from "@/db/db";
import { IconCode, IconServer, IconPencilCode, IconThinkingMedium } from "@tabler/icons-react";
import Link from "next/link";

export default function Page () {

    const year = new Date().getFullYear();

    return (
        <>
        
            <main className="w-screen">
                <section className="relative w-screen h-screen">
                    <div className="absolute z-index-alt w-full h-full">
                        <div className="w h-full m-auto flex flex-col gap-sm items-left justify-end py-xl lg:w" style={{"--w": "90%", "--w-lg": "80%"}}>
                            <p className="text-muted">ARCANA / SANDBOX INITIATIVE</p>
                            <h1 className="text-2xl text-white lg:text-4xl">ARCANA SandBox</h1>
                            <p className="text-white text-lg">No apostamos por el producto. Apostamos por ustedes.</p>
                            <p className="w text-white text-md lg:w" style={{"--w": "100%", "--w-lg": "60%"}}>Un espacio creado por ARCANA para que jóvenes con ideas ambiciosas puedan experimentar, construir y convertirlas en productos reales.</p>
                            <Link href={'#'} className="inline-flex w-fit p-md fw-medium bg-white text-black">CONOCE LA COHORTE 2026</Link>
                        </div>
                    </div>
                    <DottedBackground/>
                </section>
                <section className="w-full lg:px-xl lg:py-xl">
                    <div className="relative w-full bg-primary px-lg py-lg lg:px-xl lg:py-xl" style={{"overflow": "hidden"}}>
                        <div className="w-full h-full flex flex-col lg:flex-row">
                            <div className="w-full">
                                <p className="uppercase">LA METÁFORA</p>
                                <h2 className="text-lg lg:text-3xl">El SandBox</h2>
                            </div>
                            <div className="w-full">
                                <p className="text-lg lg:text-2xl">Construir implica asumir riesgos. Una idea puede cambiar. Un producto puede fallar. Eso forma parte del proceso. Nosotros cubrimos el suelo con arena.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full lg:p-xl">
                    <div className="w m-auto" style={{"--w": "90%"}}>
                        <p className="text-muted uppercase">Lo que proveemos</p>
                        <h2 className="text-lg lg:text-2xl mb-xl">Nuestra infraestructura</h2>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-secondary">
                            <div className="w-full border-thin border-thin-inverse p-lg">
                                <p className="text-muted fw-medium">01</p>
                                <div className="flex items-center gap-md">
                                    <span><IconCode size={32} /></span>
                                    <h3 className="text-lg lg:text-xl">Engineering</h3>
                                </div>
                                <p className="text-muted">Desarrollo y arquitectura</p>
                            </div>
                            <div className="w-full border-thin border-thin-inverse p-lg">
                                <p className="text-muted fw-medium">02</p>
                                <div className="flex items-center gap-md">
                                    <span><IconServer size={32} /></span>
                                    <h3 className="text-lg lg:text-xl">Infrastructure</h3>
                                </div>
                                <p className="text-muted">Cloud, bases de datos, hosting</p>
                            </div>
                            <div className="w-full border-thin border-thin-inverse p-lg">
                                <p className="text-muted fw-medium">03</p>
                                <div className="flex items-center gap-md">
                                    <span><IconPencilCode size={32} /></span>
                                    <h3 className="text-lg lg:text-xl">Product</h3>
                                </div>
                                <p className="text-muted">Diseño, UI/UX y estrategia</p>
                            </div>
                            <div className="w-full border-thin border-thin-inverse p-lg">
                                <p className="text-muted fw-medium">04</p>
                                <div className="flex items-center gap-md">
                                    <span><IconThinkingMedium size={32} /></span>
                                    <h3 className="text-lg lg:text-xl">Knowledge</h3>
                                </div>
                                <p className="text-muted">Mentoría, datos y acompañamiento</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-xl lg:px-xl">
                    <div className="w m-auto" style={{"--w": "90%"}}>
                        <div className="w-full flex flex-col gap-md lg:items-end justify-between mb-xl lg:flex-row">
                            <div>
                                <p className="uppercase text-muted">Selección Actual</p>
                                <h2 className="text-xl lg:text-3xl">Cohort 2026</h2>
                            </div>
                            <p className="text-muted">STATUS: ACTIVE DEVELOPMENT</p>
                        </div>
                        {cohort.map((item) => (
                            <div key={item.id} className="w-full bg-secondary border-thin">
                                <div className="w-full flex items-center justify-between scroll-x">
                                    <div className="w-full p-md border-thin-bottom">
                                        <p className="text-nowrap text-white">ID</p>
                                        <p className="text-nowrap text-muted">{item.id}</p>
                                    </div>
                                    <div className="w-full p-md border-thin-bottom">
                                        <p className="text-nowrap text-white">INDUSTRY</p>
                                        <p className="text-nowrap text-muted">{item.industry}</p>
                                    </div>
                                    <div className="w-full p-md border-thin-bottom">
                                        <p className="text-nowrap text-white">STATUS</p>
                                        <p className="text-nowrap text-muted">{item.status}</p>
                                    </div>
                                    <div className="w-full p-md border-thin-bottom">
                                        <p className="text-nowrap text-white">INVESTMENT</p>
                                        <p className="text-nowrap text-muted">{item.investment}</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col px-md py-lg lg:flex-row">
                                    <div className="w-full flex flex-col">
                                        <h3 className="text-lg lg:text-2xl">{item.team}</h3>
                                        <p className="text-muted mb-lg">{item.project}</p>
                                        <p className="text-md mb-md">{item.description}</p>
                                        <Link href={item.href} className="inline-flex w-fit p-md border-thin-inverse">Ver detalles</Link>
                                    </div>
                                    <div className="w-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="grid-center w-full h-screen lg:px-xl">
                    <div className="w m-auto text-center flex flex-col gap-md" style={{"--w": "90%"}}>
                        <h2 className="text-xl fw-medium lg:text-3xl">Ideas change. Products fail. People learn. Talent compounds.</h2>
                        <p className="text-md text-muted lg:text-lg">No apostamos por el producto. Apostamos por ustedes.</p>
                        <div className="w-fit bg-secondary m-auto p-md">
                            <p>ARCANA Sandbox · Cohort 2026</p>
                            <p className="text-muted">Jauja, Perú.</p>
                        </div>
                    </div>
                </section>
            </main>
            
            <footer className="w-full bg-secondary px-xl py-md">
                <div className="w m-auto flex flex-col items-center gap-md justify-between lg:flex-row" style={{"--w": "90%"}}>
                    <p className="text-muted text-center">© {year} ARCANA CORP. ALL RIGHTS RESERVED.</p>
                    <ul className="flex items-center gap-md">
                        <li><Link href={'/'} className="text-muted">PRIVACY</Link></li>
                        <li><Link href={'/'} className="text-muted">TERMS</Link></li>
                        <li><Link href={'/'} className="text-muted">INDEX</Link></li>
                    </ul>
                </div>
            </footer>

        </>
    )
}