import React from 'react'

//Material UI Icons
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WebIcon from '@material-ui/icons/Web';

import Resume_PDF from '../../Assets/Resume.pdf'


//Material UI Icons
import DescriptionIcon from '@material-ui/icons/Description';

//Styled Component Import
import {
   Container,
   NameDiv,
   NameH2,
   JobDiv,
   Header,
   Line,
   BodyDiv,
   LeftDiv,
   SideDiv,
   Sectionheader,
   TitleLine,
   MainTitleLine,
   SubHeader,
   RightDiv,
   MainDiv,
   ContactListItem,
   RightListItem,
   SkillListItem,
   ATag,
   ItalicText,
   MainSectionheader,
   MobileBodyDiv,
   MobileContactListItem,
   MobileSideDiv,
   MobileTitleLine


} from './ResumeCopyStyles'

//Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery"


const ResumeCopy = ({props, open}) => {
    const phoneSize = useMediaQuery("(max-width:700px)"); 
    return (
        <>
        {open && phoneSize ? (
            <div style={{margin: "80px auto 20px auto", width: "100%", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
            <h2 style={{color: '#6B6B6B'}}>Seth Nadu</h2>
            <a href={Resume_PDF} alt="Seth Nadu Resume" download="Seth_Nadu_Resume" style={{textDecoration: "none", textAlign: "center"}}>
                <DescriptionIcon style={{color: "#6B6B6B", fontSize: "3.3rem"}}/>
                <h3 style={{textAlign: "center", color: '#6B6B6B', marginBottom:"-10px"}}>Download</h3>  
                <h3 style={{textAlign: "center", color: '#6B6B6B'}}>Resume</h3>   
            </a>
            </div>
        ) : (
        <>
        {!phoneSize ? 
        <div style={{margin: "60px 60px -80px 25px", display: "flex", flexDirection: 'row', justifyContent: "flex-end"}}>
            <a href={Resume_PDF} alt="Seth Nadu Resume" download="Seth_Nadu_Resume" style={{textDecoration:"none"}}>
                <h3 style={{color: 'white'}}>Download</h3>
            </a>
        </div> : null}
        <Container>
            <NameDiv>
                {!phoneSize ? <NameH2>SETH NADU</NameH2> : <NameH2 style={{"fontSize": "2.0rem"}}>SETH NADU</NameH2>}
            </NameDiv>
            <JobDiv>
                <Header>Computer Programmer</Header>
                <Line />
            </JobDiv>
            {!phoneSize ?
            <BodyDiv>
                <LeftDiv>
                    <SideDiv>
                        <ContactListItem>
                            <SubHeader>C{" "}O{" "}N{" "}T{" "}A{" "}C{" "}T</SubHeader>
                            <TitleLine />
                        </ContactListItem>
                        <ContactListItem>
                            <ATag href="mailto:seth.nadu@gmail.com" alt = 'email'>seth.nadu@gmail.com</ATag>
                            <MailIcon />
                        </ContactListItem>
                        <ContactListItem>
                            <ATag href="tel:7173929717" alt = 'phone'>(717) 392-9717</ATag>
                            <PhoneIcon />
                        </ContactListItem>
                        <ContactListItem>
                            <ATag href="https://www.google.com/maps/place/Lancaster,+PA/@40.0399543,-76.3705604,12z/data=!3m1!4b1!4m5!3m4!1s0x89c6248b917214b9:0xb46790d030dbd2d6!8m2!3d40.0378755!4d-76.3055144" alt = 'location'>Lancaster, PA</ATag>
                            <LocationOnIcon />
                        </ContactListItem>
                        <ContactListItem>
                            <ATag href="https://www.sethnadu.com" alt = 'website'>www.sethnadu.com</ATag>
                            <WebIcon />
                        </ContactListItem>
                    </SideDiv>
                    <SideDiv>
                        <ContactListItem>
                            <SubHeader>E{" "}D{" "}U{" "}C{" "}A{" "}T{" "}I{" "}O{" "}N</SubHeader>
                            <TitleLine />
                        </ContactListItem>
                        <ContactListItem>
                            <Sectionheader>LAMBDA SCHOOL ONLINE</Sectionheader>
                        </ContactListItem>
                        <ContactListItem>
                            <ItalicText>San Francisco, CA</ItalicText>
                        </ContactListItem>
                        <ContactListItem>
                            <ItalicText>Full Stack Web Development</ItalicText>
                        </ContactListItem>
                        <ItalicText style={{"textAlign": "right", "marginTop": "5px", "marginBottom": "10px"}}>(Feb 2020)</ItalicText>
                        <ContactListItem>
                            <Sectionheader>Solanco High School</Sectionheader>
                        </ContactListItem>
                        <ContactListItem>
                            <ItalicText>Lancaster, PA</ItalicText>
                        </ContactListItem>
                        <ContactListItem>
                            <ItalicText>High School Diploma (Jun 2013)</ItalicText>
                        </ContactListItem>
                    </SideDiv>
                    <SideDiv>
                        <ContactListItem>
                            <SubHeader>S{" "}k{" "}i{" "}l{" "}l{" "}s</SubHeader>
                            <TitleLine />
                        </ContactListItem>
                        <SkillListItem>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Git</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Node</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>LESS</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Python</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>HTML5</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Redux</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>JavaScript</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Semantic</p>    
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Java</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Spring</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>React</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Django</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Postgres</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>BootStrap</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Material-UI</p>
                                <p style = {{"margin": "0", "marginBottom": '5px'}}>Async Code</p>  
                        </SkillListItem>
                    </SideDiv>
                </LeftDiv>
                <RightDiv>
                    <MainDiv>
                        <RightListItem>
                            <MainTitleLine />
                            <div style={{"display": "flex", "flexFlow": "row wrap"}}>
                                <SubHeader style = {{'marginRight': "10px"}}>C{" "}A{" "}R{" "}E{" "}E{" "}R</SubHeader>
                                <SubHeader>O{" "}B{" "}J{" "}E{" "}C{" "}T{" "}I{" "}V{" "}E</SubHeader>
                            </div>
                        </RightListItem>
                        <RightListItem>
                            <p style={{'marginRight': "20px", "marginBottom": "20px"}}>I am looking for a Full Stack Web or Front-End position. My strengths are in React, Redux, and Javascript, with knowledge of Java, Node and Python.</p>
                        </RightListItem>
                        <RightListItem>
                            <MainTitleLine />
                                <SubHeader style = {{'marginRight': "10px", "marginBottom": "20px"}}>P{" "}R{" "}O{" "}J{" "}E{" "}C{" "}T{" "}S</SubHeader>
                        </RightListItem>
                        <RightListItem>
                            <MainSectionheader><a style={{"textDecoration": "None", "color": "black"}} href="https://www.didactlms.com" alt="Didact">DIDACT</a></MainSectionheader> 
                        </RightListItem>     
                        <RightListItem>
                            <ItalicText style={{"marginTop": "0px"}}>A hub of online learning, Didact aims to learn as a community.</ItalicText>
                        </RightListItem>
                        <p style={{'marginBottom': "-10px"}}><span style={{"fontWeight": "bolder"}}>Tech Stack: </span>Node.js, Express, React, Redux, Material UI, and Passport.js</p>
                        <ul style={{'marginRight': "20px", "marginBottom": "30px"}}>
                            <li style={{textAlign: 'left'}}>Built to the specifications of the stakeholder, created with 6 UI Developers and 1 UX developer in a 2 month timeframe.</li>
                            <li style={{textAlign: 'left'}}>Focused on front-end development with React and Redux, with drag-and-drop functionality, Material UI styling library.</li>
                            <li style={{textAlign: 'left'}}>Contributed with Node Express endpoints, documentation as well as front-end intergration with Udemy's courses.</li>
                        </ul>
                        <RightListItem>
                            <MainSectionheader><a style={{"textDecoration": "None", "color": "black"}} href="https://andrewnadurestoration.netlify.com/" alt="Andrew Nadu Restoration">ANDREW NADU RESTORATION</a></MainSectionheader> 
                        </RightListItem>     
                        <RightListItem>
                            <ItalicText style={{"marginTop": "0px"}}>A restoration portfolio showcasing masonry and restoration projects.</ItalicText>
                        </RightListItem>
                        <p style={{'marginBottom': "-10px"}}><span style={{"fontWeight": "bolder"}}>Tech Stack: </span>HTML, LESS, Javascript</p>
                        <ul style={{'marginRight': "20px", "marginBottom": "30px"}}>
                            <li style={{textAlign: 'left'}}>An individual project, built to the specifications of the owner, used as a portfolio of their work.</li>
                            <li style={{textAlign: 'left'}}>Focused on the core of computer languages, using HTML and LESS for the framework and styling.</li>
                            <li style={{textAlign: 'left'}}>Created multiple reusable Javascript components for portfolio carousels and smooth mobile integration.</li>
                        </ul>
                        <RightListItem>
                            <MainSectionheader><a style={{"textDecoration": "None", "color": "black"}} href="https://github.com/Build-Week-Foodie-Funz/back-end" alt="Seth Nadu Portfolio">JAVA BACKEND</a></MainSectionheader> 
                        </RightListItem>     
                        <RightListItem>
                            <ItalicText style={{"marginTop": "0px"}}>Back End created to store restaraunt information and users</ItalicText>
                        </RightListItem>
                        <p style={{'marginBottom': "-10px"}}><span style={{"fontWeight": "bolder"}}>Tech Stack: </span>Java, Spring, OAuth2</p>
                        <ul style={{'marginRight': "20px", "marginBottom": "20px"}}>
                            <li style={{textAlign: 'left'}}>Built to connect to a Front End project, only Back End Developer.</li>
                            <li style={{textAlign: 'left'}}>Used Spring, PostgreSQL as the database, with OAuth2 authentication for securing user data.</li>
                            <li style={{textAlign: 'left'}}>Focused on mantaining the information sent from Front End, with 72 tests tracking every endpoint.</li>
                        </ul>
                        <RightListItem>
                            <MainTitleLine />
                            <div style={{"display": "flex", "flexFlow": "row wrap", "marginBottom": "20px"}}>
                                <SubHeader style = {{'marginRight': "10px"}}>P{" "}R{" "}O{" "}F{" "}E{" "}S{" "}S{" "}I{" "}O{" "}N{" "}A{" "}L</SubHeader>
                                <SubHeader>E{" "}X{" "}P{" "}E{" "}R{" "}I{" "}E{" "}N{" "}C{" "}E</SubHeader>
                            </div>
                        </RightListItem>
                        <RightListItem>
                            <MainSectionheader>COMPUTER TECHNICIAN MANAGER</MainSectionheader>   
                        </RightListItem>
                        <RightListItem>
                            <ItalicText style={{"marginTop": "0px"}}>Sycamore International, West Grove, PA / Dec 2015 - May 2019</ItalicText>
                        </RightListItem>
                        <ul style={{'marginRight': "20px", "marginBottom": "20px"}}>
                            <li style={{textAlign: 'left'}}>Refurbished and Recycled Form Factors ranging from PC's to Phones.</li>
                            <li style={{textAlign: 'left'}}>Managed a small group of Computer Technicians and would organize, diagnose issues, and train employees</li>
                            <li style={{textAlign: 'left'}}>Worked with hardware from both Apple and Microsoft</li>
                        </ul>
    
                    </MainDiv>
                </RightDiv>
            </BodyDiv>
            :
            <MobileBodyDiv>
                <MobileSideDiv>
                    <MobileContactListItem style={{"flex-direction": "column"}}>
                        <SubHeader>C{" "}O{" "}N{" "}T{" "}A{" "}C{" "}T</SubHeader>
                        <MobileTitleLine />
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <MailIcon />
                        <ATag href="mailto:seth.nadu@gmail.com" alt = 'email'>seth.nadu@gmail.com</ATag>    
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <PhoneIcon />
                        <ATag href="tel:7173929717" alt = 'phone'>(717) 392-9717</ATag>
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <LocationOnIcon />
                        <ATag href="https://www.google.com/maps/place/Lancaster,+PA/@40.0399543,-76.3705604,12z/data=!3m1!4b1!4m5!3m4!1s0x89c6248b917214b9:0xb46790d030dbd2d6!8m2!3d40.0378755!4d-76.3055144" alt = 'location'>Lancaster, PA</ATag>
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <WebIcon />
                        <ATag href="https://www.sethnadu.com" alt = 'website'>www.sethnadu.com</ATag>
                    </MobileContactListItem>
                </MobileSideDiv>
                <MobileSideDiv>
                    <MobileContactListItem style={{"flex-direction": "column"}}>
                        <div style={{"display": "flex", "flexFlow": "row wrap"}}>
                            <SubHeader style = {{'marginRight': "10px"}}>C{" "}A{" "}R{" "}E{" "}E{" "}R</SubHeader>
                            <SubHeader>O{" "}B{" "}J{" "}E{" "}C{" "}T{" "}I{" "}V{" "}E</SubHeader>
                        </div>
                        <MobileTitleLine />
                    </MobileContactListItem>
                    <RightListItem>
                        <p style={{"textAlign": "center", "marginBottom": "20px"}}>I am looking for a Full Stack Web or Front-End position. My strengths are in React, Redux, and Javascript, with knowledge of Java, Node and Python.</p>
                    </RightListItem>
                </MobileSideDiv>    
                <MobileSideDiv style={{"marginTop": "0", "marginBottom": "30px"}}>
                    <MobileContactListItem style={{"flex-direction": "column"}}>
                        <SubHeader>E{" "}D{" "}U{" "}C{" "}A{" "}T{" "}I{" "}O{" "}N</SubHeader>
                        <MobileTitleLine />
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <Sectionheader style={{"paddingLeft": "0"}}>LAMBDA SCHOOL ONLINE</Sectionheader>
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <ItalicText>San Francisco, CA</ItalicText>
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <ItalicText>Full Stack Web Development</ItalicText>
                    </MobileContactListItem>
                    <ItalicText style={{"textAlign": "left", "marginTop": "5px", "marginBottom": "10px"}}>(Feb 2020)</ItalicText>
                    <MobileContactListItem>
                        <Sectionheader style={{"paddingLeft": "0"}}>Solanco High School</Sectionheader>
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <ItalicText>Lancaster, PA</ItalicText>
                    </MobileContactListItem>
                    <MobileContactListItem>
                        <ItalicText>High School Diploma (Jun 2013)</ItalicText>
                    </MobileContactListItem>
                </MobileSideDiv>

{/* Mobile Projects Resume Section */}
                <MobileContactListItem style={{"flex-direction": "column", "marginTop": "20px"}}>
                    <SubHeader>P{" "}R{" "}O{" "}J{" "}E{" "}C{" "}T{" "}S</SubHeader>
                    <MobileTitleLine />
                </MobileContactListItem>
                <RightListItem>
                    <MainSectionheader><a style={{"textDecoration": "None", "color": "black"}} href="https://www.didactlms.com" alt="Didact">DIDACT</a></MainSectionheader> 
                </RightListItem>     
                <RightListItem>
                    <ItalicText style={{"marginTop": "0px"}}>A hub of online learning, Didact aims to learn as a community.</ItalicText>
                </RightListItem>
                <p style={{'marginBottom': "-10px"}}><span style={{"fontWeight": "bolder"}}>Tech Stack: </span>Node.js, Express, React, Redux, Material UI, and Passport.js</p>
                <ul style={{'marginRight': "20px", "marginBottom": "30px"}}>
                    <li style={{textAlign: 'left'}}>Built to the specifications of the stakeholder, created with 6 UI Developers and 1 UX developer in a 2 month timeframe.</li>
                    <li style={{textAlign: 'left'}}>Focused on front-end development with React and Redux, with drag-and-drop functionality, Material UI styling library.</li>
                    <li style={{textAlign: 'left'}}>Contributed with Node Express endpoints, documentation as well as front-end intergration with Udemy's courses.</li>
                </ul>
                <RightListItem>
                    <MainSectionheader><a style={{"textDecoration": "None", "color": "black"}} href="https://andrewnadurestoration.netlify.com/" alt="Andrew Nadu Restoration">ANDREW NADU RESTORATION</a></MainSectionheader> 
                </RightListItem>     
                <RightListItem>
                    <ItalicText style={{"marginTop": "0px"}}>A restoration portfolio showcasing masonry and restoration projects.</ItalicText>
                </RightListItem>
                <p style={{'marginBottom': "-10px"}}><span style={{"fontWeight": "bolder"}}>Tech Stack: </span>HTML, LESS, Javascript</p>
                <ul style={{'marginRight': "20px", "marginBottom": "30px"}}>
                    <li style={{textAlign: 'left'}}>An individual project, built to the specifications of the owner, used as a portfolio of their work.</li>
                    <li style={{textAlign: 'left'}}>Focused on the core of computer languages, using HTML and LESS for the framework and styling.</li>
                    <li style={{textAlign: 'left'}}>Created multiple reusable Javascript components for portfolio carousels and smooth mobile integration.</li>
                </ul>
                <RightListItem>
                    <MainSectionheader><a style={{"textDecoration": "None", "color": "black"}} href="https://github.com/Build-Week-Foodie-Funz/back-end" alt="Seth Nadu Portfolio">JAVA BACKEND</a></MainSectionheader> 
                </RightListItem>     
                <RightListItem>
                    <ItalicText style={{"marginTop": "0px"}}>Back End created to store restaraunt information and users</ItalicText>
                </RightListItem>
                <p style={{'marginBottom': "-10px"}}><span style={{"fontWeight": "bolder"}}>Tech Stack: </span>Java, Spring, OAuth2</p>
                <ul style={{'marginRight': "20px", "marginBottom": "20px"}}>
                    <li style={{textAlign: 'left'}}>Built to connect to a Front End project, only Back End Developer.</li>
                    <li style={{textAlign: 'left'}}>Used Spring, PostgreSQL as the database, with OAuth2 authentication for securing user data.</li>
                    <li style={{textAlign: 'left'}}>Focused on mantaining the information sent from Front End, with 72 tests tracking every endpoint.</li>
                </ul>

{/* Mobile Professional Experience Resume Section */}
                <MobileContactListItem style={{"flex-direction": "column", "marginTop": "40px"}}>
                    <div style={{"display": "flex", "flexFlow": "row wrap", "justifyContent": "center"}}>
                        <SubHeader style = {{'marginRight': "5px"}}>P{" "}R{" "}O{" "}F{" "}E{" "}S{" "}S{" "}I{" "}O{" "}N{" "}A{" "}L</SubHeader>
                        <SubHeader style = {{'marginRight': "5px"}}>E{" "}X{" "}P{" "}E{" "}R{" "}I{" "}E{" "}N{" "}C{" "}E</SubHeader>
                    </div>
                    <MobileTitleLine />
                </MobileContactListItem>
                <RightListItem>
                    <MainSectionheader>COMPUTER TECHNICIAN MANAGER</MainSectionheader>   
                </RightListItem>
                <RightListItem>
                    <ItalicText style={{"marginTop": "0px"}}>Sycamore International, West Grove, PA / Dec 2015 - May 2019</ItalicText>
                </RightListItem>
                <ul style={{'marginRight': "20px", "marginBottom": "20px"}}>
                    <li style={{textAlign: 'left'}}>Refurbished and Recycled Form Factors ranging from PC's to Phones.</li>
                    <li style={{textAlign: 'left'}}>Managed a small group of Computer Technicians and would organize, diagnose issues, and train employees</li>
                    <li style={{textAlign: 'left'}}>Worked with hardware from both Apple and Microsoft</li>
                </ul>
                    
                <MobileSideDiv>
                    <MobileContactListItem style={{"flex-direction": "column"}}>
                        <SubHeader>S{" "}k{" "}i{" "}l{" "}l{" "}s</SubHeader>
                        <MobileTitleLine />
                    </MobileContactListItem>
                    <SkillListItem style = {{"alignItems": "center"}}>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Git</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Node</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>LESS</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Python</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>HTML5</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Redux</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>JavaScript</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Semantic</p>    
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Java</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Spring</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>React</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Django</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Postgres</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>BootStrap</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Material-UI</p>
                            <p style = {{"margin": "0", "marginBottom": '5px'}}>Async Code</p>  
                    </SkillListItem>
                </MobileSideDiv>
        </MobileBodyDiv>}
        </Container>
        </>
        )}
        </>
    )
}

export default ResumeCopy;