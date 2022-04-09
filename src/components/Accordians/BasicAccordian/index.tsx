import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function BasicAccordion(props: ITerms): JSX.Element {
    const terms = props

    return (
        <>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text1}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title2}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text2}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title3}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text3}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title4}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text4}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title5}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text5}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title6}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text6}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title7}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text7}</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title8}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text8}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{terms.title9}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{terms.text9}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}
