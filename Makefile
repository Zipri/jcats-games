install:
	npm ci
games:
	node bin/games.js
game-even:
	node bin/game-even.js
game-calc:
	node bin/game-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
