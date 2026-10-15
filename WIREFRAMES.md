   **Specs and Wireframes**

**Chosen theme and data model**

Student Finance Tracker. Each transaction is `{ id, description, amount, category, date, createdAt, updatedAt }`. Currency and cap preferences are separate settings. The app uses no third-party framework; ES modules separate validation, storage, state, presentation helpers, and event/render logic.

**Mobile-first wireframe sketches**

<img width="911" height="432" alt="image" src="https://github.com/user-attachments/assets/6ffd4bcc-20bc-4d84-963e-0189be5f562b" />


**Accessibility plan**

Use semantic landmarks and heading order; keep every action reachable by keyboard, return focus after closing the editor, provide a skip link and visible focus ring, label all controls, announce status and cap state, maintain sufficient contrast, mark search hits semantically, and respect reduced-motion preference. Check layouts around 360px, 768px, and 1024px.
