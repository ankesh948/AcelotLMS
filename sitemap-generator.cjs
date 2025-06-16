// sitemap-generator.js
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://acelot.in";

// List of all static routes
const routes = [
  "/",
  "/about-us",
  "/meet-team-acelot",
  "/solutions",
  "/lms-platform",
  "/corporate-training",
  "/onboarding-training",
  "/product-training",
  "/sales-training",
  "/compliance-training",
  "/remote-workforce-training",
  "/blog",
  "/request-a-demo",
  "/contact-us",
  "/privacy-policy",
  "/login",
  "/select-instance"
];

// Optional: Example blog dynamic routes — replace with real slugs from DB if needed
const blogSlugs = ["101", "102", "react-router-setup"]; // you can fetch these from an API

const dynamicRoutes = blogSlugs.map(slug => `/blog/${slug}`);

const allRoutes = [...routes, ...dynamicRoutes];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(path.resolve(__dirname, "public", "sitemap.xml"), sitemapContent);

console.log("✅ Sitemap generated at /public/sitemap.xml");
