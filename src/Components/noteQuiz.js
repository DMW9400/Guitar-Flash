import React from 'react'

class NoteQuiz extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
            pitchClasses:[],
            guitarStrings:[],
            finalNotes: []
        }
    }
    

    handleStringChange = (event) => {
        const checkedBool = event.target.checked
        const selectedValue = event.target.value
        if(checkedBool){
            this.setState({
                guitarStrings: [...this.state.guitarStrings, selectedValue]
            }, () => console.log('check:', this.state.guitarStrings))
        } 
        else {
            this.setState({
                guitarStrings : this.state.guitarStrings.filter(word => word !==selectedValue)
            }, () => console.log('uncheck:', this.state.guitarStrings))
        }
    }

    generateCheckBox = (arr) => { 
        return (arr.map (guitString =>{
            return(
                <div>
                <input 
                type = "checkbox"
                id = {guitString}
                key ={guitString}
                value = {guitString}
                name = 'guitarStrings'
                onChange={this.handleStringChange}
                />
                <label>{guitString}</label>
                </div>
            )
        },
        <div>
            <input type="checkbox" />
            <label>Select All</label>
        </div>
        )
        )
    }

    handlePitchChange = (event) => {
        let checkedBool = event.target.checked
        let newPitch = event.target.value
        if (checkedBool){
            this.setState({
                pitchClasses:[...this.state.pitchClasses, newPitch]
            }, ()=>console.log('pitch check', this.state.pitchClasses))
        } else {
            this.setState({
                pitchClasses: this.state.pitchClasses.filter(delPitch => delPitch !== newPitch)
            },()=>console.log('pitch uncheck:', this.state.pitchClasses))
        }
    }

    generatePitchBoxes = (arr) => {
        return arr.map (pitchClass => {
            return(
                <div>
                    <input
                    type = "checkbox"
                    id = {pitchClass}
                    key = {pitchClass}
                    value = {pitchClass}
                    name = 'notes'
                    onChange = {this.handlePitchChange}
                    />
                    <label>{pitchClass}</label>
                </div>
            )
        })
    }

    generateQuizArray = (stringArr,pitchArr) => {
        stringArr.map(string=>{
            let x = 0
            while(x<pitchArr.length-1){

            }
        })
    }

    render(){
        return(
        <div>
            <h2>Guitar Strings</h2>
            {this.generateCheckBox(['E','A','D','G','B','e'])}
            <h2>Pitch Classes</h2>
            {this.generatePitchBoxes(['C','F','Bb','Eb','Ab','Db','Gb','B','E','A','D','G'])}
        </div>
        )
    }
}

export default NoteQuiz