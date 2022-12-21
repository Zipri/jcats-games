install:
	npm ci
games:
	node bin/games.js
game-even:
	node bin/game-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
