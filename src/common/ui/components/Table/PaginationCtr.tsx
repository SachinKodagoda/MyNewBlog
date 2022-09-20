import ChevronLeft from '@svg/feather/ChevronLeft';
import ChevronRight from '@svg/feather/ChevronRight';
import ChevronsLeft from '@svg/feather/ChevronsLeft';
import ChevronsRight from '@svg/feather/ChevronsRight';
import { colors } from '@theme/baseTheme';
import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

type TPagination = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  onQuickChange: (page: number) => void;
};

const Pagination = ({ pageCount, onPageChange, currentPage, onQuickChange }: TPagination): JSX.Element => {
  return (
    <Container>
      <DoubleArrowBtn
        isDisabled={currentPage === 1}
        onClick={() => {
          if (currentPage > 1) {
            onQuickChange(1);
          }
        }}
      >
        <ChevronsLeft />
      </DoubleArrowBtn>
      <ReactPaginate
        breakLabel='...'
        previousLabel={
          <ArrowBtn>
            <ChevronLeft />
          </ArrowBtn>
        }
        nextLabel={
          <ArrowBtn>
            <ChevronRight />
          </ArrowBtn>
        }
        onPageChange={e => onPageChange(e.selected + 1)}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        marginPagesDisplayed={0}
        renderOnZeroPageCount={() => null}
      />
      <DoubleArrowBtn
        isDisabled={currentPage === pageCount}
        onClick={() => {
          onQuickChange(pageCount);
        }}
      >
        <ChevronsRight />
      </DoubleArrowBtn>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: helvetica, arial;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    width: min-content;
    margin: 0;
    line-height: 0;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
  .selected {
    a {
      background: ${colors.niceBlue};
      color: ${colors.white};
    }
  }
  .previous {
  }
  .next {
  }
  .disabled {
  }
  .break {
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    min-height: 50px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const ArrowBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DoubleArrowBtn = styled.div<{ isDisabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  opacity: ${p => (p.isDisabled ? '0.2' : '1')};
  cursor: pointer;
`;
