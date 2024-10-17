import { all, createStarryNight } from '@wooorm/starry-night';

const starryNightPromise = createStarryNight(all);

const astFromCode = async (value: string, lang: string | null | undefined) => {
	const starryNight = await starryNightPromise;

	if (lang) {
		const scope = starryNight.flagToScope(lang);

		if (scope) {
			return starryNight.highlight(value, scope);
		}
	}

	return {
		type: 'root' as const,
		children: [{ type: 'text' as const, value }]
	};
};

export { astFromCode };
