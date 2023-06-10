# micro-frontend-angular  
I created this repo to test micro frontend functionality in angular.  

## backend  
1- Go to *cd backend/*  
2- Exec *npm i*  
3- Run the server *npm run start*  
  
## micro-frontend-1  
1- Go to *cd micro-frontend-1/*  
2- Exec *npm i*  
3- Exec the command *npm run bundle* to build application  
4- Go to *cd dist/micro-frontend-1/*  
5- Paste this body in index.html file (*this file is in dist/micro-frontend-1/ directory*):  
```
<body>
  <micro-frontend-1></micro-frontend-1>
  <script src="./micro-frontend-1.js"></script>
</body>
```
5- Exec the application *npx http-server -p 4200*  

## main-project  
1- Go to *cd main-project/*  
2- Exec *npm i*  
3- Run the application *ng s --o*  
