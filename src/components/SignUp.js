import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
export default class SignUp extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
            company:'',
            title:''
        }
    }
    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangeCompany(e) {
        this.setState({ company: e.target.value })
    }
    onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            name: this.state.name,
            email: this.state.email,
            password:this.state.password ,
            company:this.state.company,
            title:this.state.title
        })
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                password: this.userData.password,
                company: this.userData.company,
                title: this.userData.title
            })
        } else {
            this.setState({
                name: '',
                email: '',
                password: '',
                company:'',
                title:''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        
           
       
        
       
  return (
    <div className="container-fluid">
        <div className="row abc2">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 cbox">
            {/* <Link to="/">Previous Page</Link> */}
                <p>Book A Demo Now </p>
                
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <form onSubmit={this.onSubmit}>
             <div className="cont">
            
                <h5>Name *</h5>
                <input className="box" type="text"
                value={this.state.name} onChange={this.onChangeName}
                
                placeholder="Ex. John Doe" 
                 
                 />
                <h5>Email *</h5>
                <input className="box" type="text"
                value={this.state.email} onChange={this.onChangeEmail}
                placeholder="Ex. mail@website.com"   />
                <h5>Password*</h5>
                <input className="box" type="text"
                value={this.state.password} onChange={this.onChangePassword}
                placeholder="Your Password"   />
                <h5>Company Name *</h5>
                <input className="box" type="text"
                value={this.state.company} onChange={this.onChangeCompany}
                placeholder="Ex. XYZ PVT LTD"   />
                <h5>Your Title *</h5>
                <input className="box" type="text"
                value={this.state.title} onChange={this.onChangeTitle}
                placeholder="Ex.Operational Head"   />
               
                <button type="submit"className="btn2">Book Demo</button>
                
             </div>
             </form>
            </div>
        </div>
    </div>
  )
}

}