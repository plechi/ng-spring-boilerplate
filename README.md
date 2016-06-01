#Plechi's Angular/Spring Boilerplate

Simple boilerplate for my workflow.
Considering using `yo` for the future, but for now this is sufficient.


##How to use

  1. Change Application Name/Package name in:
      - `pom.xml`
      - `bower.json`
      - `package.json`
      - `src/main/java/**/*.java`
      - `src/main/javascript/**/*.js` (`angular.module('packagename')`)
      - `src/main/webapp/index.html` (`ng-app="packagename"`)
  2. Run
     
     ```
     npm update
     mvn clean compile
     ```

##Dev

Just run

```
grunt && grunt watch
```

for JS/Less resources in one terminal and in a second terminal

```
mvn spring-boot:run
```

To add frontend dependencies, stop grunt and then run

```
bower install name --save
grunt && grunt watch
```

##Dependencies

You need following software:
  - Java (current 1.8.x)
  - Maven (current 4.x)
  - Node.js & NPM
  - Grunt (`npm install -g grunt-cli`)
  - Bower (`npm install -g bower`)
  - ... (there may be something I forgot, please open an issue/pull request and tell me)

##License

Licensed under the MIT License

```
The MIT License (MIT)
Copyright (c) 2016 Lukas Plechinger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
