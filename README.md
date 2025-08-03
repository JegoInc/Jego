# VitePress Site

This is a VitePress site with internationalization support.

## Directory Structure

```
docs/
├─ en/                    # English version
│  ├─ index.md           # English homepage
│  ├─ guide/             # English guides
│  ├─ devices/           # English device guides
│  ├─ membership/        # English membership
│  ├─ abuse/             # English usage guidelines
│  └─ tool/              # English tool guides
├─ index.md              # Chinese homepage (root)
├─ guide/                # Chinese guides
├─ devices/              # Chinese device guides
├─ membership/           # Chinese membership
├─ abuse/                # Chinese usage guidelines
└─ tool/                 # Chinese tool guides
```

## Internationalization Configuration

The site is configured with Chinese as the root language and English as an additional locale:

- **Root (Chinese)**: `/` - Main Chinese content
- **English**: `/en/` - English version

### Configuration Details

- Chinese is set as the root locale with `lang: 'zh-Hans'`
- English is configured as a separate locale with `lang: 'en'` and `link: '/en/'`
- Each locale has its own navigation, sidebar, and search translations
- The site supports language switching through the built-in VitePress i18n features

## Development

```bash
# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Adding Content

### For Chinese (Root)
- Add content directly to the appropriate directories under `docs/`
- Example: `docs/guide/new-feature.md`

### For English
- Add content to the corresponding directories under `docs/en/`
- Example: `docs/en/guide/new-feature.md`
- Update all internal links to include `/en/` prefix

## Notes

- All English content should be placed in the `docs/en/` directory
- Internal links in English content should include the `/en/` prefix
- Images and other assets are shared between both languages
- The configuration supports automatic language detection and switching 
