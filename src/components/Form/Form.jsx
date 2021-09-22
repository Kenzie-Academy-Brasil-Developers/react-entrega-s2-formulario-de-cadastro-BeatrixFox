import {
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Form = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      background: "rgb(34,121,176)",
      background:
        "linear-gradient(311deg, rgba(34,121,176,1) 0%, rgba(79,175,182,1) 47%, rgba(0,211,255,1) 100%)",
    },
  }));

  const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  const passwordRegex = /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/;

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(nameRegex, "Somente letras"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(passwordRegex, "Senha invalida"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (data) => {
    history.push(`/success/${data.name}`);
  };

  const classes = useStyles();

  return (
    <Container className={classes.styleForm} maxWidth="xs">
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <TextField
            label="Nome"
            margin="normal"
            variant="outlined"
            size="medium"
            color="primary"
            {...register("name")}
            error={errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Email"
            margin="normal"
            variant="outlined"
            size="medium"
            color="primary"
            {...register("email")}
            error={errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Senha"
            margin="normal"
            variant="outlined"
            size="medium"
            color="primary"
            type="password"
            {...register("password")}
            error={errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            label="Confirmar senha"
            margin="normal"
            variant="outlined"
            size="medium"
            color="primary"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />

          <Button
            variant="contained"
            color="secondary"
            size="medium"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
