import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Q. What is Office 365?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. If you need to upgrade. you can transition your account to a
            different plan. For example, you can upgrade from an Office 365
            business plan to an Office 365 Enterprise plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Q. Does office 365 work when I am not connected to the Internet?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. If you need to upgrade. you can transition your account to a
            different plan. For example, you can upgrade from an Office 365
            business plan to an Office 365 Enterprise plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Q. What is the difference between monthly and annual commitment
            payments?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. If you need to upgrade. you can transition your account to a
            different plan. For example, you can upgrade from an Office 365
            business plan to an Office 365 Enterprise plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Q. Can I switch to other Office 365 plans?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. If you need to upgrade. you can transition your account to a
            different plan. For example, you can upgrade from an Office 365
            business plan to an Office 365 Enterprise plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Q. Can I mix and match other Office 365 plans?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. If you need to upgrade. you can transition your account to a
            different plan. For example, you can upgrade from an Office 365
            business plan to an Office 365 Enterprise plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Q. Can I cancel my subscription at any time?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. If you need to upgrade. you can transition your account to a
            different plan. For example, you can upgrade from an Office 365
            business plan to an Office 365 Enterprise plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Q. What happens to my data if I cancel my subscription?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. If you need to upgrade. you can transition your account to a
            different plan. For example, you can upgrade from an Office 365
            business plan to an Office 365 Enterprise plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
