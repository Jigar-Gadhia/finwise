import React from 'react';
import ViewWithGap from './ViewWithGap';
import IconComponent from './IconComponent';

interface SocialMediaButtonsProps {
  onPressFacebook?: () => void;
  onPressGoogle?: () => void;
}

const SocialMediaButtons: React.FC<SocialMediaButtonsProps> = ({
  onPressFacebook,
  onPressGoogle,
}) => {
  return (
    <ViewWithGap row gap={12}>
      <IconComponent
        Icon="fb"
        color="text"
        height={32}
        width={32}
        onPress={onPressFacebook}
      />
      <IconComponent
        Icon="google"
        color="text"
        height={32}
        width={32}
        onPress={onPressGoogle}
      />
    </ViewWithGap>
  );
};

export default SocialMediaButtons;
