export default function robots() {
    const baseUrl = "https://sandbox.arcanacorp.dev";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/"
            }
        ],

        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl
    };
}