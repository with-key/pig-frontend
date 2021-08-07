import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import NameTag from "../Header/NameTag";
import Icon from "../Icon";
import WSTabs from "../WSTabs";
import { Text } from "../../elem";
import { useSelector } from "react-redux";
import flex from "../../themes/flex";

const WSHeader = ({ url }) => {
  const history = useHistory();

  const user = useSelector((state) => state.user.user);

  return (
    <Container>
      <LeftSide>
        <TitleBox>
          <Text type="sub_1">사이드 프로젝트</Text>
        </TitleBox>
        <WSTabs url={url} />
      </LeftSide>
      <RightSide>
        <Icons>
          <HeaderBtn onClick={() => history.push("/roomlist")}>
            <Icon icon="home" size="28px" />
          </HeaderBtn>
          <HeaderBtn>
            <Icon icon="notice-focus" size="28px" />
          </HeaderBtn>
        </Icons>
        <HeaderBtn>
          <NameTag name={user.nickname} />
        </HeaderBtn>
      </RightSide>
    </Container>
  );
};

const Container = styled.header`
  ${flex("between")}
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--indexHeader);
  width: 100%;
  height: 48px;
  padding: 0 40px;
  background-color: var(--white);
  border-bottom: 1px solid var(--line);
`;

const LeftSide = styled.div`
  ${flex("start", "center")}
`;

const RightSide = styled.div`
  ${flex("start", "center")}
`;

const TitleBox = styled.div`
  width: 260px;
  color: var(--main);
`;

const Icons = styled.div`
  display: flex;
  gap: 28px;
  margin-right: 38px;
`;

const HeaderBtn = styled.button`
  cursor: pointer;
`;

export default WSHeader;