import { Avatar } from "@mui/material";

type AvatarImageProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
};

export const AvatarImage = ({ src, fallbackSrc, alt }: AvatarImageProps) => {
  return (
    <Avatar
      className="avatar-wrap"
      sx={{ width: 24, height: 24 }}
      src={src}
      alt={alt}
    >
      <img className="small-logo" src={fallbackSrc} />
    </Avatar>
  );
};
