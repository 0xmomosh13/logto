import { z } from 'zod';

export const maxUploadFileSize = 8 * 1024 * 1024; // 8MB

// Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
export const allowUploadMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/vnd.microsoft.icon',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/bmp',
] as const;

const allowUploadMimeTypeGuard = z.enum(allowUploadMimeTypes);

export type AllowedUploadMimeType = z.infer<typeof allowUploadMimeTypeGuard>;

export const userAssetsServiceStatusGuard = z.object({
  status: z.union([z.literal('ready'), z.literal('not_configured')]),
  allowUploadMimeTypes: z.array(allowUploadMimeTypeGuard).optional(),
  maxUploadFileSize: z.number().optional(),
});

export type UserAssetsServiceStatusResponse = z.infer<typeof userAssetsServiceStatusGuard>;

export const userAssetsGuard = z.object({
  url: z.string(),
});

export type UserAssetsResponse = z.infer<typeof userAssetsGuard>;