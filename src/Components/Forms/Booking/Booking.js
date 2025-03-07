import React,{Component} from 'react';
import '../Form.css'


var styles={color:'red',fontSize: 15,fontWeight:'lighter',marginLeft:'3%'};
export class Booking extends Component{

	constructor(props)
	{
	super(props);
	this.state = {
	username: '',
	roll_no: null,
	errormessage: '',
	errormessage1: '',
    errormessage2: '',
    errormessage3:'',
    password:'',
    password1:'',
    num1:0,
    num2:0
	};
    }
handleClick() {
    alert('Registration Succesful');
  }


 handlePhno = (event) => {
        this.setState({
            phno: event.target.value
        })
        if (this.state.phno.length != 9) {
            this.setState({
                phErr: '⚠Phone number must be 10 digits'
            })
        }
        else {
            this.setState({
                phErr: ''
            })
        }
    }
   myChangeHandler = (event) => 
  {
	event.preventDefault();
	let nam = event.target.name;
    let val = event.target.value;
    let err = '';
   

    if(nam === "username")
    {

      if(val == "")
      {
       err=<strong>⚠Name Should not be blank</strong>
      }

   }
   this.setState({errormessage: err});

this.setState({[nam]: val});
  } 
  handleNum1 = (event) => {
        this.setState({
            num1: event.target.value
        })
        if (isNaN(this.state.num1)) {
            this.setState({
                nan: '⚠Only numbers are valid'
            })
        }
        else {
            this.setState({
                nan: ''
            })
        }
    }
    handleNum2 = (event) => {
        this.setState({
            num2: event.target.value
        })
        if (isNaN(this.state.num2)) {
            this.setState({
                nan1: '⚠Only numbers are valid'
            })
        }
        else {
            this.setState({
                nan1: ''
            })
        }
    }

    submitHandler=(event)=>{
        event.preventDefault();
        this.props.history.push({pathname:"/SuccessMessage/"+this.props.match.params.location+"/"+this.state.num2+"/"+this.state.num1+"/"+this.props.match.params.date})
    }
   mailChangeHandler = (event) => 
  {
	event.preventDefault();
	let nam = event.target.name;
    let val = event.target.value;
    let err = '';
   

    if(nam === "email")
    {

     const re = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        const isOk = re.test(val);
     if(!isOk)
      {
       err=<strong>⚠Enter Valid mail id</strong>
      }


   }
   this.setState({errormessage1: err});

this.setState({[nam]: val});
  } 
   passChangeHandler = (event) => 
  {
	event.preventDefault();
	let nam = event.target.name;
    let val = event.target.value;
    let err = '';
   

    if(nam === "password")
    {

    const re = new RegExp("^(?=.*[0-9])"
                       + "(?=.*[a-z])(?=.*[A-Z])"
                       + "(?=.*[@#$%^&+=])"
                       + "(?=\\S+$).{8,20}$");
        const isOk = re.test(val);
     if(!isOk)
      {
       err=<strong>⚠Enter Strong Password</strong>
      }

   }
   this.setState({errormessage2: err});

this.setState({[nam]: val});
  } 

     pass1ChangeHandler = (event) => 
  {
	event.preventDefault();
	let nam = event.target.name;
    let val = event.target.value;
    let err = '';
   
   const { password, password1 } = this.state;
   console.log(password);
   console.log(password1);
    // perform all neccassary validations
    if (password !== password1) 
    {
        err = <strong>⚠Passwords don't match</strong>;
    } 
   this.setState({errormessage3: err});

this.setState({[nam]: val});
  } 


    render(){
    
    return(
   

    <div className='container s1' >
    <center>
      <h3 style={{color:"#61DFFB"}}>Book your Tour</h3><br/>
      <form  onSubmit={this.submitHandler}>
       
       <div className="row form_submit">
          <div className="col-lg-3 simple">
          <label  for='username' className="label_text"><b>Username<span style={{color:"red"}}>*</span></b></label>
          </div>
          <div className="col-lg-9">
          <input type='text'
            name='username'
            id='username'
            required   
            placeholder='Enter Username'
            onChange={this.myChangeHandler}/></div>

            	<div style={styles}>{this.state.errormessage}</div>
       </div>
        <div className="row form_submit">
          <div className="col-lg-3 simple">
          <label for='email' className="label_text"><b>Mail<span style={{color:"red"}}>*</span></b></label>
          </div>
         <div className="col-lg-9">
          <input
            type='email'
            name='email'
            id='email'
            required
            onChange={this.mailChangeHandler}
            placeholder='Enter Email'/>
            </div>
            <div style={styles}>{this.state.errormessage1}</div>
       </div>

       <div className="row form_submit">
                    <div className="col-lg-3 simple">
                     <label  for='adults' className="label_text"><b>Adults</b></label></div>
                     <div className="col-lg-9">
                     <input type="number" min="0" class='input1' name="name2" id='adults' placeholder="Enter no of adults " value={this.state.num1}
                        onChange={this.handleNum1} /></div> 
                    <div style={styles}> {this.state.nan} </div>
                    </div>

                     <div className="row form_submit">
                    <div className="col-lg-3 simple">
                     <label  for='children' className="label_text"><b>Children</b></label></div>
                     <div className="col-lg-9">
                     <input type="number"  min="0" 
                     id='children'name="name3" placeholder="Enter no of children " value={this.state.num2}
                        onChange={this.handleNum2} /> </div>
                    <div style={styles}> {this.state.nan1} </div><br />
                    </div>
                     <div className="box-Charges">
                         {console.log("charges"+this.props.match.params.chargeAdult,this.props.match.params.chargeChildren)}
                             <h6>Charges for adults : {this.state.num1 * this.props.match.params.chargeAdult}</h6>
                              <h6>Charges for  Children : {this.state.num2 * this.props.match.params.chargeChildren}</h6>
                              <h6>Total Charges:&nbsp;{this.state.num1 * this.props.match.params.chargeAdult + this.state.num2 * this.props.match.params.chargeChildren}</h6>
                     </div>

                      
      
       <button type="submit" className="button button1" >Submit</button>
      </form>
      </center>
   </div>
 
    )
  
  }
}

export default Booking