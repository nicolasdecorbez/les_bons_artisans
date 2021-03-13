import React from "react";

import "../assets/css/DevrInformations.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function DevrInformations() {
  return (
    <header className="DI-bar">
      <div className="DI-name">
        <p>Nicolas DECORBEZ</p>
      </div>

      <ButtonGroup variant="contained"
                   aria-label="text primary button group"
                   color="primary">
         <Button href="https://github.com/nicolasdecorbez">
            <GitHubIcon fontSize="large"/>
         </Button>
         <Button href="mailto:decorbezpro@gmail.com">
            <MailIcon fontSize="large"/>
         </Button>
         <Button href="https://www.linkedin.com/in/nicolas-decorbez/">
            <LinkedInIcon fontSize="large"/>
         </Button>
      </ButtonGroup>
    </header>
  );
}

export default DevrInformations;
