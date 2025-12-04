# devtinder

- created a vite + react project application
- remove unnecessary code
- create hello world app
- install tailwind css
- install daisy UI
- Add navbar component to App.js
- create a navbar NavBar.jsx seperate component file
- install react router dom
- create browser router > Routes > Route= /body > RouteChildren
- create an outlet in your body component
- create a footer
- create a login
- install axios
- solve cors by installing cors in backend and add middleware with configurations :origin and credentials:true
- whenver you'are making API call with axios so pass {withCredentials:true}, without this, token wont attached to cookies
- install readux tool kit, learn the docs
- install react-redux + @reduxjs/toolkit => configureStore => provider => createSlice => add reducer to store
- add redux dev tools in chrome
- login and see if your data is coming or not in the store
- navbar should update as soon as user logs in
- refactor our code to add constants file + create a component folder for components
- you should not be able to access other routes without login
- if token is not present, redirect user to login page
- logout feature
- get the feed and add the feed in store
- build the user card on feed

deployment

- signup on AWS
- launch instance
- create key value pair
- chmod 400 <secret key>
- connect to machine with ssh -i "devTinder.pem" ubuntu@ec2-13-233-146-233.ap-south-1.compute.amazonaws.com
- install node
- git clone of projects
- build bundile npm run build -- it will create dist folder
- in instance, run npm install, then to build
- to deploy frontend project, we need nginx-- this is to host our frontend project --- sudo apt update, sudo apt install nginx --- nginx is http server
  sudo systemctl start nginx
  sudo systemctl enable nginx
  cpoy code from dist ( build fiels) to /var/www/html

  sudo scp -r dist/\* /var/www/html

  enable port 80 on your isntance in security- security group

- backend
- npm install
- git log to see all info about git
- add ip of aws instance to mongodb server
- add 3000 port in security group of instance
- to run the server, we need to install pm2
  pm2 is daemon process manager that will help you manage and keep your application online 24/7
  npm install pm2 -g
  pm2 start npm -- start... to start server

  - to see longs pm2 logs
  - to clear logs pm2 fulsh nameof app=== pm2 list -- to show all lists
  - to stop pm2 stop processname
  - pm2 delete processname --- to delete a process
  - to give custom name to a process --- pm2 start npm --name "devTinder_Backend" -- start

  - change ip localhost to ip of instance in backend to connect both UI and backend

  - http://13.233.146.233/ frontend,,, http://13.233.146.233:3000 backend

  we can map domain name to IP
  frontned = devTInder.com, backend = devtinder.com:3000
  mapp devtinder.com:3000 is not good,
  good thing is devtinder.com/api
  to map 3000 to api , we use nginx -> nginx proxy pass

  - whenever we are requesting any url like 13,233,146,233:3000/login--- everything goes via nginx, thats why nginx called as webserver and load balancer..

  listen 80 default in sites-available/default is-- nginx listening port num 80 when we are requesting 13.233.46.233 etc

  - to male /3000 to /api

  server_name 13,233.146.233
  location /api/ {
  proxy_pass http://localhost:3000/;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        # allow CORS (optional)
        add_header Access-Control-Allow-Origin *;

  }

  - restart nginx --- sudo systemctl restart nginx

- component structure --
  Body
  NavBar
  Route= => Feed
  Route = /login => login
  Router = /connections => connections list
