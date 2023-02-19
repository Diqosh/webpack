import Post from "./Post";
import webpackImage from './assets/webpack.png'

const post = new Post('Webpack', webpackImage)
console.log('post to string:', post.toString())