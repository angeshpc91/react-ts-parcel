import * as React from 'react';

import styles from './Grid.module.scss';

type GridItemsAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

type FlexDirectionVal =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

type GridJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
  alignItems?: GridItemsAlignment;
  column?: boolean;
  expanded?: boolean;
  justify?: GridJustify;
  lg?: GridSizes;
  md?: GridSizes;
  row?: boolean;
  sm?: GridSizes;
  colPad?: boolean;
  flex?: boolean;
  children: React.ReactNode;
  flexDirection?: FlexDirectionVal;
  className?: string;
  style?: object
  marginAuto?: boolean
  nowrap?: boolean
  onClick?: () => void
}

const Grid: React.FC<GridProps> = (props) => {
  const {
    alignItems,
    children,
    column,
    expanded,
    justify,
    lg,
    md,
    row,
    colPad,
    flex,
    sm,
    flexDirection,
    style,
    className,
    marginAuto,
    // nowrap,
    onClick
  } = props;

  const isRow: boolean = row || !column;

  React.useEffect(() => {
    // console.log(`HELLOOOO!!! ${styles[justify]}`)
    console.log(`${styles['flex-end']}`);
  }, []);

  const classes: string =
    (!isRow ? colPad ? styles.column + ` ${styles.colPad}` : styles.column : styles.row) +

    // Row styling
    (isRow && expanded ? ` ${styles.expanded}` : '') +
    ((isRow || flex) && justify ? ` ${styles[justify]}` : '') +
    ((isRow || flex) && alignItems ? ` ${styles['align-' + alignItems]}` : '') +

    // Column styling
    (!isRow && sm ? ` ${styles['sm-' + sm]}` : '') +
    (!isRow && md ? ` ${styles['md-' + md]}` : '') +
    (!isRow && lg ? ` ${styles['lg-' + lg]}` : '') +

    // margin auto
    (marginAuto ? ` ${styles['margin-auto']}` : '') +

    // flex and direction
    (isRow || flex ? ` ${styles.flex}` : '') +
    (flex ? ` ${styles.nowrap}` : '') +
    (isRow || flex ? ` ${styles['flex-direction-' + flexDirection]}` : '');

  return <div className={className + ' ' + classes} style={style} onClick={onClick}>{children}</div>;
};

export default Grid;
