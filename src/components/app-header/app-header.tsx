import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from 'react-redux';
import { getUser } from '../../services/slices/userSlice';

export const AppHeader: FC = () => {
  const { name } = useSelector(getUser);

  return <AppHeaderUI userName={name} />;
};
