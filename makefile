.PHONY: start stop restart build clean mrproper install lint audit

start:
	docker-compose pull
	docker-compose build
	docker-compose up --detach node

stop:
	docker-compose down --remove-orphans --volumes

restart: stop start

clean:
	docker-compose exec node rm -rf twitch-coin.zip

build: clean
	docker-compose exec node yarn build
	docker-compose exec node sh -c 'cd build && zip -r ../twitch-coin.zip *'

mrproper:
	docker-compose exec node sh -c 'for file in $(shell cat .gitignore); do rm -rf .$$file; done'

install:
	docker-compose exec node yarn install

lint:
	docker-compose exec node yarn lint

audit:
	docker-compose exec node yarn audit --groups devDependencies
