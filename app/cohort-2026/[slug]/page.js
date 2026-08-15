import { notFound } from "next/navigation";
import { cohort } from "@/db/db";
import Link from "next/link";

export default async function Page({ params }) {
    const { slug } = await params;

    const year = new Date().getFullYear();
    const item = cohort.find((entry) => entry.slug === slug);

    if (!item) {
        notFound();
    }

    return (
        <>
            <main className="w-full bg-primary">

                {/* ========================================
                    NAV
                ======================================== */}
                <nav className="w-full border-thin-bottom">
                    <div
                        className="w m-auto flex items-center justify-between py-md"
                        style={{ "--w": "90%" }}
                    >
                        <Link href="/" className="text-white">
                            ARCANA
                        </Link>

                        <div className="flex items-center gap-md">
                            <p className="text-muted">
                                SANDBOX · COHORT {item.cohort}
                            </p>

                            <Link
                                href="/#cohort"
                                className="text-white"
                            >
                                ← COHORT
                            </Link>
                        </div>
                    </div>
                </nav>


                {/* ========================================
                    HERO
                ======================================== */}
                <section className="w-full">
                    <div
                        className="w m-auto flex flex-col min-h-screen justify-between py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <div className="flex items-center justify-between">
                            <p className="text-muted">
                                {item.id}
                            </p>

                            <p className="text-muted">
                                {item.status}
                            </p>
                        </div>

                        <div className="py-xl">
                            <p className="text-muted mb-md">
                                {item.team.name}
                            </p>

                            <h1 className="text-3xl lg:text-5xl mb-lg">
                                {item.project.name}
                            </h1>

                            <p className="text-lg lg:text-2xl text-muted max-w-4xl">
                                {item.project.tagline}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 border-thin">
                            <Info
                                label="ID"
                                value={item.id}
                            />

                            <Info
                                label="INDUSTRY"
                                value={item.industry}
                            />

                            <Info
                                label="STAGE"
                                value={item.stage}
                            />

                            <Info
                                label="LOCATION"
                                value={item.location}
                            />
                        </div>

                    </div>
                </section>


                {/* ========================================
                    INTRO
                ======================================== */}
                <section className="w-full border-thin-top">
                    <div
                        className="w m-auto grid grid-cols-1 lg:grid-cols-2 py-xl gap-xl"
                        style={{ "--w": "90%" }}
                    >

                        <div>
                            <SectionNumber>
                                01
                            </SectionNumber>

                            <h2 className="text-xl lg:text-3xl">
                                EL PROYECTO
                            </h2>
                        </div>

                        <div>
                            <p className="text-lg lg:text-xl mb-lg">
                                {item.project.description}
                            </p>

                            <p className="text-muted">
                                {item.project.purpose}
                            </p>
                        </div>

                    </div>
                </section>


                {/* ========================================
                    SANDBOX STATEMENT
                ======================================== */}
                <section className="w-full bg-secondary">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >
                        <p className="text-muted mb-lg">
                            ARCANA SANDBOX
                        </p>

                        <blockquote className="text-2xl lg:text-5xl max-w-6xl">
                            “{item.sandbox.quote}”
                        </blockquote>
                    </div>
                </section>


                {/* ========================================
                    WHY SELECTED
                ======================================== */}
                <section className="w-full">
                    <div
                        className="w m-auto grid grid-cols-1 lg:grid-cols-2 py-xl gap-xl"
                        style={{ "--w": "90%" }}
                    >

                        <div>
                            <SectionNumber>
                                02
                            </SectionNumber>

                            <h2 className="text-xl lg:text-3xl">
                                POR QUÉ FUE SELECCIONADO
                            </h2>
                        </div>

                        <div className="flex flex-col gap-lg">

                            <p className="text-lg lg:text-2xl">
                                {item.sandbox.selectionReason}
                            </p>

                            <div className="border-thin p-lg bg-secondary">
                                <p className="text-muted mb-md">
                                    NUESTRA TESIS
                                </p>

                                <p className="text-lg">
                                    {item.sandbox.thesis}
                                </p>
                            </div>

                        </div>

                    </div>
                </section>


                {/* ========================================
                    PROBLEM
                ======================================== */}
                <section className="w-full border-thin-top">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xl">

                            <div>
                                <SectionNumber>
                                    03
                                </SectionNumber>

                                <p className="text-muted">
                                    THE PROBLEM
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl lg:text-4xl">
                                    {item.problem.headline}
                                </h2>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-3 border-thin">

                            <ContentCell
                                label="PROBLEM"
                                text={item.problem.statement}
                            />

                            <ContentCell
                                label="MAIN CAUSE"
                                text={item.problem.mainCause}
                            />

                            <ContentCell
                                label="CHALLENGE"
                                text={item.problem.challenge}
                            />

                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-2 mt-xl gap-xl">

                            <div>
                                <p className="text-muted mb-md">
                                    CONSEQUENCES
                                </p>

                                <NumberedList
                                    items={item.problem.consequences}
                                />
                            </div>

                            <div>
                                <p className="text-muted mb-md">
                                    INSIGHTS
                                </p>

                                <NumberedList
                                    items={item.problem.insights}
                                />
                            </div>

                        </div>

                    </div>
                </section>


                {/* ========================================
                    SOLUTION
                ======================================== */}
                <section className="w-full bg-secondary">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xl">

                            <div>
                                <SectionNumber>
                                    04
                                </SectionNumber>

                                <p className="text-muted">
                                    THE SOLUTION
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl lg:text-4xl mb-lg">
                                    {item.solution.headline}
                                </h2>

                                <p className="text-lg text-muted">
                                    {item.solution.description}
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-thin">

                            {item.solution.coreFeatures.map((feature, index) => (
                                <div
                                    key={feature.name}
                                    className="p-lg border-thin"
                                >
                                    <p className="text-muted mb-lg">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <h3 className="text-lg mb-sm">
                                        {feature.name}
                                    </h3>

                                    <p className="text-muted">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ========================================
                    AUDIENCE
                ======================================== */}
                <section className="w-full">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <SectionHeader
                            number="05"
                            title="PARA QUIÉN"
                        />


                        <div className="grid grid-cols-1 lg:grid-cols-2 border-thin">

                            <AudienceCard
                                label="PRIMARY"
                                audience={item.audience.primary}
                            />

                            <AudienceCard
                                label="SECONDARY"
                                audience={item.audience.secondary}
                            />

                        </div>

                    </div>
                </section>


                {/* ========================================
                    RESEARCH
                ======================================== */}
                <section className="w-full border-thin-top">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <SectionHeader
                            number="06"
                            title="RESEARCH"
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">

                            <div>
                                <p className="text-muted mb-sm">
                                    METHODOLOGY
                                </p>

                                <p className="text-xl">
                                    {item.research.methodology}
                                </p>
                            </div>


                            <div>
                                <p className="text-muted mb-md">
                                    PHASES
                                </p>

                                <NumberedList
                                    items={item.research.phases}
                                />
                            </div>


                            <div>
                                <p className="text-muted mb-md">
                                    IDENTIFIED NEEDS
                                </p>

                                <NumberedList
                                    items={item.research.identifiedNeeds}
                                />
                            </div>

                        </div>

                    </div>
                </section>


                {/* ========================================
                    VALIDATION
                ======================================== */}
                <section className="w-full bg-secondary">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <SectionHeader
                            number="07"
                            title="VALIDATION"
                        />


                        <div className="grid grid-cols-2 lg:grid-cols-4 border-thin mb-xl">

                            <Info
                                label="PROBLEM"
                                value={item.validation.problem}
                            />

                            <Info
                                label="CUSTOMER"
                                value={item.validation.customer}
                            />

                            <Info
                                label="SOLUTION"
                                value={item.validation.solution}
                            />

                            <Info
                                label="PRICE"
                                value={item.validation.price}
                            />

                        </div>


                        <div className="flex flex-col border-thin">

                            {item.validation.hypotheses.map((hypothesis, index) => (
                                <div
                                    key={`${hypothesis.type}-${index}`}
                                    className="grid grid-cols-1 lg:grid-cols-4 border-thin-bottom"
                                >

                                    <div className="p-md">
                                        <p className="text-muted">
                                            {String(index + 1).padStart(2, "0")}
                                        </p>
                                    </div>

                                    <div className="p-md">
                                        <p className="text-muted mb-sm">
                                            TYPE
                                        </p>

                                        <p>
                                            {hypothesis.type}
                                        </p>
                                    </div>

                                    <div className="p-md lg:col-span-2">
                                        <p className="text-muted mb-sm">
                                            HYPOTHESIS
                                        </p>

                                        <p>
                                            {hypothesis.hypothesis}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ========================================
                    PRODUCT EVOLUTION
                ======================================== */}
                <section className="w-full">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <SectionHeader
                            number="08"
                            title="PRODUCT EVOLUTION"
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-4">

                            {item.productEvolution.map((stage, index) => (
                                <div
                                    key={stage.stage}
                                    className="border-thin p-lg"
                                >
                                    <p className="text-muted mb-xl">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <h3 className="text-xl mb-md">
                                        {stage.stage}
                                    </h3>

                                    <p className="text-muted">
                                        {stage.description}
                                    </p>

                                    {stage.status && (
                                        <p className="mt-xl">
                                            {stage.status}
                                        </p>
                                    )}
                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ========================================
                    TEAM
                ======================================== */}
                <section className="w-full bg-secondary">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xl">

                            <div>
                                <SectionNumber>
                                    09
                                </SectionNumber>

                                <p className="text-muted">
                                    THE TEAM
                                </p>
                            </div>

                            <div>
                                <h2 className="text-3xl lg:text-5xl mb-md">
                                    {item.team.name}
                                </h2>

                                <p className="text-muted text-lg mb-lg">
                                    {item.team.institution}
                                </p>

                                <p className="text-lg">
                                    {item.team.description}
                                </p>
                            </div>

                        </div>


                        <div className="border-thin">

                            {item.team.members.map((member, index) => (
                                <div
                                    key={member.name}
                                    className="grid grid-cols-1 md:grid-cols-4 border-thin-bottom p-md"
                                >
                                    <p className="text-muted">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <p className="md:col-span-2">
                                        {member.name}
                                    </p>

                                    <p className="text-muted">
                                        {member.originalRole}
                                    </p>
                                </div>
                            ))}

                        </div>


                        {item.team.advisor && (
                            <div className="mt-lg border-thin p-lg">
                                <p className="text-muted mb-sm">
                                    ADVISOR
                                </p>

                                <p className="text-xl">
                                    {item.team.advisor.name}
                                </p>

                                <p className="text-muted">
                                    {item.team.advisor.role}
                                </p>
                            </div>
                        )}

                    </div>
                </section>


                {/* ========================================
                    ARCANA INVESTMENT
                ======================================== */}
                <section className="w-full">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <SectionHeader
                            number="10"
                            title="ARCANA CONTRIBUTION"
                        />


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xl">

                            <div>
                                <p className="text-muted mb-sm">
                                    TECHNOLOGY INVESTMENT
                                </p>

                                <p className="text-3xl lg:text-5xl">
                                    {item.investment.display}
                                </p>
                            </div>

                            <div>
                                <p className="text-lg">
                                    {item.investment.description}
                                </p>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-thin">

                            {item.sandbox.arcanaContribution.map((contribution, index) => (
                                <div
                                    key={contribution.area}
                                    className="p-lg border-thin"
                                >
                                    <p className="text-muted mb-xl">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <h3 className="text-xl mb-md">
                                        {contribution.area}
                                    </h3>

                                    <p className="text-muted">
                                        {contribution.description}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ========================================
                    ROADMAP
                ======================================== */}
                <section className="w-full bg-secondary">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <SectionHeader
                            number="11"
                            title="THE ROAD AHEAD"
                        />


                        <div className="flex flex-col border-thin">

                            {item.roadmap.map((phase) => (
                                <div
                                    key={phase.phase}
                                    className="grid grid-cols-1 lg:grid-cols-12 border-thin-bottom"
                                >

                                    <div className="lg:col-span-1 p-lg">
                                        <p className="text-muted">
                                            {phase.phase}
                                        </p>
                                    </div>


                                    <div className="lg:col-span-3 p-lg">
                                        <p className="text-muted mb-sm">
                                            {phase.name}
                                        </p>

                                        <h3 className="text-xl">
                                            {phase.title}
                                        </h3>
                                    </div>


                                    <div className="lg:col-span-6 p-lg">
                                        <ul className="flex flex-col gap-sm">
                                            {phase.objectives.map((objective) => (
                                                <li
                                                    key={objective}
                                                    className="text-muted"
                                                >
                                                    {objective}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>


                                    <div className="lg:col-span-2 p-lg">
                                        <p>
                                            {phase.status}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ========================================
                    IMPACT
                ======================================== */}
                <section className="w-full">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <SectionHeader
                            number="12"
                            title="POTENTIAL IMPACT"
                        />


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">

                            <div>
                                <p className="text-muted mb-md">
                                    OBJECTIVES
                                </p>

                                <NumberedList
                                    items={item.impact.objectives}
                                />
                            </div>


                            <div>
                                <p className="text-muted mb-md">
                                    BENEFICIARIES
                                </p>

                                <NumberedList
                                    items={item.impact.beneficiaries}
                                />
                            </div>

                        </div>

                    </div>
                </section>


                {/* ========================================
                    STORY
                ======================================== */}
                <section className="w-full border-thin-top">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <SectionHeader
                            number="13"
                            title="FROM PROTOTYPE TO SANDBOX"
                        />


                        <div className="grid grid-cols-1 lg:grid-cols-3 border-thin">

                            <StoryCard
                                number="01"
                                title="BEFORE"
                                text={item.story.beforeSandbox}
                            />

                            <StoryCard
                                number="02"
                                title="NOW"
                                text={item.story.now}
                            />

                            <StoryCard
                                number="03"
                                title="NEXT"
                                text={item.story.future}
                            />

                        </div>

                    </div>
                </section>


                {/* ========================================
                    FINAL STATEMENT
                ======================================== */}
                <section className="w-full bg-secondary min-h-screen flex items-center">
                    <div
                        className="w m-auto py-xl"
                        style={{ "--w": "90%" }}
                    >

                        <p className="text-muted mb-xl">
                            ARCANA SANDBOX · COHORT {item.cohort}
                        </p>

                        <h2 className="text-3xl lg:text-6xl max-w-6xl mb-xl">
                            No apostamos por el producto.
                            <br />
                            Apostamos por ustedes.
                        </h2>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-xl">
                            <div>
                                <p className="text-xl">
                                    {item.team.name}
                                </p>

                                <p className="text-muted">
                                    {item.project.name}
                                </p>
                            </div>

                            <div>
                                <p className="text-muted">
                                    {item.id}
                                </p>

                                <p>
                                    SELECTED · COHORT {item.cohort}
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </main>


            {/* ========================================
                FOOTER
            ======================================== */}
            <footer className="w-full bg-secondary px-xl py-md border-thin-top">
                <div
                    className="w m-auto flex flex-col items-center gap-md justify-between lg:flex-row"
                    style={{ "--w": "90%" }}
                >
                    <p className="text-muted text-center">
                        © {year} ARCANA CORP. ALL RIGHTS RESERVED.
                    </p>

                    <ul className="flex items-center gap-md">
                        <li>
                            <Link href="/" className="text-muted">
                                PRIVACY
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="text-muted">
                                TERMS
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className="text-muted">
                                INDEX
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}


/* ========================================
   SMALL COMPONENTS
======================================== */

function SectionNumber({ children }) {
    return (
        <p className="text-muted mb-md">
            / {children}
        </p>
    );
}


function SectionHeader({ number, title }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl mb-xl">
            <div>
                <SectionNumber>
                    {number}
                </SectionNumber>
            </div>

            <div>
                <h2 className="text-2xl lg:text-4xl">
                    {title}
                </h2>
            </div>
        </div>
    );
}


function Info({ label, value }) {
    return (
        <div className="w-full p-md border-thin">
            <p className="text-muted mb-sm">
                {label}
            </p>

            <p>
                {value}
            </p>
        </div>
    );
}


function ContentCell({ label, text }) {
    return (
        <div className="p-lg border-thin">
            <p className="text-muted mb-xl">
                {label}
            </p>

            <p className="text-lg">
                {text}
            </p>
        </div>
    );
}


function NumberedList({ items }) {
    return (
        <div className="flex flex-col border-thin-top">
            {items.map((item, index) => (
                <div
                    key={`${item}-${index}`}
                    className="grid grid-cols-[50px_1fr] gap-md py-md border-thin-bottom"
                >
                    <p className="text-muted">
                        {String(index + 1).padStart(2, "0")}
                    </p>

                    <p>
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
}


function AudienceCard({ label, audience }) {
    return (
        <div className="p-lg border-thin">
            <p className="text-muted mb-xl">
                {label}
            </p>

            <h3 className="text-2xl mb-sm">
                {audience.name}
            </h3>

            {audience.ageRange && (
                <p className="text-muted">
                    {audience.ageRange}
                </p>
            )}

            <p className="text-muted mb-xl">
                {audience.location}
            </p>

            <p className="text-muted mb-md">
                NEEDS
            </p>

            <NumberedList
                items={audience.needs}
            />
        </div>
    );
}


function StoryCard({ number, title, text }) {
    return (
        <article className="p-lg border-thin min-h-[420px] flex flex-col justify-between">

            <div className="flex items-center justify-between">
                <p className="text-muted">
                    {number}
                </p>

                <p className="text-muted">
                    {title}
                </p>
            </div>

            <p className="text-lg">
                {text}
            </p>

        </article>
    );
}