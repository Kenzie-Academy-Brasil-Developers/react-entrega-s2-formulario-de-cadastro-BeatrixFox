import { Button } from "@material-ui/core";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const Success = () => {
  const useStyles = makeStyles((theme) => ({
    backbase: {
      width: "500px",
      display: "flex",
      flexDirection: "column",
      height: "150px",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "25px",
      textAlign: "center",
    },
    imagem: {
      width: "300px",
      margin: "auto",
      borderRadius: "15px 15px 0px 0px",
    },
    text: {
      background: "#4744f1",
    },
  }));

  const { id } = useParams();

  const classes = useStyles();
  return (
    <div className={classes.backbase}>
      <h2>SUCCESS {id}</h2>
      <img
        className={classes.imagem}
        src="https://i.imgur.com/221z7o9.gif"
        alt="congratulations"
      />
      <Button variant="contained" color="primary" size="small" type="submit">
        {
          <Link to="/" className={classes.link}>
            VOLTAR
          </Link>
        }
      </Button>
    </div>
  );
};

export default Success;
