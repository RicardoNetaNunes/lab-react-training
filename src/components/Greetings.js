import React, { Component } from 'react'

class Greetings extends Component {
    
    render() {

const {lang} = this.props;
let text = ''
if (lang == 'en') {
    text = 'Hello'
}
else if (lang == 'de') {
    text = 'Hallo'
}
else if (lang == 'fr') {
    text = 'Bonjour' 
}
else if (lang == 'es') {
    text = 'Hola'
}
console.log(this.props)
    return (
        <div>
            <h1>{text} {this.props.children}</h1>
        </div>
    )
}
 
}
export default Greetings;