import styled from 'styled-components'

export const FormStyle = styled.form`
      width: 400px;
      height: 500px;
      background-color: rgba(0,0,0,0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border-radius: 20px;

      h1{
            color: white;
            font-weight: 300;
      }

      div{
            width: 70%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            padding: 0 10px 0 10px;
            border-radius: 8px;
      }

      img{
            height: 26px;
      }

      input{
            border: none;
            padding: 10px 15px;
            width: 100%;
      }

      input:focus{
            outline: 0;
            box-shadow: 0;
      }

      button{
            background-image: linear-gradient(to top, #FFBC1D, #E28141);
            width: 75%;
            margin: 0;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
      }

      .link{
            text-decoration: none;
            color: white;
      }

      .link:hover{
            font-weight: bold;
            text-decoration: underline;
      }

      span{
            color: red;
            font-size: 12px;
            align-self: flex-start;
            margin-left: 50px;
            font-weight: bold;
      }
`