const siteUrl = "https://blog-devlulcas.vercel.app/";

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/*" }],
	},
};
