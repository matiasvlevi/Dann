@echo off
setlocal enableDelayedExpansion

set ^"LF=^
%= This creates a Line Feed character =%
^"

set "multiline=@echo off!LF!echo.!LF!call grunt concat!LF!echo.!LF!call grunt terser!LF!echo.!LF!TIMEOUT 5 >nul"
echo !multiline!
echo !multiline!>build.bat

echo start > cmd.cmd

mkdir tests
cd tests

set "multiline=const dn = require('../build/dann.js');!LF!const Dann = dn.dann;!LF!const Layer = dn.layer;!LF!const Matrix = dn.matrix;!LF!const activations = dn.activations;!LF!const lossfuncs = dn.lossfuncs;!LF!const poolfuncs = dn.poolfuncs;!LF!//__________________________ // NODEJS TEST BELOW // __________________________//"
echo !multiline!
echo !multiline!>nodetest.js

echo //__________________________ // BROWSER TEST BELOW // __________________________// > browsertest.js

mkdir run
cd run

set "multiline=@echo off!LF!echo Nodejs Test Environment!LF!echo.!LF!cd..!LF!node nodetest.js!LF!pause"
echo !multiline!
echo !multiline!>node.bat

set "multiline=<html>!LF!    <head>!LF!        <script src="../../build/dann.js" type="text/javascript"></script>!LF!        <script src="../browsertest.js" type="text/javascript"></script>!LF!        <title>Browser Test Environment</title>!LF!    </head>!LF!    <body>!LF!    </body>!LF!</html>"
echo !multiline!
echo !multiline!>browser.html

cd..
cd..
cls
start npm install
