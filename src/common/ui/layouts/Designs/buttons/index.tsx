import styled from 'styled-components';

import Animated from './animated';
import Shapes from './shapes';

function Buttons(): JSX.Element {
  return (
    <Container>
      <Topic>BUTTON SHAPES</Topic>
      <Shapes />
      <Divider />
      <Topic>SPECIAL BUTTONS</Topic>
      <div className='btn_group'>
        <div className='btn btn_special btn_special-1'>
          <div className='innerfix'>BTN07</div>
        </div>
        <div className='btn btn_hover btn_special-2'>BTN02</div>
      </div>
      <Divider />
      <Topic>HOVER BUTTONS</Topic>
      <div className='btn_group'>
        <div className='btn btn_hover btn_hover_1'>BTN01</div>
        <div className='btn btn_hover btn_hover_2'>BTN02</div>
        <div className='btn btn_hover btn_hover_3'>BTN03</div>
        <div className='btn btn_hover btn_hover_4'>BTN04</div>
        <div className='btn btn_hover btn_hover_5'>BTN05</div>
        <div className='btn btn_hover btn_hover_6'>BTN06</div>
        <div className='btn btn_hover btn_hover_7'>
          <div className='innerfix'>BTN07</div>
        </div>
        <div className='btn btn_hover btn_hover_8'>BTN08</div>
        <div className='btn btn_hover btn_hover_9'>BTN09</div>
        <div className='btn btn_hover btn_hover_10'>BTN10</div>
        <div className='btn btn_hover btn_hover_11'>BTN11</div>
        <div className='btn btn_hover btn_hover_12'>BTN12</div>
        <div className='btn btn_hover btn_hover_13'>BTN13</div>
        <div className='btn btn_hover btn_hover_14'>BTN14</div>
        <div className='btn btn_hover btn_hover_15'>BTN15</div>
        <div className='btn btn_hover btn_hover_16'>
          <span>OK</span>
          <span>BUTTON11</span>
        </div>
      </div>
      <Divider />
      <Topic>ANIMATED BUTTONS</Topic>
      <Animated />
      <Divider />
      <Topic>GROUP ANIMATIONS</Topic>
      <div className='btn_group'>
        <div className='btn btn_groupAnimation btn_groupAnimation_1 bouncy'>BTN01</div>
        <div className='btn btn_groupAnimation btn_groupAnimation_2 bouncy'>BTN02</div>
        <div className='btn btn_groupAnimation btn_groupAnimation_3 bouncy'>BTN03</div>
        <div className='btn btn_groupAnimation btn_groupAnimation_4 bouncy'>BTN04</div>
      </div>
      <Divider />
      <div className='btn-like'>
        <div className='btn-like-cnt' />
      </div>
    </Container>
  );
}

export default Buttons;

const Topic = styled.div`
  color: #000;
`;

const Divider = styled.div`
  border-bottom: 1px solid #000;
  margin: 8px 0;
`;

const Container = styled.div`
  padding: 32px;
  /* background-image: linear-gradient(135deg, #0042d9 0%, #0093ff 60%, #0078ff 100%); */

  .btn {
    display: inline-block;
    padding: 0.4em 1.2em;
    margin: 0.2em 0.2em;
    font-weight: 300;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    font-size: 1.2rem;
    text-transform: uppercase;
    overflow: hidden;
    position: relative;
    &_group {
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .btn_groupAnimation {
    &_1 {
      color: #fff;
      border: 0.1em solid #fff;
      animation-delay: 0.07s;
    }
    &_2 {
      color: #fff;
      border: 0.1em solid #fff;
      animation-delay: 0.07s;
    }
    &_3 {
      color: #fff;
      border: 0.1em solid #fff;
      animation-delay: 0.14s;
    }
    &_4 {
      color: #fff;
      border: 0.1em solid #fff;
      animation-delay: 0.21s;
    }
  }

  .btn_hover {
    border: 0.1em solid #fff;
    // background-color: #120B1E;
    color: #fff;
    &_1 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 0;
        left: 0;
        bottom: 0;
        height: 0.1em;
        background-color: #fff;
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
    &_2 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 0;
        left: 50%;
        bottom: 0;
        height: 0.1em;
        background-color: #fff;
      }
      &:hover {
        &:after {
          width: 100%;
          left: 0;
        }
      }
    }
    &_3 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 0;
        right: 0;
        bottom: 0;
        height: 0.1em;
        background-color: #fff;
      }
      &:hover {
        &::after {
          right: auto;
          left: 0;
          width: 100%;
        }
      }
    }
    &_4 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 100%;
        left: 0;
        top: 0;
        height: 0.1em;
        background-color: #fff;
      }
      &:hover {
        &:after {
          bottom: auto;
          top: 100%;
        }
      }
    }
    &_5 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 100%;
        left: 0;
        bottom: 0;
        height: 0.1em;
        background-color: #fff;
      }
      &:hover {
        &:after {
          bottom: 100%;
          top: auto;
        }
      }
    }
    &_6 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 100%;
        left: 0;
        top: -0.5em;
        height: 0.1em;
        background-color: #fff;
      }
      &:hover {
        &:after {
          top: 100%;
          bottom: auto;
        }
      }
    }
    &_7 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 0;
        left: -12%;
        bottom: -12%;
        background-color: #fff;
        height: 140%;
      }
      &:hover {
        &:after {
          transform: skewX(15deg);
          width: 120%;
          right: auto;
        }
        & > .innerfix {
          position: relative;
          z-index: 1;
          color: #000;
          font-weight: 900;
        }
      }
    }
    &_8 {
      transition: 0.5s;
      &:hover {
        border-radius: 100em / 100em;
      }
    }
    &_9 {
      &:hover {
        transform: scale(1.1);
      }
    }
    &_10 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 0.1em;
        height: 100%;
        top: 0;
        background-color: #fff;
        left: -0.5em;
        transform: skewX(15deg);
      }
      &:hover {
        &:after {
          left: 105%;
          right: auto;
        }
      }
    }
    &_11 {
      &:after {
        position: absolute;
        transition: 0.3s;
        content: '';
        width: 0.1em;
        height: 100%;
        top: 0;
        background-color: #fff;
        left: -0.5em;
      }
      &:hover {
        &:after {
          left: 100%;
          right: auto;
        }
      }
    }
    &_12 {
      &:hover {
        box-shadow: inset 0px 0px 0px 3px #f7f7f7;
      }
    }
    &_13 {
      &:hover {
        box-shadow: 0px 0px 0px 3px #f7f7f7;
      }
    }
    &_14 {
      &:hover {
        border: 0.1em dashed #fff;
      }
    }
    &_15 {
      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.2);
      }
    }
    &_16 {
      border: none;
      width: 100px;
      padding: 0.35em 1.2em;
      margin: 0.5em 0.5em;
      font-weight: 300;
      text-align: center;
      cursor: pointer;
      font-size: 15px;
      position: relative;
      width: 100%;
      max-width: 200px;
      height: 40px;
      background: #120b1e;
      transform: translate3d(0px, 0%, 0px);
      text-decoration: none;
      font-weight: 600;
      font-size: 18px;
      transition-delay: 0.6s;
      overflow: hidden;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 50% 50% 0 0;
        transform: translateY(100%) scaleY(0.5);
        transition: all 0.6s ease;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #120b1e;
        border-radius: 0;
        transform: translateY(0) scaleY(1);
        transition: all 0.6s ease;
        text-transform: uppercase;
      }
      & > span {
        position: absolute;
        z-index: 1;
        width: 100%;
        text-align: center;
        left: 0;
        top: 0;
        transition: transform 0.5s ease;
        &:first-child {
          color: #000;
          transform: translateY(40px);
        }
        &:last-child {
          color: #fff;
          transform: translateY(6px);
        }
      }
      &:hover {
        background: #fff;
        transition: background 0.2s linear;
        transition-delay: 0.6s;
        &:after {
          border-radius: 0 0 50% 50%;
          transform: translateY(-100%) scaleY(0.5);
          transition-delay: 0;
        }
        &:before {
          border-radius: 0;
          transform: translateY(0) scaleY(1);
          transition-delay: 0;
        }
        & > span {
          &:first-child {
            transform: translateY(6px);
          }
          &:last-child {
            transform: translateY(-24px);
          }
        }
      }
    }
  }

  .btn_special {
    border: 0.1em solid #fff;
    background-color: #120b1e;
    color: #fff;
    &-1 {
      position: relative;
      padding: 1rem 0;
      width: 15rem;
      border-radius: 3.75rem;
      line-height: 2rem;
      font-size: 1.5rem;
      font-weight: 600;
      border: 1px solid #012880;
      background-image: linear-gradient(-180deg, #ff89d6 0%, #c01f9e 100%);
      box-shadow: 0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5), 0 -0.25rem 1.5rem rgba(110, 15, 155, 1) inset,
        0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset, 0 0.25rem 0.5rem 0 rgba(180, 70, 207, 1) inset;
      & > .innerfix {
        // color: transparent
        color: #fff;
        text-align: center;
        background-image: linear-gradient(0deg, #ee82da 0%, #fefafd 100%);
        -webkit-background-clip: text;
        background-clip: text;
        filter: drop-shadow(0 2px 2px hsla(290, 100%, 20%, 1));
      }
      &::before {
        content: '';
        display: block;
        height: 0.25rem;
        position: absolute;
        top: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 7.5rem);
        background: #fff;
        border-radius: 100%;
        opacity: 0.7;
        background-image: linear-gradient(
          -270deg,
          rgba(255, 255, 255, 0) 0%,
          #ffffff 20%,
          #ffffff 80%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      &::after {
        content: '';
        display: block;
        height: 0.25rem;
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 7.5rem);
        background: #fff;
        border-radius: 100%;
        filter: blur(1px);
        opacity: 0.05;
        background-image: linear-gradient(
          -270deg,
          rgba(255, 255, 255, 0) 0%,
          #ffffff 20%,
          #ffffff 80%,
          rgba(255, 255, 255, 0) 100%
        );
      }

      &-2 {
        color: #000;
        padding: 0.7em 1.7em;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.2em;
        background-color: #ccc;
        position: relative;
        overflow: hidden;
        box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17), inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
          inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
      }
    }
  }

  .wrapper {
    max-width: $xxxlarge-min;
    margin: 0 auto;
  }

  .form {
    width: 500px;
    margin: 0 auto;
    display: none;
  }

  .form_group {
    width: 200px;
    margin: 10px 0;
  }
  .form_input {
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }

  .sider_cover {
    position: relative;
  }

  .form_slider_popup {
    height: 0;
    width: 0;
    background-color: #4285f4;
    border-radius: 50% 50% 0 50%;
    transform: rotate(45deg);
    position: absolute;
    bottom: calc(50% + 16px);
    left: 0;
    color: #fff;
    text-align: center;
    transition: width 0.2s, height 0.2s;
    overflow: hidden;
    line-height: 30px;
    &_val {
      transform: rotate(-45deg);
    }
  }

  .form_slider {
    position: relative;
    z-index: 2;
    cursor: pointer;
    border: 1px solid #d3d3d3;
    width: 100%;
    height: 8px;
    margin: 15px 0;
    padding: 0;
    appearance: none;
    border-radius: 10px;
    background-color: inherit;
    outline: none;
    // opacity: 0.7
    // transition: opacity .2s
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
    // &:hover
    //     opacity: 1
    &::-webkit-slider-thumb {
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 100%;
      background-color: #4285f4;
      border: 2px solid #ccc;
      outline: none;
      cursor: pointer;
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6);
    }
    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 100%;
      background-color: #4285f4;
      border: 2px solid #ccc;
      outline: none;
      cursor: pointer;
    }
    &:active {
      &::-webkit-slider-thumb {
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6), 0 0 0 3px #fff, 0 0 0 4px #ccc;
      }
      &::-moz-range-thumb {
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6), 0 0 0 3px #fff, 0 0 0 4px #ccc;
      }
    }
  }

  .form_item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .topic {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    margin-top: 16px;
  }
`;
