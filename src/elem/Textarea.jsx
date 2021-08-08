import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { sub_1 } from "../themes/textStyle";

const Textarea = ({
  value,
  name,
  _onChange,
  placeholder,
  rows,
  minHeight,
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref === null || ref.current === null) {
      return;
    }

    ref.current.style.height = `${minHeight}` + "px";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);

  const handleResizeHeight = useCallback(() => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = `${minHeight}` + "px";
    ref.current.style.height = ref.current.scrollHeight + "px";
  }, []);

  // handleResizeHeight();

  return (
    <Wrapper
      value={value}
      name={name}
      onChange={_onChange}
      onInput={handleResizeHeight}
      placeholder={placeholder}
      rows={rows}
      ref={ref}
      {...rest}
    />
  );
};

const Wrapper = styled.textarea`
  ${sub_1};
  color: var(--grey);
  width: 100%;
  resize: none;
  overflow-y: visible;
`;
export default Textarea;
