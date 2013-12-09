js-code-editor
=============

A JavaScript Code editor in web technologies, written in JavaScript the runs in the browser. Initial UI based on bootstrap and backbone. 

This project will run its UI in the browser and also supports a server side part (nodejs) that may take care of tasks like write changes to server's filesystem/db, multiple user sessions, perform javascript parsing and indentation (js-indentator) on the serverside. 

* * * * 
*WARNING: right now this project is just a proof of concept and will probably break your javascript code !*
* * * * 

= Installation

npm install
grunt run
TODO - this is grunt

= File structure

== client

== model 
All the application models used by all parts of the app, including persistence, UI modeling, services, etc. Backbone models are used for this task. Because it runs both on browsers and serverside nodejs code must be compatible in both. 

== server - optional but recomendable for do real FS writing, store on DB, user sessions and document security. uses mogose, express. Depends on model. 

server/services
server/persistence

