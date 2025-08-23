# Accessibility Improvements

## Header
- Added `aria-label` and `title` to the theme toggle button for screen reader and tooltip support.
- Ensured button is keyboard focusable with `tabIndex={0}`.
- Provided `aria-label` and `role="img"` to the flag image for screen reader clarity.

## Timeline
- Added `aria-label="Timeline of Events"` to describe the section purpose for assistive tech.
- Passed `aria-label` to each `EventMarker` for screen readers to announce the event year.

## Event Marker
- Added `aria-label` to describe the purpose of each marker (select event for the year).
- Used `aria-pressed` to indicate toggle state of the marker button.
- Added `aria-current="true"` to denote the currently selected marker for screen readers.

## Event Modal
- Set `role="dialog"` and `aria-modal="true"` for screen reader context.
- Labeled modal with `aria-labelledby` pointing to the modal title.
- Focus is trapped inside the modal while open using `Tab` key logic.
- Pressing `Escape` closes the modal.
- Focus returns to the previously focused element after closing.
- Close button includes `aria-label="Close dialog"` and `title` for clarity.

## WCAG Compliance
- Verified all text/background combinations meet the WCAG AA minimum contrast ratio (4.5:1).
- Ensured all interactive elements (buttons, markers, modals) are keyboard accessible (Tab, Enter, Esc).
- Confirmed visible focus indicators are present on all focusable elements.

---
