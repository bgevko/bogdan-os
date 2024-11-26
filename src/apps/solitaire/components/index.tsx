import React, { memo } from 'react';

import FoundationStack from '@/solitaire/components/foundation-stack';
import StockStack from '@/solitaire/components/stock-stack';
import TableauStack from '@/solitaire/components/tableau-stack';
import WasteStack from '@/solitaire/components/waste-stack';
import useSolitaireStore from '@/solitaire/store';

export const StockBase = (): React.ReactElement => {
  const stock = useSolitaireStore((state) => state.getStock());
  const popToWaste = useSolitaireStore((state) => state.popToWaste);
  return <StockStack cards={stock} onClick={popToWaste} />;
};
export const Stock = memo(StockBase);

export const WasteBase = (): React.ReactElement => {
  const waste = useSolitaireStore((state) => state.getWaste());
  return <WasteStack cards={waste} />;
};
export const Waste = memo(WasteBase);

const FoundationsBase = (): React.ReactElement => {
  const foundations = useSolitaireStore((state) => state.getFoundations());
  return (
    <>
      {foundations.map((foundation, index) => {
        return <FoundationStack key={index} cards={foundation} foundationIdx={index} />;
      })}
    </>
  );
};
export const Foundations = memo(FoundationsBase);

export const TableauBase = (): React.ReactElement => {
  const tableau = useSolitaireStore((state) => state.getTableau());
  return (
    <>
      {tableau.map((tableauStack, index) => {
        return <TableauStack key={index} cards={tableauStack} tableauIdx={index} />;
      })}
    </>
  );
};
export const Tableau = memo(TableauBase);
