import React,{Component} from 'react'
import '../assets/hangman.css'
import { randomWord } from './Words.js';
import PlayAgain from './PlayAgain.js'

import step0 from "../assets/images/step0.jpg"
import step1 from "../assets/images/step1.jpg"
import step2 from "../assets/images/step2.jpg"
import step3 from "../assets/images/step3.jpg"
import step4 from "../assets/images/step4.jpg"
import step5 from "../assets/images/step5.jpg"

class Hangman extends Component{
    static defaultProps={
        maxWrong:6,
        images:[step0,step1,step2,step3,step4,step5]
    }
    constructor(props){
        super(props);
        this.state={
            mistake:0,
            guessed:new Set([]),
            answer: randomWord()
        }
    }
    handleGuess = e => {
        let letter = e.target.value;
        this.setState(prevState => ({
            ...this.state,
          guessed: prevState.guessed.add(letter),
          mistake: prevState.mistake + (prevState.answer.includes(letter) ? 0 : 1)
        }));
      }
    guessedWord(){
        return this.state.answer.split("").map(letter=>
            (this.state.guessed.has(letter)?letter:'_ '));
    }
    generateButtons(){
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter=>
            (<button
            className="btn"
            key={letter}
            value={letter}
            onClick={this.handleGuess}
            disabled={this.state.guessed.has(letter)}>
                {letter}
            </button>))
    }
    replay=()=>{
        this.setState({
            mistake:0,
            guessed:new Set([]),
            answer: randomWord()
        })
    }
    render(){
        const gameOver=this.state.mistake>=this.props.maxWrong;
        let gameStat=this.generateButtons();
        let content;
        if (this.state.mistake===this.props.maxWrong){
          content=  <PlayAgain
            replay={this.replay}/>
        }
        else if(this.state.answer===this.guessedWord().join("")){
           content= <div><h1>You win!</h1><PlayAgain replay={this.replay}/></div>
        }
        else{
           content= <p>{gameStat}</p>
        
        }

        return(
            <div className="Hangman">
                {console.log(this.state.answer)}
              <div className='graphics'>
                  <h1 className="heading"> HANGMAN </h1>
                  <img src={this.props.images[this.state.mistake]}></img>
            </div>
            <div>
                <div className="texts">
                  <div className="wrong">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
                      <h1>Guess the Country name!</h1>
                      {!gameOver?this.guessedWord():this.state.answer}
                   {content}
                 </div>
              </div>
            </div>
            
        )
    }
}

export default Hangman;