import { FC } from "react";
import { Image } from "../types/models.ts";

type Props = {
  images?: Image[];
  selectedImage: string;
  onSelect: (imagePath: string) => void;
};

const ImagePicker: FC<Props> = ({ images, selectedImage, onSelect }) => {
  if (!images) images = [];

  return (
    <div id="image-picker">
      <p>Select an image</p>
      <ul>
        {images.map((image) => (
          <li
            key={image.path}
            onClick={() => onSelect(image.path)}
            className={selectedImage === image.path ? "selected" : undefined}
          >
            <img
              src={`http://localhost:3000/${image.path}`}
              alt={image.caption}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagePicker;
