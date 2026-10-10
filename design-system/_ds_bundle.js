/* @ds-bundle: {"format":4,"namespace":"AleksandrMeEnnIDesignSystem_ba8917","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"ExperienceItem","sourcePath":"components/content/ExperienceItem.jsx"},{"name":"ListRow","sourcePath":"components/content/ListRow.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"InlineForm","sourcePath":"components/forms/InlineForm.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Dock","sourcePath":"components/navigation/Dock.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"df747edc8354","components/actions/IconButton.jsx":"3c0b80484737","components/content/Accordion.jsx":"17a7ae6054b9","components/content/Badge.jsx":"6d1f1d704822","components/content/ExperienceItem.jsx":"df5acb31b843","components/content/ListRow.jsx":"4e46b4c9e621","components/content/ProjectCard.jsx":"fccd42370b97","components/content/SectionHeader.jsx":"f0360a2f56cd","components/content/Tag.jsx":"cac8387088ff","components/core/Icon.jsx":"7b8134a17531","components/forms/InlineForm.jsx":"808b6a5927e3","components/forms/Input.jsx":"f189b967894a","components/forms/Textarea.jsx":"28201b7d3234","components/navigation/Dock.jsx":"9ac493ad9a9a","ui_kits/portfolio/CV.jsx":"1a71e12e3b74","ui_kits/portfolio/Contact.jsx":"ea108d75b34a","ui_kits/portfolio/Home.jsx":"4647f05f3017","ui_kits/portfolio/Shell.jsx":"d131c219072c","ui_kits/portfolio/Work.jsx":"d1b0030dc311","ui_kits/portfolio/Writing.jsx":"7433d739cf47","ui_kits/portfolio/data.js":"51c66e3bf39d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AleksandrMeEnnIDesignSystem_ba8917 = window.AleksandrMeEnnIDesignSystem_ba8917 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Badge.jsx
try { (() => {
function Badge({
  variant = 'default',
  dot,
  pulse,
  children,
  className = ''
}) {
  const cls = ['am-badge', variant !== 'default' && 'am-badge--' + variant, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: 'am-dot' + (pulse ? ' am-dot--pulse' : '')
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 16,
  style,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: 'am-icon ' + className,
    style: {
      width: size,
      height: size,
      '--am-icon': 'url(' + CDN + name + '.svg)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  href,
  block,
  children,
  className = '',
  ...rest
}) {
  const cls = ['am-btn', variant !== 'secondary' && 'am-btn--' + variant, size !== 'md' && 'am-btn--' + size, block && 'am-btn--block', className].filter(Boolean).join(' ');
  const s = size === 'lg' ? 16 : 14;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s
  }));
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), inner) : /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  active,
  variant = 'plain',
  size = 'md',
  className = '',
  ...rest
}) {
  const cls = ['am-iconbtn', active && 'am-iconbtn--active', variant === 'outline' && 'am-iconbtn--outline', size === 'sm' && 'am-iconbtn--sm', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    className: cls
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function Accordion({
  title,
  children,
  defaultOpen = false,
  className = ''
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: 'am-acc' + (open ? ' am-acc--open' : '') + ' ' + className
  }, /*#__PURE__*/React.createElement("button", {
    className: "am-acc__head",
    onClick: () => setOpen(o => !o),
    "aria-expanded": open
  }, title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    className: "am-acc__chev",
    name: "chevron-down",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "am-acc__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "am-acc__inner"
  }, /*#__PURE__*/React.createElement("div", null, children))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/ExperienceItem.jsx
try { (() => {
function Role({
  r
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "am-exp__role"
  }, /*#__PURE__*/React.createElement("button", {
    className: "am-exp__rolehead",
    onClick: () => r.detail && setOpen(o => !o)
  }, r.title, r.detail && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    style: {
      color: 'var(--text-muted)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 200ms'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "am-exp__meta"
  }, r.meta), open && /*#__PURE__*/React.createElement("p", {
    className: "am-exp__detail"
  }, r.detail));
}
function ExperienceItem({
  org,
  logo,
  current,
  roles = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'am-exp ' + className
  }, /*#__PURE__*/React.createElement("span", {
    className: "am-exp__logo"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: ""
  }) : String(org).slice(0, 1)), /*#__PURE__*/React.createElement("div", {
    className: "am-exp__org"
  }, org, current && /*#__PURE__*/React.createElement("span", {
    className: "am-dot",
    style: {
      color: 'var(--signal-live)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "am-exp__roles"
  }, roles.map((r, i) => /*#__PURE__*/React.createElement(Role, {
    key: i,
    r: r
  }))));
}
Object.assign(__ds_scope, { ExperienceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ExperienceItem.jsx", error: String((e && e.message) || e) }); }

// components/content/ListRow.jsx
try { (() => {
function ListRow({
  title,
  subtitle,
  meta,
  thumb,
  icon,
  href,
  className = ''
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    className: 'am-row ' + className
  }, (thumb || icon) && /*#__PURE__*/React.createElement("span", {
    className: "am-row__thumb"
  }, thumb ? /*#__PURE__*/React.createElement("img", {
    src: thumb,
    alt: ""
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "am-row__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "am-row__sub"
  }, subtitle)), meta && /*#__PURE__*/React.createElement("span", {
    className: "am-row__meta"
  }, meta));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  description,
  status,
  image,
  tags = [],
  links = [],
  stacked,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: 'am-proj' + (stacked ? ' am-proj--stack' : '') + ' ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "am-proj__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "am-proj__ph"
  }, "project image")), /*#__PURE__*/React.createElement("div", {
    className: "am-proj__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "am-proj__title"
  }, title, status && /*#__PURE__*/React.createElement(__ds_scope.Badge, null, status)), description && /*#__PURE__*/React.createElement("p", {
    className: "am-proj__desc"
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "am-proj__tags"
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "am-badge am-badge--outline"
  }, t))), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "am-proj__actions"
  }, links.map((l, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: i,
    size: "sm",
    icon: l.icon,
    href: l.href || '#'
  }, l.label)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  title,
  lead,
  linkLabel,
  href,
  sans,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'am-sechead ' + className
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: 'am-sechead__title' + (sans ? ' am-sechead__title--sans' : '')
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "am-sechead__lead"
  }, lead)), linkLabel && /*#__PURE__*/React.createElement("a", {
    className: "am-sechead__link",
    href: href || '#'
  }, linkLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 12
  })));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  icon,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'am-tag ' + className
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/InlineForm.jsx
try { (() => {
function InlineForm({
  placeholder = 'Your email',
  action = 'Subscribe',
  type = 'email',
  onSubmit,
  className = ''
}) {
  const [v, setV] = React.useState('');
  return /*#__PURE__*/React.createElement("form", {
    className: 'am-inline ' + className,
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(v);
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: v,
    onChange: e => setV(e.target.value)
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    type: "submit"
  }, action));
}
Object.assign(__ds_scope, { InlineForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InlineForm.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  error,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: 'am-field' + (error ? ' am-field--error' : '') + ' ' + className
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  error,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: 'am-field' + (error ? ' am-field--error' : '') + ' ' + className
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Dock.jsx
try { (() => {
function Dock({
  items = [],
  active,
  onSelect,
  horizontal,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: 'am-dock' + (horizontal ? ' am-dock--h' : '') + ' ' + className
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    className: "am-dock__item"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: it.icon,
    label: it.label,
    active: active === it.id,
    onClick: () => onSelect && onSelect(it.id)
  }), /*#__PURE__*/React.createElement("span", {
    className: "am-dock__tip"
  }, it.label))));
}
Object.assign(__ds_scope, { Dock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Dock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CV.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeader: CSH,
  ExperienceItem,
  ListRow: CLR,
  Button: CB
} = window.AleksandrMeEnnIDesignSystem_ba8917;
function CV() {
  const D = window.PF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-display-serif)',
      color: 'var(--text-strong)'
    }
  }, "Story so far"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      color: 'var(--text-muted)',
      maxWidth: 500
    }
  }, "Six years designing products and brands, mostly from a desk by the Baltic Sea.")), /*#__PURE__*/React.createElement(CB, {
    icon: "download"
  }, "Resume")), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28
    }
  }, D.experience.map(e => /*#__PURE__*/React.createElement(ExperienceItem, _extends({
    key: e.org
  }, e))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(CSH, {
    title: "Stack"
  }), /*#__PURE__*/React.createElement("div", null, D.stack.map(s => /*#__PURE__*/React.createElement(CLR, _extends({
    key: s.title
  }, s))))));
}
window.CV = CV;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CV.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
const {
  SectionHeader: KSH,
  Accordion,
  Input,
  Textarea,
  Button: KB,
  InlineForm
} = window.AleksandrMeEnnIDesignSystem_ba8917;
function Contact() {
  const D = window.PF_DATA;
  const [sent, setSent] = React.useState(false);
  const [sub, setSub] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-display-serif)',
      color: 'var(--text-strong)'
    }
  }, "Let's talk"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      color: 'var(--text-muted)'
    }
  }, "Tell me a little about the project \u2014 I usually reply within a day."), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 32
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, "Thanks \u2014 message received."), " I'll get back to you soon.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Full name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email address",
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "Your message"
  }), /*#__PURE__*/React.createElement(KB, {
    variant: "primary",
    size: "lg",
    block: true,
    type: "submit"
  }, "Submit"))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(KSH, {
    sans: true,
    title: "FAQ",
    lead: "Things people usually ask first."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, D.faq.map(f => /*#__PURE__*/React.createElement(Accordion, {
    key: f.q,
    title: f.q
  }, f.a)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(KSH, {
    sans: true,
    title: "Newsletter",
    lead: "A short letter every few months. No noise."
  }), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, "You're on the list.") : /*#__PURE__*/React.createElement(InlineForm, {
    placeholder: "Your email",
    action: "Subscribe",
    onSubmit: () => setSub(true)
  })));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  Badge,
  SectionHeader,
  ListRow,
  ProjectCard
} = window.AleksandrMeEnnIDesignSystem_ba8917;
const B = ({
  children
}) => /*#__PURE__*/React.createElement("b", {
  style: {
    color: 'var(--text-strong)',
    fontWeight: 500
  }
}, children);
function Hero({
  go
}) {
  const [copied, setCopied] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "live",
    dot: true,
    pulse: true
  }, "Available for Q1 2027")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--fw-medium) var(--fs-36)/var(--lh-tight) var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-strong)'
    }
  }, "Hi, I'm Aleksandr."), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '4px 0 0',
      font: 'var(--fw-medium) var(--fs-36)/var(--lh-tight) var(--font-sans)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-subtle)'
    }
  }, "Designer from ", /*#__PURE__*/React.createElement("span", {
    className: "am-hl",
    style: {
      color: 'var(--text-strong)'
    }
  }, "Tallinn"), /*#__PURE__*/React.createElement("sup", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginLeft: 4
    }
  }, "4\xB0")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      color: 'var(--text-muted)',
      maxWidth: 560
    }
  }, "I'm a ", /*#__PURE__*/React.createElement(B, null, "product designer"), " who cares about ", /*#__PURE__*/React.createElement(B, null, "clarity"), ", quiet interfaces and the ", /*#__PURE__*/React.createElement(B, null, "last 5%"), " that makes a product feel finished. Currently freelancing with teams across the ", /*#__PURE__*/React.createElement(B, null, "Baltics"), " and ", /*#__PURE__*/React.createElement(B, null, "Nordics"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('cv')
  }, "About me"), /*#__PURE__*/React.createElement(Button, {
    icon: copied ? 'check' : 'copy',
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  }, copied ? 'Copied' : 'Email')));
}
function Home({
  go
}) {
  const D = window.PF_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Selected work",
    linkLabel: "See all",
    href: "#"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, D.projects.slice(0, 2).map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.id
  }, p))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Tools I reach for"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      lineHeight: 2.1
    }
  }, "Interfaces start in ", /*#__PURE__*/React.createElement(Tag, {
    icon: "figma"
  }, "Figma"), ", move to ", /*#__PURE__*/React.createElement(Tag, {
    icon: "framer"
  }, "Framer"), " when they need to breathe, brand work lives in ", /*#__PURE__*/React.createElement(Tag, {
    icon: "pen-tool"
  }, "Illustrator"), " and every project is planned in ", /*#__PURE__*/React.createElement(Tag, {
    icon: "notebook-pen"
  }, "Notion"), ".")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Writing",
    linkLabel: "All posts",
    href: "#"
  }), /*#__PURE__*/React.createElement("div", null, D.writing.map(w => /*#__PURE__*/React.createElement(ListRow, _extends({
    key: w.title
  }, w, {
    href: "#"
  }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, "Got a project in mind? Let's make it real."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, [['linkedin', 'LinkedIn'], ['dribbble', 'Dribbble'], ['instagram', 'Instagram'], ['file-text', 'Resume'], ['mail', 'Email']].map(([i, l]) => /*#__PURE__*/React.createElement(Button, {
    key: l,
    icon: i,
    href: "#"
  }, l)))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Shell.jsx
try { (() => {
const {
  Dock,
  IconButton
} = window.AleksandrMeEnnIDesignSystem_ba8917;
const DOCK_ITEMS = [{
  id: 'home',
  icon: 'compass',
  label: 'Home'
}, {
  id: 'work',
  icon: 'layers',
  label: 'Work'
}, {
  id: 'writing',
  icon: 'pen-tool',
  label: 'Writing'
}, {
  id: 'cv',
  icon: 'briefcase',
  label: 'CV'
}, {
  id: 'contact',
  icon: 'send',
  label: 'Contact'
}];
function Shell({
  page,
  go,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Dock, {
    items: DOCK_ITEMS,
    active: page,
    onSelect: go
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '96px var(--gutter) 48px'
    }
  }, children, /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 96,
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      font: 'var(--type-meta)',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Aleksandr Me\u017Eenn\xF5i"), /*#__PURE__*/React.createElement("span", null, "Tallinn, EE \xB7 59.43\xB0N 24.75\xB0E"))));
}
const Section = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    marginTop: 'var(--section-gap)',
    ...style
  }
}, children);
Object.assign(window, {
  Shell,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeader: WSH,
  ProjectCard: WPC,
  Button: WB
} = window.AleksandrMeEnnIDesignSystem_ba8917;
function Work() {
  const D = window.PF_DATA;
  const [f, setF] = React.useState('All');
  const filters = ['All', 'Product', 'Brand', 'Mobile', 'Design system'];
  const list = D.projects.filter(p => f === 'All' || p.tags.includes(f));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-display-serif)',
      color: 'var(--text-strong)'
    }
  }, "Work, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "2020\u20132026")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "A handful of projects I'm proud of. Each one shipped, or taught me why it shouldn't."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, filters.map(x => /*#__PURE__*/React.createElement(WB, {
    key: x,
    size: "sm",
    variant: x === f ? 'primary' : 'secondary',
    onClick: () => setF(x)
  }, x))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      marginTop: 20
    }
  }, list.map(p => /*#__PURE__*/React.createElement(WPC, _extends({
    key: p.id
  }, p)))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Writing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  ListRow: WLR
} = window.AleksandrMeEnnIDesignSystem_ba8917;
function Writing() {
  const D = window.PF_DATA;
  const all = [...D.writing, {
    title: 'On saying no to features',
    meta: 'Nov 12, 2025'
  }, {
    title: 'The grey between black and white',
    meta: 'Sep 3, 2025'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-display-serif)',
      color: 'var(--text-strong)'
    }
  }, "Writing"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 32px',
      color: 'var(--text-muted)'
    }
  }, "Irregular notes on design, craft and living in the north."), /*#__PURE__*/React.createElement("div", null, all.map(w => /*#__PURE__*/React.createElement(WLR, _extends({
    key: w.title
  }, w, {
    href: "#"
  })))));
}
window.Writing = Writing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Writing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
window.PF_DATA = {
  projects: [{
    id: 'kalm',
    title: 'Kalm Bank',
    status: 'case study',
    description: 'Rebuilding a retail banking app around one calm home screen. -38% support tickets in 6 months.',
    tags: ['Product', 'iOS', '2026'],
    links: [{
      label: 'Case study',
      icon: 'arrow-up-right'
    }, {
      label: 'Live',
      icon: 'globe'
    }]
  }, {
    id: 'vaal',
    title: 'Vaal Studio',
    status: 'branding',
    description: 'Identity and site for a Tallinn ceramics studio. Grey clay, one typeface, lots of air.',
    tags: ['Brand', 'Web', '2025'],
    links: [{
      label: 'Case study',
      icon: 'arrow-up-right'
    }]
  }, {
    id: 'tram',
    title: 'Tramm',
    status: 'concept',
    description: 'A transit companion for Tallinn that answers one question: when do I leave?',
    tags: ['Mobile', 'Concept', '2025'],
    links: [{
      label: 'Prototype',
      icon: 'play'
    }, {
      label: 'Notes',
      icon: 'file-text'
    }]
  }, {
    id: 'ledger',
    title: 'Ledger OS',
    description: 'Design system and dashboard for a B2B invoicing tool. 120 components, 3 themes.',
    tags: ['Design system', 'SaaS', '2024'],
    links: [{
      label: 'Case study',
      icon: 'arrow-up-right'
    }]
  }],
  writing: [{
    title: 'Designing quiet interfaces',
    meta: 'Aug 7, 2026'
  }, {
    title: 'Grids are a promise',
    meta: 'Mar 1, 2026'
  }, {
    title: 'Notes from a Tallinn winter',
    meta: 'Jan 20, 2026'
  }],
  stack: [{
    icon: 'figma',
    title: 'Figma',
    subtitle: 'Interface design'
  }, {
    icon: 'framer',
    title: 'Framer',
    subtitle: 'Prototyping & sites'
  }, {
    icon: 'pen-tool',
    title: 'Illustrator',
    subtitle: 'Brand & vector'
  }, {
    icon: 'notebook-pen',
    title: 'Notion',
    subtitle: 'Writing & planning'
  }],
  experience: [{
    org: 'Freelance',
    current: true,
    roles: [{
      title: 'Product Designer',
      meta: '2024 — Present · Tallinn · Remote',
      detail: 'Brand and product design for early-stage teams across the Baltics and Nordics.'
    }]
  }, {
    org: 'Northwave Studio',
    roles: [{
      title: 'Senior Designer',
      meta: '2022 — 2024 · Tallinn · Full-time',
      detail: 'Led design on fintech and mobility products; ran the internal design system.'
    }, {
      title: 'Designer',
      meta: '2020 — 2022 · Tallinn · Full-time'
    }]
  }, {
    org: 'Estonian Academy of Arts',
    roles: [{
      title: 'BA, Graphic Design',
      meta: '2016 — 2020 · Tallinn'
    }]
  }],
  faq: [{
    q: 'Are you available for freelance work?',
    a: 'Yes — I keep one or two project slots open each quarter. Reach out with a short brief.'
  }, {
    q: 'Do you work remotely?',
    a: 'Mostly. I\'m based in Tallinn (EET) and happy to travel for kick-offs.'
  }, {
    q: 'What does a typical engagement look like?',
    a: 'A two-week discovery sprint, then 4–8 weeks of design with weekly reviews.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ExperienceItem = __ds_scope.ExperienceItem;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.InlineForm = __ds_scope.InlineForm;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Dock = __ds_scope.Dock;

})();
