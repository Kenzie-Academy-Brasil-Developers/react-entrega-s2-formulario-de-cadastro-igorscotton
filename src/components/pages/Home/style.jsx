import styled from 'styled-components'

export const ContainerSection = styled.section`
      @import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');
      display: flex;
      flex-direction: column;
      background-color: rgba(0,0,0,0.2);
      border-radius: 20px;
      padding: 20px;

      p{
            font-family:'Square Peg', cursive;
            font-weight: 400;
            font-size: 100px;
            color: white;
      }

      button{
            background-image: linear-gradient(to top, #FFBC1D, #E28141);
            width: 100%;
            margin: 0;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
      }

      @media screen and (max-width: 760px){
            p{
                  font-size: 90px;
            }
      }

      @media screen and (max-width: 500px){
            p{
                  font-size: 80px;
            }
      }

      @media screen and (max-width: 400px){
            p{
                  font-size: 50px;
            }
      }
`
