import React from 'react'

class NoteQuiz extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
            pitchClasses:[],
            guitarStrings:[]
        }
    }
    // state = {
    //     pitchClasses: [],
    //     guitarStrings: []
    // }
    generateCheckBox = (arr) => { 
        return (arr.map (guitString =>{
            return(
                <h1>{guitString}</h1>
            )
        })
        )
    }

    render(){
        console.log('CALLED BABY')
        return(
        <div>
            {this.generateCheckBox(['A','B'])}
        </div>
        )
    }
}

export default NoteQuiz