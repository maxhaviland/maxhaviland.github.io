const basePath = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_PATH : '';

module.exports = {
	basePath,
	assetPrefix: `${basePath}/`,
	webpack: (config, { dev }) => {
		config.module.rules = config.module.rules.map((rule) => {
			if (rule.loader === 'babel-loader') {
				rule.options.cacheDirectory = false;
			}
			return rule;
		});
		return config;
	},
};
