function createAnalytics() {
let counter = 0
let isDestroyed = false
const listener = ( ) => counter++
document.addEventListener('click', listener)
return {
    destrox () {
        document. removeEventListener('click', listener)
        isDestroyed = true
    },
    getclicks() {
        if (isDestroyed) {
            return 'Analytics is destroyed'
        }
    return counter
    }}}

window.analytics = createAnalytics()