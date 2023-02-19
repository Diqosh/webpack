import './styles/style.css'
import json from './assets/json.json'

console.log(json)
export default class Post {
    constructor (title, img) {
        this.title = title
        this.img = img
        this.date = new Date ()

    }
    toString() {
    return JSON.stringify( {
        title: this.title,
        img: this.img,
        date: this.date. toJSON ()
    })
    }}