export default function manifest() {
    return {
        name: "ARCANA Sandbox",
        short_name: "Sandbox",
        description: "ARCANA Sandbox impulsa talento joven mediante tecnología, infraestructura y acompañamiento para convertir ideas en productos reales.",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        lang: "es-PE",
        icons: [
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png"
            },
            {
                src: "/icon-512-maskable.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ]
    };
}