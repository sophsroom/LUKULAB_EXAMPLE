

function Counter(props) {

const handleChange = (event) => {
    setText(event.target.value);
  };
return(<>
    
  <p> Score: 
    {
    props.count
    }
  </p>
  
</>)
  };

export default Counter;