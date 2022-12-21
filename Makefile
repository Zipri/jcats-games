install:
	npm ci
games:
	node bin/games.js
publish:
	npm publish --dry-run .