This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can test it out [here](https://craigslist-searcher-app.herokuapp.com/).

The search runs from AWS' Lambda, and Amazons API Gateway.

I created this to ideally search through all of craigslist at the click of a button. Though the load times are going to be quite awful, later on i would definitely like to cache all the infromation and store it on AWS. Maybe scanning CL every hour? 

If you'd like an easier to use/view version of craigslists shortcodes, feel free to check out my [google doc here](https://docs.google.com/spreadsheets/d/10DDDBwybk4C2g5OkHZ56J-6it0c4n6IJPV06lyUFWac/edit?usp=sharing). Or check out the [JSON file here](https://github.com/blaynem/craigslist-searcher/blob/master/src/data/states.js). If you find any errors in either, please let me know! You can open an issue or message me on discord. I'm on the reactiflux discord as blaynem. 

## Try it out

Clone or download this rep. Inside of the folder directory, run `npm install` and then run `npm start`. Your browser should open to a localhost, and you'll be able to search. Or visit the link above.

### To use

Simply chose your city, the specific part of craigslist you'd like to search (i.e. gigs, for sale, jobs), and the contents of that specific search.
After a few seconds, the information will load.

## Todo

- Search bar is correctly redirecting back to home page, but there is slight delay for new info to show. Should clear previous data, or add it on top somehow.
- Fix styling for Mobile.
- Update styling and make it beautiful.
- Figuring out how to get the contact information specifically
- Making it work faster.
- Searching all of craigslist, hopefully this isn't too hard.
- Magical graphs for things like getting the average cost of a given vehicle, etc. This will be a lot later down the line. 
- ~~Add a back button.~~
- ~~Functionality of search button in description view should work.~~
- ~~Finish adding the rest of the states, cities, and correct city codes.. woo.~~
- ~~General styling is still to be updated. I just wanted the functionality up and running.~~
- ~~Adding in the ability to click and move to a more detailed view of the specific listing.~~

## Difficulties and things learned.

One weird problem was how craigslist uses urls. Some of them have county codes on them, others do not. So I had to come up with a way to figure out how I would gather the correct urls.

Figuring out how to format the data for every specific state/city combo and parse it correctly took a bit of work. But once i got it figured out, it went pretty smoothly after that.

AWS Lambda is cool af. Way easier than spinning up a server. Especially for a front end engineer without much back end experience. 11/10 would use again. Thanks to my roommate, without him, figuring out AWS/Lambda would have taken a lot longer.

Redux is one crazy beast. It's taken a lot of trying to figure out exactly how it works, but I'm starting to get the grasp on it. Thankfully watching a ton of redux videos has given me enough information to have a better grasp on it.

## Bugs

- ~~If you change the state you want to search, but do not click to change the city, it will not update correctly. i.e. I would like to search boulder colorado. On initial load State: alabama, city: auburn. If I change the state to colorado, boulder is the first city. I didn't actually have to click and change to boulder. so now if you press search, it will be the previous city, auburn.~~
- ~~Similar bug for category/subcategory. Will need to find a way to make it switch to the first item.~~
- ~~After searching, then selecting to open a listing for more details. And then trying to make another search, the user will stay on the detail page and not be redirected. Not sure what the best course of action would be for that.~~
- ~~If a user views a detailed search, then goes back to home page, then clicks a different listing - the first listing they viewed will still be there, as the new detailed information is waiting to load. Bad user experience.~~

## Thanks
Also thanks to everyone in the Reactiflux discord chat who helped.