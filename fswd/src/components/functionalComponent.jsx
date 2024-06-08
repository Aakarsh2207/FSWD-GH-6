import React, {useState} from "react";

// function FunctionalComponent(){
// const FunctionalComponent = (props) => {
const FunctionalComponent = ({name, age, company, setName}) => {

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");
    
    // const {name, age, company, setName} = props;
    return(
        <div>
            <p>This is an another Functional Component</p>
            <button onClick={() => setCount(count+1)}>Click on me to increment by +1</button>
            <button onClick={() => setCount(count-1)}>Click on me to increment by -1</button>
            <h1>{count}</h1>
            <h1>My name is {name}, I'm {age} & I work for {company}</h1>
            {/* <input type="text" onChange={(e)=> console.log(e.target.value)} /> */}
            <input type="text" onChange={(e)=> setChangeName(e.target.value)} />
            <button onClick={()=>setName(changeName)}>Chane Name to input context</button>
        </div>
    )
    // return(
    //     <div>
    //         <p>This is an another Functional Component</p>
    //         <button onClick={() => setCount(count+1)}>Click on me to increment by +1</button>
    //         <button onClick={() => setCount(count-1)}>Click on me to increment by -1</button>
    //         <h1>{count}</h1>
    //         <h1>My name is {props.name}, I'm {props.age} & I work for {props.company}</h1>
    //         {/* <input type="text" onChange={(e)=> console.log(e.target.value)} /> */}
    //         <input type="text" onChange={(e)=> setChangeName(e.target.value)} />
    //         <button onClick={()=>props.setName(changeName)}>Chane Name to input context</button>
    //     </div>
    // )
}


export default FunctionalComponent;