# fLOW
Code for fLOW, a personal water usage tracker. fLOW is a project through Creative Labs at UCLA led by Allison Chen and Carla Cornillon from January 2020 to September 2020.

## Project Overview
fLOW consists of three components: the hardware, the server & database, and the frontend. Users can attach the device to their sinks and view their water usage through their computers or phones

#### Hardware
The hardware is a flow rate sensor attached to an ESP8266. It attaches directly to the faucet of home sinks and as water flows through the sensor, it accumulates the total volume. Once the water stops flowing, the ESP8266 sends the data (including the volume, timestamp of this entry, and the device ID) to the server to update the database.

#### Server/Database
Our server is a Node.js server that runs on an Oracle Cloud Infrastructure VM. It communicates with a Postgres database. The server handles updating that database from the hardware devices as well as serving the requests from the client frontend.

#### Frontend
That's this repository! We want to communicate to users in a clear and concise manner how much water they're using We mainly convey this through graphs and different metrics

## Motivation
We would like to work with the intersection between technology and engineering and sustainability. Each and every one of us wastes water while we're washing our hands, brushing our teeth, etc. The goal of this project is to develop a device to measure water usage and display a user's trends over time. By bringing attention and awareness to the problem, individuals can actively make lifestyle changes to play their part in conserving water.

## To Run the Web App
### Install Node.js
Use [this link](https://nodejs.org/en/download/) to download Node.js. Our software uses version 12.14.1. To check if you have the latest version, in your Terminal/Command Prompt run `node -v`.

### Clone This Repository
1. In your terminal/command prompt, `cd` to the directory you want the repository to be in.
2. Run this command: `git clone https://github.com/allisonchen23/fLOW_frontend.git`

### Run the Web App
1. From terminal, `cd` into the downloaded repository
2. Run `npm install`
3. Run `npm start`

## Check Out Our Website!
Our code is also hosted at [this link](http://allisonchen.co/fLOW_frontend)

## About Our Site
As many student projects, there is still a lot that can be done to improve our project, but below I'll highlight main points of each page.

### The Home Page
This page is mainly for our UI, designed and implemented by our wonderful Design Team, spearheaded by Nick Hom! Without having much experience in React and Web Development before, our amazing design team was able to create the beauty you see before you! From the first stages of our project, the data on the graph you see here was from when we used Firebase for our database. As we switched to Postgres to utilize SQL and relational databases, the data on this graph became outdated. 

However, on this page, please enjoy our pretty UI and the nice changing welcome messages when you reload :)

### The Tips Page
This page was designed and implemented by our very own Sammi Owyang where this was her first project with React, Javascript, and CSS/HTML! Through this process, she learned a lot and was able to implement having changing facts (when you click on the light bulb icon) and learning a lot about CSS formatting and working with images

### The Groups Page
Our final dream for this project was to have a feature where there could be multiple devices uploading data to the same database, and as a single user, you could see not only your own water usage, but multiple people all aggregated into one graph! This page represents the start of this feature. Although it's not pretty (because Allison Chen is NOT a UX designer by any means), it is functional!

When you load the page, there's no data shown, but when you select devices from the drop down list and hit the (super plain and unstyled) 'Reload Graph' button, the graph is populated with data from all the devices listed! *Note you actually have to hit 'Reload Graph', only selecting the devices doesn't actually do anything*

### Future Goals
For now, we're putting a pause on this project, but for the future, here are some features we'd like to see:

* Individual lines on the graph for each device we choose as well as total group water usage
* Fixing bugs such as hitting refresh takes you back to the home page or selecting devices makes the graph "reload"
* Fixing styling bugs
* Improved security and scalability :))
* Show usage from this week compared to last week
* Change the time frame of the graph
* Mobile friendly
* Leader boards
* Being able to log into accounts

The code is rough, but please remember this was most of our first time working with backend/frontend, React, Databases, and Javascript! From this project, we were all learning as we went, meaning a lot of the implementations can be improved, but that's what projects like these are for right? :)

### Other Repositories
* [Backend](github.com/allisonchen23/fLOW_backend)
* [Arduino & Hardware Code](https://github.com/juanbanchs/fLOW_Hardware)

## Meet the Team
### Design Team
**Nick Hom** | Second Year Economics Major<br/>
<img src="src/assets/bio_imgs/nick.jpg" width="250">

**Sammi Owyang** | Second Year Cognitive Science Major<br/>
<img src="src/assets/bio_imgs/sammi.jpg" width="250">

### Hardware Team
**Juan Banchs** | Second Year Mechanical Engineering Major<br/>
<img src="src/assets/bio_imgs/juan.jpg" width="250">

**Carla Cornillon** | Second Year Mechanical Engineering Major<br/>
<img src="src/assets/bio_imgs/carla.png" width="250">

**Nhung Nguyen** | Third Year <br/>
<img src="src/assets/bio_imgs/nhung.jpg" width="250">

**Rosa Son** | Second Year Mechanical Engineering Major<br/>
<img src="src/assets/bio_imgs/rosa.jpg" width="250">

### Software Team
**Allison Chen** | Second Year Computer Science Major<br/>
<img src="src/assets/bio_imgs/allison.jpg" width="250">

**Ray Huang** | First Year Computer Science Major<br/>
<img src="src/assets/bio_imgs/ray.jpg" width="250">

**Andrew Li** | Second Year Electrical Engineering Major<br/>
<img src="src/assets/bio_imgs/andrew.jpg" width="250">

**Raeka Lin** | First Year Computer Science Major<br/>
<img src="src/assets/bio_imgs/raeka.jpg" width="250">
