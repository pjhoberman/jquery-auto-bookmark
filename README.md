# jquery-auto-bookmark
Automatically add bookmarks to content

## Setup
jQuery is required.
Add `auto-bookmarks.js` to any file or project.

This will currently add a bookmark to every paragraph tag within `.entry-content`. Just change line 5:
  `$('.entry-content p').each(function(){`
to include the container and element you want to bookmark.
