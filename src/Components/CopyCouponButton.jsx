import styled from 'styled-components';
import { Files } from 'lucide-react';


function CopyCouponButton({couponCode}) {
  return (
   <StyledWrapper>
      <div className="centralize">
        <div>
          <button>
            <span>
              { couponCode }</span>
            <span>Copied</span>
          </button>
          <div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  button {
    background-color: #f2f7fa;
    width: 100px;
    height: 33px;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition-duration: 700ms;
  }

  button span:first-child {
    color: #0e418f;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  button span:last-child {
    position: absolute;
    color: #b5ccf3;
    opacity: 0;
    transform: translateY(100%) translateX(-50%);
    height: 14px;
    line-height: 13px;
  }

  button:focus {
    background-color: #0e418f;
    width: 120px;
    height: 40px;
    transition-delay: 100ms;
    transition-duration: 500ms;
  }

  button:focus span:first-child {
    color: #b5ccf3;
    transform: translateX(-50%) translateY(-150%);
    opacity: 0;
    transition-duration: 500ms;
  }

  button:focus span:last-child {
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
    transition-delay: 300ms;
    transition-duration: 500ms;
  }

  button:focus:end {
    background-color: #ffffff;
    width: 120px;
    height: 40px;
    transition-duration: 900ms;
  }

  .centralize {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .description {
    margin-top: 10px;
    color: #b5ccf3;
  }`;

export default CopyCouponButton