# Starting to with node.js
node.js is javascript run-time environment.Just like browser contains a console and allows javascript to run it so does node.js.
It is used for server-side programming.
# Objectives achieved:
1.Learnt basics about node.js and npm(node package manager-which contains prebuilt libraries)
2.Learnt to use {export.modules,require('./path(without js)')} and its ES version {export,import {variable names} from "path.js"}
With ES version arrow functions also got introduced into js
3.Advantages of import over require->include certain variables and not all variables unlike require which includes all variables
4.Key things to keep in mind while downloading a package:
i> after installing an npm library(like random-words) need to include "type":"module" in package.json
5.Learnt about node_modules,package_json,package-lock json
node_modules->are the libraries on which our code depends(can be deleted before sending this to someone)
package_json->for downloading dependencies(all libraries on which our code runs) when node_module not present through npm install cmd
package-lock json-> tells extra info about the packages we have downloaded like version,etc
6.npm init command to make a particular directory as another library that can be used by other users.
This command will create a package.json in parallel to the directory for which we wrote npm init.
As we will import other libraries, they will get updated in package.json
7.globalising a library 
If we want to use a library ,present in one directory we need to globalise that library while installation.
i>npm install -g libraryname
ii> npm link libraryname
8.Used certain packages->figlet(name in dashed format),chalk(to create colored words), random-word
