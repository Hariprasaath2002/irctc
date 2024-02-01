function checkTable()
{
    var name=document.getElementById('name').value;
    var age=document.getElementById('age').value;
    var address=document.getElementById('address').value;   
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var cpassword=document.getElementById('cpassword').value;
    var selection=document.getElementById('question').value;
    var answer=document.getElementById('answer').value;
    var language1=document.getElementById('language').value;
    var pan=document.getElementById('pan').value;

    // console.log(selection);
    if(email=="")
    {
        
        document.getElementById('span-email').innerHTML='Email is requried';
        return false;
    }
    // console.log(password);

    if(password.length==0)
    {
        alert('password is required');
        return false;
    }
    else if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,12}$/).test(password)) {
        alert('Password is not under condition');
        return false;
    }

    if(password!=cpassword)
    {
       document.getElementById('span-cpassword').innerHTML='Your passwrod is not matching';
       return false;
    }

    if(selection=='Choose')
    {
        alert("choose the question correclty");
        return false;
    }
   
    if(answer.length==0)
    {
        alert("Plese enter the answer");
        return false;
    }

    if(language1=='Choose')
    {
        alert("Choose the language");
        return false;
    }
   
    if(name.length<=0)
    {
        document.getElementById('span-name').innerHTML="Your name is required";
        return false;
    }
    else if(!(/^[a-z A-Z]+$/).test(name))
    {
        document.getElementById('span-name').innerHTML="Your name should be use only alpabets";
        return false;
    }
    if(age.length==0)
    {
        document.getElementById('span-age').innerHTML="Please eneter your age";
        return false;
    } 
    else if(age<18)
    {
        document.getElementById('span-age').innerHTML="You are not eligible to register as a user, you must be 18 years old or older.";
        return false;
    }
    else if(age>99)
    {
        document.getElementById('span-age').innerHTML="You are not eligible to register as a user";
        return false;
    }

    if(address.length==0)
    {
        document.getElementById('span-address').innerHTML="Please enter the address";
        return false;
    }
    console.log(pan);
    if(pan.length==0)
    {
        document.getElementById("span-pan").innerHTML="Pan number is requried";
        return false;
    }
    else if(!(/^[A-Z]{5,5}[0-9]{4,4}[A-Z]{1,1}$/).test(pan))
    {
        document.getElementById("span-pan").innerHTML="Pan number is not valid";
        return false;
    }

    return true;
}

function AddData() {
    if (checkTable() == true) {
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var address = document.getElementById('address').value;
        var pan = document.getElementById('pan').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var cpassword = document.getElementById('cpassword').value;
        var selection = document.getElementById('question').value;
        var answer = document.getElementById('answer').value;
        var language1 = document.getElementById('language').value;

        let trainform;
        if (localStorage.getItem("irctc") == null) {
            trainform = [];  
        } else {
            trainform = JSON.parse(localStorage.getItem("irctc"));
        }

        trainform.push({
            name: name,
            age: age,
            address: address,
            pan: pan,
            email: email,
            password: password,
            cpassword: cpassword,
            selection: selection,
            answer: answer,
            language1: language1,
        });

        localStorage.setItem("irctc", JSON.stringify(trainform));

        showData();
        document.getElementById('name').value="";     
        document.getElementById('age').value="";              
        document.getElementById('address').value="";          
        document.getElementById('pan').value="";              
        document.getElementById('email').value="";            
        document.getElementById('password').value="";         
        document.getElementById('cpassword').value="";
        document.getElementById('question').value="";        
        document.getElementById('answer').value="";          
        document.getElementById('language').value="";    
        
    }
 }
        
function showData()
{
    var trainform="";
    if(localStorage.getItem("irctc")==null)
    {
        trainform=[];
    }
    else 
    {
        trainform=JSON.parse(localStorage.getItem('irctc'));
    }

    var show="";
    trainform.forEach((element,index)=>
        {
            show+="<tr>";
            show+="<td>"+element.name+"</td>";
            show+="<td>"+element.age+"</td>";
            show+="<td>"+element.address+"</td>";
            show+="<td>"+element.pan+"</td>";
            show+="<td>"+element.email+"</td>";
            show+="<td>"+element.password+"</td>";
            show+="<td>"+element.cpassword+"</td>";
            show+="<td>"+element.selection+"</td>";
            show+="<td>"+element.answer+"</td>";
            show+="<td>"+element.language1+"</td>";
            show+='<td> <button onclick="deleteData(' + index + ')">DELETE</button><button onclick="updateData(' + index + ')">EDIT</button></td>';
            show+="</tr>"
        }
    );

    document.querySelector("#crudTable tbody").innerHTML=show;

    document.getElementById('name').value="";     
    document.getElementById('age').value="";              
    document.getElementById('address').value="";          
    document.getElementById('pan').value="";              
    document.getElementById('email').value="";            
    document.getElementById('password').value="";         
    document.getElementById('cpassword').value="";
    document.getElementById('question').value="";        
    document.getElementById('answer').value="";          
    document.getElementById('language').value="";   

}
window.onload=showData();

function updateData(pos)
{
    document.getElementById('Submit').style.display='none';
    document.getElementById('Update').style.display='block';

    let trainform;
    if(localStorage.getItem('irctc')==null)
    {
        trainform=[];
    }
    else
    {
        trainform=JSON.parse(localStorage.getItem('irctc'));
    }

    document.getElementById('name').value=trainform[pos].name;     
    document.getElementById('age').value=trainform[pos].age;              
    document.getElementById('address').value=trainform[pos].address;          
    document.getElementById('pan').value=trainform[pos].pan;              
    document.getElementById('email').value=trainform[pos].email;            
    document.getElementById('password').value=trainform[pos].password;         
    document.getElementById('cpassword').value=trainform[pos].cpassword;
    document.getElementById('question').value=trainform[pos].question;        
    document.getElementById('answer').value=trainform[pos].answer;          
    document.getElementById('language').value=trainform[pos].language; 

    document.getElementById("Update").onclick=()=>
    {
        if(checkTable()==true)
        {
            trainform[pos].language = document.getElementById('language').value;
            trainform[pos].answer = document.getElementById('answer').value;
            trainform[pos].question = document.getElementById('question').value;
            trainform[pos].cpassword = document.getElementById('cpassword').value;
            trainform[pos].password = document.getElementById('password').value;
            trainform[pos].email = document.getElementById('email').value;
            trainform[pos].pan = document.getElementById('pan').value;
            trainform[pos].address = document.getElementById('address').value;
            trainform[pos].age = document.getElementById('age').value;
            trainform[pos].name = document.getElementById('name').value;

            localStorage.setItem('irctc',JSON.stringify(trainform));
            document.getElementById("Submit").style.display="block";
            document.getElementById("Update").style.display="none";
            showData();

            document.getElementById('name').value="";     
            document.getElementById('age').value="";              
            document.getElementById('address').value="";          
            document.getElementById('pan').value="";              
            document.getElementById('email').value="";            
            document.getElementById('password').value="";         
            document.getElementById('cpassword').value="";
            document.getElementById('question').value="";        
            document.getElementById('answer').value="";          
            document.getElementById('language').value="";  


        }
    }
    
    
}

function deleteData(index)
{
    let trainform;
    if(localStorage.getItem('irctc')==null)
    {
        trainform=[];
    }
    else
    {
        trainform=JSON.parse(localStorage.getItem('irctc'));
    }
    trainform.splice(index,1);
    localStorage.setItem('irctc', JSON.stringify(trainform)); 
    showData();
    document.getElementById('name').value="";     
    document.getElementById('age').value="";              
    document.getElementById('address').value="";          
    document.getElementById('pan').value="";              
    document.getElementById('email').value="";            
    document.getElementById('password').value="";         
    document.getElementById('cpassword').value="";
    document.getElementById('question').value="";        
    document.getElementById('answer').value="";          
    document.getElementById('language').value="";  

    
}

