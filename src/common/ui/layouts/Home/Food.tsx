import ScrollRef from '@components/ScrollRef';
import { colors } from '@theme/baseTheme';
import React from 'react';
import styled from 'styled-components';

function Food(): JSX.Element {
  return (
    <Container>
      <ScrollRef name='Restaurant' />
      <div className='food-container'>
        <div className='food-head'>OUR MENU</div>
        <div className='food-subhead'>Restaurant & Bar</div>
        <div className='food-body'>
          <div className='food-body-topic'>
            <div className='food-body-topic_menu'>
              <img className='food-body-topic_menu_img' src='/images/home/menu.svg' alt='s' />
              Main
            </div>
            <div className='food-body-topic_menu'>
              <img className='food-body-topic_menu_img' src='/images/home/fruits.svg' alt='s' />
              Dessert
            </div>
            <div className='food-body-topic_menu food_sp_r_margin_topic'>
              <img className='food-body-topic_menu_img' src='/images/home/beverage.svg' alt='s' />
              Drinks
            </div>
          </div>
          <div className='food-body-item-cover'>
            <div className='food-body-item-subcover'>
              <div className='food-body-item'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Grilled Beef with potatoes
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
              <div className='food-body-item food_sp_r_margin_body'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Fruit Vanilla Ice Cream
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
            </div>
            <div className='food-body-item-subcover'>
              <div className='food-body-item'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Asian Hoisin Pork
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
              <div className='food-body-item'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Spicy Fried Rice & Bacon
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
            </div>
            <div className='food-body-item-subcover'>
              <div className='food-body-item'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Grilled Beef with potatoes
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
              <div className='food-body-item food_sp_r_margin_body'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Fruit Vanilla Ice Cream
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
            </div>
            <div className='food-body-item-subcover'>
              <div className='food-body-item'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Asian Hoisin Pork
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
              <div className='food-body-item'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Spicy Fried Rice & Bacon
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
            </div>
            <div className='food-body-item-subcover'>
              <div className='food-body-item'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Grilled Beef with potatoes
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
              <div className='food-body-item food_sp_r_margin_body'>
                <div className='food-body-item_left'>
                  <img className='food-body-item_left_img' src='/images/home/food_item.jpg' alt='s' />
                </div>
                <div className='food-body-item_middle'>
                  <div className='food-body-item_middle_content'>
                    Fruit Vanilla Ice Cream
                    <div className='food-body-item_middle_sub_content'>Meat, Potatoes, Rice, Tomatoe</div>
                  </div>
                </div>
                <div className='food-body-item_right'>
                  <div className='food-body-item_right_content'>$29</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Food;

// Styles 👕🧦👗🧣🧥👔 -->

const Container = styled.div`
  padding: 0 16px;
  font-size: 16px;
  font-weight: 400;
  position: relative;
  .food-container {
    padding: 16px 0;
    height: auto;
    background: #f8faff;
  }
  @media only screen and (min-width: 992px) {
    .food-container {
      border-left: 1px dashed #000;
      border-right: 1px dashed #000;
      padding: 32px 0;
    }
  }
  .food-subhead {
    font-family: 'Playfair Display', Georgia, serif;
    text-align: center;
    font-size: 25px;
  }
  .food-head {
    color: ${colors.transparent_black5};
    text-align: center;
    font-size: 20px;
  }
  .food-body-topic {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 16px 0;
  }
  .food-body-topic:after,
  .food-body-topic:before {
    content: '';
    display: table;
  }
  .food-body-topic:after {
    clear: both;
  }
  @media only screen and (min-width: 992px) {
    .food-body-topic {
      padding: 32px 0;
    }
  }
  .food-body-topic_menu {
    width: 110px;
    background: #fff;
    text-align: center;
    margin-right: 10px;
    border: 1px solid ${colors.transparent_black2};
    color: #a5a5ab;
    font-weight: 700;
    padding: 20px 0;
    -khtml-user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .food-body-topic_menu:hover {
    background: #ff6239;
    color: #fff;
  }
  .food-body-topic_menu_img {
    width: 20px;
    height: 20px;
    margin-bottom: 0;
    margin-right: 5px;
    vertical-align: middle;
  }
  .food-body-item-cover {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
  .food-body-item-subcover {
    height: auto;
  }
  .food-body-item-subcover:after,
  .food-body-item-subcover:before {
    content: '';
    display: table;
  }
  .food-body-item-subcover:after {
    clear: both;
  }
  @media only screen and (min-width: 992px) {
    .food-body-item-subcover {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      max-width: 1100px;
      margin: auto;
    }
  }
  .food-body-item {
    cursor: pointer;
    width: auto;
    height: auto;
    background: #fff;
    border: 1px solid #ccc;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-box-shadow: 0 1px 18px -12px ${colors.transparent_black7};
    box-shadow: 0 1px 18px -12px ${colors.transparent_black7};
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 16px;
    word-wrap: break-word;
    -khtml-user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
  .food-body-item:after,
  .food-body-item:before {
    content: '';
    display: table;
  }
  .food-body-item:after {
    clear: both;
  }
  @media only screen and (min-width: 576px) {
    .food-body-item {
      width: 480px;
    }
  }
  @media only screen and (min-width: 992px) {
    .food-body-item {
      width: 450px;
    }
  }
  @media only screen and (min-width: 1201px) {
    .food-body-item {
      width: 480px;
    }
  }
  .food-body-item:hover {
    background: #ff6239;
    border-color: #000;
  }
  .food-body-item:hover .food-body-item_middle_sub_content,
  .food-body-item:hover .food-body-item_right_content {
    color: #fff;
  }
  .food-body-item_left_img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .food-body-item_middle {
    padding-left: 20px;
    width: 100%;
  }
  @media only screen and (min-width: 576px) {
    .food-body-item_middle {
      width: 380px;
    }
  }
  @media only screen and (min-width: 992px) {
    .food-body-item_middle {
      width: 400px;
    }
  }
  @media only screen and (min-width: 1201px) {
    .food-body-item_middle {
      width: 380px;
    }
  }
  .food-body-item_middle_content {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-weight: 600;
    font-size: 18px;
  }
  .food-body-item_middle_sub_content {
    margin-top: 8px;
    font-weight: 400;
  }
  .food-body-item_right {
    padding-left: 20px;
  }
  .food-body-item_right_content {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #ff6239;
    font-size: 32px;
    font-family: 'Playfair Display', Georgia, serif;
  }
  .food_sp_r_margin_topic {
    margin-right: 0;
  }
  .food_sp_r_margin_body {
    margin: 0 auto;
  }
  @media only screen and (min-width: 992px) {
    .food_sp_r_margin_body {
      margin: 8px auto;
    }
  }
`;
