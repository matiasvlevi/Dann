@echo off
setlocal enableDelayedExpansion

:: Create LF containing a line feed character
set ^"LF=^
%= This creates a Line Feed character =%
^"


set "multiline=@echo off!LF!echo Nodejs Test Environment!LF!echo.!LF!cd tests!LF!node nodeTest.js!LF!pause"
echo !multiline!
echo !multiline!>test.bat

set "multiline=<html>!LF!    <head>!LF!        <script src="build/dann.js" type="text/javascript"></script>!LF!        <script src="tests/browserTest.js" type="text/javascript"></script>!LF!        <title>Browser Test Environment</title>!LF!    </head>!LF!    <body>!LF!    </body>!LF!</html>"
echo !multiline!
echo !multiline!>test.htm

set "multiline=@echo off!LF!echo.!LF!call grunt concat!LF!echo.!LF!call grunt terser!LF!echo.!LF!echo Dann distribution files successfully built!LF!TIMEOUT 5 >nul"
echo !multiline!
echo !multiline!>build.bat

mkdir tests
cd tests

set "multiline=const dn = require('../build/dann.min.js');!LF!const Dann = dn.dann;!LF!const Layer = dn.layer;!LF!const Matrix = dn.matrix;!LF!const activations = dn.activations;!LF!const lossfuncs = dn.lossfuncs;!LF!const poolfuncs = dn.poolfuncs;!LF!//__________________________ // NODEJS TEST BELOW // __________________________//"
echo !multiline!
echo !multiline!>nodeTest.js

echo //__________________________ // BROWSER TEST BELOW // __________________________// > browserTest.js
cd..
cls
start npm install
