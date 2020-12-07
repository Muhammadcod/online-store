import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
// import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore' // eslint-disable-line import/no-extraneous-dependencies

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

function valuetext(value) {
  return `${value}°C`
}

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 100,
    label: '100°C',
  },
]

export default function Filter() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const classes = useStyles()

  return (
    <>
      <Grid item xs={3}>
        <div className="sidebar">
          <Accordion boxShadow={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>PRODUCT TYPE</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      color="black"
                    />
                  }
                  label="T-shirt"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="black"
                    />
                  }
                  label="Dress shirt"
                />
                <FormControlLabel
                  control={<Checkbox name="checkedC" color="black" />}
                  label="Sweatshirt"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>PRICE</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Slider
                orientation="horizontal"
                defaultValue={[0, 100]}
                aria-labelledby="vertical-slider"
                getAriaValueText={valuetext}
                marks={marks}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Disabled Accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
    </>
  )
}
