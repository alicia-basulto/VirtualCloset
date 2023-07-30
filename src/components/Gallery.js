import React, { useState } from 'react';
import './styles/gallery.css';
import MenuBar from './MenuBar';

const Gallery = () => {
    const [isCardShowing, setIsCardShowing] = useState(false);
    const [zIndex, setZIndex] = useState(10);
    const [activeMenu, setActiveMenu] = useState(-1);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toggleCard = () => {
        setIsCardShowing(!isCardShowing);
      };
    const handleCardClick = (e) => {
        e.preventDefault();

        const clickedCard = e.currentTarget;
        const clickedCardZIndex = Number(clickedCard.style.zIndex);

        if (clickedCardZIndex === activeMenu) {
            // If the clicked menu is already active, close it
            setActiveMenu(-1);
        } else {
            // Otherwise, open the clicked menu and set it as active
            setActiveMenu(clickedCardZIndex);
        }
    };

    const handleToggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };


  return (
    <div>
    <MenuBar isMenuActive={isMenuActive} handleToggleMenu={handleToggleMenu} />
    {!isMenuActive && (
    <div className="cards">
      <div class="cards">

<div class="card">
<div className={`card ${isCardShowing ? 'show' : ''}`} onClick={handleCardClick}>
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

</div>



<div class="cards">

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?wave" alt="wave" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?beach" alt="beach" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?mountain" alt="mountain" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?field" alt="field" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?kite" alt="kite" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <div class="card__image-holder">
    <img class="card__image" src="https://source.unsplash.com/300x225/?desert" alt="desert" />
  </div>
  <div class="card-title">
    <a href="#" class="toggle-info btn">
      <span class="left"></span>
      <span class="right"></span>
    </a>
    <h2>
        Card title
        <small>Image from unsplash.com</small>
    </h2>
  </div>
  <div class="card-flap flap1">
    <div class="card-description">
      This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
    </div>
    <div class="card-flap flap2">
      <div class="card-actions">
        <a href="#" class="btn">Read more</a>
      </div>
    </div>
  </div>
</div>

</div>

</div>

)}
</div>
      
    
   
  );
};

export default Gallery;
