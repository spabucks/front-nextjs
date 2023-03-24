import React from "react";

export default function ModalBackground(props: { isView: Boolean }) {
  if (!props.isView) {
    return null;
  }
  return <div className="modalBack"></div>;
}
