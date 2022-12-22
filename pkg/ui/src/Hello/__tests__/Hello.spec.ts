import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/svelte';

import Hello from '../Hello.svelte';

describe('Smoke test', () => {
	test('Hello world', () => {
		const { getByText } = render(Hello, { name: 'World' });
		expect(getByText('Hello World')).toBeTruthy();
	});
});
