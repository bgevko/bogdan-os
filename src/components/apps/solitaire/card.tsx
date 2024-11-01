import React from 'react';

import CardIcon from '@/components/apps/solitaire/card-icon';

interface CardProps {
  value: number;
}
const Card = ({ value }: CardProps): React.ReactElement => {
  return <CardIcon iconName={value.toString()} />;
};

export default Card;
