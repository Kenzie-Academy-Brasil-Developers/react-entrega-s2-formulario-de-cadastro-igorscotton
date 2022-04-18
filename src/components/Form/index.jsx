import { FormStyle } from "./style.jsx";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";


const Form = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo Obrigatório*")
      .min(8, "Seu usuário precisa ter pelo menos 8 caracteres"),
    name: yup
      .string()
      .required("Campo Obrigatório*")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Seu nome requer somente letras")
      .min(10, "Seu nome precisa ter pelo menos 10 caracteres"),
    password: yup
      .string()
      .required("Campo Obrigatório*")
      .min(8, "Sua senha precisa ter pelo menos 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Senha precisa ter pelo menos 8 caracteres e requer pelo menos uma letra minuscula, uma letra maiscula, um numero e um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .required("Campo Obrigatório*")
      .oneOf([yup.ref("password")]),
    email: yup.string().required("Campo Obrigatório*").email("E-mail inválido"),
    confirmEmail: yup
      .string()
      .required("Campo Obrigatório*")
      .email("E-mail inválido")
      .oneOf([yup.ref("email")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory()

  const onLogin = (data) => {
        const {username} = data
        console.log(data)    
        history.push(`/home/${username}`)
  }

  return (
    <>
      <FormStyle onSubmit={handleSubmit(onLogin)}>
        <h1>Registration</h1>
        <div>
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-rouge.png"
            alt=""
          />
          <input type="text" placeholder="Username" {...register("username")} />
        </div>
        <span>{errors.username?.message}</span>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkunqFItQcyb4dR-yh0nGMmDyvDzwipmHG_Q&usqp=CAU"
            alt=""
          />
          <input type="text" placeholder="Name" {...register("name")} />
        </div>
        <span>{errors.name?.message}</span>
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
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlJR-KrqBhtEe9hGLcMMakps8SGCRZc0LJgw&usqp=CAU"
            alt=""
          />
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
        </div>
        <span>{errors.confirmPassword?.message}</span>
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///+rDROkAACpAADIf4Ds1tbmycmjAAD69PS/Y2SrCRCqAAmqAATXpqfjwsP79/fOj5D37u7TnJ24TE6yNTjq0tLDb3Dbr7Dw4OCtHyL05+e7Vli9XV/dtLTKhIXBamzRlpe1Q0XGeXqyNjm8WVrgu7y2R0mtGx+vKCu0PT+tHiHZqaqwLC/DbnDwhDuhAAAQEUlEQVR4nOVdaWOyuhKGREUBxR33ulRbr77//+9dUCuTPYSwnPb5dE5flTwkmS0zE8cpHaP2IB7vjpv1deq7Kfzpdb057sbxoD0q//Glor0d9pYIIZwiDPwnwYSiH4SPvyX/tuwNt+26B2qCRXy8P6j9sBLBfxC9H+NF3UPOgfZ4k5ILFNwggpTmZvxfmMzoPMcJuxzkMiQs8fwc1U1Bhm488dTrUoZkzXqTuFs3ET6ilF5YgN0PwpRk82ay84Gs0PshiT46dVOCiMYuMtt6YmDkjpsykYs5KrT3RPAxmjdBhcwm1qcvA0aTWc38OqcS+T05nurckJ0p0lTrfoBpBJorO0DTujguLhr8nkYZwtPPeWs47j8xHrbmn1OMtMy6lOOljv3Y/UAK7eCn3NzNMJ6tBL+xmsXDjZvyVNAM0UflVsBevv9Sdu68P9OR99GsP3dVLLG3L5sSgY4v45foa7d1zuf6jc4tV24zYLe67Rj1kPh9J4bl+iZalnKsbmtPYrT7qFeRCbAVL9AAo/W2yDCi7RqJ3S6MttZYSMawFk1gYoNcb8XfcnS7Cm0kH61Ln8aBaBkl07ezJdMXO+FEYjyw9BABjoIJDNF3bPVB8bdAGfnoaPVBJFZL/gRidLAv5zoHwX7HSzNBpoEz34YJ0bqc+Ep7zZ/HAJ1LeZ7TQvzHXcqLH7UP/JeKdmU8bcJbMz66l6uHO3fuzscT609auTyCGJevoLZc6Y1dy+HyGW+1BF4pi4XBzuM9HFn1jc8eZ6mgaVU+zWLKEQG+Z1HejDkPCFHf3gOU6POkqr0RDDkE0bXaY6PRlTeIoZ0f37G/HaCxnd/OgTFHqNrRGhw1iN06ogptjlOKWsV/l0MQbYr/rBE2nLEUpsguUd+rfoX+YMzK9KILlRUylvVQTnD0cjFxw6oJvKz36H3EujdFlMaZJWjfHswL1j42V/0zj3ldHzbHaogP5r17hhtnxSggG7LZAhjx7iOzrePSm9qWCVEYjPwLXJOfYdZ7pYaoHH2aool8aDEEb/ZHaowbQzG3WmTEaINmMAUzi3ljNyvmB5qyB3/A7EWULwK3pKRMQ6QoBC1Rg2Webx+pTYiboAdpfNCDzBEqHlCvpwGWDA+0tEfaAf+IOhjJN/8VgtpLPtY9tlmT78bUYigfI8rqwmu9722pNWpq9VUA2nLWO1+MqBdTQ0hGH5R75yOdddoj1yiuK2Shhw012p76Kx3qrfjlj7IQKP8AqY9RfGqNNj0xuU3NiNLL2JOz3uhN+AS1FfFe/vEu+fHwWskgi+FKBvw9efYUZQk1VhNCjKhJlFqYC/LDDfOYRKA8KSQLyF+ICQ+mlQ2yGKaEPA0v4k9SmsJrQg6yDhakaSOJWZPvIn9goDbsCPEhXnvkFPq4yjEWBOkNCdX+iZjCSrLkbIH0FoIT/1Mz8lP3asdYEHdydvg7kXSZNQy8JoHcYXxHkdSF4aHqMRbEgVB0XJ04J6ew6RY3DdIC50WlIo1pdto9D9UOL+RuIDL2wnGFxxpT2DYsnbQM3+MF1ahJZJ0iF2oU/i7sSBLYqwX3TJTYiayfSMoiviD9bMQMpvC/uBMAP8JQINym4JtH0OHml9YD7i76hjqRdqIoOcM/SGs6w5gUJZJ/9BHn6yxDnylHKwaZ/GQOM7mSkJATmEytn8BdKnIqqJjP/dgrhBaBYzwQYzanz8K4DAkXIyQOW7qEgyVykunzmjLLAkgwR758hqRZRgRsiEUqssx/GL6XAq4oAzOavEf+k7wnMLkI74hYpuQiFR3YoxfB9+sIvCrM84X3fiB2X3MhYHgTLdOIXKSi2D96/TgonKkg5j/MYtR4snoPgvtZUiV4GZEtpC4+onr9eMeJs/w53CutgOWB7r/sdaLLO6ArcgwI4xRnls8/4u9C3/7N0DlPs4WzLDNetcoe5HvpwBQMybmav/9ORDk84QFVxtCJ4GYsL9zRyeoQXnnJCobEfssiTYRVHorP7AFDp7sDm1HjSMsI82xg6N9zNygYkjLzrfYIx0koSUmGiQTIZh7/K2MzdkFY5Z0JrGJISFP8E7MnThkliTckQ2cGlhC2X0w++AYb4e0QqhgSqU5vSQ//KDt/oxg60Skbg/Ujjhi8v6/s/akYkn7uy8AmbB0sSX6iGTqjbDP66LM4qwxRtgV9IlddyZDIOHxtxFigQxgwDB2nDzbjpz21McqciZCMRygZngk2T8ONSPGSnRhyGBImlbXTxvgrW6FU2w8lQ+I08eUcwHCx9BicxzAxIwTryRxzoIjo8SgZEhvxFbgnSM+F3xQxjIbArjoWL5ef9YAZw+R8qhkScd+HqCH0PZaJRD7DVJ8Ch6ooxUUWsQw5jqqaYZ8RNYQpJy2IETEkBINXLFgO6n7wlTMYNUPigOlhZA8JhrIpEDJ0VlkNhK9K95Dif9kK5dd2qBkSHhROlznM8pLn24gZphm7mWbcma7U2TUjKHhRaoaEqHmYzEv4B6lDK2OY6KFMwn+bqY04K4XFnsB41GAIjdBH5JeZVCGkDJ2uz7MjcwDK5A/RO9JgOKSEKakhpe075AydLrC0ZMYfHxEwtCV6VYNhTFkwhLKQ1xYqGMJyTB8d861U6Ot+S1xqDYaEME0+ONB0nRwNhs4AOlQqUhB7pBmj1GBIOlADak6lw1AzdEZTsNa0O9asesCZl1lVWgwdat9BB1+RQqPB0Fkd82tG0PZGKaN0GMKwU+KZwFi/IpFNhyFRAKlXkAm34F0VDtFhCFO78I7wnbDci9Vj6LS9TK0hdXQDhOzRWimedBjCk9zEf9qA4JTUs9Bm6CwO2aoLFJtxMQFmjIbzpcMQehfhxpnAKZVrMV2GZHRDOuzbF9iCOnUdOgxhICNYO1e4LeUleNoMCftEVsgSg4+dtKxZHYbQqPGvzpQUPDLkYJgopSy6IcxTvYAtqNk0WIchoR5ODnEwLA8J5mHoLLJDEv9rz/vECoR4fO4nONBhSPjAvgP+xyrDxC2DM8QbB1ih2m5zboZuiQydPvDX6fwV4twjR5Zgsxg6i+yECruEpGwDJeHl6UfYMIZOewM0I/AY2pkc8vM1Xm0aQ8dZvw0KoBmP4JQvZzMYA4ZlydIniFI//KyDi8gMx3xnOgaytCR9+MCIatQXutu0yTlVhIvzNM810Ifl2DQPxC7dZC3At5jtEoRzNAswsGnKsEufmMDjh/eEgf98PzlH6ykDu7QE3+IBYLH4qMW2zAtwK3NBXHTVnEYD38K+f/jAPrNYgqDldA7k5kvW7zmxS7MPhZovzsA/tO7jP3AAJtlD13fvBMVXnGoPFi17zmTKkPLxLcdpHmh/gxX6U4aaxf1B4B84y8xhqDFDKk5jN9b2wB4E+EGMufNjyGDYwAIkyen0BzaItVmNlz7wBVboAbqG7cvjWZhsrBx/AYHTUsV1DOKlNmPeKQaZvmMPyC4IY0SXeI5AdA7fFdNoEPO2d27xwBzIUJ9Nr5rtxxyHf5+9lQDtZT9vcm5h7ewpRQRlqEYk8QcDIGmRNIXM4OzJ1vlhijMIXudrAUo4xEtJVzGT80M7Z8AphiCx9jvvCWIMVKOkdb7JGbCNc/wUIF3Bx4f8B91tqBrXovCcyTm+hVyMFP2spZFvWKcwBHEdXyARTHIxiufTpOgBcWicwd8BywDxA8km+TRFc6JSLC5ghRUokV5NgGo88NaTSU5U0by2BDeQpFCwOR+IQIa8NnhGeW2FchMfPwAk/VfRtlngOCDRG8w/G+UmFskvddLL14C2ljTd0MYGxgbo12mUX2qeI5xiiEG80E4q9Ba6G5Rpq2R4ZAWNeZ53+kD4wj1bGbQRuA6JyukwyvM2zdVP0PkGK1Sz4Z0WdjBMBdNrzHL1zeot0i9Cn8Bu5QwwcV0EKlbM6i1MamYSjI5AefnWq5++4Up9LyyzmhmDuqcEMfR4yuhvOgYyzPs5IjareyLNAJ3aNScNLFkw0+SYQT30+RRjhrVrpA5R1x8SZ9iJli+tWBZK6ldFmZyhqP4wXw1pWn8Io0dltpM6hzCg2lUxFNaQ5qoDThjCuIpRsqw+2nCxXNoKhsI64Fy13LgPMgnViWiFAa1edJbXAYtruXPV44MDzkquP52Boyv0Mspy1+Ob9FSQpQLZxeIfWDSuhKGkp4JRXwwrjoQexvS9ZPn7Yhj0NvGqbBu5oC5f4TIk5AxzBpO7Pw0uXcSQIO9q4DJcyvrTaPUYIuewqsZX3P4tPIYqChp9omhJUyN4DBV9onR6fene914BOF6ssteXRr825tqS2sAbnrJfm0bPvS73KtIawCsdU/fc0+qbeECWe0MZAQWcczuNvolavS87rfpx5B3j6vS+/AP9S39/D9o/0Ef49/eC/gP9vH9/T/Y/0Ff/99+NQAVs3FAkdpuEU677Leg7Sgq1gKgGuUf86++ZoTWG2f2XFSL/XUG//76nP3Bn1++/d+0P3J33B+4/ZO+wrC5+nwcXKmykf4flH7iH9A/cJfsH7gP+/Xc604GB9Cd+2b3cf+BudcambdBeZPagoX+wYi5daYhEpaWoudVFW30l5a/lxQdzjmluOTMCtQnWDW3JCO7V0cSYpbis1wwfLRmCxSQgs6fdIGebB7uYsdX8ReXfjqGYo3jeOkD/1jfBwmcPjOBKfrSuwMaGMxYL4p1DEbt1RODaLnvIbkd/sQtVWctaBvbsFrSW28qKm7S1U7UydXTiZEnYM7JYpZHWXVVppvbZxhp2M+vOrAxL3uC0qvPFxZTziv0iip4FRw+lGdDVnBLv6NzLx8Nt6+UVR5Cl6cLlpzNsuddKllEgwE2I8tG93EutOnfutZJm/qAKHK3xWC2H8pRj+8DbHeVVQJz5jwvRuhyO7TVPgur1QDHEijXsn2sGHeyv1c6BufXw9bRlmenJR8FlqyGStXowwG3Jnz9pwwUrGIguzA0w2tnSj4sdwtwNkUrvcmt0EkRr0Z25PkanW/F7n7q3E8KiR6B18UtQ1NgK9sdzItfbImOItmvh9KX7vaJswqgnufoYY29yMxMFq9vEk9wa7aM87QcLouPL8qFDjNzjOZ/NMTofXYT5wuX16vK1AS2MvSfN+fZxwnLen+m89GjWnyfsRHvvxa+SIjIC3Q+BOCdYInczjGeiRbuaxcONi1TsUmX0Yf/qOjUWF76NQ9N8XGU8Xc9bw3H/ifGwNV9PH5UwSnJuasNc6soD7Uw1OD6JBkzGvW59SoCmdcYvOyex6rCCRMdWK2BYzCYlckzUaxOSeRZzoQ1SCImNdGxKHnY0dq1PZKJtNFvtV4TOh1xf50NiM3zUvf1YRHFic9kgGSZ2X5427VWim5IstCf91KyN69Du2ojOc4wk5rMMiW2A5+dGbT4BFv1Naq1oGgMPBKnls+k3RXTqYBEf71pG2dOsux/j/xK7N9rbYe/7aX1iHAbvJHnfD8JnrSRC373htunZ8iqM2oN4vDtu1tfTk6J/uq43x904HrQrOMD6PxvM4GdRBhXSAAAAAElFTkSuQmCC"
            alt=""
          />
          <input type="email" placeholder="E-mail" {...register("email")} />
        </div>
        <span>{errors.email?.message}</span>
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <input
            type="email"
            placeholder="Confirm E-mail"
            {...register("confirmEmail")}
          />
        </div>
        <span>{errors.confirmEmail?.message}</span>
        <button type="submit">Register</button>
        <Link className="link" to="/login">
          Já tem uma conta?
        </Link>
      </FormStyle>
    </>
  );
};

export default Form;
