## Profile Page

- Github page: <a href="https://afa-farkhod.github.io/" target="_blank"> afa-farkhod.github.io </a>
- Tool: <a href="https://www.mkdocs.org/" target="_blank"> MkDocs </a>

### Update Page:

- Since local changes are on main and already have a `gh-pages` branch, just rebuild and push the site again.
- Make sure latest changes are pushed to main:
```
git add -A
git commit -m "Update site"
git push origin main
```
- Deploy MkDocs to gh-pages:
```
mkdocs gh-deploy --clean
```
