import React from 'react'

class NoteQuiz extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
            pitchClasses:[],
            guitarStrings:[]
        }
    }
    

    handleStringChange = (event) => {
        const checkedBool = event.target.checked
        const selectedValue = event.target.value
        // console.log(checkedBool, selectedValue)
        if(checkedBool){
            console.log('Checked')
            // this.setState(prevState => ({
            //     guitarStrings: [...prevState.guitarStrings, 'ABC']
            //     }, ()=>console.log(this.state))
            // )
            this.setState({
                guitarStrings: [...this.state.guitarStrings, selectedValue]
            }, () => console.log(this.state.guitarStrings))
        } 
        else {
            this.setState({
                guitarStrings : [...this.state.guitarStrings, this.state.guitarStrings.filter(word => word !==selectedValue )]
            }, () => console.log(this.state.guitarStrings))
        }
        //     this.setState(prevState => ({
        //         [event.target.name]: prevState.event.target.name.filter(value => value !== selectedValue)
        //         }, ()=>console.log(this.state))
        //     )}
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

    render(){
        return(
        <div>
            {this.generateCheckBox(['E','A','D','G','B','e'])}
        </div>
        )
    }
}

export default NoteQuiz