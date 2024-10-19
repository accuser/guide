// tests/example.steps.ts
import '@quickpickle/playwright/actions'; // <-- import action step definitions from @quickpickle/playwright
import '@quickpickle/playwright/outcomes'; // <-- import outcome step definitions from @quickpickle/playwright

import '@quickpickle/playwright/world'; // <-- use the playwright world variable (optional)

import { Given } from 'quickpickle'; // <-- the functions to write step definitions

// Custom step definitions
Given('a/another number {int}', async (world) => {
	if (!world.numbers) world.numbers = [];
	world.numbers.push(int);
});
