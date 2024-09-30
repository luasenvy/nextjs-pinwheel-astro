"use client";

import classnames from "classnames";
import React, { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState(0);

  const handleClickTab = (index: number) => setActive(index);

  return (
    <div className="tab">
      <ul className="tab-nav">
        <li
          className={classnames("tab-nav-item", { active: 0 === active })}
          onClick={() => handleClickTab(0)}
        >
          Tab 1
        </li>
        <li
          className={classnames("tab-nav-item", { active: 1 === active })}
          onClick={() => handleClickTab(1)}
        >
          Tab 2
        </li>
        <li
          className={classnames("tab-nav-item", { active: 2 === active })}
          onClick={() => handleClickTab(2)}
        >
          Tab 3
        </li>
      </ul>

      <div className={classnames("tab-content block px-5", { hidden: 0 !== active })}>
        <h3>Did you come here for something in particular?</h3>

        <p>
          Did you come here for something in particular or just general Riker-bashing? And blowing
          into maximum warp speed, you appeared for an instant to be in two places at once. We have
          a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the
          assassination attempt on Lieutenant Worf.
        </p>
      </div>

      <div className={classnames("tab-content block px-5", { hidden: 1 !== active })}>
        <h3>I wanna talk about the assassination attempt</h3>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className={classnames("tab-content block px-5", { hidden: 2 !== active })}>
        <h3>We know you’re dealing in stolen ore</h3>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo
        </p>
      </div>
    </div>
  );
}
