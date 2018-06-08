@echo off

IF NOT "%~1"=="" SET ARG=%1
IF "%~1"=="" SET ARG=""
SET "prod=false"

IF %ARG%==--prod SET "prod=true"
IF %ARG%==--PROD SET "prod=true"
IF %ARG%==--Prod SET "prod=true"

echo[
echo Installing Node Modules
call npm install

echo[
IF %prod%==true (
	echo Beginning Production Build
	echo[
	call ng build --env=prod --aot --prod
)

IF %prod%==false (
	echo Beginning Development Build
	echo[
	call ng build --env=stage --aot 
)

copy web.config dist\web.config