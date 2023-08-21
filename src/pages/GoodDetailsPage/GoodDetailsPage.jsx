import { GoodDetailsItem } from 'components/GoodDetailsItem';
import { useAuth, useComments } from 'hooks';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  GoodDetailsPageSection,
  GoodDetailsContainer,
  LoaderContainer,
} from './GoodDetailsPage.styled';
import { useState } from 'react';

export const GoodDetailsPage = () => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const { isRefreshing } = useAuth();
  const { comments } = useComments();

  const handleIsShowCommentOpen = data => {
    setIsCommentOpen(data);
  };

  return isRefreshing ? (
    <LoaderContainer>
      <BeatLoader />
    </LoaderContainer>
  ) : (
    <GoodDetailsPageSection
      $length={comments?.lenght}
      $isCommentOpen={isCommentOpen}
    >
      <GoodDetailsContainer>
        <GoodDetailsItem isShowCommentOpen={handleIsShowCommentOpen} />
      </GoodDetailsContainer>
    </GoodDetailsPageSection>
  );
};
