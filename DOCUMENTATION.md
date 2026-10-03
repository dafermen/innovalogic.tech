# InnovaLogic — Documentation map and maintenance

## DOC-STD-20261002 — Canonical sources

Documentation standard v1.0 · reviewed 2026-10-02. Primary language: English.

Bilingual static portfolio website.

The public catalog lives in src/projects.js. Update both languages, availability labels and links together. Only dist/ is deployed. Keep hashed assets available while replacing index.html atomically and retain the previous site for rollback. The README records the authorized exclusions and deployment destination.

| Need | Authoritative source |
| --- | --- |
| Presentation | [README.md](README.md) |
| Current state | [README.md](README.md) |

For this repository, the README is the compact guide for scope and maintenance. Dedicated application manuals are only needed when an executable application exists.

### Evidence and updates

Keep current state, change history and decisions separate. Existing dated test results remain historical evidence. Adding this map does not rerun every documented command or complete pending product acceptance. Record actual checks, their environment and unresolved limits before publication.

Update the source guide whenever commands, configuration, behavior, permissions or deployment change. Keep existing links and portal routes stable. Use real screenshots with synthetic data; never publish env values, access keys, user data or operational logs. A local commit, a remote commit and a deployed artifact are separate states.


## Web reading

[Build and maintain the documentation reader](documentation-web/README.md).
