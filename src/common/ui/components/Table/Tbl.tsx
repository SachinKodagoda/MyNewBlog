import Loader from '@components/Loaders/CircularLoader';
import Pagination from '@components/Table/PaginationCtr';
import useWindowSize from '@hooks/useWindowSize';
import ArrowRight from '@svg/feather/ArrowRight';
import { colors, devices } from '@theme/baseTheme';
import { IOptions, TInputValue } from '@ts/common';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PerPage from './PerPageCtr';

type THArr = {
  align: string;
  priority: number;
  minWidth: number;
  maxWidth: number;
  title: JSX.Element;
};

type TProps = {
  headerArr: THArr[];
  dataArr: JSX.Element[][];
  currentPage: number;
  pageCount: number;
  onPageChange: (nextPage: number) => void;
  limit: TInputValue;
  setLimit: (item: TInputValue) => void;
  options: IOptions[];
  name: string;
  accumulatedMaxSum: number;
  accumulatedSortedArr: number[];
  loading: boolean;
};

const Tbl = ({
  dataArr,
  headerArr,
  currentPage = 1,
  pageCount,
  onPageChange,
  name,
  accumulatedMaxSum,
  accumulatedSortedArr,
  options,
  setLimit,
  limit,
  loading,
}: TProps): JSX.Element => {
  const { width, height } = useWindowSize();
  const [maxColCount, setMaxColCount] = useState(0);
  const [minWidthReached, setMinWidthReached] = useState(false);
  const tbl = useRef(null);
  const [openArr, setOpenArr] = useState<number[]>([]);

  useEffect(() => {
    if (tbl && width) {
      const padding = 62; // 20*2(pagePadding) + 2(safety) + 20(dropdown) + 0(tablePadding)
      const menu = 200;
      const offset = padding + menu;
      const min = accumulatedSortedArr.filter(val => val <= width - offset).length;
      setMinWidthReached(width - offset - accumulatedMaxSum > 0);
      setOpenArr([]);
      setMaxColCount(min);
    }
  }, [tbl, width, height, accumulatedSortedArr, accumulatedMaxSum]);

  return (
    <>
      <Container ref={tbl}>
        <Head>
          {maxColCount < headerArr.length && <DpH></DpH>}
          <HeadInner>
            {headerArr.map((item, j) => {
              if (headerArr[j].priority > maxColCount) {
                return;
              }
              return (
                <HeadItem
                  key={`${name}-HeadItem-${j + 1}`}
                  style={{
                    width: minWidthReached ? headerArr[j].maxWidth : headerArr[j].minWidth,
                    justifyContent: headerArr[j].align,
                  }}
                >
                  {item.title}
                </HeadItem>
              );
            })}
          </HeadInner>
        </Head>
        <Body>
          {dataArr.length > 0 ? (
            <>
              {dataArr.map((row, i) => {
                return (
                  <Row key={`${name}-dataArr-${i + 1}`}>
                    <DataItem showBorder={openArr.includes(i)} even={(i + 1) % 2 === 0}>
                      {maxColCount < headerArr.length && (
                        <Dp
                          opened={openArr.includes(i)}
                          onClick={() => {
                            setOpenArr(val => (val.includes(i) ? val.filter(iVal => iVal !== i) : [...val, i]));
                          }}
                        ></Dp>
                      )}
                      <DataItemInner>
                        {row.map((rowItem, j) => {
                          if (headerArr[j].priority > maxColCount) {
                            return;
                          }
                          return (
                            <DataItemInnerD
                              key={`${name}-DataItemInnerD-${j + 1}`}
                              style={{
                                width: minWidthReached ? headerArr[j].maxWidth : headerArr[j].minWidth,
                                justifyContent: headerArr[j].align,
                              }}
                            >
                              {rowItem}
                            </DataItemInnerD>
                          );
                        })}
                      </DataItemInner>
                    </DataItem>

                    {openArr.includes(i) && maxColCount < headerArr.length && (
                      <RowDropDown>
                        {row.map((rowItem, j) => {
                          if (headerArr[j].priority <= maxColCount) {
                            return;
                          }
                          return (
                            <Fragment key={`${name}-RowDropDownItem-${j + 1}`}>
                              <RDHeader>
                                {headerArr[j].title}
                                <ArrowRight />
                              </RDHeader>
                              <RDRow
                                style={{
                                  width: minWidthReached ? headerArr[j].maxWidth : headerArr[j].minWidth,
                                  justifyContent: headerArr[j].align,
                                }}
                              >
                                {rowItem}
                              </RDRow>
                              <Line></Line>
                            </Fragment>
                          );
                        })}
                      </RowDropDown>
                    )}
                  </Row>
                );
              })}
            </>
          ) : (
            <NoData>No Data Available</NoData>
          )}
        </Body>
        {dataArr.length > 0 && (
          <PaginationWrapper>
            {pageCount > 1 && (
              <Pagination
                onPageChange={onPageChange}
                onQuickChange={onPageChange}
                currentPage={+currentPage}
                pageCount={+pageCount}
              />
            )}
            <PageCtr>
              <PageTxt>Limit: </PageTxt>
              <PerPage setLimit={setLimit} limit={limit} options={options} />
            </PageCtr>
          </PaginationWrapper>
        )}
        {loading && (
          <LoaderCtr>
            <Loader show={loading} trackColor={`${colors.red9}`} loaderColor={`${colors.black}`} size='40px' />
          </LoaderCtr>
        )}
      </Container>
    </>
  );
};

export default Tbl;

const Container = styled.div`
  background: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 0 20px ${colors.transparent_black2};
  border: 1px solid ${colors.black};
  position: relative;
`;

const Head = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.black};
  background: ${colors.black};
  color: ${colors.white};
  font-weight: 900;
`;

const HeadInner = styled.div`
  display: flex;
  justify-content: space-evenly; // this should be align with body
  flex-grow: 1;
`;

const HeadItem = styled.div`
  padding: 12px 10px;
  display: flex;
  align-items: center;
  font-weight: 600;
  flex: none;
  &:last-child {
    border-right: none;
  }
`;

const Body = styled.div`
  /* min-height: 500px; */
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid ${colors.black};
  background-color: ${colors.gray3};
`;

const DataItemInnerD = styled.div`
  padding: 12px 10px;
  display: flex;
  align-items: center;
  flex: none;
`;

const DataItemInner = styled.div`
  display: flex;
  justify-content: space-evenly; // this should be align with header
  flex-grow: 1;
`;

const DataItem = styled.div<{ showBorder: boolean; even: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: ${p => (p.showBorder ? `1px solid ${colors.black}` : 'none')};
  background-color: ${p => (p.even ? `${colors.gray1}` : `${colors.white}`)};
`;

const RowDropDown = styled.div`
  display: grid;
  width: calc(100% - 20px);
  margin: 10px;
  border: 1px solid ${colors.black};
  grid-template-columns: 1fr;
  column-gap: 20px;
  position: relative;
  border-radius: 0 5px 5px;
  background: ${colors.white};
  &::after {
    position: absolute;
    top: 0;
    left: -1px;
    transform: translateY(-100%);
    content: '';
    width: 0;
    height: 0;
    border-bottom: 10px solid ${colors.black};
    border-right: 10px solid transparent;
  }
  @media ${devices.minTablet} {
    grid-template-columns: 1fr 1fr;
    width: max-content;
  }
`;

const Line = styled.div`
  grid-column: 1 / -1;
  height: 1px;
  background: #d1d1d1;
  &:last-child {
    height: 0;
    background: transparent;
  }
`;

const RDHeader = styled.div`
  font-weight: 900;
  flex: none;
  padding: 12px 10px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${devices.minTablet} {
    padding: 12px 10px;
  }
  & > svg {
    display: none;
  }
  @media ${devices.minTablet} {
    & > svg {
      display: initial;
      width: 20px;
      height: 20px;
    }
  }
`;

const RDRow = styled.div`
  flex: none;
  padding: 6px 10px 12px;
  @media ${devices.minTablet} {
    padding: 12px 10px;
  }
`;

const Dp = styled.div<{ opened: boolean }>`
  width: 20px;
  align-self: stretch;
  position: relative;
  flex: none;
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${colors.black};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) ${p => (p.opened ? 'rotate(0deg)' : 'rotate(-90deg)')};
  }
`;

const DpH = styled.div`
  width: 20px;
  align-self: stretch;
  position: relative;
  flex: none;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 20px;
  @media ${devices.minTablet} {
    justify-content: space-between;
  }
`;

const PageCtr = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex: auto;
`;

const PageTxt = styled.div`
  font-weight: 900;
`;

const NoData = styled.div`
  min-height: 500px;
  font-weight: 900;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const LoaderCtr = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
