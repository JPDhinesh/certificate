import React, { Component } from 'react'
import Mstyle from './Forms.module.css'
import { Button, Form, Row, Col, Image } from 'react-bootstrap'

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            password: '',
            repassword: '',
            strength: '',
            firstname: '',
            lastname: '',
            gmail: '',
            certificatename: '',
            completiondate: ''
        }
    }

    mychange = (event) => {
        this.setState({
            password: event.target.value
        })
        var str = document.getElementById('pass')
        if (str.value.length < 5) {
            this.setState({
                strength: 'Weak'
            })
        } else if (str.value.length < 8) {
            this.setState({
                strength: 'Medium'
            })
        } else {
            this.setState({
                strength: 'Strong'
            })
        }
        var regex = /([a-zA-z0-9]{3,10})/g;
        if (regex.test(str.value)) {
            str.style.outline = '3px solid green'
        } else {
            str.style.outline = '3px solid red'
        }
    }
    mychange2 = (event) => {
        this.setState({
            repassword: event.target.value
        })
    }
    fname = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    lname = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    certificate = (event) => {
        this.setState({
            certificatename: event.target.value
        })
    }
    cdate = (event) => {
        this.setState({
            completiondate: event.target.value
        })
    }
    mychange3() {
        var mailid = document.getElementById('mymail');
        var regx = /([a-zA-z0-9]{3,10})+@+([a-zA-Z]{2,16})+\.+([a-zA-z]{2,10})/g;
        if (regx.test(mailid.value)) {
            mailid.style.outline = '3px solid green'
        } else {
            mailid.style.outline = '3px solid red'
        }
    }

    render() {
        var repa = document.getElementById('repass');
        if (this.state.repassword !== '') {
            if (this.state.password !== this.state.repassword) {
                repa.style.outline = '3px solid red';
            } else if (this.state.password == this.state.repassword) {
                repa.style.outline = '3px solid green';
            }
        }

        var contents;
        function shows() {
            if (document.getElementById('pass').value == document.getElementById('repass').value) {
                contents = <div>welcome</div>
                // alert('welcome')
            } else {
                contents = <div>Not welcome</div>
                // alert('not welcome')
            }
        }



        return (
            <div>
                <div className={Mstyle.content}>
                    <div className={Mstyle.form_details}>
                        <Form>
                            <h2 className='text-center'>Fill the below details</h2>
                            <Row className='mt-3'>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Your First Name' onChange={this.fname}></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type='text' placeholder='Enter Your Last Name' onChange={this.lname}></Form.Control>
                                </Form.Group>
                            </Row>
                            <Row className='mt-2'>
                                <Form.Group as={Col}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder='Enter Password' value={this.state.password} onChange={this.mychange} id='pass'></Form.Control>
                                    <Form.Text className={Mstyle.hint}><u>Hint:</u> Follow the <a href='#'>Password Policy</a>&emsp;{this.state.strength}</Form.Text>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Re-Enter Password</Form.Label>
                                    <Form.Control type='password' placeholder='Re-Enter password' value={this.state.repassword} onChange={this.mychange2} id='repass'></Form.Control>
                                </Form.Group>
                            </Row>
                            <Form.Group className='mt-2'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' placeholder='Enter Your Email Address' id='mymail' onChange={this.mychange3}></Form.Control>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Label>Certificate Name</Form.Label>
                                <Form.Select onChange={this.certificate}>
                                    <option selected disabled>-----------Select-----------</option>
                                    <option value='React Js'>React Js</option>
                                    <option value='Angular Js'>Angular Js</option>
                                    <option value='PHP'>PHP</option>
                                    <option value='Python'>Python</option>
                                    <option value='Web Design'>Web Design</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Label>Date of Completion</Form.Label>
                                <Form.Control type='date' onChange={this.cdate}></Form.Control>
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type='number' placeholder='Enter Your Mobile Number'></Form.Control>
                            </Form.Group>
                            <p className='mt-2'>
                                By clicking below checkbox, you agree to our <a href='#'>Terms</a>, <a href='#'>Data Policy</a> and <a href='#'>Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                            </p>
                            <Form.Group className='mt-1'>
                                <Form.Check label='Agree Terms and Conditions'></Form.Check>
                            </Form.Group>
                        </Form>
                        <Button variant='primary' onClick={shows} className='mt-4'>Show</Button>
                    </div>
                </div>
                <div className={Mstyle.Certificate_details}>
                    <div className={Mstyle.details}>
                        <div className={Mstyle.certificate_content}>
                            <Image src='https://icon-library.com/images/react-icon/react-icon-15.jpg' width='80px'></Image>
                            <h1>certificate of Completion</h1>
                            <p className='text-center'>This is to certify that Ms./Mr. <br></br><u>{this.state.firstname} {this.state.lastname}</u><br></br> has completed <h2>{this.state.certificatename}</h2> course on {this.state.completiondate}</p>
                            <Image src='https://cdn4.iconfinder.com/data/icons/award-and-trophy-flat-0619/64/trophy-Award-Badge-reward-512.png' width='100'></Image>
                            <Image src='https://www.freepnglogos.com/uploads/certified-png/gold-certified-graphic-download-7.png' width='150' className={Mstyle.certified_img}></Image>
                        </div>
                    </div>
                </div>

                <p>{contents}</p>
            </div>
        )
    }
}

export default Forms;