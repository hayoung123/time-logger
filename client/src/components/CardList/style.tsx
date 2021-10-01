import styled from 'styled-components';

export const CardList = styled.div`
  min-width: 300px;
  .card-list-header {
    display: flex;
    justify-content: space-between;
    .header-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .plus-btn {
      cursor: pointer;
      fill: ${({ theme }) => theme.color.blue};
    }
  }
`;

export const CardSize = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 300px;
  min-height: 64px;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

export const Card = styled(CardSize)`
  & > div:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .card-title {
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .card-check-list {
    width: fit-content;
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
