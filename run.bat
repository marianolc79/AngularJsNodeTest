@echo off
echo Installing application...
echo =========================

call npm install
echo Done!


rmdir public/js /S /Q

echo Copying client files...
echo =======================


set PARAMS=/S /Y /Q /I
xcopy node_modules\angular public\js\angular %PARAMS%
xcopy node_modules\angular-route public\js\angular-route /%PARAMS%
xcopy node_modules\angular-touch public\js\angular-touch %PARAMS%
xcopy node_modules\angular-ui-grid public\js\angular-ui-grid %PARAMS%
xcopy node_modules\bootstrap public\js\bootstrap %PARAMS%
xcopy node_modules\jquery public\js\jquery %PARAMS%
xcopy node_modules\ui-grid public\js\ui-grid %PARAMS%
xcopy node_modules\underscore public\js\underscore %PARAMS%
echo Done!

echo Init application...
echo ===================

node server.js