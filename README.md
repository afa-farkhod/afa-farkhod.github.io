## Profile Page

- Github page: <a href="https://afa-farkhod.github.io/" target="_blank"> afa-farkhod.github.io </a>

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
