# To Do List App

## Introduction
Hi, welcome to the documentation of my personal project "To Do List App", it is an application built with MERN stack (MongoDB, ExpressJS, ReactJS and NodeJS). I created this website so that I can use a to-do list to remind myself of those uncompleted tasks. This site is still in the process of development, you are more than welcome to try the demo and give me feedback! **Feel free to give me more tasks if your want to.**

Link to demo: https://steady-tiramisu-94515d.netlify.app/

## Setup
Prerequisites:
- git
- nodejs
- npm
- mongodb

To run this application on your local machine, please follow the steps below:
1. run `npm install` in the directories **client** and **server**
2. create a `.env` file in both directories
3. Inside the **client** `.env` file, set the variable `REACT_APP_TASK_SERVICE_URI` to `http://127.0.0.1:4000/api.tasks/`
4. Inside the **server**`.env`file, set the variable `PORT` to the port number for hosting the site and set `DB_CONNECTION` to the connection string of your Mongodb cluster, you should be able to find the connection string after clicking the connection at the cluster overview page, this video from MongoDB should be helpful: https://www.youtube.com/watch?v=Ej05tq1220A&ab_channel=MongoDB
5. run `npm start` in both **client** and **server**

# Project Preview
![Project overview](https://i.imgur.com/HwnW7dh.png)

## Features to be added
- Adding selection for dark theme
- Saving task based on user session instead of single collection.
- Email/SMS notification before task ends
- Mobile support
