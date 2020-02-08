## Restaurants with lazyloading and blurhash

This is a simple react app to try out lazyloading and blurhash for some Wolt restaurant data. It uses Material-ui for styled components, react-lazyload for lazyloading the images and Wolt's react-blurhash for displaying the blurhash while images are loading.

The app is quite easy to run in the Node environment. To run the app locally, just do a git clone `https://github.com/EskoSalaka/restaurants-wolt.git`, `cd restaurant-wolt`, `npm install` and `npm run start-dev`. The production version can be run locally by `npm run build` and `npm start`. The app is also running on heroku at https://restaurants-w.herokuapp.com/.

Some testing would have been nice, but after a long time of debugging I just can't make the blurhash package work with jest!
