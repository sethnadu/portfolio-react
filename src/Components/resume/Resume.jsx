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
    ContactListItem

} from './ResumeStyles'

//Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Resume = ({props, open}) => {
    const phoneSize = useMediaQuery("(max-width:700px)"); 
    return (
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
            {!phoneSize ? (
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
            ) : (
                <SecondDivMobile>
                    <SecondSectionCareerMobile>
                        <SecondTitle>Career Objective</SecondTitle>
                        <p>Hard-working currently studying Full Stack Web Development at Lambda School Online. Aiming to leverage a proven knowledge of Front End and Back End skills to successfully fill the Computer Programming role at your company. Frequently praised as focused by my peers, I can be relied upon to help your company achieve its goals.</p>
                    </SecondSectionCareerMobile>
                    <SecondSectionContactMobile>
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
                    </SecondSectionContactMobile>
                </SecondDivMobile>
            )}
            <div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>

        </Container>
    )
}

export default Resume;