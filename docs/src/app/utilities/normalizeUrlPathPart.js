export default function normalizeUrlPathPart(urlPathPart) {
  return urlPathPart.toLowerCase().replace(/\s+/g, '-');
}
