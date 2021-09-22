import { Container, makeStyles } from "@material-ui/core";
import Form from "../../components/Form/Form";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      margin: "50px",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Form />
      </Container>
    </>
  );
};

export default Home;
