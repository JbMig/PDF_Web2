import React, { Fragment } from 'react';
import { SubHeaderTitle, SubHeaderButtons } from 'components';
import {
  SubHeaderInterface,
  SubHeaderTitleInterface,
  SubHeaderButtonsInterface,
} from 'interfaces';

export default function SubHeader({ props }: { props: SubHeaderInterface }) {
  const titleProps: SubHeaderTitleInterface = {
    title_1: props.title_1,
    title_path_1: props.title_path_1,
    title_2: props.title_2,
  };

  const buttonProps: SubHeaderButtonsInterface = {
    text_add: props.text_add,
    text_settings: props.text_settings,
  };

  return (
    <Fragment>
      <div className="mt-header_height flex justify-between bg-background px-base py-xl">
        <SubHeaderTitle props={titleProps} />
        <SubHeaderButtons props={buttonProps} />
      </div>
    </Fragment>
  );
}
