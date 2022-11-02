import { useId } from "react"
import "../App.css"

function InputForm() {

    const id = useId();

    return ( 
        <div className="inputForm">
            <label for={id+"firstName"}>First Name</label>
            <input type="text" id={id+"firstName"}></input>
            <label for={id+"lastName"}>Last Name</label>
            <input type="text" id={id+"lastName"}></input>
            <label for={id+"email"}>Email</label>
            <input type="email" id={id+"email"}></input>
        </div>
     );
}

export default InputForm;