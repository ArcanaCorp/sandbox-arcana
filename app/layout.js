import { Google_Sans_Flex } from "next/font/google";
import "@/styles/global.css";

const google_sans_flex = Google_Sans_Flex({
    variable: "--font-family",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
    metadataBase: new URL("https://sandbox.arcanacorp.dev"),
    title: {
        default: "ARCANA Sandbox",
        template: "%s | ARCANA Sandbox"
    },
    description: "ARCANA Sandbox es un espacio creado por ARCANA CORP para impulsar talento joven, transformar ideas en productos reales y construir la próxima generación de emprendedores tecnológicos.",
    applicationName: "ARCANA Sandbox",
    authors: [
        {
            name: "ARCANA CORP",
            url: "https://arcanacorp.dev"
        }
    ],
    creator: "ARCANA CORP",
    publisher: "ARCANA CORP",
    keywords: [
        "ARCANA Sandbox",
        "ARCANA CORP",
        "emprendimiento",
        "tecnología",
        "startups",
        "talento joven",
        "innovación",
        "software",
        "emprendedores",
        "Jauja",
        "Junín",
        "Perú",
        "incubación",
        "proyectos tecnológicos",
        "Cohort 2026"
    ],
    category: "technology",
    alternates: {
        canonical: "/"
    },
    openGraph: {
        type: "website",
        locale: "es_PE",
        url: "https://sandbox.arcanacorp.dev",
        siteName: "ARCANA Sandbox",
        title: "ARCANA Sandbox — Apostamos por ustedes",
        description: "No apostamos por el producto. Apostamos por ustedes. Un espacio de ARCANA CORP donde jóvenes pueden experimentar, construir, aprender y convertir ideas en productos reales.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "ARCANA Sandbox — Cohort 2026"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "ARCANA Sandbox — Apostamos por ustedes",
        description: "Un espacio creado por ARCANA CORP para que jóvenes construyan, experimenten y conviertan ideas en productos reales.",
        images: ["/og-image.png"],
        creator: "@ARCANACORP"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    icons: {
        icon: [
            {
                url: "/favicon.ico"
            },
            {
                url: "/icon.png",
                type: "image/png"
            }
        ],
        apple: "/apple-icon.png"
    },
    manifest: "/manifest.webmanifest",
    other: {
        "theme-color": "#000000"
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "ARCANA Sandbox",

    url: "https://sandbox.arcanacorp.dev",

    parentOrganization: {
        "@type": "Organization",
        name: "ARCANA CORP",
        url: "https://arcanacorp.dev"
    },

    description:
        "ARCANA Sandbox es una iniciativa de ARCANA CORP dedicada a impulsar talento joven mediante infraestructura, tecnología y acompañamiento.",

    address: {
        "@type": "PostalAddress",
        addressLocality: "Jauja",
        addressRegion: "Junín",
        addressCountry: "PE"
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={google_sans_flex.className}>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd)
                    }}
                />
                {children}
            </body>
        </html>
    );
}