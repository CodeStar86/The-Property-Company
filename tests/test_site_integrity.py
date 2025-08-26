
import os, re, glob

ROOT = os.path.dirname(os.path.dirname(__file__))

def resolve_asset(path):
    # Accept root-absolute '/x' resolving to public/x then ROOT/x
    if path.startswith('/'):
        path1 = os.path.join(ROOT, 'public', path.lstrip('/'))
        path2 = os.path.join(ROOT, path.lstrip('/'))
        return path1 if os.path.exists(path1) else (path2 if os.path.exists(path2) else None)
    # relative to ROOT
    p = os.path.join(ROOT, path)
    return p if os.path.exists(p) else None

def test_index_html_exists():
    assert os.path.exists(os.path.join(ROOT, 'index.html'))

def test_local_assets_exist():
    # scan for urls like src="...", url(...), import '...'
    patterns = []
    for path in glob.glob(os.path.join(ROOT, '**/*.*'), recursive=True):
        ext = os.path.splitext(path)[1].lower()
        if ext not in ('.html', '.css', '.js', '.ts', '.tsx', '.jsx'):
            continue
        with open(path, 'r', errors='ignore') as f:
            content = f.read()
        # src="..." and href="..."
        for m in re.finditer(r'(?:src|href)\s*=\s*["\'](\/[^"\']+|\.[^"\']+|[^"\':?#]+(?:\.[a-zA-Z0-9]+))["\']', content):
            url = m.group(1)
            if url.startswith(('http://','https://','data:')): 
                continue
            # ignore Vite's /src/main.tsx in index.html
            if url.endswith('/src/main.tsx'): 
                continue
            resolved = resolve_asset(url)
            assert resolved is not None, f"Missing asset {url} referenced in {os.path.relpath(path, ROOT)}"
    # For React apps, skip .html link checks
