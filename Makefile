.PHONY: build serve

node_modules:
	yarn install

vendor:
	bundle install

build: node_modules vendor
	yarn build
	bundle exec jekyll build
	yarn purge

serve: node_modules vendor
	yarn build
	bundle exec jekyll serve
