
Assignment 1

git init 
boilerpate backend app



Install Third party libraries --> 
express --> creating server
bcrypt --> hashing pasword
jwt --> generate token and pass payload
mongoose -> to connect database and create schema and model
cookie-parse -> parse cookie
nodemon -> auto reload server 


install all third party libaries- 
create server using express-
setup middlewares (json parser and cookie parser);


Create AuthSchema and model- ( name, email-(unique) and password)

Auth apis -->
registration, login and logout

registration ->
method -> post 
try catch 
check user exist 
validation check 
password hash
save to db
response to client

login ->
method -> post
try catch 
check user exist 
password match 
jwt token create 
cookie set 
response to client 

logout ->
clear cookie -> token delete 
response to client 

create productSchema and model (name, SKU-> unique, description, price, category)


Protected apis below -- (use middleware for validation check )

Product CRUD apis ->
create product , getAllProduct, getProductById, updateProduct, deleteProduct

create Product ->
method -CC> post 
try catch 
validation check
product exist check
create product save to db
response to client

getAllProduct ->
method -> get
try catch 
fetch data from db ()
(page-1)* limit
select() 
skip().limit().sort()
response to client

getProductById
route -> /getSingleProduct/:id
method ->get
try catch 
req.params.id
fetch data from db
response to client 

updateProduct 
route -> /updateSingleProduct/:id
method -> patch
try catch 
req.params.id
validation check 
user exist 
req.body
update to db 
reponse to client 

deleteProduct 
method -> delete
try catch 
check user 
req.params.id
delete product from db
response to client 



