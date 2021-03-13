import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

function HomeButton() {
  return (
    <>
      <Button href="/" variant="contained" color="primary">
         <HomeIcon fontSize="large"/>
      </Button>
    </>
  );
}

export default HomeButton;
