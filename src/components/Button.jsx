export default function Button(props) 
{
    function handleClick(event) {
    console.log("Button was clicked!");
    alert("Button was clicked!");
    }
    return <button className="action" onClick=
             {handleClick}> {props.action} </button>;
}
