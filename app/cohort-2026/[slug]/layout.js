export const metadata = {
    title: "Impulso Joven — Cohort 2026",
    description: "Impulso Joven forma parte de ARCANA Sandbox Cohort 2026 con Emprende Jauja, una plataforma enfocada en conectar jóvenes con oportunidades laborales locales.",
    alternates: {
        canonical: "/cohort-2026/impulso-joven"
    },
    openGraph: {
        title: "Impulso Joven — ARCANA Sandbox",
        description: "Conoce a Impulso Joven, equipo seleccionado para ARCANA Sandbox Cohort 2026.",
        url: "/cohort-2026/impulso-joven",
        images: [
            {
                url: "/cohort-2026/impulso-joven/og.png",
                width: 1200,
                height: 630,
                alt: "Impulso Joven — ARCANA Sandbox Cohort 2026"
            }
        ]
    }
};

export default function CohortSlugLayout ({ children }) {
    return (
        <>{children}</>
    )
}