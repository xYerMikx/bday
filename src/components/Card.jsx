import React from "react";
export function Card() {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">С днем рождения, Любимка!!!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">Хэппи бёздээээййй</h3>
        <p>Дорогая Ксюшка,</p>
        <p>
          Поздравляю тебя с твоим самым лучшим днем!! Надеюсь, что все твои
          мечты станут реальностью, твои друзья будут самыми верными, любовь
          будет тебя окутывать со всех сторон и удача сопутствовать повсюду! Я
          тебя люблю!!!
        </p>
        <p className="name">Ян</p>
      </div>
    </div>
  );
}
