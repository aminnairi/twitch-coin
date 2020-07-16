.PHONY: start stop restart build clean mrproper install lint audit

ifneq (${CI},)
	EXEC_OPTIONS=-T --user root
else
	EXEC_OPTIONS=-T --user root
endif

start:
	docker-compose pull
	docker-compose build
	docker-compose up --detach node

stop:
	docker-compose down --remove-orphans --volumes

restart: stop start

clean:
	docker-compose exec $(EXEC_OPTIONS) node rm -rf twitch-coin.zip

build: clean
	docker-compose exec $(EXEC_OPTIONS) node yarn build
	docker-compose exec $(EXEC_OPTIONS) node sh -c 'cd build && zip -r ../twitch-coin.zip *'

mrproper:
	docker-compose exec $(EXEC_OPTIONS) node sh -c 'for file in $(shell cat .gitignore); do rm -rf .$$file; done'

install:
	docker-compose exec $(EXEC_OPTIONS) node yarn install

lint:
	docker-compose exec $(EXEC_OPTIONS) node yarn lint

audit:
	docker-compose exec $(EXEC_OPTIONS) node yarn audit --groups devDependencies
