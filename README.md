
 **Pennywise — Student Finance Tracker**

Pennywise is a responsive, browser-based student finance tracker. It helps students record everyday spending, review spending patterns, and set a monthly spending cap. The project uses vanilla HTML, CSS, and JavaScript.

 Theme

**Student Finance Tracker**

 Features

- **Dashboard:** Shows spending this month, lifetime spending, number of transactions, highest-spending category, and a seven-day spending chart.
- **Transactions:** Add, edit, delete, sort, and search transactions. Each record includes a unique ID, description, amount, category, date, and creation/update timestamps.
- **Validation:** Checks descriptions, amounts, dates, and categories. It rejects repeated adjacent words such as `coffee coffee`.
- **Regex search:** Filters transactions as you type, reports invalid patterns, supports a match-case toggle, and highlights matches.
- **Budget cap:** Save a monthly cap and see the remaining amount or overage. The message uses a polite live announcement while under the cap and an assertive announcement when over.
- **Currency settings:** Choose USD, EUR, or GBP; edit and save manual EUR/GBP rates. Amounts are formatted using the selected currency.
- **Import/export:** Export transactions as JSON or import a JSON array. Imported entries are checked for valid fields and unique IDs before replacing the current list.
- **Local persistence:** Transactions and settings are stored in this browser's `localStorage`. On an empty first visit, the app loads the starter records from `seed.json`.
- **Theme toggle:** Switch between light and dark themes; the choice is saved with the settings.

 **Data model**

Each transaction has this shape:

```json
{
  "id": "txn_0001",
  "description": "Lunch at campus cafe",
  "amount": 12.5,
  "category": "Food",
  "date": "2026-10-12",
  "createdAt": "2026-10-12T12:30:00.000Z",
  "updatedAt": "2026-10-12T12:30:00.000Z"
}
```

Default categories are Food, Books, Transport, Entertainment, Fees, and Other. The amount is stored as a number. Dates use `YYYY-MM-DD`; timestamps are stored as strings.

 **Regex catalog**

The validation patterns live in `scripts/validators.js`.

| Purpose | Pattern | Example |
| --- | --- | --- |
| Non-empty description with no leading/trailing whitespace | `/^\S(?:.*\S)?$/` | `Lunch with friends` |
| Reject repeated adjacent words (advanced back-reference) | `/\b(\w+)\s+\1\b/i` | Rejects `Coffee coffee` |
| Non-negative number with up to two decimal places | `/^(0|[1-9]\d*)(\.\d{1,2})?$/` | Accepts `12`, `12.50`; rejects `12.345` |
| Date format and month/day ranges | `/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/` | Accepts `2026-10-12`; calendar validity is also checked |
| Category letters, spaces, and hyphens | `/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/` | Accepts `Food` and `Campus Life` |

Search accepts a JavaScript regular-expression pattern, compiled with `try/catch`. By default it ignores case; enable **Match case** to make it case-sensitive. Examples:

- `\.(\d{2})\b` — amounts or text containing two decimal digits
- `(coffee|tea)` — beverage keywords
- `^Lunch` — descriptions beginning with “Lunch”
- `(` — intentionally invalid pattern, to see the validation message

 **Accessibility and keyboard use**

- Semantic header, navigation, main content, sections, table, and footer structure.
- A skip-to-content link appears when focused.
- Form controls have associated labels; buttons and links are keyboard-operable.
- Keyboard focus is visibly outlined with `:focus-visible` styling.
- Status and validation messages use live regions, including budget overage announcements.
- Table headings identify their columns, and edit/delete buttons have transaction-specific accessible names.
- Reduced-motion preferences disable transitions and smooth scrolling.

Keyboard map:

- **Tab / Shift+Tab:** Move through links, controls, and buttons.
- **Enter / Space:** Activate the focused button or link.
- **Escape:** Close the transaction form and return focus to the Add transaction button.
- **Arrow keys:** Use native behavior for selects and other browser controls.

 **Responsive design**

The layout uses Flexbox, CSS Grid, and media queries for narrow phones, phones, tablets, and desktop widths. It adapts the dashboard and side panels for smaller screens and keeps the transaction table horizontally scrollable when needed. Cards have a subtle hover transition; reduced-motion settings turn transitions off.

<img width="1821" height="864" alt="Hand-Drawn Desktop and Mobile Wireframes" src="https://github.com/user-attachments/assets/3013f3e7-1d39-4261-9ed4-47112859d960" />



 **Implementation notes**

- The selected currency changes number formatting. Manual rates are saved in Settings but are not currently applied to convert transaction amounts.
- The default category list is provided as suggestions; users can enter another category in the transaction form. There is no separate category-management screen.
- The assignment asks for wireframes and milestone-based commits as part of the process. Those artifacts and the GitHub Pages URL must be added by the author if they are not already in the repository.

 **Project structure**

```text
index.html              Main app markup
styles.css              Responsive styles and theme rules
seed.json               Starter transaction records
tests.html              Browser-based validation checks
scripts/
  app.js                App events, rendering, sorting, search, import/export
  state.js              Shared state and settings persistence
  storage.js            localStorage read/write helpers
  ui.js                 Escaping, search highlighting, currency formatting
