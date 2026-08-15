import { cohort } from "@/db/db";

export async function generateMetadata({ params }) {
    
    const { slug } = await params;

    const item = cohort.find((entry) => entry.slug === slug);

    if (!item) {
        return {
            title: "Proyecto no encontrado — ARCANA Sandbox",
            description: "El proyecto solicitado no forma parte de ARCANA Sandbox Cohort 2026.",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const teamName =typeof item.team === "string" ? item.team : item.team?.name;

    const projectName =typeof item.project === "string" ? item.project : item.project?.name;

    const description = item.project?.shortDescription ?? item.description ?? `${teamName} forma parte de ARCANA Sandbox Cohort 2026 con ${projectName}.`;

    const url = `/cohort-2026/${item.slug}`;

    const ogImage = item.ogImage ?? `${url}/og.png`;

    return {
        title: `${teamName} — Cohort 2026`,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: "website",
            locale: "es_PE",
            url,
            siteName: "ARCANA Sandbox",
            title: `${teamName} — ARCANA Sandbox`,
            description: `Conoce a ${teamName}, equipo seleccionado para ARCANA Sandbox Cohort 2026 con el proyecto ${projectName}.`,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${teamName} — ARCANA Sandbox Cohort 2026`,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: `${teamName} — ARCANA Sandbox`,
            description: `${teamName} forma parte de ARCANA Sandbox Cohort 2026 con ${projectName}.`,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default function CohortSlugLayout({ children }) {
    return children;
}