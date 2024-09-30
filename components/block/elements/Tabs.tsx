"use client";

import classnames from "classnames";
import React, { useState } from "react";

export default function Tabs({ children }: React.PropsWithChildren) {
  const [active, setActive] = useState(0);

  const handleClickTab = (index: number) => setActive(index);

  return (
    <div className="tab">
      <ul className="tab-nav">
        {React.Children.map(children, (element, i) => {
          const { props } = element as React.ReactElement;
          return (
            <li
              className={classnames("tab-nav-item", { active: i === active })}
              onClick={() => handleClickTab(i)}
            >
              {props.label}
            </li>
          );
        })}
      </ul>

      {React.Children.map(children, (element, i) => {
        return (
          <div className={classnames("tab-content block px-5", { hidden: i !== active })}>
            {element}
          </div>
        );
      })}
    </div>
  );
}
