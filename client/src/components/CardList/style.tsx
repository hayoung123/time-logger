import styled from 'styled-components';

export const CardList = styled.div``;

export const Card = styled.div`
  width: 300px;
  padding: 1rem;
  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;
  margin-bottom: 1rem;

  & > div:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .card-title {
    font-weight: 600;
    font-size: 1.25rem;
  }

  .card-expect-time,
  .card-proceed-time {
    display: flex;
    font-size: 0.875rem;
    & > div:first-child {
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }
`;

export const CardEditForm = styled.div``;
