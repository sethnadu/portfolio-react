import React from 'react'

//Material UI Icons
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WebIcon from '@material-ui/icons/Web';

//Styled Component Import
import {
    Container,
    TopDiv,
    NameDiv,
    TitleDiv,
    Profession,
    SecondDiv,
    SecondDivMobile,
    SecondTitle,
    SecondSectionCareer,
    SecondSectionContact,
    SecondSectionCareerMobile,
    SecondSectionContactMobile,
    ATag,
    ContactListItem,
    EducationDiv,
    SchoolDiv,
    EducationTitle,
    HL,
    SkillsDiv,
    EducationDivMobile,
    ProfessionalDiv,
    WorkDiv,
    DatesDiv,
    ProfessionalTitle,
    WorkDivMobile,
    DatesDivMobile

} from './ResumeStyles'

//Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery"
//Material UI Icons
import DescriptionIcon from '@material-ui/icons/Description';

const ResumeCopy = ({props, open}) => {
    const phoneSize = useMediaQuery("(max-width:700px)"); 
    return (
        <>
        <Container>
            <TopDiv>
                <NameDiv>
                    <h2>Seth Nadu</h2> 
                </NameDiv>
                <Profession>
                <TitleDiv>
                    <h3>COMPUTER PROGRAMMING</h3>
                </TitleDiv>
                </Profession>
            </TopDiv>
            
                <SecondDiv>
                    <SecondSectionCareer>
                        <SecondTitle>Career Objective</SecondTitle>
                        <p>Hard-working currently studying Full Stack Web Development at Lambda School Online. Aiming to leverage a proven knowledge of Front End and Back End skills to successfully fill the Computer Programming role at your company. Frequently praised as focused by my peers, I can be relied upon to help your company achieve its goals.</p>
                    </SecondSectionCareer>
                    <SecondSectionContact>
                        <SecondTitle>Contact</SecondTitle>
                        <ContactListItem>
                            <MailIcon />
                            <ATag href="mailto:seth.nadu@gmail.com" alt = 'email'>seth.nadu@gmail.com</ATag>
                        </ContactListItem>
                        <ContactListItem>
                            <PhoneIcon />
                            <ATag href="tel:7173929717" alt = 'phone'>(717) 392-9717</ATag>
                        </ContactListItem>
                        <ContactListItem>
                            <LocationOnIcon />
                            <ATag href="https://www.google.com/maps/place/Lancaster,+PA/@40.0399543,-76.3705604,12z/data=!3m1!4b1!4m5!3m4!1s0x89c6248b917214b9:0xb46790d030dbd2d6!8m2!3d40.0378755!4d-76.3055144" alt = 'location'>Lancaster, PA</ATag>
                        </ContactListItem>
                        <ContactListItem>
                            <WebIcon />
                            <ATag href="https://www.sethnadu.com" alt = 'website'>www.sethnadu.com</ATag>
                        </ContactListItem>
                    </SecondSectionContact>
                </SecondDiv>
            <SecondDiv>
                <EducationDiv>
                    <EducationTitle>
                        <h3>Education</h3>
                    </EducationTitle>
                    <SchoolDiv>
                        <p style={{fontWeight: "bold", marginBottom: "-10px"}}>LAMBDA SCHOOL ONLINE</p>
                        <p style={{fontStyle: "Italic", marginBottom: "-10px"}}>San Francisco, CA</p>
                        <p>Computer Science Full Stack Web Development</p>
                        <p style={{fontWeight: "bold", marginBottom: "-10px"}}>SOLANCO HIGH SCHOOL</p>
                        <p style={{fontStyle: "Italic", marginBottom: "-10px"}}>Lancaster, PA</p>
                        <p>High School Diploma (Jun 2013)</p>
                    </SchoolDiv>
                </EducationDiv>
                <HL />
                <EducationDiv>
                    <EducationTitle style={{backgroundColor: "black", color: '#feda6a'}}>
                        <h3>Additional Skills</h3>
                    </EducationTitle>
                        <SkillsDiv>
                            <div>
                                <p>Git</p>
                                <p>Node</p>
                                <p>LESS</p>
                                <p>HTML5</p>
                                <p>Redux</p>
                                <p>JavaScript</p>
                                <p>Semantic</p>    
                            </div>
                            <div>
                                <p>Java</p>
                                <p>Spring</p>
                                <p>React</p>
                                <p>Postgres</p>
                                <p>BootStrap</p>
                                <p>Material-UI</p>
                                <p>Async Code</p>    
                            </div>
                        </SkillsDiv>
                </EducationDiv>
            </SecondDiv>
            <ProfessionalDiv>
                <div>
                    <ProfessionalTitle>Professional Experience</ProfessionalTitle>    
                </div>
                <WorkDiv>
                    <DatesDiv>
                        <p style = {{borderBottom: "2px solid #feda6a", width: "100%"}}>Dec 2015 - May 2019</p>   
                    </DatesDiv>
                    <SecondSectionCareer style={{paddingTop: "0px"}}>
                        <p style={{fontWeight: "bold", marginBottom: "-10px"}}>COMPUTER TECHNICIAN MANAGER</p>
                        <p style={{fontStyle: "Italic", marginBottom: "-10px"}}>Sycamore International, West Grove, PA</p>
                        <ul>
                            <li style={{textAlign: 'left'}}>Refurbished and Recycled Form Factors ranging from PC's to Phones.</li>
                            <li style={{textAlign: 'left'}}>I managed a small group of Computer Technicians and would organize, diagnose issues, and train employees</li>
                            <li style={{textAlign: 'left'}}>Worked with hardware from both Apple and Microsoft</li>
                        </ul>    
                    </SecondSectionCareer>
                </WorkDiv>
            </ProfessionalDiv>

        </Container>
       
         </>
    )
}

export default ResumeCopy;