[1mdiff --git a/README.md b/README.md[m
[1mindex 3f3b71a..b31042e 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -7,4 +7,7 @@[m
 5. git push [rep link] [branch name] - чтобы отправить наши изменения на удаленный репозиторий[m
 например:[m
 git push origin main[m
[31m-6. git reset - позволяет удалить некоторые файлы из промежуточной области[m
\ No newline at end of file[m
[32m+[m
[32m+[m
[32m+[m[32m6. git reset - позволяет удалить некоторые файлы из промежуточной области (stage), если случайно добавили[m
[32m+[m[32m7. git diff - позволяет просмотреть те строки, которые мя изменяли либо добавляли[m
\ No newline at end of file[m
[1mdiff --git a/index.html b/index.html[m
[1mindex e6ef540..c2c7f91 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -7,6 +7,7 @@[m
     <title>Test-git-2</title>[m
 </head>[m
 <body>[m
[32m+[m[32m    <h1>Test-git-2</h1>[m
     <script src="index.js"></script>[m
 </body>[m
 </html>[m
\ No newline at end of file[m
[1mdiff --git a/index.js b/index.js[m
[1mindex 57d2a94..e69de29 100644[m
[1m--- a/index.js[m
[1m+++ b/index.js[m
[36m@@ -1 +0,0 @@[m
[31m-console.log('hello')[m
\ No newline at end of file[m
