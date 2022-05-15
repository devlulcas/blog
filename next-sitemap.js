const siteUrl = "localhost:3000/";

module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/" }],
	},
};
