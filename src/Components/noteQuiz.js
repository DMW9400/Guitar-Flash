import React from 'react'

class noteQuiz extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
            pitchClasses:[],
            guitarStrings:[]
        }
    }

    generateCheckBox = (arr) => { 
        return (arr.map (guitString =>{
            return(
                <h1>{guitString}</h1>
            )
        })

        )
    }

    render(){
        return(
        <div>
            {generateCheckBox(['E', 'A', 'D', 'G','B','e'])}
        </div>

        )
    }
}

export default noteQuiz