// function overruled by html    
const getUserChoice = userInput => 
{
    try{
        userInput = userInput.toLowerCase();
        switch (userInput)
        {
            case 'rock' : 
            return userInput;
            break;

            case 'paper' : 
            return userInput;
            break;
            
            case 'scissors' : 
            return userInput;
            break;

            default : 
            return `You Enter ${userInput}, this game is 'rock, paper, scissors!'`;
            break;
        }
    }
    catch (error)
    {
        console.log(error);
    }

}
// Computers Choice - generated via random number
function getComputerChoice() 
{
    try{
        let randomNumber = Math.floor(Math.random()*3);
            switch (randomNumber)
                {
                    case 0 :
                        return 'rock';
                        break;
                    case 1 : 
                        return 'paper';
                        break;
                    case 2 :
                        return 'scissors';
                        break;
                }
    }
    catch (e)
    {
        console.log(e);
    }
}

// Formula for working out the winner
function determineWinner(userChoice, computerChoice)
{
  try
   {
    if (userChoice === computerChoice)
        {
        return "It's a Tie!";
        }
    if (userChoice === 'rock')
        {
        if (computerChoice === 'paper')
            {
            return 'Computer Won!'
            }
        else
            {
            return 'You Won!'
            }
        }
    if (userChoice === 'paper')
        {
        if (computerChoice === 'scissors')
            {
            return 'Computer Won!'
            }
        else 
            {
            return 'You Won!'
            }
        }
    if (userChoice === 'scissors')
        {
        if (computerChoice === 'rock')
            {
            return 'Computer Won!'
            }
        else 
            {
            return 'You Won!'
            }
        }
      
  } catch (error)
   {
      console.log(error);
  }
  
};

// table colour depending on results
function tableColour(result)
{
    switch (result)
    {
        case 'You Won!' :
        return 'green';
        break;

        case 'Computer Won!' :
        return 'red';
        break;
        
        case "It's a Tie!" :
        return 'orange';
        break;
    }

}

function playGame()
{
    try 
    {
        // Get choice from html <select> 
        const userChoice = getUserChoice(document.getElementById('userInput').value);
        // Calls getComputerChoice
        const computerChoice = getComputerChoice();
        // Calls determineWinner Stores in results
        const result = determineWinner(userChoice, computerChoice);
        
        // Gets table by Id / Creates row - data
        var table = document.getElementById('results');
        var row = document.createElement('tr');
        row.style.backgroundColor = tableColour(result);
        var tdYou = document.createElement('td');
        var tdCP = document.createElement('td');
        var tdRS = document.createElement('td');

        // append add the vales as text to the table
        tdYou.appendChild(document.createTextNode(userInput.value));
        tdCP.appendChild(document.createTextNode(computerChoice));
        tdRS.appendChild(document.createTextNode(result));
        
        // appends the row then table. Makes data appear.
        row.appendChild(tdYou);
        row.appendChild(tdCP);
        row.appendChild(tdRS);
        table.appendChild(row);
    } 
    catch (error)
     {
        console.log(error);
    }

};