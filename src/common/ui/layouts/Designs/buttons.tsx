import styled from 'styled-components';

function Buttons(): JSX.Element {
  // const createRipple = (e) => {
  //   var circle = document.createElement('div');
  //   this.appendChild(circle);

  //   var d = Math.max(this.clientWidth, this.clientHeight);

  //   circle.style.width = circle.style.height = d + 'px';

  //   var rect = this.getBoundingClientRect();
  //   circle.style.left = e.clientX - rect.left - d / 2 + 'px';
  //   circle.style.top = e.clientY - rect.top - d / 2 + 'px';
  //   circle.classList.add('ripple');
  // }
  return (
    <Container>
      <div className='wrapper'>
        <div className='card'>
          <div className='tbutton_controller'>
            <form className='form'>
              <div className='form_item'>
                <div className='lbl_group'>Font Color :</div>
                <div className='form_group'>
                  <input className='form_input txtBox_01' type='text' />
                </div>
              </div>
              <div className='form_item'>
                <div className='lbl_group'>Button Color :</div>
                <div className='form_group'>
                  <input className='form_input txtBox_02' type='text' />
                </div>
              </div>
              <div className='form_item'>
                <div className='lbl_group'>FONT COLOR :</div>
                <div className='form_group'>
                  <div className='sider_cover'>
                    <input className='form_slider' type='range' min='0' max='100' value='0' />
                    <div className='form_slider_popup'>
                      <div className='form_slider_popup_val'>5</div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='topic'>BUTTON SHAPES</div>
          <div className='btn_group'>
            <div className='btn btn_shape btn_shape_1'>BTN01</div>
            <div className='btn btn_shape btn_shape_2'>BTN02</div>
            <div className='btn btn_shape btn_shape_3'>BTN03</div>
            <div className='btn btn_shape btn_shape_4'>BTN04</div>
            <div className='btn btn_shape btn_shape_5'>BTN05</div>
            <div className='btn btn_shape btn_shape_6'>BTN06</div>
            <div className='btn btn_shape btn_shape_7'>BTN07</div>
            <div className='btn btn_shape btn_shape_8'>BTN08</div>
            <div className='btn btn_shape btn_shape_9'>BTN09</div>
            <div className='btn btn_shape btn_shape_10'>BTN10</div>
            <div className='btn btn_shape btn_shape_11'>BTN11</div>
            <div className='btn btn_shape btn_shape_12'>BTN12</div>
            <div className='btn btn_shape btn_shape_13'>
              <div className='innerfix'>BTN13</div>
            </div>
            <div className='btn btn_shape btn_shape_14'>
              <div className='innerfix'>BTN14</div>
            </div>
            <div className='btn btn_shape btn_shape_15'>BTN15</div>
          </div>
          <hr />
          <div className='topic'>SPECIAL BUTTONS</div>
          <div className='btn_group'>
            <div className='btn btn_special btn_special-1'>
              <div className='innerfix'>BTN07</div>
            </div>
            <div className='btn btn_hover btn_special-2'>BTN02</div>
          </div>
          <hr />
          <div className='topic'>HOVER BUTTONS</div>
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
          <hr />
          <div className='topic'>ANIMATED BUTTONS</div>
          <div className='btn_group'>
            <div className='btn btn_full btn_full-1'>BTN01</div>
            <div className='btn btn_full btn_full-2'>BTN02</div>
            <div className='btn btn_full btn_full-3'>BTN03</div>
            <div className='btn btn_full btn_full-4'>BTN04</div>
            <div className='btn btn_full btn_full-5 rippleActive'>BTN05</div>
          </div>
          <hr />
          <div className='topic'>GROUP ANIMATIONS</div>
          <div className='btn_group'>
            <div className='btn btn_groupAnimation btn_groupAnimation_1 bouncy'>BTN01</div>
            <div className='btn btn_groupAnimation btn_groupAnimation_2 bouncy'>BTN02</div>
            <div className='btn btn_groupAnimation btn_groupAnimation_3 bouncy'>BTN03</div>
            <div className='btn btn_groupAnimation btn_groupAnimation_4 bouncy'>BTN04</div>
          </div>
          <hr />
          <div className='btn-like'>
            <div className='btn-like-cnt' />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Buttons;

const Container = styled.div`
  .btn {
    display: inline-block;
    padding: 0.4em 1.2em;
    margin: 0.2em 0.2em;
    font-weight: 300;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    font-family: 'Rajdhani';
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

  .btn_full {
    margin: 0.5em;
    &-1 {
      color: #fff;
      border: 0.1em solid #120b1e;
      background-color: #120b1e;
      position: relative;
      overflow: hidden;
      font-weight: 600;
      &:after {
        content: '';
        background: #f1f1f1;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -30px !important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s;
      }
      &:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s;
      }
      &:hover {
        color: #120b1e;
        background-color: transparent;
      }
    }
    &-2 {
      color: #fff;
      background-color: green;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 9px #092d0b;
      font-weight: 600;
      height: 40px;
      line-height: 30px;
      &:active {
        box-shadow: 0 5px #092d0b;
        transform: translateY(4px);
      }
      &:hover {
        color: #000;
        background-color: #06c71c;
      }
    }
    &-3 {
      color: #fff;
      background-color: teal;
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: inset 0 -0.9em 0 -0.35em rgba(0, 0, 0, 0.17);
      &:active {
        transform: translateY(-8px);
      }
    }
    &-4 {
      color: #fff;
      background-color: $red;
      border: 4px solid $orange;
      position: relative;
      overflow: hidden;
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6);
      &:after {
        content: '';
        background: #f1f1f1;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -100px !important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s;
        transform: rotate(45deg);
      }
      &:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s;
      }
      &:hover {
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6), 0 12px 16px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
    }
    &-5 {
      color: #fff;
      border: 0.1em solid #120b1e;
      background-color: $navy;
      position: relative;
      overflow: hidden;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
      & .ripple {
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.7);
        position: absolute;
        transform: scale(0);
        animation: ripple 0.6s linear;
      }
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

  .btn_hover
    {
    border: 0.1em solid #fff;
    // background-color: #120B1E;
    color: #fff;
    &_1{
      &:after
           { position: absolute;
            transition: .3s;
            content: '';
            width: 0;
            left: 0;
            bottom: 0;
            height: 0.1em;
            background-color: #fff}
        &:hover{&:after{ width: 100%;}}
    }
    &_2
       { &:after
           { position: absolute;
            transition: .3s;
            content: '';
            width: 0;
            left: 50%;
            bottom: 0;
            height: 0.1em;
            background-color: #fff}
        &:hover{
          &:after
              {  width: 100%;
                left: 0}}}
    &_3
       { &:after
        {    position: absolute;
            transition: .3s;
            content: '';
            width: 0;
            right: 0;
            bottom: 0;
            height: 0.1em;
            background-color: #fff}
        &:hover{ &::after{
                right: auto;
                left: 0;
                width: 100%}}}
    &_4
        {&:after
         {   position: absolute;
            transition: .3s;
            content: '';
            width: 100%;
            left: 0;
            top: 0;
            height: 0.1em;
            background-color: #fff}
        &:hover
      {      &:after
                {bottom: auto;
                top: 100%}}}
    &_5
       { &:after
            {position: absolute;
            transition: .3s;
            content: '';
            width: 100%;
            left: 0;
            bottom: 0;
            height: 0.1em;
            background-color: #fff}
        &:hover
            {&:after
               { bottom: 100%;
                top: auto}}}
    &_6
      {  &:after
            {position: absolute;
            transition: .3s;
            content: '';
            width: 100%;
            left: 0;
            top: -0.5em;
            height: 0.1em;
            background-color: #fff}
        &:hover
 {           &:after
                {top: 100%;
                bottom: auto}}}
    &_7
       { &:after
           { position: absolute;
            transition: .3s;
            content: '';
            width: 0;
            left: -12%;
            bottom: -12%;
            background-color: #fff;
            height: 140%}
        &:hover
           { &:after
            {    transform: skewX(15deg);
                width: 120%;
                right: auto}
            & > .innerfix
             {   position: relative;
                z-index: 1;
                color: #000;
                font-weight: 900}}}
    &_8
       { transition: .5s;
        &:hover
          {  border-radius: 100em / 100em}}
    &_9
     {   &:hover
            {transform: scale(1.1)}}
    &_10
{        &:after
            {position: absolute;
            transition: .3s;
            content: '';
            width: 0.1em;
            height: 100%;
            top: 0;
            background-color: #fff;
            left: -0.5em;
            transform: skewX(15deg)}
        &:hover
         {   &:after
               { left: 105%;
                right: auto}}
    &_11
     {
        &:after{
            position: absolute;
            transition: .3s;
            content: '';
            width: 0.1em;
            height: 100%;
            top: 0;
            background-color: #fff;
            left: -0.5em;}
        &:hover{
          &:after{
            left: 100%;
            right: auto;}
        }}
    &_12{&:hover{ box-shadow: inset 0px 0px 0px 3px #f7f7f7;}}
    &_13{
      &:hover{ box-shadow: 0px 0px 0px 3px #f7f7f7;}
    }
    &_14{
      &:hover{ border: 0.1em dashed #fff;}
    }
    &_15{
      &:hover{
        transform: translateY(-8px);
        box-shadow: 0 8px 6px 0 rgba(0,0,0,0.2);
      }
    }
    &_16{
        border: none;
        width: 100px;
        padding: 0.35em 1.2em;
        margin: 0.5em 0.5em;
        font-weight: 300;
        text-align: center;
        cursor: pointer;
        font-size: 15px;
        font-family: 'Montserrat';
        position: relative;
        width: 100%;
        max-width: 200px;
        height: 40px;
        background: #120B1E;
        transform: translate3d(0px, 0%, 0px);
        text-decoration: none;
        font-weight: 600;
        font-size: 18px;
        transition-delay: .6s;
        overflow: hidden;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            border-radius: 50% 50% 0 0;
            transform: translateY(100%) scaleY(.5);
            transition: all .6s ease;
        }
        &:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #120B1E;
            border-radius: 0;
            transform: translateY(0) scaleY(1);
            transition: all .6s ease;
            text-transform: uppercase;
        }
        & > span{
            position: absolute;
            z-index: 1;
            width: 100%;
            text-align: center;
            left: 0;
            top: 0;
            transition: transform .5s ease;
            &:first-child{
                color: #000;
                transform: translateY(40px);
            }
            &:last-child{
                color: #fff;
                transform: translateY(6px);
            }
        }
        &:hover{
            background: #fff;
            transition: background .2s linear;
            transition-delay: .6s;
            &:after{
                border-radius: 0 0 50% 50%;
                transform: translateY(-100%) scaleY(.5);
                transition-delay: 0;
            }
            &:before{
                border-radius: 0;
                transform: translateY(0) scaleY(1);
                transition-delay: 0;
            }
            & > span{
                &:first-child
                    {transform: translateY(6px)}
                &:last-child
                    {transform: translateY(-24px)}
            }
        }
      }

  }
`;
