import React from 'react'
import Solutions_section_one from '../components/Solutions_section_one'
import Solutions_section_two from '../components/Solutions_section_two'
import Home_section_four from '../components/Home_section_four'
import Home_section_six from '../components/Home_section_six'
import About_section_five from '../components/About_section_five'
import Solutions_section_three from '../components/Solutions_section_three'
import Home_section_two from '../components/Home_section_two'
import Solutions_section_four from '../components/Solutions_section_four'

function Solutions() {
    return (
            <>  
            <Solutions_section_one />
            <Solutions_section_two />
            {/* <Home_section_four /> */}
            {/* <Home_section_two /> */}
            <Solutions_section_three />
            <Solutions_section_four />

            <Home_section_six />
            <About_section_five />
            </>
    )
}

export default Solutions