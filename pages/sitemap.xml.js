export async function getServerSideProps({ res }) {
  const baseUrl = "https://nagavkani.com";

  const staticPages = [
    "",
    "about",
    "books",
    "contact",
    "books/the-beginning",
    "books/the-journey",
    "books/the-end",
  ];

  const urls = staticPages
    .map((page) => {
      return `
        <url>
          <loc>${baseUrl}/${page}</loc>
          <changefreq>weekly</changefreq>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>
    `;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
