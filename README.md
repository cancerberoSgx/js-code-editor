js-code-editor
=============

A JavaScript Code editor in web technologies, written in JavaScript the runs in the browser. Initial UI based on bootstrap and backbone. 

This project will run its UI in the browser and also supports a server side part (nodejs) that may take care of tasks like write changes to server's filesystem/db, multiple user sessions, perform javascript parsing and indentation (js-indentator) on the serverside. 

* * * * 
*WARNING: right now this project is just a proof of concept and will probably break your javascript code !*
* * * * 

# Installation

npm install
grunt run
TODO - this is grunt

# File structure

## client

## model 
All the application models used by all parts of the app, including persistence, UI modeling, services, etc. Backbone models are used for this task. Because it runs both on browsers and serverside nodejs code must be compatible in both. 

##Why Backbone
The idea is to model all the data with the SAME SINGLE javascript code. This goes both for the client and the server. We choose Backbone 

## server 
optional but recomendable for do real FS writing, store on DB, user sessions and document security. uses mogose, express. Depends on model. 

server/services
server/persistence

Why a server?


#Ideas

this project is experimental and is being made learning some techs at the same time so it has divergent kind of tests and it is full of ideas which I will try to describe in this section. 

At the end, one of the major objectives will be try to implement a Javascript IDE like application, in the sense of IDE it will provide many user tools based on js ast parsing like prettify, outline code hierarchy, autocomplete and autodiscover of objects.  In this first implementation, Javascript language tools implementations will have more focus on editor model - extensibility. 

Compared to other more static languages like java, JavaScript is not friendly for designing IDE like tools for helping the language authors. In general, ordering the code in Object oriented ways is a complex problem or even impossible. For example, in JavaScript you compose classes dynamically and there is no a formal-language way of defining this kind of information. For autocomplete and autodiscover class capabilities we need an artificial syntax for doing this for example jsdoc-like. 

Also some OO meta information could be extracting by implementing plugins targetting an individual 3dr party implementation like requirejs, commonjs, amd. 