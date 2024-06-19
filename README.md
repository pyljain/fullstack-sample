# Full stack example

This is a Java multi-module + React full stack repository showcasing how a polyglot stack can be managed using build tools that are
native to the respective languages used in the repository. A `Makefile` is used to organise the typical tasks that may be relevant to testing, building and running these services. It also facilitates local development as it automates spinning up the stack with ease across platforms. 

> NOTE: this repository structure works well with IDEs as both Gradle files are at the root as are Node dependency files.

To build both the Java and React services, run:

```sh
make
```

To build only the Java service, run:

```sh
make build-java
```

