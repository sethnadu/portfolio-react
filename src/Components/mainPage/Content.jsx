import React from "react";
import AboutPage from '../aboutPage/AboutPage'
import Projects from '../projects/Projects'
import ResumeCopy from '../resume/ResumeCopy'

const Content = ({props, open}) => {
    return (
        <div>
        {(() => {
            switch(props.page)
            {
                case('aboutpage'):
                    return <AboutPage props={props} open={open}/>
                case('projects'):
                    return <Projects props={props} open={open}/>
                case('resume'):
                    return <ResumeCopy props={props} open={open}/>
                default:
                    break;
            }
        })()}
        </div>
    )
}

export default Content