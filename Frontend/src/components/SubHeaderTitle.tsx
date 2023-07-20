import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { SubHeaderTitleInterface } from 'interfaces';

export default function SubHeaderTitle({
  props,
}: {
  props: SubHeaderTitleInterface;
}) {
  let chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-xl w-xl self-center fill-background stroke-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  const spanClassName =
    'font-sans self-center text-medium font-bold text-white';
  const linkClassName =
    'font-sans self-center text-medium font-bold text-white hover:text-main_yellow';
  let title_complete;

  if (props.title_1 === '') {
    title_complete = (
      <div className="flex flex-row">
        <span className={spanClassName}>Accueil</span>
      </div>
    );
  } else {
    const title_part_1 = (
      <Link to="/" className={linkClassName}>
        Accueil
      </Link>
    );
    let title_part_2;

    if (props.title_path_1 === '') {
      title_part_2 = <span className={spanClassName}>{props.title_1}</span>;
    } else {
      title_part_2 = (
        <Link to={props.title_path_1} className={linkClassName}>
          {props.title_1}
        </Link>
      );
    }

    if (props.title_2 !== '') {
      let title_part_3;
      title_part_3 = <span className={spanClassName}>{props.title_2}</span>;

      title_complete = (
        <div className="flex flex-row">
          {title_part_1}
          {chevron}
          {title_part_2}
          {chevron}
          {title_part_3}
        </div>
      );
    } else {
      title_complete = (
        <div className="flex flex-row">
          {title_part_1}
          {chevron}
          {title_part_2}
        </div>
      );
    }
  }
  return <Fragment>{title_complete}</Fragment>;
}
