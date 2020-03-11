var countries=[
    "china",
"india",
"indonesia",
"brazil",
"pakistan",
"nigeria",
"bangladesh",
"russia",
"japan",
"mexico",
"egypt",
"iran",
"germany",
"turkey",
"thailand",
"france",
"italy",
"tanzania",
"spain",
"colombia",
"kenya",
"ukraine",
"argentina",
"algeria",
"poland",
"uganda",
"iraq",
"sudan",
"canada",
"morocco",
"afghanistan",
"malaysia",
"venezuela",
"peru",
"nepal",
"saudi",
"yemen"
]
function randomWord() {
    return countries[Math.floor(Math.random() *countries.length)]
  }
  
  export { randomWord }