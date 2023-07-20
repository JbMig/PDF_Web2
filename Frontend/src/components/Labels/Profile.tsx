import React, { Fragment } from 'react';
import { ProfileInterface } from 'interfaces';

export default function Profile({ props }: { props: ProfileInterface }) {
  let balise;

  if (props.size == 'small') {
    balise = (
      <label htmlFor="sidebar" className="self-center hover:cursor-pointer">
        <div className="avatar h-sm_profile w-sm_profile">
          <div className="rounded-full border-2 border-solid border-white bg-background hover:border-white">
            {props.picture_link === undefined ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="fill-background stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            ) : (
              <img src={props.picture_link} alt="" className="rounded-full" />
            )}
          </div>
        </div>
      </label>
    );
  } else if (props.size == 'big') {
    balise = (
      <div className="avatar h-lg_profile w-lg_profile">
        <div className="rounded-full border-2 border-solid border-white bg-background hover:border-white">
          {props.picture_link === undefined ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="fill-background stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          ) : (
            <img src={props.picture_link} alt="" className="rounded-full" />
          )}
        </div>
      </div>
    );
  } else if (props.size == 'profile_page') {
    balise = (
      <div className="avatar h-[160px] w-[160px]">
        <div className="rounded-full border-2 border-solid border-white bg-background hover:border-white">
          {props.picture_link === undefined ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="fill-background stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          ) : (
            <img src={props.picture_link} alt="" className="rounded-full" />
          )}
        </div>
      </div>
    );
  }
  return <Fragment>{balise}</Fragment>;
}
