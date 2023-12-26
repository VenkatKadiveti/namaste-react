import React from "react";
import API_URLS from "../../utils/apiUrls";
import appConstants from "../../utils/Constants";
import Loader from "../loader/Loader";
import "./about.scss";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
    };
  }

  componentDidMount() {
    this.fetchData();
    console.log(this.state.userDetails);
  }

  async fetchData() {
    const data = await fetch(API_URLS.BASE_URL + API_URLS.USER_INFO);
    const json = await data.json();
    this.setState({
      userDetails: json,
    });
  }

  scrollToContact() {
    const ele = document.getElementById('contactME');
    if(ele) {
        const data = ele.getBoundingClientRect();
        window.scrollTo(data.x, data.y)
    }
  }

  render() {
    if(!this.state.userDetails) {
        return <Loader />
    }
    return (
      <div className="mainContainersection">
        <div className="aboutContainer">
          <div className="userDetails">
            <span className="titleName">So, who am I ?</span>
            <span className="aboutDesc">{appConstants.ABOUT}</span>
            <span className="contactme" onClick={() => this.scrollToContact()} >Contact Me</span>
          </div>
          <div className="imgContainer">
            <img className="profileImg" src={this.state?.userDetails?.avatar_url}/>
            <span className="myName"> {this.state?.userDetails?.name} </span>
            <span className="moreAboutMe"> <a href={this.state?.userDetails?.html_url} target='_blank'>Check more about me</a> </span>
          </div>
        </div>
        <span className="techStatcHeading">Technologies stack</span>
        <div className="techStack">
            <div className="knowTechs">
                { Object.keys(appConstants.TECH_STACK).map(key => {
                    return (<img width='100px' style={{padding: '10px', 'box-shadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}} src={appConstants.TECH_STACK[key]['IMAGE']} />)
                }) }
            </div>
            <div className="percentageTechs">
                {Object.keys(appConstants.TECH_STACK).map(key => {
                    return (<div className="techKnownPercentage">
                        <span className="techName">{key}</span>
                        <span className="totalPercentage">
                            <span className="learned" style={{width: appConstants.TECH_STACK[key]['PERCENTAGE'], background: appConstants.TECH_STACK[key]['COUNT'] < 50 ? '#a85432' : 'green' }} >{appConstants.TECH_STACK[key]['PERCENTAGE']}</span>
                        </span>
                    </div>)
                })}
            </div>
        </div>
        <span className="techStatcHeading">Contact Me</span>
        <div id="contactME" className="contactMEBox">
            <span className="name inputs">
                <label>Name</label>
                <input type='text' placeholder="Type here"/> 
            </span>
            <span className="email inputs">
                <label>Email</label>
                <input type='text' placeholder="Type here"/> 
            </span>
            <span className="message inputs">
                <label>Message</label>
                <textarea type='text' rows='8' placeholder="Type here" /> 
            </span>
            <span className="contactme">Contact Me</span>
        </div>
      </div>
    );
  }
}

export default About;
