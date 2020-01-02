// using regular expressions as validation.
        const getLogIn =() =>
        {    
            var name = document.getElementById('txtUsername').value; 
            var password = document.getElementById('txtPassword').value;
            var nameRegEx = /[a-zA-Z0-9]/; // username validation
            var passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; // password Validation
            var valUsername = false;
            var valPassword = false;

            try 
            {
                do
                {
                    if ( nameRegEx.test(name) === false) // testing to see if the username agrees with validation
                    {
                        alert("Name should contain values a-z or 0-9");
                        
                    }
                    else
                    {
                        valUsername = true; // breaks out the while when username matches       
                    }
                } 
                while (valUsername === false)
                
            } 
            catch (error)
            {
                console.log(error);
            }

            try
            {
                do
                {
                    if ( passwordRegEx.test(password) === false) // testing to see if the password agrees with validation
                    {
                        alert("password should contain atleast one number and one special character 6-16 length");
                        break;
                    }
                    else 
                    {
                        valPassword = true;
                        alert(`Welcome ${name}`);
                    }
                }
                while (valPassword === false)
        
            } 
            catch (error) 
            {
            console.log(error);
            }
            
        }