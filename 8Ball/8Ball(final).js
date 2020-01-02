        let rowId = 0;
        function getEightBall()
        {
            let randomNumber = Math.floor(Math.random()* 8 ); // 1-8
            let userQuestion = ""; // users input
            let eightBallAnswer = ""; // from switch
            rowId = rowId + 1;
            var questionArray = []; // push to add - pop to add
            var responseArray = []; // push to add - pop to add
            var rowIdArray =[];

            try 
            {
                switch (randomNumber)
                {
                    case 0 :
                    console.log('It is Certain');
                    eightBallAnswer = 'It is Certain';
                    break;

                    case 1 :
                    console.log('It is decidedly so');
                    eightBallAnswer = 'It is decidedly so';
                    break;

                    case 2 : 
                    console.log('Reply Hazy try Again');
                    eightBallAnswer = 'Reply Hazy try Again';
                    break;

                    case 3 : 
                    console.log('Cannot predict now');
                    eightBallAnswer = 'Cannot predict now';
                    break;

                    case 4 :
                    console.log('Do not count on it');
                    eightBallAnswer = 'Do not count on it';
                    break;

                    case 5 :
                    console.log('My sources say no');
                    eightBallAnswer = 'My sources say no';
                    break;

                    case 6 :
                    console.log('Outlook not so good');
                    eightBallAnswer = 'Outlook not so good';
                    break;

                    case 7 :
                    console.log('Signs point to yes');
                    eightBallAnswer = 'Signs point to yes';
                    break;

                    default : console.log(`${userName} we can't answer that`); 
                } 

                // Gets question form stores it in Question[]
                userQuestion = document.getElementById('question').value;
                questionArray.push(userQuestion);

                // Gets EightBall reply, stores in EightBallAnswer[]
                document.getElementById('answer').value = eightBallAnswer; 
                responseArray.push(eightBallAnswer);

                // Gives number(Id) to entry into the table
                rowIdArray.push(rowId);

                // table -> gets tabele, creates tableRow and tableData
                var table = document.getElementById('History');
                var row = document.createElement('tr');
                var tdRowId = document.createElement('td');
                var tdQuestion = document.createElement('td');
                var tdResponse = document.createElement('td');

                tdQuestion.appendChild(document.createTextNode(questionArray[0]));
                tdResponse.appendChild(document.createTextNode(responseArray[0]));
                tdRowId.appendChild(document.createTextNode(rowId));
                
                row.appendChild(tdRowId);
                row.appendChild(tdQuestion);
                row.appendChild(tdResponse);
                table.appendChild(row);
            } 
            catch (error) 
            {
                console.log(error);
            }
        }