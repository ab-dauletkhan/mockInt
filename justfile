oxlint:
	deno run --allow-env --allow-read --allow-run npm:oxlint@latest

biome:
	deno run -A npm:@biomejs/biome check --write .