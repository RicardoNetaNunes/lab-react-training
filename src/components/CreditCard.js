
 function CreditCard(props) {

    let cardColor = props.bgColor;
    let letterColor = props.color
    let cardStyle = { 
        backgroundColor: cardColor,
        color : letterColor
            };
    let cardNumber = props.number;
    var numberHide = '●●●● ●●●● ●●●● ' +cardNumber.substr(-4);     

            
    return (
        <div style={cardStyle}>
        <p> {props.type}</p>
        <p> {numberHide}</p>
        <p> Expires {props.expirationMonth}/{props.expirationYear}</p>
     
        <p>  {props.bank}</p>
        <p> {props.owner}</p>
        
        
        </div>
    )
}

export default CreditCard;