

 function Random(props) {
     console.log(props.max)
    let randomNumber = Math.floor(Math.random() * props.max) + 1 
    return (
        <div>
            <h5>Random value between {props.min} and {props.max} =&#62; {randomNumber} </h5>
        </div>
    )
}

export default Random;