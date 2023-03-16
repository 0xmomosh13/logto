import type { AllowedUploadMimeType } from '@logto/schemas';

import Delete from '@/assets/images/delete.svg';

import IconButton from '../../IconButton';
import FileUploader from '../FileUploader';
import type { Props as FileUploaderProps } from '../FileUploader';
import * as styles from './index.module.scss';

export const maxImageSizeLimit = 500 * 1024; // 500 KB

export const allowedImageMimeTypes: AllowedUploadMimeType[] = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
];

export type Props = Omit<FileUploaderProps, 'maxSize' | 'allowedMimeTypes'> & {
  name: string;
  value: string;
  onDelete: () => void;
};

const ImageUploader = ({ name, value, onDelete, ...rest }: Props) =>
  value ? (
    <div className={styles.imageUploader}>
      <img alt={name} src={value} />
      <IconButton
        className={styles.delete}
        onClick={() => {
          onDelete();
        }}
      >
        <Delete />
      </IconButton>
    </div>
  ) : (
    <FileUploader allowedMimeTypes={allowedImageMimeTypes} maxSize={maxImageSizeLimit} {...rest} />
  );

export default ImageUploader;