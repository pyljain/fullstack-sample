build-all: build-java build-ui

build-java:
	./gradlew build

install-ui:
	npm install

build-ui: install-ui
	npm run build