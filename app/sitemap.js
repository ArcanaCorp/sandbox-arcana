export default function sitemap() {
    const baseUrl = "https://sandbox.arcanacorp.dev";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1
        },

        {
            url: `${baseUrl}/cohort-2026/impulso-joven`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        }
    ];
}