import '../assets/css/Navigation.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Navigation() {
  return (
    <div className="Nav-but">
      <ButtonGroup variant="contained"
                   aria-label="text primary button group"
                   orientation="vertical"
                   color="primary"
                   style={{ width: 200 }}>

         <Button size="large" href="/list">
            LIST
         </Button>
         <Button size="large" href="/create">
            CREATE
         </Button>
         <Button size="large" href="/modify">
            MODIFY
         </Button>
         <Button size="large" href="/delete" color="secondary">
            DELETE
         </Button>
      </ButtonGroup>
    </div>
  );
}

export default Navigation;
