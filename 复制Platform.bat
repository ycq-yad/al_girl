if exist .\platform rd /s /q .\platform
if not exist .\platform md .\platform
xcopy ..\laya_baseP_ts\platform .\.\platform /s /e

echo copy platform ok!
pause
