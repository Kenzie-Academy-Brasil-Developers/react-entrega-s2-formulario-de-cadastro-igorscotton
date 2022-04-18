import { FormStyle } from "../../Form/style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório*"),
    password: yup.string().required("Campo Obrigatório*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onLogin = (data) => {
    const { username } = data;
    console.log(data);
    history.push(`/home/${username}`);
  };
  return (
      <>
        <FormStyle onSubmit={handleSubmit(onLogin)}>
          <h1>Login</h1>
          <div>
            <img
              src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png"
              alt=""
            />
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
          </div>
          <span>{errors.username?.message}</span>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJR-KrqBhtEe9hGLcMMakps8SGCRZc0LJgw&usqp=CAU"
              alt=""
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
          <span>{errors.password?.message}</span>  
          <button type="submit">Login</button>
          <Link className="link" to="/">
            Ainda não possui uma conta?
          </Link>
        </FormStyle>
      </>      
  );
};

export default Login;
