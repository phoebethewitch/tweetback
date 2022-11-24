let data = {
	username: "cutewitchphoebe", // No leading @ here
	homeLabel: "catgirlin.space",
	homeUrl: "https://catgirlin.space/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;