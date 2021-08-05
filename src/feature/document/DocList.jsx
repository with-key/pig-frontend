import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// elem
import { Text } from "../../elem";
import Icon from "../../components/Icon";
import { scrollbar } from "../../themes/scrollbar";

import { resetDocs, __getDocs } from "../../redux/modules/document";

const DocList = ({ docList }) => {
  const history = useHistory();
  const { roomId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getDocs(roomId));
    return () => dispatch(resetDocs());
  }, []);

  const toDocAdd = () => history.push(`/workspace/${roomId}/doc/add`);

  const showDocDetail = (docId) =>
    history.push(`/workspace/${roomId}/doc/${docId}`);

  return (
    <Container>
      <TitleBox>
        {/* 문서 목록은 나중에 검색으로 이용할 예정. inputToggle 사용 가능 */}
        <Text type="body_1">문서 목록</Text>
        <PlusBtn onClick={toDocAdd}>
          <Icon icon="plus-lg" size="24px" color="#b7b7b7" />
        </PlusBtn>
      </TitleBox>
      <List>
        {docList.map((doc) => (
          <Item onClick={() => showDocDetail(doc.docId)}>
            <Icon icon="document" size="20px" />
            <Name>{doc.title}</Name>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.aside`
  --WSHeaderHeight: 48px;
  width: 260px;
  max-height: calc(100vh - var(--WSHeaderHeight));
  border-right: 1px solid var(--line);
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 var(--smMargin);
  color: var(--grey);
`;

const PlusBtn = styled.button`
  color: var(--grey);
`;

const List = styled.ul`
  --WSHeaderHeight: 48px;
  --listTitleHeight: 60px;

  ${scrollbar}
  height: calc(100vh - var(--WSHeaderHeight) - var(--listTitleHeight));
  margin-bottom: -5vh;
  padding: 0 var(--smMargin);
  overflow-y: auto;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
`;

const Name = styled.p`
  width: 100%;
  margin-left: 10px;
  color: var(--darkgrey);
  font-size: 1.6rem;
  line-height: 2.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
`;

export default DocList;
