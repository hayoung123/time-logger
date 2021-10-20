import styled, { css } from 'styled-components';

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

export const CardSize = css`
  background-color: ${({ theme }) => theme.color.white};
  max-width: 300px;
  min-height: 64px;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

export const Card = styled.div`
  ${CardSize}
  & > div:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    .card-menu {
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      .card-menu-dropbox {
        overflow: hidden;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(10%, 105%);
      }
    }
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
