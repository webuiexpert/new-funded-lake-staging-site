import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


function SecondaryButton({BtnText, BtnLink}) {
  return (
     <StyledWrapper>
        <NavLink to={BtnLink}>
              <button className="Btn text-white uppercase text-sm font-semibold">
       {BtnText}
      </button>
        </NavLink>
    
    </StyledWrapper>
  )
}


const StyledWrapper = styled.div`
  .Btn {
    width: 140px;
    height: 40px;
    border: 1px solid #0047bc;
    border-radius: 8px;
    background: linear-gradient(
      to right,
      #032070,
      #0050ff,
      #032070,
      #032070,
      #0050ff,
      #032070
    );
    background-size: 250%;
    background-position: left;
    color: #ffffff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 1s;
    overflow: hidden;
  }

  .Btn::before {
    position: absolute;
    content: "";
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgb #00002833 (0 0 40 / 20%);
    background-size: 200%;
  }

  .Btn:hover {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:hover::before {
    background-position: right;
    transition-duration: 1s;
  }

  .Btn:active {
    transform: scale(0.95);
  }
`;

export default SecondaryButton