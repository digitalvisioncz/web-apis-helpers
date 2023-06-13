# Web APIs' toolkit
Web APIs' helpers and React components for the frontend development.

## Installation
```bash
yarn add @dvdevcz/web-api-helpers
```

## List
| Helper | Description |
| --- | --- |
| [`getPreferredLanguage`](#getPreferredLanguage) | Returns a string representing the preferred language of the user underhood. |

---

### `getPreferredLanguage`
Return the user's preferred language based on UI browser settings. It uses [Navigator.language](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language) property.

**Subtag**
By default, `getPreferredLanguage` return [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646) language tag. You can specify if you want to return `region` or `language` subtag by sending the optional parameter `subtag` with the value:
| value | Description |
| --- | --- |
| `language` | Returns only language subtag  |
| `region` | Return only region subtag |

**Examples:**
```js
import {getPreferredLanguage} from '@dvdevcz/web-api-helpers';

getPreferredLanguage(); // cs-CZ
getPreferredLanguage({subtag: 'language'}); // cs
getPreferredLanguage({subtag: 'region'}); // CZ
```
