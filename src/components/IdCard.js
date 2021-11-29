function IdCard(props) {

    console.log(props)
    console.log(props.birth)
    return (
       
        <>
          <img src={props.picture} alt="profile"/>
          <h5>First name: </h5><p> {props.firstName}</p>
          <h5>Last name: </h5><p> {props.lastName}</p>
          <h5>Gender: </h5><p> {props.gender}</p>
          <h5>Heigth: </h5><p> {props.height}</p>
          <h5>Birth: </h5><p>  {props.birth.toLocaleDateString()}</p>

        </>
    )
}

export default IdCard