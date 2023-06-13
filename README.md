# Web APIs' toolkit

Web APIs' helpers and React components for the frontend development.

## Installation
```bash
yarn add @dvdevcz/web-api-helpers
```

## List
| Helper | Description |
| --- | --- |
| [`getPrefferedLanguage`](#getPrefferedLanguage) | Returns a string representing the preferred language of the user underhood. |

---

### `getPrefferedLanguage`
Return the user's preferred language based on UI browser settings. It uses [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) property.

**Subtag**

By default, `getPrefferedLanguage` return [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) language tag. You can specify if you want to return `region` or `language` subtag by sending the optional parameter `subtag` with the value:
| value | Description |
| --- | --- |
| `language` | Returns only language subtag  |
| `delay` | Return only region subtag |

**Examples:**

```js
import {getPrefferedLanguage} from '@dvdevcz/web-api-helpers';

getPrefferedLanguage(); // cs-CZ
getPrefferedLanguage({subtag: 'language'}); // cs
getPrefferedLanguage({subtag: 'region'}); // CZ
```
