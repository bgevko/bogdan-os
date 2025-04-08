const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['./BVroogsP.js', './CTNqAv02.js', './entry.Kc70SGe-.css', './BmNWnaFO.js']),
) => i.map((i) => d[i]);
var Ls = Object.defineProperty;
var $s = Object.getPrototypeOf;
var Ms = Reflect.get;
var xn = (t) => {
  throw TypeError(t);
};
var Os = (t, e, n) =>
  e in t ? Ls(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n);
var g = (t, e, n) => Os(t, typeof e != 'symbol' ? e + '' : e, n),
  xt = (t, e, n) => e.has(t) || xn('Cannot ' + n);
var U = (t, e, n) => (xt(t, e, 'read from private field'), n ? n.call(t) : e.get(t)),
  me = (t, e, n) =>
    e.has(t)
      ? xn('Cannot add the same private member more than once')
      : e instanceof WeakSet
        ? e.add(t)
        : e.set(t, n),
  Q = (t, e, n, r) => (xt(t, e, 'write to private field'), r ? r.call(t, n) : e.set(t, n), n),
  Et = (t, e, n) => (xt(t, e, 'access private method'), n);
var En = (t, e, n) => Ms($s(t), n, e);
import {
  $ as qt,
  e as it,
  i as Re,
  h as Cr,
  c as Z,
  o as z,
  a as xe,
  n as yr,
  t as Gs,
  B as Vt,
  S as Be,
  C as Bs,
  a5 as De,
  D as Rt,
  l as It,
  Z as Rn,
  s as Nt,
  a6 as Ds,
  w as Pt,
  k as In,
  F as Nn,
  p as Pn,
  b as Fs,
} from './CTNqAv02.js';
const Tn = {
  ts: 200,
  typescript: 200,
  '@typescript-eslint': 200,
  ignore: '#888888',
  ignores: '#888888',
  disable: '#888888',
  disables: '#888888',
  vue: '#41b883',
  nuxt: '#41b883',
  svelte: '#ff3e00',
  react: '#61dafb',
  node: 110,
  n: 110,
  js: 50,
  javascript: 50,
  antfu: 170,
  markdown: 270,
};
function js(t, e = 1) {
  let n = 0;
  for (let s = 0; s < t.length; s++) n = t.charCodeAt(s) + ((n << 5) - n);
  const r = n % 360;
  return _r(r, e);
}
function _r(t, e = 1) {
  const n = qt.value ? 50 : 65,
    r = qt.value ? 60 : 40;
  return `hsla(${t}, ${n}%, ${r}%, ${e})`;
}
function Us(t, e = 1) {
  if (Tn[t]) {
    const n = Tn[t];
    if (typeof n == 'number') return _r(n, e);
    {
      if (e === 1) return n;
      const r = Math.floor(e * 255)
        .toString(16)
        .padStart(2, '0');
      return n + r;
    }
  }
  return js(t, e);
}
const Ws = [
    { match: /package\.json$/, icon: 'i-file-icons-npm text-red scale-110' },
    { match: /eslint\.config\.\w+$/, icon: 'i-file-icons-eslint text-primary' },
    { match: /\.[mc]?jsx?$/, icon: 'i-vscode-icons-file-type-js-official' },
    { match: /\.[mc]?tsx?$/, icon: 'i-file-icons-typescript-alt text-blue3' },
    { match: /\.vue$/, icon: 'i-logos-vue' },
    { match: /\.svelte$/, icon: 'i-logos-svelte-icon' },
    { match: /\.html?$/, icon: 'i-devicon-html5' },
    { match: /\.md$/, icon: 'i-simple-icons-markdown text-gray' },
    { match: /\.json[c5]?$/, icon: 'i-simple-icons-json text-gray' },
    { match: /\.css$/, icon: 'i-vscode-icons-file-type-css' },
  ],
  zs = { flex: '~ gap-2 items-center' },
  Hs = it({
    __name: 'FileItem',
    props: { filepath: {} },
    setup(t) {
      const e = t,
        n = Re(() => {
          for (const a of Ws) if (a.match.test(e.filepath)) return a.icon;
          return 'i-ph-file-duotone';
        }),
        r = Cr();
      function s() {
        (Vt.filepath = e.filepath), (Vt.rule = void 0), r.push('/configs');
      }
      return (a, o) => (
        z(),
        Z('div', zs, [
          xe(
            'div',
            { class: yr(n.value), 'flex-none': '', h: '1em', 'translate-y-1px': '' },
            null,
            2,
          ),
          xe('button', { 'text-gray': '', hover: 'underline', onClick: s }, Gs(a.filepath), 1),
        ])
      );
    },
  }),
  qs = it({
    props: { name: { type: String }, index: { type: Number } },
    setup(t) {
      const e = Re(() => {
        var n;
        return (n = t.name) == null ? void 0 : n.split(/([:/])/g).filter(Boolean);
      });
      return () =>
        e.value
          ? Be(
              'span',
              e.value.map((n, r) =>
                Be(
                  'span',
                  [':', '/'].includes(n)
                    ? { style: { opacity: 0.35, margin: '0 1px' } }
                    : r !== e.value.length - 1
                      ? { style: { color: Us(n) } }
                      : null,
                  n,
                ),
              ),
            )
          : Be('span', [
              Be('span', { class: 'op50 italic' }, 'anonymous'),
              t.index != null ? Be('span', { class: 'op50 text-sm' }, ` #${t.index + 1}`) : null,
            ]);
    },
  }),
  hn = String.raw,
  Ln = hn`(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})`,
  $n = hn`\u{E0061}-\u{E007A}`,
  Vs = () =>
    new RegExp(
      hn`[\u{1F1E6}-\u{1F1FF}]{2}|\u{1F3F4}[${$n}]{2}[\u{E0030}-\u{E0039}${$n}]{1,3}\u{E007F}|${Ln}(?:\u200D${Ln})*`,
      'gu',
    ),
  Ks = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
function Xs(t, e) {
  for (let n = 0; n < t.length; n++) t[n] >= e && t[n]++;
}
function Qs(t, e, n, r) {
  return t.slice(0, e) + r + t.slice(e + n.length);
}
const X = Object.freeze({ DEFAULT: 'DEFAULT', CHAR_CLASS: 'CHAR_CLASS' });
function pn(t, e, n, r) {
  const s = new RegExp(String.raw`${e}|(?<$skip>\[\^?|\\?.)`, 'gsu'),
    a = [!1];
  let o = 0,
    i = '';
  for (const l of t.matchAll(s)) {
    const {
      0: c,
      groups: { $skip: u },
    } = l;
    if (!u && (!r || (r === X.DEFAULT) == !o)) {
      n instanceof Function
        ? (i += n(l, { context: o ? X.CHAR_CLASS : X.DEFAULT, negated: a[a.length - 1] }))
        : (i += n);
      continue;
    }
    c[0] === '[' ? (o++, a.push(c[1] === '^')) : c === ']' && o && (o--, a.pop()), (i += c);
  }
  return i;
}
function br(t, e, n, r) {
  pn(t, e, n, r);
}
function Js(t, e, n = 0, r) {
  if (!new RegExp(e, 'su').test(t)) return null;
  const s = new RegExp(`${e}|(?<$skip>\\\\?.)`, 'gsu');
  s.lastIndex = n;
  let a = 0,
    o;
  for (; (o = s.exec(t)); ) {
    const {
      0: i,
      groups: { $skip: l },
    } = o;
    if (!l && (!r || (r === X.DEFAULT) == !a)) return o;
    i === '[' ? a++ : i === ']' && a && a--, s.lastIndex == o.index && s.lastIndex++;
  }
  return null;
}
function Ye(t, e, n) {
  return !!Js(t, e, 0, n);
}
function Zs(t, e) {
  const n = /\\?./gsu;
  n.lastIndex = e;
  let r = t.length,
    s = 0,
    a = 1,
    o;
  for (; (o = n.exec(t)); ) {
    const [i] = o;
    if (i === '[') s++;
    else if (s) i === ']' && s--;
    else if (i === '(') a++;
    else if (i === ')' && (a--, !a)) {
      r = o.index;
      break;
    }
  }
  return t.slice(e, r);
}
const Mn = new RegExp(
  String.raw`(?<noncapturingStart>${Ks})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`,
  'gsu',
);
function Ys(t, e) {
  const n = (e == null ? void 0 : e.hiddenCaptures) ?? [];
  let r = (e == null ? void 0 : e.captureTransfers) ?? new Map();
  if (!/\(\?>/.test(t)) return { pattern: t, captureTransfers: r, hiddenCaptures: n };
  const s = '(?>',
    a = '(?:(?=(',
    o = [0],
    i = [];
  let l = 0,
    c = 0,
    u = NaN,
    h;
  do {
    h = !1;
    let f = 0,
      p = 0,
      d = !1,
      b;
    for (Mn.lastIndex = Number.isNaN(u) ? 0 : u + a.length; (b = Mn.exec(t)); ) {
      const {
        0: m,
        index: _,
        groups: { capturingStart: w, noncapturingStart: k },
      } = b;
      if (m === '[') f++;
      else if (f) m === ']' && f--;
      else if (m === s && !d) (u = _), (d = !0);
      else if (d && k) p++;
      else if (w) d ? p++ : (l++, o.push(l + c));
      else if (m === ')' && d) {
        if (!p) {
          c++;
          const E = l + c;
          if (
            ((t = `${t.slice(0, u)}${a}${t.slice(u + s.length, _)}))<$$${E}>)${t.slice(_ + 1)}`),
            (h = !0),
            i.push(E),
            Xs(n, E),
            r.size)
          ) {
            const I = new Map();
            r.forEach((G, P) => {
              I.set(
                P >= E ? P + 1 : P,
                G.map((B) => (B >= E ? B + 1 : B)),
              );
            }),
              (r = I);
          }
          break;
        }
        p--;
      }
    }
  } while (h);
  return (
    n.push(...i),
    (t = pn(
      t,
      String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`,
      ({ 0: f, groups: { backrefNum: p, wrappedBackrefNum: d } }) => {
        if (p) {
          const b = +p;
          if (b > o.length - 1) throw new Error(`Backref "${f}" greater than number of captures`);
          return `\\${o[b]}`;
        }
        return `\\${d}`;
      },
      X.DEFAULT,
    )),
    { pattern: t, captureTransfers: r, hiddenCaptures: n }
  );
}
const wr = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`,
  Tt = new RegExp(
    String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${wr})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ''),
    'gsu',
  );
function ea(t) {
  if (!new RegExp(`${wr}\\+`).test(t)) return { pattern: t };
  const e = [];
  let n = null,
    r = null,
    s = '',
    a = 0,
    o;
  for (Tt.lastIndex = 0; (o = Tt.exec(t)); ) {
    const {
      0: i,
      index: l,
      groups: { qBase: c, qMod: u, invalidQ: h },
    } = o;
    if (i === '[') a || (r = l), a++;
    else if (i === ']') a ? a-- : (r = null);
    else if (!a)
      if (u === '+' && s && !s.startsWith('(')) {
        if (h) throw new Error(`Invalid quantifier "${i}"`);
        let f = -1;
        if (/^\{\d+\}$/.test(c)) t = Qs(t, l + c.length, u, '');
        else {
          if (s === ')' || s === ']') {
            const p = s === ')' ? n : r;
            if (p === null) throw new Error(`Invalid unmatched "${s}"`);
            t = `${t.slice(0, p)}(?>${t.slice(p, l)}${c})${t.slice(l + i.length)}`;
          } else t = `${t.slice(0, l - s.length)}(?>${s}${c})${t.slice(l + i.length)}`;
          f += 4;
        }
        Tt.lastIndex += f;
      } else i[0] === '(' ? e.push(l) : i === ')' && (n = e.length ? e.pop() : null);
    s = i;
  }
  return { pattern: t };
}
const K = String.raw,
  ta = K`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`,
  Kt = K`\(\?R=(?<rDepth>[^\)]+)\)|${ta}`,
  bt = K`\(\?<(?![=!])(?<captureName>[^>]+)>`,
  Sr = K`${bt}|(?<unnamed>\()(?!\?)`,
  Ce = new RegExp(K`${bt}|${Kt}|\(\?|\\?.`, 'gsu'),
  Lt = 'Cannot use multiple overlapping recursions';
function na(t, e) {
  const { hiddenCaptures: n, mode: r } = { hiddenCaptures: [], mode: 'plugin', ...e };
  let s = (e == null ? void 0 : e.captureTransfers) ?? new Map();
  if (!new RegExp(Kt, 'su').test(t)) return { pattern: t, captureTransfers: s, hiddenCaptures: n };
  if (r === 'plugin' && Ye(t, K`\(\?\(DEFINE\)`, X.DEFAULT))
    throw new Error('DEFINE groups cannot be used with recursion');
  const a = [],
    o = Ye(t, K`\\[1-9]`, X.DEFAULT),
    i = new Map(),
    l = [];
  let c = !1,
    u = 0,
    h = 0,
    f;
  for (Ce.lastIndex = 0; (f = Ce.exec(t)); ) {
    const {
      0: p,
      groups: { captureName: d, rDepth: b, gRNameOrNum: m, gRDepth: _ },
    } = f;
    if (p === '[') u++;
    else if (u) p === ']' && u--;
    else if (b) {
      if ((On(b), c)) throw new Error(Lt);
      if (o)
        throw new Error(
          `${r === 'external' ? 'Backrefs' : 'Numbered backrefs'} cannot be used with global recursion`,
        );
      const w = t.slice(0, f.index),
        k = t.slice(Ce.lastIndex);
      if (Ye(k, Kt, X.DEFAULT)) throw new Error(Lt);
      const E = +b - 1;
      (t = Gn(w, k, E, !1, n, a, h)), (s = Dn(s, w, E, a.length, 0, h));
      break;
    } else if (m) {
      On(_);
      let w = !1;
      for (const le of l)
        if (le.name === m || le.num === +m) {
          if (((w = !0), le.hasRecursedWithin)) throw new Error(Lt);
          break;
        }
      if (!w)
        throw new Error(
          K`Recursive \g cannot be used outside the referenced group "${r === 'external' ? m : K`\g<${m}&R=${_}>`}"`,
        );
      const k = i.get(m),
        E = Zs(t, k);
      if (o && Ye(E, K`${bt}|\((?!\?)`, X.DEFAULT))
        throw new Error(
          `${r === 'external' ? 'Backrefs' : 'Numbered backrefs'} cannot be used with recursion of capturing groups`,
        );
      const I = t.slice(k, f.index),
        G = E.slice(I.length + p.length),
        P = a.length,
        B = +_ - 1,
        de = Gn(I, G, B, !0, n, a, h);
      s = Dn(s, I, B, a.length - P, P, h);
      const ge = t.slice(0, k),
        Ge = t.slice(k + E.length);
      (t = `${ge}${de}${Ge}`),
        (Ce.lastIndex += de.length - p.length - I.length - G.length),
        l.forEach((le) => (le.hasRecursedWithin = !0)),
        (c = !0);
    } else if (d)
      h++, i.set(String(h), Ce.lastIndex), i.set(d, Ce.lastIndex), l.push({ num: h, name: d });
    else if (p[0] === '(') {
      const w = p === '(';
      w && (h++, i.set(String(h), Ce.lastIndex)), l.push(w ? { num: h } : {});
    } else p === ')' && l.pop();
  }
  return n.push(...a), { pattern: t, captureTransfers: s, hiddenCaptures: n };
}
function On(t) {
  const e = `Max depth must be integer between 2 and 100; used ${t}`;
  if (!/^[1-9]\d*$/.test(t)) throw new Error(e);
  if (((t = +t), t < 2 || t > 100)) throw new Error(e);
}
function Gn(t, e, n, r, s, a, o) {
  const i = new Set();
  r &&
    br(
      t + e,
      bt,
      ({ groups: { captureName: c } }) => {
        i.add(c);
      },
      X.DEFAULT,
    );
  const l = [n, r ? i : null, s, a, o];
  return `${t}${Bn(`(?:${t}`, 'forward', ...l)}(?:)${Bn(`${e})`, 'backward', ...l)}${e}`;
}
function Bn(t, e, n, r, s, a, o) {
  const l = (u) => (e === 'forward' ? u + 2 : n - u + 2 - 1);
  let c = '';
  for (let u = 0; u < n; u++) {
    const h = l(u);
    c += pn(
      t,
      K`${Sr}|\\k<(?<backref>[^>]+)>`,
      ({ 0: f, groups: { captureName: p, unnamed: d, backref: b } }) => {
        if (b && r && !r.has(b)) return f;
        const m = `_$${h}`;
        if (d || p) {
          const _ = o + a.length + 1;
          return a.push(_), ra(s, _), d ? f : `(?<${p}${m}>`;
        }
        return K`\k<${b}${m}>`;
      },
      X.DEFAULT,
    );
  }
  return c;
}
function ra(t, e) {
  for (let n = 0; n < t.length; n++) t[n] >= e && t[n]++;
}
function Dn(t, e, n, r, s, a) {
  if (t.size && r) {
    let o = 0;
    br(e, Sr, () => o++, X.DEFAULT);
    const i = a - o + s,
      l = new Map();
    return (
      t.forEach((c, u) => {
        const h = (r - o * n) / n,
          f = o * n,
          p = u > i + o ? u + r : u,
          d = [];
        for (const b of c)
          if (b <= i) d.push(b);
          else if (b > i + o + h) d.push(b + r);
          else if (b <= i + o) for (let m = 0; m <= n; m++) d.push(b + o * m);
          else for (let m = 0; m <= n; m++) d.push(b + f + h * m);
        l.set(p, d);
      }),
      l
    );
  }
  return t;
}
var $ = String.fromCodePoint,
  S = String.raw,
  Te = {
    flagGroups: (() => {
      try {
        new RegExp('(?i:)');
      } catch {
        return !1;
      }
      return !0;
    })(),
    unicodeSets: (() => {
      try {
        new RegExp('', 'v');
      } catch {
        return !1;
      }
      return !0;
    })(),
  };
Te.literalHyphenIncorrectlyCreatesRange = (() => {
  if (!Te.unicodeSets) return !1;
  try {
    new RegExp(S`[\d\-a]`, 'v');
  } catch {
    return !0;
  }
  return !1;
})();
function lt(t, { enable: e, disable: n }) {
  return {
    dotAll: !(n != null && n.dotAll) && !!((e != null && e.dotAll) || t.dotAll),
    ignoreCase: !(n != null && n.ignoreCase) && !!((e != null && e.ignoreCase) || t.ignoreCase),
  };
}
function Le(t, e, n) {
  return t.has(e) || t.set(e, n), t.get(e);
}
function Xt(t, e) {
  return Fn[t] >= Fn[e];
}
function te(t, e) {
  if (!t) throw new Error(e ?? 'Value expected');
  return t;
}
var Fn = { ES2025: 2025, ES2024: 2024, ES2018: 2018 },
  sa = { auto: 'auto', ES2025: 'ES2025', ES2024: 'ES2024', ES2018: 'ES2018' };
function vr(t) {
  if ((t == null ? void 0 : t.target) !== void 0 && !sa[t.target])
    throw new Error(`Unexpected target "${t.target}"`);
  const e = {
    accuracy: 'default',
    avoidSubclass: !1,
    flags: '',
    global: !1,
    hasIndices: !1,
    lazyCompileLength: 1 / 0,
    target: 'auto',
    verbose: !1,
    ...t,
    rules: {
      allowOrphanBackrefs: !1,
      asciiWordBoundaries: !1,
      captureGroup: !1,
      recursionLimit: 20,
      singleline: !1,
      ...(t == null ? void 0 : t.rules),
    },
  };
  return (
    e.target === 'auto' &&
      (e.target = Te.flagGroups ? 'ES2025' : Te.unicodeSets ? 'ES2024' : 'ES2018'),
    e
  );
}
var aa = new Set([$(304), $(305)]);
function kr(t) {
  if (aa.has(t)) return [t];
  const e = new Set(),
    n = t.toLowerCase(),
    r = n.toUpperCase(),
    s = ca.get(n),
    a = ia.get(n),
    o = la.get(n);
  return (
    [...r].length === 1 && e.add(r), o && e.add(o), s && e.add(s), e.add(n), a && e.add(a), [...e]
  );
}
var Ar = new Set(
    `C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/),
  ),
  xr = new Map();
for (const t of Ar) xr.set(wt(t), t);
var oa = new Set([
    'Basic_Emoji',
    'Emoji_Keycap_Sequence',
    'RGI_Emoji',
    'RGI_Emoji_Flag_Sequence',
    'RGI_Emoji_Modifier_Sequence',
    'RGI_Emoji_Tag_Sequence',
    'RGI_Emoji_ZWJ_Sequence',
  ]),
  Er = new Map();
for (const t of oa) Er.set(wt(t), t);
var ia = new Map([
    ['s', $(383)],
    [$(383), 's'],
  ]),
  la = new Map([
    [$(223), $(7838)],
    [$(107), $(8490)],
    [$(229), $(8491)],
    [$(969), $(8486)],
  ]),
  ca = new Map([
    ce(453),
    ce(456),
    ce(459),
    ce(498),
    ...$t(8072, 8079),
    ...$t(8088, 8095),
    ...$t(8104, 8111),
    ce(8124),
    ce(8140),
    ce(8188),
  ]),
  Rr = new Map([
    ['alnum', S`[\p{Alpha}\p{Nd}]`],
    ['alpha', S`\p{Alpha}`],
    ['ascii', S`\p{ASCII}`],
    ['blank', S`[\p{Zs}\t]`],
    ['cntrl', S`\p{cntrl}`],
    ['digit', S`\p{Nd}`],
    ['graph', S`[\P{space}&&\P{cntrl}&&\P{Cn}&&\P{Cs}]`],
    ['lower', S`\p{Lower}`],
    ['print', S`[[\P{space}&&\P{cntrl}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
    ['punct', S`[\p{P}\p{S}]`],
    ['space', S`\p{space}`],
    ['upper', S`\p{Upper}`],
    ['word', S`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
    ['xdigit', S`\p{AHex}`],
  ]),
  ua = new Set(['alnum', 'blank', 'graph', 'print', 'word', 'xdigit']);
function ha(t, e) {
  const n = [];
  for (let r = t; r <= e; r++) n.push(r);
  return n;
}
function wt(t) {
  return t.replace(/[- _]+/g, '').toLowerCase();
}
function ce(t) {
  const e = $(t);
  return [e.toLowerCase(), e];
}
function $t(t, e) {
  return ha(t, e).map((n) => ce(n));
}
var Ir = new Set([
    'Lower',
    'Lowercase',
    'Upper',
    'Uppercase',
    'Ll',
    'Lowercase_Letter',
    'Lt',
    'Titlecase_Letter',
    'Lu',
    'Uppercase_Letter',
  ]),
  v = {
    Alternator: 'Alternator',
    Assertion: 'Assertion',
    Backreference: 'Backreference',
    Character: 'Character',
    CharacterClassClose: 'CharacterClassClose',
    CharacterClassHyphen: 'CharacterClassHyphen',
    CharacterClassIntersector: 'CharacterClassIntersector',
    CharacterClassOpen: 'CharacterClassOpen',
    CharacterSet: 'CharacterSet',
    Directive: 'Directive',
    GroupClose: 'GroupClose',
    GroupOpen: 'GroupOpen',
    Subroutine: 'Subroutine',
    Quantifier: 'Quantifier',
    VariableLengthCharacterSet: 'VariableLengthCharacterSet',
    EscapedNumber: 'EscapedNumber',
  },
  O = {
    any: 'any',
    digit: 'digit',
    dot: 'dot',
    hex: 'hex',
    non_newline: 'non_newline',
    posix: 'posix',
    property: 'property',
    space: 'space',
    word: 'word',
  },
  St = { flags: 'flags', keep: 'keep' },
  F = {
    absent_repeater: 'absent_repeater',
    atomic: 'atomic',
    capturing: 'capturing',
    group: 'group',
    lookahead: 'lookahead',
    lookbehind: 'lookbehind',
  },
  jn = new Map([
    ['a', 7],
    ['b', 8],
    ['e', 27],
    ['f', 12],
    ['n', 10],
    ['r', 13],
    ['t', 9],
    ['v', 11],
  ]),
  Nr = S`\[\^?`,
  Pr = `c.? | C(?:-.?)?|${S`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${S`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${S`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${S`o\{[^\}]*\}?`}|${S`\d{1,3}`}`,
  Tr = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/,
  et = new RegExp(
    S`
  \\ (?:
    ${Pr}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*
  )?
  | ${Tr.source}
  | ${Nr}
  | .
`.replace(/\s+/g, ''),
    'gsu',
  ),
  Mt = new RegExp(
    S`
  \\ (?:
    ${Pr}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${Nr}
  | &&
  | .
`.replace(/\s+/g, ''),
    'gsu',
  );
function Lr(t, e = '', n) {
  if (((n = { captureGroup: !1, singleline: !1, ...n }), typeof t != 'string'))
    throw new Error('String expected as pattern');
  if (!/^[imxDSW]*$/.test(e)) throw new Error(`Flags "${e}" includes unsupported value`);
  const r = e.includes('x'),
    s = [r],
    a = {
      captureGroup: n.captureGroup,
      getCurrentModX: () => s.at(-1),
      numOpenGroups: 0,
      popModX() {
        s.pop();
      },
      pushModX(h) {
        s.push(h);
      },
      replaceCurrentModX(h) {
        s[s.length - 1] = h;
      },
      singleline: n.singleline,
    };
  let o = [],
    i;
  for (et.lastIndex = 0; (i = et.exec(t)); ) {
    const h = pa(a, t, i[0], et.lastIndex);
    h.tokens ? o.push(...h.tokens) : h.token && o.push(h.token),
      h.lastIndex !== void 0 && (et.lastIndex = h.lastIndex);
  }
  const l = [];
  let c = 0;
  o.forEach((h) => {
    h.type === v.GroupOpen &&
      (h.kind === F.capturing ? (h.number = ++c) : h.raw === '(' && l.push(h));
  }),
    c ||
      l.forEach((h, f) => {
        (h.kind = F.capturing), (h.number = f + 1);
      });
  const u = c || l.length;
  return (
    (o = o.map((h) => (h.type === v.EscapedNumber ? wa(h, u) : h)).flat()),
    {
      tokens: o,
      flags: {
        ignoreCase: e.includes('i'),
        dotAll: e.includes('m'),
        extended: r,
        digitIsAscii: e.includes('D'),
        spaceIsAscii: e.includes('S'),
        wordIsAscii: e.includes('W'),
      },
      rules: n,
    }
  );
}
function pa(t, e, n, r) {
  const [s, a] = n;
  if (s === '[') {
    const o = fa(e, n, r);
    return { tokens: o.tokens, lastIndex: o.lastIndex };
  }
  if (s === '\\') {
    if ('AbBGzZ'.includes(a)) return { token: x(v.Assertion, n, { kind: n }) };
    if (/^\\g[<']/.test(n)) {
      if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(n)) throw new Error(`Invalid group name "${n}"`);
      return { token: x(v.Subroutine, n) };
    }
    if (/^\\k[<']/.test(n)) {
      if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(n)) throw new Error(`Invalid group name "${n}"`);
      return { token: x(v.Backreference, n) };
    }
    if (a === 'K') return { token: x(v.Directive, n, { kind: St.keep }) };
    if (a === 'N') return { token: x(v.CharacterSet, n, { kind: O.non_newline }) };
    if (a === 'O') return { token: x(v.CharacterSet, n, { kind: O.any }) };
    if ('RX'.includes(a)) return { token: x(v.VariableLengthCharacterSet, n, { kind: n }) };
    if ('yY'.includes(a)) throw new Error(`Unsupported grapheme boundary "${n}"`);
    const o = $r(n, { inCharClass: !1 });
    return Array.isArray(o) ? { tokens: o } : { token: o };
  }
  if (s === '(') {
    if (n === '(*') throw new Error(`Unsupported named callout "${n}"`);
    if (n === '(?{') throw new Error(`Unsupported callout "${n}"`);
    if (n === '(?#') {
      if (e[r] !== ')') throw new Error('Unclosed comment group "(?#"');
      return { lastIndex: r + 1 };
    }
    if (/^\(\?[-imx]+[:)]$/.test(n)) return { token: ma(n, t) };
    if (
      (t.pushModX(t.getCurrentModX()),
      t.numOpenGroups++,
      (n === '(' && !t.captureGroup) || n === '(?:')
    )
      return { token: x(v.GroupOpen, n, { kind: F.group }) };
    if (n === '(?>') return { token: x(v.GroupOpen, n, { kind: F.atomic }) };
    if (n === '(?=' || n === '(?!' || n === '(?<=' || n === '(?<!')
      return {
        token: x(v.GroupOpen, n, {
          kind: n[2] === '<' ? F.lookbehind : F.lookahead,
          negate: n.endsWith('!'),
        }),
      };
    if (
      (n === '(' && t.captureGroup) ||
      (n.startsWith('(?<') && n.endsWith('>')) ||
      (n.startsWith("(?'") && n.endsWith("'"))
    ) {
      const o = x(v.GroupOpen, n, { kind: F.capturing });
      return n !== '(' && (o.name = n.slice(3, -1)), { token: o };
    }
    if (n.startsWith('(?~')) {
      if (n === '(?~|') throw new Error(`Unsupported absent function kind "${n}"`);
      return { token: x(v.GroupOpen, n, { kind: F.absent_repeater }) };
    }
    throw n === '(?('
      ? new Error(`Unsupported conditional "${n}"`)
      : new Error(`Invalid or unsupported group option "${n}"`);
  }
  if (n === ')') {
    if ((t.popModX(), t.numOpenGroups--, t.numOpenGroups < 0)) throw new Error('Unmatched ")"');
    return { token: x(v.GroupClose, n) };
  }
  if (n === '#' && t.getCurrentModX()) {
    const o = e.indexOf(
      `
`,
      r,
    );
    return { lastIndex: o === -1 ? e.length : o };
  }
  if (/^\s$/.test(n) && t.getCurrentModX()) {
    const o = /\s+/y;
    return (o.lastIndex = r), { lastIndex: o.exec(e) ? o.lastIndex : r };
  }
  if (n === '.') return { token: x(v.CharacterSet, n, { kind: O.dot }) };
  if (n === '^' || n === '$') {
    const o = t.singleline ? { '^': S`\A`, $: S`\Z` }[n] : n;
    return { token: x(v.Assertion, n, { kind: o }) };
  }
  return n === '|'
    ? { token: x(v.Alternator, n) }
    : Tr.test(n)
      ? { token: Ca(n) }
      : (Mr(n), { token: x(v.Character, n, { value: n.codePointAt(0) }) });
}
function fa(t, e, n) {
  const r = [x(v.CharacterClassOpen, e, { negate: e[1] === '^' })];
  let s = 1,
    a;
  for (Mt.lastIndex = n; (a = Mt.exec(t)); ) {
    const o = a[0];
    if (o[0] === '[' && o[1] !== ':')
      s++, r.push(x(v.CharacterClassOpen, o, { negate: o[1] === '^' }));
    else if (o === ']') {
      if (r.at(-1).type === v.CharacterClassOpen) r.push(x(v.Character, o, { value: 93 }));
      else if ((s--, r.push(x(v.CharacterClassClose, o)), !s)) break;
    } else {
      const i = da(o);
      Array.isArray(i) ? r.push(...i) : r.push(i);
    }
  }
  return { tokens: r, lastIndex: Mt.lastIndex || t.length };
}
function da(t) {
  if (t[0] === '\\') return $r(t, { inCharClass: !0 });
  if (t[0] === '[') {
    const e = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(t);
    if (!e || !Rr.get(e.groups.name)) throw new Error(`Invalid POSIX class "${t}"`);
    return x(v.CharacterSet, t, { kind: O.posix, negate: !!e.groups.negate, value: e.groups.name });
  }
  return t === '-'
    ? x(v.CharacterClassHyphen, t)
    : t === '&&'
      ? x(v.CharacterClassIntersector, t)
      : (Mr(t), x(v.Character, t, { value: t.codePointAt(0) }));
}
function $r(t, { inCharClass: e }) {
  const n = t[1];
  if (n === 'c' || n === 'C') return ga(t);
  if ('dDhHsSwW'.includes(n)) return ya(t);
  if (t.startsWith(S`\o{`))
    throw new Error(`Incomplete, invalid, or unsupported octal code point "${t}"`);
  if (/^\\[pP]\{/.test(t)) {
    if (t.length === 3) throw new Error(`Incomplete or invalid Unicode property "${t}"`);
    return _a(t);
  }
  if (new RegExp('^\\\\x[89A-Fa-f]\\p{AHex}', 'u').test(t))
    try {
      const r = t
          .split(/\\x/)
          .slice(1)
          .map((i) => parseInt(i, 16)),
        s = new TextDecoder('utf-8', { ignoreBOM: !0, fatal: !0 }).decode(new Uint8Array(r)),
        a = new TextEncoder();
      return [...s].map((i) => {
        const l = [...a.encode(i)].map((c) => `\\x${c.toString(16)}`).join('');
        return x(v.Character, l, { value: i.codePointAt(0) });
      });
    } catch {
      throw new Error(`Multibyte code "${t}" incomplete or invalid in Oniguruma`);
    }
  if (n === 'u' || n === 'x') return x(v.Character, t, { value: ba(t) });
  if (jn.has(n)) return x(v.Character, t, { value: jn.get(n) });
  if (/\d/.test(n)) return x(v.EscapedNumber, t, { inCharClass: e });
  if (t === '\\') throw new Error(S`Incomplete escape "\"`);
  if (n === 'M') throw new Error(`Unsupported meta "${t}"`);
  if ([...t].length === 2) return x(v.Character, t, { value: t.codePointAt(1) });
  throw new Error(`Unexpected escape "${t}"`);
}
function x(t, e, n) {
  return { type: t, raw: e, ...n };
}
function ga(t) {
  const e = t[1] === 'c' ? t[2] : t[3];
  if (!e || !/[A-Za-z]/.test(e)) throw new Error(`Unsupported control character "${t}"`);
  return x(v.Character, t, { value: e.toUpperCase().codePointAt(0) - 64 });
}
function ma(t, e) {
  let { on: n, off: r } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(t).groups;
  r ?? (r = '');
  const s = (e.getCurrentModX() || n.includes('x')) && !r.includes('x'),
    a = Un(n),
    o = Un(r),
    i = {};
  if ((a && (i.enable = a), o && (i.disable = o), t.endsWith(')')))
    return e.replaceCurrentModX(s), x(v.Directive, t, { kind: St.flags, flags: i });
  if (t.endsWith(':')) {
    e.pushModX(s), e.numOpenGroups++;
    const l = x(v.GroupOpen, t, { kind: F.group });
    return (a || o) && (l.flags = i), l;
  }
  throw new Error(`Unexpected flag modifier "${t}"`);
}
function Ca(t) {
  const e = {};
  if (t[0] === '{') {
    const { min: n, max: r } = /^\{(?<min>\d*)(?:,(?<max>\d*))?/.exec(t).groups,
      s = 1e5;
    if (+n > s || +r > s) throw new Error('Quantifier value unsupported in Oniguruma');
    (e.min = +n),
      (e.max = r === void 0 ? +n : r === '' ? 1 / 0 : +r),
      (e.greedy = !t.endsWith('?')),
      (e.possessive = !1);
  } else
    (e.min = t[0] === '+' ? 1 : 0),
      (e.max = t[0] === '?' ? 1 : 1 / 0),
      (e.greedy = t[1] !== '?'),
      (e.possessive = t[1] === '+');
  return x(v.Quantifier, t, e);
}
function ya(t) {
  const e = t[1].toLowerCase();
  return x(v.CharacterSet, t, {
    kind: { d: O.digit, h: O.hex, s: O.space, w: O.word }[e],
    negate: t[1] !== e,
  });
}
function _a(t) {
  const { p: e, neg: n, value: r } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(t).groups,
    s = (e === 'P' && !n) || (e === 'p' && !!n);
  return x(v.CharacterSet, t, { kind: O.property, negate: s, value: r });
}
function Un(t) {
  const e = {};
  return (
    t.includes('i') && (e.ignoreCase = !0),
    t.includes('m') && (e.dotAll = !0),
    t.includes('x') && (e.extended = !0),
    Object.keys(e).length ? e : null
  );
}
function ba(t) {
  if (
    new RegExp('^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))', 'u').test(
      t,
    )
  )
    throw new Error(`Incomplete or invalid escape "${t}"`);
  const e =
    t[2] === '{'
      ? new RegExp('^\\\\x\\{\\s*(?<hex>\\p{AHex}+)', 'u').exec(t).groups.hex
      : t.slice(2);
  return parseInt(e, 16);
}
function wa(t, e) {
  const { raw: n, inCharClass: r } = t,
    s = n.slice(1);
  if (!r && ((s !== '0' && s.length === 1) || (s[0] !== '0' && +s <= e)))
    return [x(v.Backreference, n)];
  const a = [],
    o = s.match(/^[0-7]+|\d/g);
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    let c;
    if (i === 0 && l !== '8' && l !== '9') {
      if (((c = parseInt(l, 8)), c > 127))
        throw new Error(S`Octal encoded byte above 177 unsupported "${n}"`);
    } else c = l.codePointAt(0);
    a.push(x(v.Character, (i === 0 ? '\\' : '') + l, { value: c }));
  }
  return a;
}
function Mr(t) {
  if ([...t].length !== 1) throw new Error(`Expected "${t}" to be a single code point`);
}
function fn({ alternatives: t }, e) {
  return t.length === 1 && t[0].elements.length === 1 && (!e || e(t[0].elements[0]));
}
function Sa({ type: t }) {
  return t === C.Assertion || t === C.Directive;
}
function va(t) {
  const e = [C.Character, C.CharacterClass, C.CharacterSet];
  return e.includes(t.type) || (t.type === C.Quantifier && t.min && e.includes(t.element.type));
}
function Or({ type: t }) {
  return t === C.CapturingGroup || t === C.Group;
}
function Qe({ type: t, kind: e }) {
  return t === C.Assertion && (e === R.lookahead || e === R.lookbehind);
}
function Ie(t, e, n) {
  let r = t.node;
  for (; r.parent; ) r = r.parent;
  function s(o, i) {
    for (let l = 0; l < o.length; l++) {
      const c = a(o[l], i, l, o);
      l = Math.max(-1, l + c);
    }
  }
  function a(o, i = null, l = null, c = null) {
    let u = 0,
      h = !1;
    const f = {
        node: o,
        parent: i,
        key: l,
        container: c,
        ast: r,
        remove() {
          te(c, 'Container expected').splice(Math.max(0, l + u), 1), (u -= 1);
        },
        removeAllNextSiblings() {
          return te(c, 'Container expected').splice(l + 1);
        },
        removeAllPrevSiblings() {
          const _ = l + u;
          return (u -= _), te(c, 'Container expected').splice(0, Math.max(0, _));
        },
        replaceWith(_) {
          Aa(_, i), c ? (c[Math.max(0, l + u)] = _) : (i[l] = _);
        },
        skip() {
          h = !0;
        },
      },
      p = ka(o).find((_) => !!n[_]),
      d = p && n[p],
      b = typeof d == 'function' ? d : d == null ? void 0 : d.enter,
      m = d == null ? void 0 : d.exit;
    if ((b == null || b(f, e), !h))
      switch (o.type) {
        case C.Regex:
          a(o.pattern, o, 'pattern'), a(o.flags, o, 'flags');
          break;
        case C.Alternative:
        case C.CharacterClass:
          s(o.elements, o);
          break;
        case C.Assertion:
          Qe(o) && s(o.alternatives, o);
          break;
        case C.Backreference:
        case C.Character:
        case C.CharacterSet:
        case C.Directive:
        case C.Flags:
        case C.Recursion:
        case C.Subroutine:
        case C.VariableLengthCharacterSet:
          break;
        case C.AbsentFunction:
        case C.CapturingGroup:
        case C.Group:
        case C.Pattern:
          s(o.alternatives, o);
          break;
        case C.CharacterClassIntersection:
          s(o.classes, o);
          break;
        case C.CharacterClassRange:
          a(o.min, o, 'min'), a(o.max, o, 'max');
          break;
        case C.Quantifier:
          a(o.element, o, 'element');
          break;
        default:
          throw new Error(`Unexpected node type "${o.type}"`);
      }
    return m == null || m(f, e), u;
  }
  a(t.node, t.parent, t.key, t.container);
}
var Wn = { AnyGroup: 'AnyGroup', AnyNode: 'AnyNode' };
function ka(t) {
  const e = [Wn.AnyNode];
  return (Or(t) || Qe(t)) && e.push(Wn.AnyGroup), e.push(t.type), e;
}
function Aa(t, e) {
  'parent' in e && (t.parent = e);
}
var C = {
    AbsentFunction: 'AbsentFunction',
    Alternative: 'Alternative',
    Assertion: 'Assertion',
    Backreference: 'Backreference',
    CapturingGroup: 'CapturingGroup',
    Character: 'Character',
    CharacterClass: 'CharacterClass',
    CharacterClassIntersection: 'CharacterClassIntersection',
    CharacterClassRange: 'CharacterClassRange',
    CharacterSet: 'CharacterSet',
    Directive: 'Directive',
    Flags: 'Flags',
    Group: 'Group',
    Pattern: 'Pattern',
    Quantifier: 'Quantifier',
    Regex: 'Regex',
    Subroutine: 'Subroutine',
    VariableLengthCharacterSet: 'VariableLengthCharacterSet',
    Recursion: 'Recursion',
  },
  xa = { repeater: 'repeater' },
  R = {
    line_end: 'line_end',
    line_start: 'line_start',
    lookahead: 'lookahead',
    lookbehind: 'lookbehind',
    search_start: 'search_start',
    string_end: 'string_end',
    string_end_newline: 'string_end_newline',
    string_start: 'string_start',
    word_boundary: 'word_boundary',
  },
  T = O,
  st = St,
  ct = { grapheme: 'grapheme', newline: 'newline' };
function Gr({ tokens: t, flags: e, rules: n }, r) {
  const s = {
      skipBackrefValidation: !1,
      skipLookbehindValidation: !1,
      skipPropertyNameValidation: !1,
      verbose: !1,
      ...r,
    },
    a = {
      capturingGroups: [],
      current: 0,
      hasNumberedRef: !1,
      namedGroupsByName: new Map(),
      parent: null,
      skipBackrefValidation: s.skipBackrefValidation,
      skipLookbehindValidation: s.skipLookbehindValidation,
      skipPropertyNameValidation: s.skipPropertyNameValidation,
      subroutines: [],
      token: null,
      tokens: t,
      verbose: s.verbose,
      walk: o,
    };
  function o(p, d) {
    const b = t[a.current];
    switch (((a.parent = p), (a.token = b), a.current++, b.type)) {
      case v.Alternator:
        return fe();
      case v.Assertion:
        return Ma(b);
      case v.Backreference:
        return Ea(a);
      case v.Character:
        return dn(b.value, { useLastValid: !!d.isCheckingRangeEnd });
      case v.CharacterClassHyphen:
        return Ra(a, d);
      case v.CharacterClassOpen:
        return Ia(a, d);
      case v.CharacterSet:
        return Na(a);
      case v.Directive:
        return Da(b);
      case v.GroupOpen:
        return Pa(a, d);
      case v.Quantifier:
        return Ta(a);
      case v.Subroutine:
        return La(a);
      case v.VariableLengthCharacterSet:
        return za(b.kind);
      default:
        throw new Error(`Unexpected token type "${b.type}"`);
    }
  }
  const i = Ua(ja(), Fa(e));
  let l = i.pattern.alternatives[0];
  for (; a.current < t.length; ) {
    const p = o(l, {});
    p.type === C.Alternative ? (i.pattern.alternatives.push(p), (l = p)) : l.elements.push(p);
  }
  const { capturingGroups: c, hasNumberedRef: u, namedGroupsByName: h, subroutines: f } = a;
  if (u && h.size && !n.captureGroup)
    throw new Error('Numbered backref/subroutine not allowed when using named capture');
  for (const { ref: p } of f)
    if (typeof p == 'number') {
      if (p > c.length) throw new Error("Subroutine uses a group number that's not defined");
    } else if (h.has(p)) {
      if (h.get(p).length > 1)
        throw new Error(S`Subroutine uses a duplicate group name "\g<${p}>"`);
    } else throw new Error(S`Subroutine uses a group name that's not defined "\g<${p}>"`);
  return (
    Ie({ node: i }, null, {
      AnyNode({ node: p, parent: d }) {
        p.parent = d;
      },
    }),
    i
  );
}
function Ea(t) {
  const { raw: e } = t.token,
    n = /^\\k[<']/.test(e),
    r = n ? e.slice(3, -1) : e.slice(1),
    s = (a, o = !1) => {
      const i = t.capturingGroups.length;
      let l = !1;
      if (a > i)
        if (t.skipBackrefValidation) l = !0;
        else throw new Error(`Not enough capturing groups defined to the left "${e}"`);
      return (t.hasNumberedRef = !0), Qt(o ? i + 1 - a : a, { orphan: l });
    };
  if (n) {
    const a = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(r);
    if (a) return s(+a.groups.num, !!a.groups.sign);
    if (/[-+]/.test(r)) throw new Error(`Invalid backref name "${e}"`);
    if (!t.namedGroupsByName.has(r)) throw new Error(`Group name not defined to the left "${e}"`);
    return Qt(r);
  }
  return s(+r);
}
function Ra(t, e) {
  const { parent: n, tokens: r, walk: s } = t,
    a = n.elements.at(-1),
    o = r[t.current];
  if (
    !e.isCheckingRangeEnd &&
    a &&
    a.type !== C.CharacterClass &&
    a.type !== C.CharacterClassRange &&
    o &&
    o.type !== v.CharacterClassOpen &&
    o.type !== v.CharacterClassClose &&
    o.type !== v.CharacterClassIntersector
  ) {
    const i = s(n, { ...e, isCheckingRangeEnd: !0 });
    if (a.type === C.Character && i.type === C.Character) return n.elements.pop(), Ba(a, i);
    throw new Error('Invalid character class range');
  }
  return dn(45);
}
function Ia(t, e) {
  const { token: n, tokens: r, verbose: s, walk: a } = t,
    o = r[t.current];
  let i = Jt({ negate: n.negate });
  const l = i.elements[0];
  let c = zn(o);
  for (; c.type !== v.CharacterClassClose; ) {
    if (c.type === v.CharacterClassIntersector)
      l.classes.push(Jt({ negate: !1, baseOnly: !0 })), t.current++;
    else {
      const u = l.classes.at(-1);
      u.elements.push(a(u, e));
    }
    c = zn(r[t.current], o);
  }
  if ((s || Ka(l), l.classes.length === 1)) {
    const u = l.classes[0];
    (u.negate = i.negate !== u.negate), (i = u);
  }
  return t.current++, i;
}
function Na({ token: t, skipPropertyNameValidation: e }) {
  let { kind: n, negate: r, value: s } = t;
  if (n === O.property) {
    const a = wt(s);
    if (ua.has(a)) (n = O.posix), (s = a);
    else return ke(s, { negate: r, skipPropertyNameValidation: e });
  }
  return n === O.posix
    ? { type: C.CharacterSet, kind: T.posix, negate: r, value: s }
    : Zt(n, { negate: r });
}
function Pa(t, e) {
  const {
    token: n,
    tokens: r,
    capturingGroups: s,
    namedGroupsByName: a,
    skipLookbehindValidation: o,
    verbose: i,
    walk: l,
  } = t;
  let c = Oa(n);
  const u = c.type === C.AbsentFunction,
    h = c.kind === R.lookbehind,
    f = h && c.negate;
  if (
    (c.type === C.CapturingGroup && (s.push(c), c.name && Le(a, c.name, []).push(c)),
    u && e.isInAbsentFunction)
  )
    throw new Error('Nested absent function not supported by Oniguruma');
  let p = Hn(r[t.current]);
  for (; p.type !== v.GroupClose; ) {
    if (p.type === v.Alternator) c.alternatives.push(fe()), t.current++;
    else {
      const d = c.alternatives.at(-1),
        b = l(d, {
          ...e,
          isInAbsentFunction: e.isInAbsentFunction || u,
          isInLookbehind: e.isInLookbehind || h,
          isInNegLookbehind: e.isInNegLookbehind || f,
        });
      if ((d.elements.push(b), (h || e.isInLookbehind) && !o)) {
        const m = 'Lookbehind includes a pattern not allowed by Oniguruma';
        if (f || e.isInNegLookbehind) {
          if (b.kind === R.lookahead || b.type === C.CapturingGroup) throw new Error(m);
        } else if (b.kind === R.lookahead || (b.kind === R.lookbehind && b.negate))
          throw new Error(m);
      }
    }
    p = Hn(r[t.current]);
  }
  return i || (c = qa(c)), t.current++, c;
}
function Ta({ token: t, parent: e }) {
  const { min: n, max: r, greedy: s, possessive: a } = t,
    o = e.elements.at(-1);
  if (!o || o.type === C.Assertion || o.type === C.Directive)
    throw new Error('Quantifier requires a repeatable token');
  const i = Fr(o, n, r, s, a);
  return e.elements.pop(), i;
}
function La(t) {
  const { token: e, capturingGroups: n, subroutines: r } = t;
  let s = e.raw.slice(3, -1);
  const a = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(s);
  if (a) {
    const i = +a.groups.num,
      l = n.length;
    if (
      ((t.hasNumberedRef = !0), (s = { '': i, '+': l + i, '-': l + 1 - i }[a.groups.sign]), s < 1)
    )
      throw new Error('Invalid subroutine number');
  } else s === '0' && (s = 0);
  const o = Wa(s);
  return r.push(o), o;
}
function $a(t) {
  return { type: C.AbsentFunction, kind: t, alternatives: [fe()] };
}
function fe() {
  return { type: C.Alternative, elements: [] };
}
function Br(t, e) {
  const n = !!(e != null && e.negate);
  return { type: C.Assertion, kind: t, ...(t === R.word_boundary && { negate: n }) };
}
function Ma({ kind: t }) {
  return Br(
    te(
      {
        '^': R.line_start,
        $: R.line_end,
        '\\A': R.string_start,
        '\\b': R.word_boundary,
        '\\B': R.word_boundary,
        '\\G': R.search_start,
        '\\z': R.string_end,
        '\\Z': R.string_end_newline,
      }[t],
      `Unexpected assertion kind "${t}"`,
    ),
    { negate: t === S`\B` },
  );
}
function Qt(t, e) {
  const n = !!(e != null && e.orphan);
  return { type: C.Backreference, ...(n && { orphan: n }), ref: t };
}
function Oa({ flags: t, kind: e, name: n, negate: r, number: s }) {
  switch (e) {
    case F.absent_repeater:
      return $a(xa.repeater);
    case F.atomic:
      return ee({ atomic: !0 });
    case F.capturing:
      return Dr(s, n);
    case F.group:
      return ee({ flags: t });
    case F.lookahead:
    case F.lookbehind:
      return Ue({ behind: e === F.lookbehind, negate: r });
    default:
      throw new Error(`Unexpected group kind "${e}"`);
  }
}
function Dr(t, e) {
  const n = e !== void 0;
  if (n && !Va(e)) throw new Error(`Group name "${e}" invalid in Oniguruma`);
  return { type: C.CapturingGroup, number: t, ...(n && { name: e }), alternatives: [fe()] };
}
function dn(t, e) {
  const n = { useLastValid: !1, ...e };
  if (t > 1114111) {
    const r = t.toString(16);
    if (n.useLastValid) t = 1114111;
    else
      throw t > 1310719
        ? new Error(`Invalid code point out of range "\\x{${r}}"`)
        : new Error(`Invalid code point out of range in JS "\\x{${r}}"`);
  }
  return { type: C.Character, value: t };
}
function Jt(t) {
  const e = { baseOnly: !1, negate: !1, ...t };
  return { type: C.CharacterClass, negate: e.negate, elements: e.baseOnly ? [] : [Ga()] };
}
function Ga() {
  return { type: C.CharacterClassIntersection, classes: [Jt({ negate: !1, baseOnly: !0 })] };
}
function Ba(t, e) {
  if (e.value < t.value) throw new Error('Character class range out of order');
  return { type: C.CharacterClassRange, min: t, max: e };
}
function Zt(t, { negate: e }) {
  const n = { type: C.CharacterSet, kind: te(T[t], `Unexpected character set kind "${t}"`) };
  return (t === O.digit || t === O.hex || t === O.space || t === O.word) && (n.negate = e), n;
}
function Da({ kind: t, flags: e }) {
  const n = { type: C.Directive, kind: te(st[t], `Unexpected directive kind "${t}"`) };
  return t === St.flags && (n.flags = e), n;
}
function Fa({
  ignoreCase: t,
  dotAll: e,
  extended: n,
  digitIsAscii: r,
  spaceIsAscii: s,
  wordIsAscii: a,
}) {
  return {
    type: C.Flags,
    ignoreCase: t,
    dotAll: e,
    extended: n,
    digitIsAscii: r,
    spaceIsAscii: s,
    wordIsAscii: a,
  };
}
function ee(t) {
  const e = t == null ? void 0 : t.atomic,
    n = t == null ? void 0 : t.flags;
  return { type: C.Group, ...(e && { atomic: e }), ...(n && { flags: n }), alternatives: [fe()] };
}
function Ue(t) {
  const e = { behind: !1, negate: !1, ...t };
  return {
    type: C.Assertion,
    kind: e.behind ? R.lookbehind : R.lookahead,
    negate: e.negate,
    alternatives: [fe()],
  };
}
function ja() {
  return { type: C.Pattern, alternatives: [fe()] };
}
function Fr(t, e, n, r = !0, s = !1) {
  const a = { type: C.Quantifier, min: e, max: n, greedy: r, possessive: s, element: t };
  return n < e ? { ...a, min: n, max: e, possessive: !0 } : a;
}
function Ua(t, e) {
  return { type: C.Regex, pattern: t, flags: e };
}
function Wa(t) {
  return { type: C.Subroutine, ref: t };
}
function ke(t, e) {
  const n = { negate: !1, skipPropertyNameValidation: !1, ...e };
  return {
    type: C.CharacterSet,
    kind: T.property,
    value: n.skipPropertyNameValidation ? t : Ha(t),
    negate: n.negate,
  };
}
function za(t) {
  return {
    type: C.VariableLengthCharacterSet,
    kind: te({ '\\R': ct.newline, '\\X': ct.grapheme }[t], `Unexpected varcharset kind "${t}"`),
  };
}
function Ha(t) {
  const e = wt(t);
  if (Er.has(e)) throw new Error(S`Unicode property "\p{${t}}" unsupported in Oniguruma`);
  const n = xr.get(e);
  return (
    n ||
    t
      .trim()
      .replace(/[- _]+/g, '_')
      .replace(/[A-Z][a-z]+(?=[A-Z])/g, '$&_')
      .replace(/[A-Za-z]+/g, (r) => r[0].toUpperCase() + r.slice(1).toLowerCase())
  );
}
function qa(t) {
  const e = t.alternatives[0].elements[0];
  return t.type === C.Group &&
    fn(t, (n) => n.type === C.Group) &&
    !(t.atomic && e.flags) &&
    !(t.flags && (e.atomic || e.flags))
    ? (t.atomic ? (e.atomic = !0) : t.flags && (e.flags = t.flags), e)
    : t;
}
function Va(t) {
  return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(t);
}
function Ka(t) {
  for (let e = 0; e < t.classes.length; e++) {
    const n = t.classes[e],
      r = n.elements[0];
    n.elements.length === 1 &&
      r.type === C.CharacterClass &&
      ((t.classes[e] = r), (r.negate = n.negate !== r.negate));
  }
}
function zn(t, e) {
  return te(t, `${(e == null ? void 0 : e.value) === 93 ? 'Empty' : 'Unclosed'} character class`);
}
function Hn(t) {
  return te(t, 'Unclosed group');
}
function Xa(t, e) {
  const n = {
      accuracy: 'default',
      asciiWordBoundaries: !1,
      avoidSubclass: !1,
      bestEffortTarget: 'ES2025',
      ...e,
    },
    r = {
      accuracy: n.accuracy,
      asciiWordBoundaries: n.asciiWordBoundaries,
      avoidSubclass: n.avoidSubclass,
      flagDirectivesByAlt: new Map(),
      jsGroupNameMap: new Map(),
      minTargetEs2024: Xt(n.bestEffortTarget, 'ES2024'),
      passedLookbehind: !1,
      strategy: null,
      subroutineRefMap: new Map(),
      supportedGNodes: new Set(),
      digitIsAscii: t.flags.digitIsAscii,
      spaceIsAscii: t.flags.spaceIsAscii,
      wordIsAscii: t.flags.wordIsAscii,
    };
  Ie({ node: t }, r, jr);
  const s = { dotAll: t.flags.dotAll, ignoreCase: t.flags.ignoreCase },
    a = {
      currentFlags: s,
      prevFlags: null,
      globalFlags: s,
      groupOriginByCopy: new Map(),
      groupsByName: new Map(),
      multiplexCapturesToLeftByRef: new Map(),
      openRefs: new Map(),
      reffedNodesByReferencer: new Map(),
      subroutineRefMap: r.subroutineRefMap,
    };
  Ie({ node: t }, a, Ur);
  const o = {
    groupsByName: a.groupsByName,
    highestOrphanBackref: 0,
    numCapturesToLeft: 0,
    reffedNodesByReferencer: a.reffedNodesByReferencer,
  };
  return (
    Ie({ node: t }, o, Qa), (t._originMap = a.groupOriginByCopy), (t._strategy = r.strategy), t
  );
}
var jr = {
    AbsentFunction({ node: t, replaceWith: e }) {
      const n = se(ee(), [ze(Ue({ negate: !0 }), t.alternatives), ke('Any')]),
        r = Fr(n, 0, 1 / 0);
      (n.parent = r), e(se(ee(), [r]));
    },
    Alternative: {
      enter({ node: t, parent: e, key: n }, { flagDirectivesByAlt: r }) {
        const s = t.elements.filter((a) => a.kind === st.flags);
        for (let a = n + 1; a < e.alternatives.length; a++) {
          const o = e.alternatives[a];
          Le(r, o, []).push(...s);
        }
      },
      exit({ node: t }, { flagDirectivesByAlt: e }) {
        var n;
        if ((n = e.get(t)) != null && n.length) {
          const r = zr(e.get(t));
          if (r) {
            const s = se(ee({ flags: r }), t.elements);
            (s.parent = t), (t.elements = [s]);
          }
        }
      },
    },
    Assertion({ node: t, key: e, container: n, ast: r, remove: s, replaceWith: a }, o) {
      const { kind: i, negate: l } = t,
        { asciiWordBoundaries: c, avoidSubclass: u, supportedGNodes: h, wordIsAscii: f } = o;
      if (i === R.line_end) a(J(S`(?=\z|\n)`));
      else if (i === R.line_start) a(J(S`(?<=\A|\n(?!\z))`, { skipLookbehindValidation: !0 }));
      else if (i === R.lookbehind) o.passedLookbehind = !0;
      else if (i === R.search_start)
        if (h.has(t)) (r.flags.sticky = !0), s();
        else {
          const p = n[e - 1];
          if (p && va(p)) a(se(Ue({ negate: !0 })));
          else {
            if (u) throw new Error(S`Uses "\G" in a way that requires a subclass`);
            a(Br(R.string_start)), (o.strategy = 'clip_search');
          }
        }
      else if (i === R.string_end_newline) a(J(S`(?=\n?\z)`));
      else if (i === R.word_boundary && !f && !c) {
        const p = `(?:(?<=${re})(?!${re})|(?<!${re})(?=${re}))`,
          d = `(?:(?<=${re})(?=${re})|(?<!${re})(?!${re}))`;
        a(J(l ? d : p));
      }
    },
    Backreference({ node: t }, { jsGroupNameMap: e }) {
      let { ref: n } = t;
      typeof n == 'string' && !Gt(n) && ((n = Ot(n, e)), (t.ref = n));
    },
    CapturingGroup({ node: t }, { jsGroupNameMap: e, subroutineRefMap: n }) {
      let { name: r } = t;
      r && !Gt(r) && ((r = Ot(r, e)), (t.name = r)), n.set(t.number, t), r && n.set(r, t);
    },
    CharacterSet(
      { node: t, replaceWith: e },
      { accuracy: n, minTargetEs2024: r, digitIsAscii: s, spaceIsAscii: a, wordIsAscii: o },
    ) {
      const { kind: i, negate: l, value: c } = t;
      if (s && (i === T.digit || c === 'digit')) {
        e(Zt(T.digit, { negate: l }));
        return;
      }
      if (a && (i === T.space || c === 'space')) {
        e(Bt(J(Ja), l));
        return;
      }
      if (o && (i === T.word || c === 'word')) {
        e(Zt(T.word, { negate: l }));
        return;
      }
      if (i === T.any) e(ke('Any'));
      else if (i === T.digit) e(ke('Nd', { negate: l }));
      else if (i === T.hex) e(ke('AHex', { negate: l }));
      else if (i === T.non_newline) e(J(S`[^\n]`));
      else if (i === T.space) e(ke('space', { negate: l }));
      else if (i === T.word) e(Bt(J(re), l));
      else if (i === T.property) Ar.has(c) || (t.key = 'sc');
      else if (i === T.posix)
        if (!r && (c === 'graph' || c === 'print')) {
          if (n === 'strict')
            throw new Error(`POSIX class "${c}" requires min target ES2024 or non-strict accuracy`);
          let u = { graph: '!-~', print: ' -~' }[c];
          l && (u = `\0-${$(u.codePointAt(0) - 1)}${$(u.codePointAt(2) + 1)}-􏿿`), e(J(`[${u}]`));
        } else e(Bt(J(Rr.get(c)), l));
    },
    Directive(t, e) {
      const {
          node: n,
          parent: r,
          ast: s,
          remove: a,
          replaceWith: o,
          removeAllPrevSiblings: i,
          removeAllNextSiblings: l,
        } = t,
        { kind: c, flags: u } = n;
      if (c === st.flags)
        if (!u.enable && !u.disable) a();
        else {
          const h = se(ee({ flags: u }), l());
          o(h), Kr(h, t, e, jr);
        }
      else if (c === st.keep) {
        const h = s.pattern.alternatives[0].elements[0],
          p =
            fn(s.pattern, (d) => d.type === C.Group) && h.alternatives.length === 1 ? h : s.pattern;
        if (r.parent !== p || p.alternatives.length > 1)
          throw new Error(S`Uses "\K" in a way that's unsupported`);
        o(se(Ue({ behind: !0 }), i()));
      }
    },
    Flags({ node: t, parent: e }) {
      ['digitIsAscii', 'extended', 'spaceIsAscii', 'wordIsAscii'].forEach((n) => delete t[n]),
        Object.assign(t, { global: !1, hasIndices: !1, multiline: !1, sticky: t.sticky ?? !1 }),
        (e.options = { disable: { x: !0, n: !0 }, force: { v: !0 } });
    },
    Group({ node: t }) {
      if (!t.flags) return;
      const { enable: e, disable: n } = t.flags;
      e != null && e.extended && delete e.extended,
        n != null && n.extended && delete n.extended,
        e != null && e.dotAll && n != null && n.dotAll && delete e.dotAll,
        e != null && e.ignoreCase && n != null && n.ignoreCase && delete e.ignoreCase,
        e && !Object.keys(e).length && delete t.flags.enable,
        n && !Object.keys(n).length && delete t.flags.disable,
        !t.flags.enable && !t.flags.disable && delete t.flags;
    },
    Pattern: {
      enter({ node: t }, { supportedGNodes: e }) {
        const n = [];
        let r = !1,
          s = !1;
        for (const a of t.alternatives)
          if (a.elements.length === 1 && a.elements[0].kind === R.search_start) a.elements.pop();
          else {
            const o = qr(a.elements);
            o ? ((r = !0), Array.isArray(o) ? n.push(...o) : n.push(o)) : (s = !0);
          }
        r && !s && n.forEach((a) => e.add(a));
      },
      exit(t, { accuracy: e, passedLookbehind: n, strategy: r }) {
        if (e === 'strict' && n && r)
          throw new Error(S`Uses "\G" in a way that requires non-strict accuracy`);
      },
    },
    Quantifier({ node: t }) {
      if (t.element.type === C.Quantifier) {
        const e = se(ee(), [t.element]);
        (e.parent = t), (t.element = e);
      }
    },
    Subroutine({ node: t }, { jsGroupNameMap: e }) {
      let { ref: n } = t;
      typeof n == 'string' && !Gt(n) && ((n = Ot(n, e)), (t.ref = n));
    },
    VariableLengthCharacterSet({ node: t, replaceWith: e }, { accuracy: n, minTargetEs2024: r }) {
      const { kind: s } = t;
      if (s === ct.newline)
        e(
          J(`(?>\r
?|[
\v\f\u2028\u2029])`),
        );
      else if (s === ct.grapheme) {
        if (n === 'strict') throw new Error(S`Use of "\X" requires non-strict accuracy`);
        const a = r ? S`\p{RGI_Emoji}` : Vs().source.replace(/\\u\{/g, '\\x{');
        e(J(S`(?>\r\n|${a}|\P{M}\p{M}*)`, { skipPropertyNameValidation: !0 }));
      } else throw new Error(`Unexpected varcharset kind "${s}"`);
    },
  },
  Ur = {
    Backreference({ node: t }, { multiplexCapturesToLeftByRef: e, reffedNodesByReferencer: n }) {
      const { orphan: r, ref: s } = t;
      r || n.set(t, [...e.get(s).map(({ node: a }) => a)]);
    },
    CapturingGroup: {
      enter(
        { node: t, replaceWith: e, skip: n },
        {
          groupOriginByCopy: r,
          groupsByName: s,
          multiplexCapturesToLeftByRef: a,
          openRefs: o,
          reffedNodesByReferencer: i,
        },
      ) {
        const l = r.get(t);
        if (l && o.has(t.number)) {
          const u = qn(t.number);
          i.set(u, o.get(t.number)), e(u), n();
          return;
        }
        o.set(t.number, t), a.set(t.number, []), t.name && Le(a, t.name, []);
        const c = a.get(t.name ?? t.number);
        for (let u = 0; u < c.length; u++) {
          const h = c[u];
          if (l === h.node || (l && l === h.origin) || t === h.origin) {
            c.splice(u, 1);
            break;
          }
        }
        if (
          (a.get(t.number).push({ node: t, origin: l }),
          t.name && a.get(t.name).push({ node: t, origin: l }),
          t.name)
        ) {
          const u = Le(s, t.name, new Map());
          let h = !1;
          if (l) h = !0;
          else
            for (const f of u.values())
              if (!f.hasDuplicateNameToRemove) {
                h = !0;
                break;
              }
          s.get(t.name).set(t, { node: t, hasDuplicateNameToRemove: h });
        }
      },
      exit({ node: t }, { openRefs: e }) {
        e.delete(t.number);
      },
    },
    Group: {
      enter({ node: t }, e) {
        (e.prevFlags = e.currentFlags), t.flags && (e.currentFlags = lt(e.currentFlags, t.flags));
      },
      exit(t, e) {
        e.currentFlags = e.prevFlags;
      },
    },
    Recursion({ node: t, parent: e }, { reffedNodesByReferencer: n }) {
      const { ref: r } = t;
      let s = e;
      for (
        ;
        (s = s.parent) && !(s.type === C.CapturingGroup && (s.name === r || s.number === r));

      );
      n.set(t, s);
    },
    Subroutine(t, e) {
      const { node: n, replaceWith: r } = t,
        { ref: s } = n,
        a = e.subroutineRefMap.get(s),
        o = s === 0,
        i = o ? qn(0) : Wr(a, e.groupOriginByCopy, null);
      let l = i;
      if (!o) {
        const c = zr(eo(a, (h) => h.type === C.Group && !!h.flags)),
          u = c ? lt(e.globalFlags, c) : e.globalFlags;
        Za(u, e.currentFlags) || (l = se(ee({ flags: to(u) }), [i]));
      }
      r(l), o || Kr(l, t, e, Ur);
    },
  },
  Qa = {
    Backreference({ node: t, replaceWith: e }, n) {
      if (t.orphan) {
        n.highestOrphanBackref = Math.max(n.highestOrphanBackref, t.ref);
        return;
      }
      const s = n.reffedNodesByReferencer.get(t).filter((a) => Ya(a, t));
      if (!s.length) e(se(Ue({ negate: !0 })));
      else if (s.length > 1) {
        const a = s.map((o) => ze(fe(), [Qt(o.number)]));
        e(ze(ee(), a));
      } else t.ref = s[0].number;
    },
    CapturingGroup({ node: t }, e) {
      (t.number = ++e.numCapturesToLeft),
        t.name && e.groupsByName.get(t.name).get(t).hasDuplicateNameToRemove && delete t.name;
    },
    Recursion({ node: t }, e) {
      t.ref !== 0 && (t.ref = e.reffedNodesByReferencer.get(t).number);
    },
    Regex: {
      exit({ node: t }, e) {
        const n = Math.max(e.highestOrphanBackref - e.numCapturesToLeft, 0);
        for (let r = 0; r < n; r++) {
          const s = Dr();
          t.pattern.alternatives.at(-1).elements.push(s);
        }
      },
    },
  },
  Ja = '[	-\r ]',
  re = S`[\p{L}\p{M}\p{N}\p{Pc}]`;
function ze(t, e) {
  return e.forEach((n) => (n.parent = t)), (t[gn(t)] = e), t;
}
function Za(t, e) {
  return t.dotAll === e.dotAll && t.ignoreCase === e.ignoreCase;
}
function Ya(t, e) {
  let n = e;
  do {
    if (n.type === C.Pattern) return !1;
    if (n.type === C.Alternative) continue;
    if (n === t) return !1;
    const r = Hr(n.parent);
    for (const s of r) {
      if (s === n) break;
      if (s === t || Vr(s, t)) return !0;
    }
  } while ((n = n.parent));
  throw new Error('Unexpected path');
}
function Wr(t, e, n, r) {
  const s = Array.isArray(t) ? [] : {};
  for (const [a, o] of Object.entries(t))
    a === 'parent'
      ? (s.parent = Array.isArray(n) ? r : n)
      : o && typeof o == 'object'
        ? (s[a] = Wr(o, e, s, n))
        : (a === 'type' && o === C.CapturingGroup && e.set(s, e.get(t) ?? t), (s[a] = o));
  return s;
}
function qn(t) {
  return { type: C.Recursion, ref: t };
}
function eo(t, e) {
  const n = [];
  for (; (t = t.parent); ) (!e || e(t)) && n.push(t);
  return n;
}
function Ot(t, e) {
  if (e.has(t)) return e.get(t);
  const n = `$${e.size}_${t.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/gu, '_')}`;
  return e.set(t, n), n;
}
function gn(t) {
  for (const e of ['alternatives', 'classes', 'elements']) if (t[e]) return e;
  return null;
}
function zr(t) {
  const e = ['dotAll', 'ignoreCase'],
    n = { enable: {}, disable: {} };
  return (
    t.forEach(({ flags: r }) => {
      e.forEach((s) => {
        var a, o;
        (a = r.enable) != null && a[s] && (delete n.disable[s], (n.enable[s] = !0)),
          (o = r.disable) != null && o[s] && (n.disable[s] = !0);
      });
    }),
    Object.keys(n.enable).length || delete n.enable,
    Object.keys(n.disable).length || delete n.disable,
    n.enable || n.disable ? n : null
  );
}
function to({ dotAll: t, ignoreCase: e }) {
  const n = {};
  return (
    (t || e) && ((n.enable = {}), t && (n.enable.dotAll = !0), e && (n.enable.ignoreCase = !0)),
    (!t || !e) &&
      ((n.disable = {}), !t && (n.disable.dotAll = !0), !e && (n.disable.ignoreCase = !0)),
    n
  );
}
function Hr(t) {
  if (!t) throw new Error('Node expected');
  if (t.type === C.Quantifier) return [t.element];
  const e = gn(t);
  return e && t[e];
}
function qr(t) {
  const e = t.find((n) => n.kind === R.search_start || no(n, { negate: !1 }) || !Sa(n));
  if (!e) return null;
  if (e.kind === R.search_start) return e;
  if (Qe(e)) return e.alternatives[0].elements[0];
  if (Or(e)) {
    const n = [];
    for (const r of e.alternatives) {
      const s = qr(r.elements);
      if (!s) return null;
      Array.isArray(s) ? n.push(...s) : n.push(s);
    }
    return n;
  }
  return null;
}
function Vr(t, e) {
  const n = Hr(t) ?? [];
  for (const r of n) if (r === e || Vr(r, e)) return !0;
  return !1;
}
function no(t, e) {
  const n = { negate: null, ...e };
  return (
    Qe(t) && (n.negate === null || t.negate === n.negate) && fn(t, (r) => r.kind === R.search_start)
  );
}
function Gt(t) {
  return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(t);
}
function J(t, e) {
  const r = Gr(Lr(t), e).pattern.alternatives;
  return r.length > 1 || r[0].elements.length > 1 ? ze(ee(), r) : r[0].elements[0];
}
function se(t, e) {
  const n = gn(t);
  return (t[n][0].parent = t), e && ze(t[n][0], e), t;
}
function Bt(t, e) {
  return (t.negate = e), t;
}
function Kr(t, { parent: e, key: n, container: r }, s, a) {
  Ie({ node: t, parent: e, key: n, container: r }, s, a);
}
function ro(t, e) {
  const n = vr(e),
    r = Xt(n.target, 'ES2024'),
    s = Xt(n.target, 'ES2025'),
    a = n.rules.recursionLimit;
  if (!Number.isInteger(a) || a < 2 || a > 20) throw new Error('Invalid recursionLimit; use 2-20');
  let o = null,
    i = null;
  if (!s) {
    const p = [t.flags.ignoreCase];
    Ie(
      { node: t },
      {
        getCurrentModI: () => p.at(-1),
        popModI() {
          p.pop();
        },
        pushModI(d) {
          p.push(d);
        },
        setHasCasedChar() {
          p.at(-1) ? (o = !0) : (i = !0);
        },
      },
      so,
    );
  }
  const l = { dotAll: t.flags.dotAll, ignoreCase: !!((t.flags.ignoreCase || o) && !i) };
  let c = null;
  const u = {
    accuracy: n.accuracy,
    appliedGlobalFlags: l,
    captureMap: new Map(),
    currentFlags: { dotAll: t.flags.dotAll, ignoreCase: t.flags.ignoreCase },
    inCharClass: !1,
    lastNode: c,
    originMap: t._originMap,
    recursionLimit: a,
    useAppliedIgnoreCase: !!(!s && o && i),
    useFlagMods: s,
    useFlagV: r,
    verbose: n.verbose,
  };
  function h(p) {
    switch (((u.lastNode = c), (c = p), p.type)) {
      case C.Regex:
        return { pattern: h(p.pattern), flags: h(p.flags), options: { ...p.options } };
      case C.Alternative:
        return p.elements.map(h).join('');
      case C.Assertion:
        return co(p, u, h);
      case C.Backreference:
        return uo(p, u);
      case C.CapturingGroup:
        return ho(p, u, h);
      case C.Character:
        return po(p, u);
      case C.CharacterClass:
        return fo(p, u, h);
      case C.CharacterClassIntersection:
        if (!u.useFlagV) throw new Error('Use of class intersection requires min target ES2024');
        return p.classes.map(h).join('&&');
      case C.CharacterClassRange:
        return go(p, u);
      case C.CharacterSet:
        return mo(p, u);
      case C.Flags:
        return Co(p, u);
      case C.Group:
        return yo(p, u, h);
      case C.Pattern:
        return p.alternatives.map(h).join('|');
      case C.Quantifier:
        return h(p.element) + So(p);
      case C.Recursion:
        return _o(p, u);
      default:
        throw new Error(`Unexpected node type "${p.type}"`);
    }
  }
  const f = h(t);
  return (
    r ||
      (delete f.options.force.v, (f.options.disable.v = !0), (f.options.unicodeSetsPlugin = null)),
    (f._captureTransfers = new Map()),
    (f._hiddenCaptures = []),
    u.captureMap.forEach((p, d) => {
      p.hidden && f._hiddenCaptures.push(d),
        p.transferTo && Le(f._captureTransfers, p.transferTo, []).push(d);
    }),
    f
  );
}
var so = {
    AnyGroup: {
      enter({ node: t }, e) {
        const n = e.getCurrentModI();
        e.pushModI(t.flags ? lt({ ignoreCase: n }, t.flags).ignoreCase : n);
      },
      exit(t, e) {
        e.popModI();
      },
    },
    Backreference(t, e) {
      e.setHasCasedChar();
    },
    Character({ node: t }, e) {
      mn($(t.value)) && e.setHasCasedChar();
    },
    CharacterClassRange({ node: t, skip: e }, n) {
      e(), Xr(t, { firstOnly: !0 }).length && n.setHasCasedChar();
    },
    CharacterSet({ node: t }, e) {
      t.kind === T.property && Ir.has(t.value) && e.setHasCasedChar();
    },
  },
  ao = new Set(['$', '(', ')', '*', '+', '.', '?', '[', '\\', ']', '^', '{', '|', '}']),
  oo = new Set(['-', '\\', ']', '^', '[']),
  io = new Set([
    '(',
    ')',
    '-',
    '/',
    '[',
    '\\',
    ']',
    '^',
    '{',
    '|',
    '}',
    '!',
    '#',
    '$',
    '%',
    '&',
    '*',
    '+',
    ',',
    '.',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '`',
    '~',
  ]),
  Vn = new Map([
    [9, S`\t`],
    [10, S`\n`],
    [11, S`\v`],
    [12, S`\f`],
    [13, S`\r`],
    [8232, S`\u2028`],
    [8233, S`\u2029`],
    [65279, S`\uFEFF`],
  ]),
  lo = new RegExp('^\\p{Cased}$', 'u');
function mn(t) {
  return lo.test(t);
}
function co(t, e, n) {
  const { kind: r, negate: s, alternatives: a } = t;
  if (Qe(t)) return `(?${`${r === R.lookahead ? '' : '<'}${s ? '!' : '='}`}${a.map(n).join('|')})`;
  if (r === R.string_end) return '$';
  if (r === R.string_start) return '^';
  if (r === R.word_boundary) return s ? S`\B` : S`\b`;
  throw new Error(`Unexpected assertion kind "${r}"`);
}
function uo({ ref: t }, e) {
  if (typeof t != 'number') throw new Error('Unexpected named backref in transformed AST');
  if (
    !e.useFlagMods &&
    e.accuracy === 'strict' &&
    e.currentFlags.ignoreCase &&
    !e.captureMap.get(t).ignoreCase
  )
    throw new Error(
      'Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy',
    );
  return '\\' + t;
}
function ho(t, e, n) {
  const { name: r, number: s, alternatives: a } = t,
    o = { ignoreCase: e.currentFlags.ignoreCase },
    i = e.originMap.get(t);
  return (
    i && ((o.hidden = !0), s > i.number && (o.transferTo = i.number)),
    e.captureMap.set(s, o),
    `(${r ? `?<${r}>` : ''}${a.map(n).join('|')})`
  );
}
function po({ value: t }, e) {
  const n = $(t),
    r = Ae(t, {
      isAfterBackref: e.lastNode.type === C.Backreference,
      inCharClass: e.inCharClass,
      useFlagV: e.useFlagV,
    });
  if (r !== n) return r;
  if (e.useAppliedIgnoreCase && e.currentFlags.ignoreCase && mn(n)) {
    const s = kr(n);
    return e.inCharClass ? s.join('') : s.length > 1 ? `[${s.join('')}]` : s[0];
  }
  return n;
}
function fo({ negate: t, parent: e, elements: n }, r, s) {
  var i;
  Te.literalHyphenIncorrectlyCreatesRange &&
    r.useFlagV &&
    n.some(Kn) &&
    ((n = n.filter((l) => !Kn(l))), n.push(dn(45)));
  const a = () => `[${t ? '^' : ''}${n.map(s).join('')}]`;
  if (!r.inCharClass) {
    r.inCharClass = !0;
    const l = a();
    return (r.inCharClass = !1), l;
  }
  const o = (i = n[0]) == null ? void 0 : i.type;
  if (
    !t &&
    o &&
    (((!r.useFlagV || !r.verbose) &&
      e.type === C.CharacterClass &&
      o !== C.CharacterClassIntersection &&
      !(Te.literalHyphenIncorrectlyCreatesRange && r.useFlagV)) ||
      (!r.verbose &&
        e.type === C.CharacterClassIntersection &&
        n.length === 1 &&
        o !== C.CharacterClass &&
        o !== C.CharacterClassRange))
  )
    return n.map(s).join('');
  if (!r.useFlagV && e.type === C.CharacterClass)
    throw new Error('Use of nested character class requires min target ES2024');
  return a();
}
function go(t, e) {
  const n = t.min.value,
    r = t.max.value,
    s = { isAfterBackref: !1, inCharClass: !0, useFlagV: e.useFlagV },
    a = Ae(n, s),
    o = Ae(r, s),
    i = new Set();
  if (e.useAppliedIgnoreCase && e.currentFlags.ignoreCase) {
    const l = Xr(t);
    bo(l).forEach((u) => {
      i.add(Array.isArray(u) ? `${Ae(u[0], s)}-${Ae(u[1], s)}` : Ae(u, s));
    });
  }
  return `${a}-${o}${[...i].join('')}`;
}
function mo({ kind: t, negate: e, value: n, key: r }, s) {
  if (t === T.dot)
    return s.currentFlags.dotAll
      ? s.appliedGlobalFlags.dotAll || s.useFlagMods
        ? '.'
        : '[^]'
      : S`[^\n]`;
  if (t === T.digit) return e ? S`\D` : S`\d`;
  if (t === T.property) {
    if (s.useAppliedIgnoreCase && s.currentFlags.ignoreCase && Ir.has(n))
      throw new Error(
        `Unicode property "${n}" can't be case-insensitive when other chars have specific case`,
      );
    return `${e ? S`\P` : S`\p`}{${r ? `${r}=` : ''}${n}}`;
  }
  if (t === T.word) return e ? S`\W` : S`\w`;
  throw new Error(`Unexpected character set kind "${t}"`);
}
function Co(t, e) {
  return (
    (e.appliedGlobalFlags.ignoreCase ? 'i' : '') + (t.dotAll ? 's' : '') + (t.sticky ? 'y' : '')
  );
}
function yo({ atomic: t, flags: e, parent: n, alternatives: r }, s, a) {
  const o = s.currentFlags;
  e && (s.currentFlags = lt(o, e));
  const i = r.map(a).join('|'),
    l =
      !s.verbose && r.length === 1 && n.type !== C.Quantifier && !t && (!s.useFlagMods || !e)
        ? i
        : `(?${wo(t, e, s.useFlagMods)}${i})`;
  return (s.currentFlags = o), l;
}
function _o({ ref: t }, e) {
  const n = e.recursionLimit;
  return t === 0 ? `(?R=${n})` : S`\g<${t}&R=${n}>`;
}
function Xr(t, e) {
  const n = !!(e != null && e.firstOnly),
    r = t.min.value,
    s = t.max.value,
    a = [];
  if ((r < 65 && (s === 65535 || s >= 131071)) || (r === 65536 && s >= 131071)) return a;
  for (let o = r; o <= s; o++) {
    const i = $(o);
    if (!mn(i)) continue;
    const l = kr(i).filter((c) => {
      const u = c.codePointAt(0);
      return u < r || u > s;
    });
    if (l.length && (a.push(...l), n)) break;
  }
  return a;
}
function Ae(t, { isAfterBackref: e, inCharClass: n, useFlagV: r }) {
  if (Vn.has(t)) return Vn.get(t);
  if (t < 32 || (t > 126 && t < 160) || t > 262143 || (e && vo(t)))
    return t > 255
      ? `\\u{${t.toString(16).toUpperCase()}}`
      : `\\x${t.toString(16).toUpperCase().padStart(2, '0')}`;
  const s = n ? (r ? io : oo) : ao,
    a = $(t);
  return (s.has(a) ? '\\' : '') + a;
}
function bo(t) {
  const e = t.map((s) => s.codePointAt(0)).sort((s, a) => s - a),
    n = [];
  let r = null;
  for (let s = 0; s < e.length; s++)
    e[s + 1] === e[s] + 1
      ? (r ?? (r = e[s]))
      : r === null
        ? n.push(e[s])
        : (n.push([r, e[s]]), (r = null));
  return n;
}
function wo(t, e, n) {
  if (t) return '>';
  let r = '';
  if (e && n) {
    const { enable: s, disable: a } = e;
    r =
      (s != null && s.ignoreCase ? 'i' : '') +
      (s != null && s.dotAll ? 's' : '') +
      (a ? '-' : '') +
      (a != null && a.ignoreCase ? 'i' : '') +
      (a != null && a.dotAll ? 's' : '');
  }
  return `${r}:`;
}
function So({ min: t, max: e, greedy: n, possessive: r }) {
  let s;
  return (
    !t && e === 1
      ? (s = '?')
      : !t && e === 1 / 0
        ? (s = '*')
        : t === 1 && e === 1 / 0
          ? (s = '+')
          : t === e
            ? (s = `{${t}}`)
            : (s = `{${t},${e === 1 / 0 ? '' : e}}`),
    s + (r ? '+' : n ? '' : '?')
  );
}
function vo(t) {
  return t > 47 && t < 58;
}
function Kn({ type: t, value: e }) {
  return t === C.Character && e === 45;
}
var ue,
  ae,
  be,
  he,
  we,
  Xe,
  Yt,
  pe,
  ko =
    ((pe = class extends RegExp {
      constructor(n, r, s) {
        var e = (...Oc) => (
          super(...Oc),
          me(this, Xe),
          me(this, ue, new Map()),
          me(this, ae, null),
          me(this, be),
          me(this, he, null),
          me(this, we, null),
          g(this, 'rawOptions', {}),
          this
        );
        const a = !!(s != null && s.lazyCompile);
        if (n instanceof RegExp) {
          if (s) throw new Error('Cannot provide options when copying a regexp');
          const o = n;
          e(o, r),
            Q(this, be, o.source),
            o instanceof pe &&
              (Q(this, ue, U(o, ue)),
              Q(this, he, U(o, he)),
              Q(this, we, U(o, we)),
              (this.rawOptions = o.rawOptions));
        } else {
          const o = { hiddenCaptures: [], strategy: null, transfers: [], ...s };
          e(a ? '' : n, r),
            Q(this, be, n),
            Q(this, ue, xo(o.hiddenCaptures, o.transfers)),
            Q(this, we, o.strategy),
            (this.rawOptions = s ?? {});
        }
        a || Q(this, ae, this);
      }
      get source() {
        return U(this, be) || '(?:)';
      }
      exec(n) {
        if (!U(this, ae)) {
          const { lazyCompile: a, ...o } = this.rawOptions;
          Q(this, ae, new pe(U(this, be), this.flags, o));
        }
        const r = this.global || this.sticky,
          s = this.lastIndex;
        if (U(this, we) === 'clip_search' && r && s) {
          this.lastIndex = 0;
          const a = Et(this, Xe, Yt).call(this, n.slice(s));
          return a && (Ao(a, s, n, this.hasIndices), (this.lastIndex += s)), a;
        }
        return Et(this, Xe, Yt).call(this, n);
      }
    }),
    (ue = new WeakMap()),
    (ae = new WeakMap()),
    (be = new WeakMap()),
    (he = new WeakMap()),
    (we = new WeakMap()),
    (Xe = new WeakSet()),
    (Yt = function (n) {
      U(this, ae).lastIndex = this.lastIndex;
      const r = En(pe.prototype, this, 'exec').call(U(this, ae), n);
      if (((this.lastIndex = U(this, ae).lastIndex), !r || !U(this, ue).size)) return r;
      const s = [...r];
      r.length = 1;
      let a;
      this.hasIndices && ((a = [...r.indices]), (r.indices.length = 1));
      const o = [0];
      for (let i = 1; i < s.length; i++) {
        const { hidden: l, transferTo: c } = U(this, ue).get(i) ?? {};
        if (
          (l
            ? o.push(null)
            : (o.push(r.length), r.push(s[i]), this.hasIndices && r.indices.push(a[i])),
          c && s[i] !== void 0)
        ) {
          const u = te(o[c]);
          if (((r[u] = s[i]), this.hasIndices && (r.indices[u] = a[i]), r.groups)) {
            U(this, he) || Q(this, he, Eo(this.source));
            const h = U(this, he).get(c);
            h && ((r.groups[h] = s[i]), this.hasIndices && (r.indices.groups[h] = a[i]));
          }
        }
      }
      return r;
    }),
    pe);
function Ao(t, e, n, r) {
  if (((t.index += e), (t.input = n), r)) {
    const s = t.indices;
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      i && (s[o] = [i[0] + e, i[1] + e]);
    }
    const a = s.groups;
    a &&
      Object.keys(a).forEach((o) => {
        const i = a[o];
        i && (a[o] = [i[0] + e, i[1] + e]);
      });
  }
}
function xo(t, e) {
  const n = new Map();
  for (const r of t) n.set(r, { hidden: !0 });
  for (const [r, s] of e) for (const a of s) Le(n, a, {}).transferTo = r;
  return n;
}
function Eo(t) {
  const e = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu,
    n = new Map();
  let r = 0,
    s = 0,
    a;
  for (; (a = e.exec(t)); ) {
    const {
      0: o,
      groups: { capture: i, name: l },
    } = a;
    o === '[' ? r++ : r ? o === ']' && r-- : i && (s++, l && n.set(s, l));
  }
  return n;
}
function Ro(t, e) {
  const n = Io(t, e);
  return n.options ? new ko(n.pattern, n.flags, n.options) : new RegExp(n.pattern, n.flags);
}
function Io(t, e) {
  const n = vr(e),
    r = Lr(t, n.flags, { captureGroup: n.rules.captureGroup, singleline: n.rules.singleline }),
    s = Gr(r, { skipBackrefValidation: n.rules.allowOrphanBackrefs, verbose: n.verbose }),
    a = Xa(s, {
      accuracy: n.accuracy,
      asciiWordBoundaries: n.rules.asciiWordBoundaries,
      avoidSubclass: n.avoidSubclass,
      bestEffortTarget: n.target,
    }),
    o = ro(a, n),
    i = na(o.pattern, {
      captureTransfers: o._captureTransfers,
      hiddenCaptures: o._hiddenCaptures,
      mode: 'external',
    }),
    l = ea(i.pattern),
    c = Ys(l.pattern, { captureTransfers: i.captureTransfers, hiddenCaptures: i.hiddenCaptures }),
    u = {
      pattern: c.pattern,
      flags: `${n.hasIndices ? 'd' : ''}${n.global ? 'g' : ''}${o.flags}${o.options.disable.v ? 'u' : 'v'}`,
    };
  if (n.avoidSubclass) {
    if (n.lazyCompileLength !== 1 / 0) throw new Error('Lazy compilation requires subclass');
  } else {
    const h = c.hiddenCaptures.sort((b, m) => b - m),
      f = Array.from(c.captureTransfers),
      p = a._strategy,
      d = u.pattern.length >= n.lazyCompileLength;
    (h.length || f.length || p || d) &&
      (u.options = {
        ...(h.length && { hiddenCaptures: h }),
        ...(f.length && { transfers: f }),
        ...(p && { strategy: p }),
        ...(d && { lazyCompile: d }),
      });
  }
  return u;
}
const Xn = 4294967295;
class No {
  constructor(e, n = {}) {
    g(this, 'regexps');
    (this.patterns = e), (this.options = n);
    const { forgiving: r = !1, cache: s, regexConstructor: a } = n;
    if (!a) throw new Error('Option `regexConstructor` is not provided');
    this.regexps = e.map((o) => {
      if (typeof o != 'string') return o;
      const i = s == null ? void 0 : s.get(o);
      if (i) {
        if (i instanceof RegExp) return i;
        if (r) return null;
        throw i;
      }
      try {
        const l = a(o);
        return s == null || s.set(o, l), l;
      } catch (l) {
        if ((s == null || s.set(o, l), r)) return null;
        throw l;
      }
    });
  }
  findNextMatchSync(e, n, r) {
    const s = typeof e == 'string' ? e : e.content,
      a = [];
    function o(i, l, c = 0) {
      return {
        index: i,
        captureIndices: l.indices.map((u) =>
          u == null
            ? { start: Xn, end: Xn, length: 0 }
            : { start: u[0] + c, end: u[1] + c, length: u[1] - u[0] },
        ),
      };
    }
    for (let i = 0; i < this.regexps.length; i++) {
      const l = this.regexps[i];
      if (l)
        try {
          l.lastIndex = n;
          const c = l.exec(s);
          if (!c) continue;
          if (c.index === n) return o(i, c, 0);
          a.push([i, c, 0]);
        } catch (c) {
          if (this.options.forgiving) continue;
          throw c;
        }
    }
    if (a.length) {
      const i = Math.min(...a.map((l) => l[1].index));
      for (const [l, c, u] of a) if (c.index === i) return o(l, c, u);
    }
    return null;
  }
}
function Po(t, e) {
  return Ro(t, {
    global: !0,
    hasIndices: !0,
    lazyCompileLength: 3e3,
    rules: {
      allowOrphanBackrefs: !0,
      asciiWordBoundaries: !0,
      captureGroup: !0,
      recursionLimit: 5,
      singleline: !0,
    },
    ...e,
  });
}
function To(t = {}) {
  const e = Object.assign({ target: 'auto', cache: new Map() }, t);
  return (
    e.regexConstructor || (e.regexConstructor = (n) => Po(n, { target: e.target })),
    {
      createScanner(n) {
        return new No(n, e);
      },
      createString(n) {
        return { content: n };
      },
    }
  );
}
let j = class extends Error {
  constructor(e) {
    super(e), (this.name = 'ShikiError');
  }
};
function Lo(t) {
  return Cn(t);
}
function Cn(t) {
  return Array.isArray(t) ? $o(t) : t instanceof RegExp ? t : typeof t == 'object' ? Mo(t) : t;
}
function $o(t) {
  let e = [];
  for (let n = 0, r = t.length; n < r; n++) e[n] = Cn(t[n]);
  return e;
}
function Mo(t) {
  let e = {};
  for (let n in t) e[n] = Cn(t[n]);
  return e;
}
function Qr(t, ...e) {
  return (
    e.forEach((n) => {
      for (let r in n) t[r] = n[r];
    }),
    t
  );
}
function Jr(t) {
  const e = ~t.lastIndexOf('/') || ~t.lastIndexOf('\\');
  return e === 0 ? t : ~e === t.length - 1 ? Jr(t.substring(0, t.length - 1)) : t.substr(~e + 1);
}
var Dt = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g,
  tt = class {
    static hasCaptures(t) {
      return t === null ? !1 : ((Dt.lastIndex = 0), Dt.test(t));
    }
    static replaceCaptures(t, e, n) {
      return t.replace(Dt, (r, s, a, o) => {
        let i = n[parseInt(s || a, 10)];
        if (i) {
          let l = e.substring(i.start, i.end);
          for (; l[0] === '.'; ) l = l.substring(1);
          switch (o) {
            case 'downcase':
              return l.toLowerCase();
            case 'upcase':
              return l.toUpperCase();
            default:
              return l;
          }
        } else return r;
      });
    }
  };
function Zr(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Yr(t, e) {
  if (t === null && e === null) return 0;
  if (!t) return -1;
  if (!e) return 1;
  let n = t.length,
    r = e.length;
  if (n === r) {
    for (let s = 0; s < n; s++) {
      let a = Zr(t[s], e[s]);
      if (a !== 0) return a;
    }
    return 0;
  }
  return n - r;
}
function Qn(t) {
  return !!(
    /^#[0-9a-f]{6}$/i.test(t) ||
    /^#[0-9a-f]{8}$/i.test(t) ||
    /^#[0-9a-f]{3}$/i.test(t) ||
    /^#[0-9a-f]{4}$/i.test(t)
  );
}
function es(t) {
  return t.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&');
}
var ts = class {
    constructor(t) {
      g(this, 'cache', new Map());
      this.fn = t;
    }
    get(t) {
      if (this.cache.has(t)) return this.cache.get(t);
      const e = this.fn(t);
      return this.cache.set(t, e), e;
    }
  },
  ut = class {
    constructor(t, e, n) {
      g(this, '_cachedMatchRoot', new ts((t) => this._root.match(t)));
      (this._colorMap = t), (this._defaults = e), (this._root = n);
    }
    static createFromRawTheme(t, e) {
      return this.createFromParsedTheme(Bo(t), e);
    }
    static createFromParsedTheme(t, e) {
      return Fo(t, e);
    }
    getColorMap() {
      return this._colorMap.getColorMap();
    }
    getDefaults() {
      return this._defaults;
    }
    match(t) {
      if (t === null) return this._defaults;
      const e = t.scopeName,
        r = this._cachedMatchRoot.get(e).find((s) => Oo(t.parent, s.parentScopes));
      return r ? new ns(r.fontStyle, r.foreground, r.background) : null;
    }
  },
  Ft = class at {
    constructor(e, n) {
      (this.parent = e), (this.scopeName = n);
    }
    static push(e, n) {
      for (const r of n) e = new at(e, r);
      return e;
    }
    static from(...e) {
      let n = null;
      for (let r = 0; r < e.length; r++) n = new at(n, e[r]);
      return n;
    }
    push(e) {
      return new at(this, e);
    }
    getSegments() {
      let e = this;
      const n = [];
      for (; e; ) n.push(e.scopeName), (e = e.parent);
      return n.reverse(), n;
    }
    toString() {
      return this.getSegments().join(' ');
    }
    extends(e) {
      return this === e ? !0 : this.parent === null ? !1 : this.parent.extends(e);
    }
    getExtensionIfDefined(e) {
      const n = [];
      let r = this;
      for (; r && r !== e; ) n.push(r.scopeName), (r = r.parent);
      return r === e ? n.reverse() : void 0;
    }
  };
function Oo(t, e) {
  if (e.length === 0) return !0;
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      s = !1;
    if (r === '>') {
      if (n === e.length - 1) return !1;
      (r = e[++n]), (s = !0);
    }
    for (; t && !Go(t.scopeName, r); ) {
      if (s) return !1;
      t = t.parent;
    }
    if (!t) return !1;
    t = t.parent;
  }
  return !0;
}
function Go(t, e) {
  return e === t || (t.startsWith(e) && t[e.length] === '.');
}
var ns = class {
  constructor(t, e, n) {
    (this.fontStyle = t), (this.foregroundId = e), (this.backgroundId = n);
  }
};
function Bo(t) {
  if (!t) return [];
  if (!t.settings || !Array.isArray(t.settings)) return [];
  let e = t.settings,
    n = [],
    r = 0;
  for (let s = 0, a = e.length; s < a; s++) {
    let o = e[s];
    if (!o.settings) continue;
    let i;
    if (typeof o.scope == 'string') {
      let h = o.scope;
      (h = h.replace(/^[,]+/, '')), (h = h.replace(/[,]+$/, '')), (i = h.split(','));
    } else Array.isArray(o.scope) ? (i = o.scope) : (i = ['']);
    let l = -1;
    if (typeof o.settings.fontStyle == 'string') {
      l = 0;
      let h = o.settings.fontStyle.split(' ');
      for (let f = 0, p = h.length; f < p; f++)
        switch (h[f]) {
          case 'italic':
            l = l | 1;
            break;
          case 'bold':
            l = l | 2;
            break;
          case 'underline':
            l = l | 4;
            break;
          case 'strikethrough':
            l = l | 8;
            break;
        }
    }
    let c = null;
    typeof o.settings.foreground == 'string' &&
      Qn(o.settings.foreground) &&
      (c = o.settings.foreground);
    let u = null;
    typeof o.settings.background == 'string' &&
      Qn(o.settings.background) &&
      (u = o.settings.background);
    for (let h = 0, f = i.length; h < f; h++) {
      let d = i[h].trim().split(' '),
        b = d[d.length - 1],
        m = null;
      d.length > 1 && ((m = d.slice(0, d.length - 1)), m.reverse()),
        (n[r++] = new Do(b, m, s, l, c, u));
    }
  }
  return n;
}
var Do = class {
    constructor(t, e, n, r, s, a) {
      (this.scope = t),
        (this.parentScopes = e),
        (this.index = n),
        (this.fontStyle = r),
        (this.foreground = s),
        (this.background = a);
    }
  },
  ie = ((t) => (
    (t[(t.NotSet = -1)] = 'NotSet'),
    (t[(t.None = 0)] = 'None'),
    (t[(t.Italic = 1)] = 'Italic'),
    (t[(t.Bold = 2)] = 'Bold'),
    (t[(t.Underline = 4)] = 'Underline'),
    (t[(t.Strikethrough = 8)] = 'Strikethrough'),
    t
  ))(ie || {});
function Fo(t, e) {
  t.sort((l, c) => {
    let u = Zr(l.scope, c.scope);
    return u !== 0 || ((u = Yr(l.parentScopes, c.parentScopes)), u !== 0) ? u : l.index - c.index;
  });
  let n = 0,
    r = '#000000',
    s = '#ffffff';
  for (; t.length >= 1 && t[0].scope === ''; ) {
    let l = t.shift();
    l.fontStyle !== -1 && (n = l.fontStyle),
      l.foreground !== null && (r = l.foreground),
      l.background !== null && (s = l.background);
  }
  let a = new jo(e),
    o = new ns(n, a.getId(r), a.getId(s)),
    i = new Wo(new en(0, null, -1, 0, 0), []);
  for (let l = 0, c = t.length; l < c; l++) {
    let u = t[l];
    i.insert(0, u.scope, u.parentScopes, u.fontStyle, a.getId(u.foreground), a.getId(u.background));
  }
  return new ut(a, o, i);
}
var jo = class {
    constructor(t) {
      g(this, '_isFrozen');
      g(this, '_lastColorId');
      g(this, '_id2color');
      g(this, '_color2id');
      if (
        ((this._lastColorId = 0),
        (this._id2color = []),
        (this._color2id = Object.create(null)),
        Array.isArray(t))
      ) {
        this._isFrozen = !0;
        for (let e = 0, n = t.length; e < n; e++)
          (this._color2id[t[e]] = e), (this._id2color[e] = t[e]);
      } else this._isFrozen = !1;
    }
    getId(t) {
      if (t === null) return 0;
      t = t.toUpperCase();
      let e = this._color2id[t];
      if (e) return e;
      if (this._isFrozen) throw new Error(`Missing color in color map - ${t}`);
      return (e = ++this._lastColorId), (this._color2id[t] = e), (this._id2color[e] = t), e;
    }
    getColorMap() {
      return this._id2color.slice(0);
    }
  },
  Uo = Object.freeze([]),
  en = class rs {
    constructor(e, n, r, s, a) {
      g(this, 'scopeDepth');
      g(this, 'parentScopes');
      g(this, 'fontStyle');
      g(this, 'foreground');
      g(this, 'background');
      (this.scopeDepth = e),
        (this.parentScopes = n || Uo),
        (this.fontStyle = r),
        (this.foreground = s),
        (this.background = a);
    }
    clone() {
      return new rs(
        this.scopeDepth,
        this.parentScopes,
        this.fontStyle,
        this.foreground,
        this.background,
      );
    }
    static cloneArr(e) {
      let n = [];
      for (let r = 0, s = e.length; r < s; r++) n[r] = e[r].clone();
      return n;
    }
    acceptOverwrite(e, n, r, s) {
      this.scopeDepth > e ? console.log('how did this happen?') : (this.scopeDepth = e),
        n !== -1 && (this.fontStyle = n),
        r !== 0 && (this.foreground = r),
        s !== 0 && (this.background = s);
    }
  },
  Wo = class tn {
    constructor(e, n = [], r = {}) {
      g(this, '_rulesWithParentScopes');
      (this._mainRule = e), (this._children = r), (this._rulesWithParentScopes = n);
    }
    static _cmpBySpecificity(e, n) {
      if (e.scopeDepth !== n.scopeDepth) return n.scopeDepth - e.scopeDepth;
      let r = 0,
        s = 0;
      for (
        ;
        e.parentScopes[r] === '>' && r++,
          n.parentScopes[s] === '>' && s++,
          !(r >= e.parentScopes.length || s >= n.parentScopes.length);

      ) {
        const a = n.parentScopes[s].length - e.parentScopes[r].length;
        if (a !== 0) return a;
        r++, s++;
      }
      return n.parentScopes.length - e.parentScopes.length;
    }
    match(e) {
      if (e !== '') {
        let r = e.indexOf('.'),
          s,
          a;
        if (
          (r === -1 ? ((s = e), (a = '')) : ((s = e.substring(0, r)), (a = e.substring(r + 1))),
          this._children.hasOwnProperty(s))
        )
          return this._children[s].match(a);
      }
      const n = this._rulesWithParentScopes.concat(this._mainRule);
      return n.sort(tn._cmpBySpecificity), n;
    }
    insert(e, n, r, s, a, o) {
      if (n === '') {
        this._doInsertHere(e, r, s, a, o);
        return;
      }
      let i = n.indexOf('.'),
        l,
        c;
      i === -1 ? ((l = n), (c = '')) : ((l = n.substring(0, i)), (c = n.substring(i + 1)));
      let u;
      this._children.hasOwnProperty(l)
        ? (u = this._children[l])
        : ((u = new tn(this._mainRule.clone(), en.cloneArr(this._rulesWithParentScopes))),
          (this._children[l] = u)),
        u.insert(e + 1, c, r, s, a, o);
    }
    _doInsertHere(e, n, r, s, a) {
      if (n === null) {
        this._mainRule.acceptOverwrite(e, r, s, a);
        return;
      }
      for (let o = 0, i = this._rulesWithParentScopes.length; o < i; o++) {
        let l = this._rulesWithParentScopes[o];
        if (Yr(l.parentScopes, n) === 0) {
          l.acceptOverwrite(e, r, s, a);
          return;
        }
      }
      r === -1 && (r = this._mainRule.fontStyle),
        s === 0 && (s = this._mainRule.foreground),
        a === 0 && (a = this._mainRule.background),
        this._rulesWithParentScopes.push(new en(e, n, r, s, a));
    }
  },
  $e = class q {
    static toBinaryStr(e) {
      return e.toString(2).padStart(32, '0');
    }
    static print(e) {
      const n = q.getLanguageId(e),
        r = q.getTokenType(e),
        s = q.getFontStyle(e),
        a = q.getForeground(e),
        o = q.getBackground(e);
      console.log({ languageId: n, tokenType: r, fontStyle: s, foreground: a, background: o });
    }
    static getLanguageId(e) {
      return (e & 255) >>> 0;
    }
    static getTokenType(e) {
      return (e & 768) >>> 8;
    }
    static containsBalancedBrackets(e) {
      return (e & 1024) !== 0;
    }
    static getFontStyle(e) {
      return (e & 30720) >>> 11;
    }
    static getForeground(e) {
      return (e & 16744448) >>> 15;
    }
    static getBackground(e) {
      return (e & 4278190080) >>> 24;
    }
    static set(e, n, r, s, a, o, i) {
      let l = q.getLanguageId(e),
        c = q.getTokenType(e),
        u = q.containsBalancedBrackets(e) ? 1 : 0,
        h = q.getFontStyle(e),
        f = q.getForeground(e),
        p = q.getBackground(e);
      return (
        n !== 0 && (l = n),
        r !== 8 && (c = r),
        s !== null && (u = s ? 1 : 0),
        a !== -1 && (h = a),
        o !== 0 && (f = o),
        i !== 0 && (p = i),
        ((l << 0) | (c << 8) | (u << 10) | (h << 11) | (f << 15) | (p << 24)) >>> 0
      );
    }
  };
function ht(t, e) {
  const n = [],
    r = zo(t);
  let s = r.next();
  for (; s !== null; ) {
    let l = 0;
    if (s.length === 2 && s.charAt(1) === ':') {
      switch (s.charAt(0)) {
        case 'R':
          l = 1;
          break;
        case 'L':
          l = -1;
          break;
        default:
          console.log(`Unknown priority ${s} in scope selector`);
      }
      s = r.next();
    }
    let c = o();
    if ((n.push({ matcher: c, priority: l }), s !== ',')) break;
    s = r.next();
  }
  return n;
  function a() {
    if (s === '-') {
      s = r.next();
      const l = a();
      return (c) => !!l && !l(c);
    }
    if (s === '(') {
      s = r.next();
      const l = i();
      return s === ')' && (s = r.next()), l;
    }
    if (Jn(s)) {
      const l = [];
      do l.push(s), (s = r.next());
      while (Jn(s));
      return (c) => e(l, c);
    }
    return null;
  }
  function o() {
    const l = [];
    let c = a();
    for (; c; ) l.push(c), (c = a());
    return (u) => l.every((h) => h(u));
  }
  function i() {
    const l = [];
    let c = o();
    for (; c && (l.push(c), s === '|' || s === ','); ) {
      do s = r.next();
      while (s === '|' || s === ',');
      c = o();
    }
    return (u) => l.some((h) => h(u));
  }
}
function Jn(t) {
  return !!t && !!t.match(/[\w\.:]+/);
}
function zo(t) {
  let e = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,
    n = e.exec(t);
  return {
    next: () => {
      if (!n) return null;
      const r = n[0];
      return (n = e.exec(t)), r;
    },
  };
}
function ss(t) {
  typeof t.dispose == 'function' && t.dispose();
}
var He = class {
    constructor(t) {
      this.scopeName = t;
    }
    toKey() {
      return this.scopeName;
    }
  },
  Ho = class {
    constructor(t, e) {
      (this.scopeName = t), (this.ruleName = e);
    }
    toKey() {
      return `${this.scopeName}#${this.ruleName}`;
    }
  },
  qo = class {
    constructor() {
      g(this, '_references', []);
      g(this, '_seenReferenceKeys', new Set());
      g(this, 'visitedRule', new Set());
    }
    get references() {
      return this._references;
    }
    add(t) {
      const e = t.toKey();
      this._seenReferenceKeys.has(e) || (this._seenReferenceKeys.add(e), this._references.push(t));
    }
  },
  Vo = class {
    constructor(t, e) {
      g(this, 'seenFullScopeRequests', new Set());
      g(this, 'seenPartialScopeRequests', new Set());
      g(this, 'Q');
      (this.repo = t),
        (this.initialScopeName = e),
        this.seenFullScopeRequests.add(this.initialScopeName),
        (this.Q = [new He(this.initialScopeName)]);
    }
    processQueue() {
      const t = this.Q;
      this.Q = [];
      const e = new qo();
      for (const n of t) Ko(n, this.initialScopeName, this.repo, e);
      for (const n of e.references)
        if (n instanceof He) {
          if (this.seenFullScopeRequests.has(n.scopeName)) continue;
          this.seenFullScopeRequests.add(n.scopeName), this.Q.push(n);
        } else {
          if (
            this.seenFullScopeRequests.has(n.scopeName) ||
            this.seenPartialScopeRequests.has(n.toKey())
          )
            continue;
          this.seenPartialScopeRequests.add(n.toKey()), this.Q.push(n);
        }
    }
  };
function Ko(t, e, n, r) {
  const s = n.lookup(t.scopeName);
  if (!s) {
    if (t.scopeName === e) throw new Error(`No grammar provided for <${e}>`);
    return;
  }
  const a = n.lookup(e);
  t instanceof He
    ? ot({ baseGrammar: a, selfGrammar: s }, r)
    : nn(t.ruleName, { baseGrammar: a, selfGrammar: s, repository: s.repository }, r);
  const o = n.injections(t.scopeName);
  if (o) for (const i of o) r.add(new He(i));
}
function nn(t, e, n) {
  if (e.repository && e.repository[t]) {
    const r = e.repository[t];
    pt([r], e, n);
  }
}
function ot(t, e) {
  t.selfGrammar.patterns &&
    Array.isArray(t.selfGrammar.patterns) &&
    pt(t.selfGrammar.patterns, { ...t, repository: t.selfGrammar.repository }, e),
    t.selfGrammar.injections &&
      pt(
        Object.values(t.selfGrammar.injections),
        { ...t, repository: t.selfGrammar.repository },
        e,
      );
}
function pt(t, e, n) {
  for (const r of t) {
    if (n.visitedRule.has(r)) continue;
    n.visitedRule.add(r);
    const s = r.repository ? Qr({}, e.repository, r.repository) : e.repository;
    Array.isArray(r.patterns) && pt(r.patterns, { ...e, repository: s }, n);
    const a = r.include;
    if (!a) continue;
    const o = as(a);
    switch (o.kind) {
      case 0:
        ot({ ...e, selfGrammar: e.baseGrammar }, n);
        break;
      case 1:
        ot(e, n);
        break;
      case 2:
        nn(o.ruleName, { ...e, repository: s }, n);
        break;
      case 3:
      case 4:
        const i =
          o.scopeName === e.selfGrammar.scopeName
            ? e.selfGrammar
            : o.scopeName === e.baseGrammar.scopeName
              ? e.baseGrammar
              : void 0;
        if (i) {
          const l = { baseGrammar: e.baseGrammar, selfGrammar: i, repository: s };
          o.kind === 4 ? nn(o.ruleName, l, n) : ot(l, n);
        } else o.kind === 4 ? n.add(new Ho(o.scopeName, o.ruleName)) : n.add(new He(o.scopeName));
        break;
    }
  }
}
var Xo = class {
    constructor() {
      g(this, 'kind', 0);
    }
  },
  Qo = class {
    constructor() {
      g(this, 'kind', 1);
    }
  },
  Jo = class {
    constructor(t) {
      g(this, 'kind', 2);
      this.ruleName = t;
    }
  },
  Zo = class {
    constructor(t) {
      g(this, 'kind', 3);
      this.scopeName = t;
    }
  },
  Yo = class {
    constructor(t, e) {
      g(this, 'kind', 4);
      (this.scopeName = t), (this.ruleName = e);
    }
  };
function as(t) {
  if (t === '$base') return new Xo();
  if (t === '$self') return new Qo();
  const e = t.indexOf('#');
  if (e === -1) return new Zo(t);
  if (e === 0) return new Jo(t.substring(1));
  {
    const n = t.substring(0, e),
      r = t.substring(e + 1);
    return new Yo(n, r);
  }
}
var ei = /\\(\d+)/,
  Zn = /\\(\d+)/g,
  ti = -1,
  os = -2;
var Je = class {
    constructor(t, e, n, r) {
      g(this, '$location');
      g(this, 'id');
      g(this, '_nameIsCapturing');
      g(this, '_name');
      g(this, '_contentNameIsCapturing');
      g(this, '_contentName');
      (this.$location = t),
        (this.id = e),
        (this._name = n || null),
        (this._nameIsCapturing = tt.hasCaptures(this._name)),
        (this._contentName = r || null),
        (this._contentNameIsCapturing = tt.hasCaptures(this._contentName));
    }
    get debugName() {
      const t = this.$location
        ? `${Jr(this.$location.filename)}:${this.$location.line}`
        : 'unknown';
      return `${this.constructor.name}#${this.id} @ ${t}`;
    }
    getName(t, e) {
      return !this._nameIsCapturing || this._name === null || t === null || e === null
        ? this._name
        : tt.replaceCaptures(this._name, t, e);
    }
    getContentName(t, e) {
      return !this._contentNameIsCapturing || this._contentName === null
        ? this._contentName
        : tt.replaceCaptures(this._contentName, t, e);
    }
  },
  ni = class extends Je {
    constructor(e, n, r, s, a) {
      super(e, n, r, s);
      g(this, 'retokenizeCapturedWithRuleId');
      this.retokenizeCapturedWithRuleId = a;
    }
    dispose() {}
    collectPatterns(e, n) {
      throw new Error('Not supported!');
    }
    compile(e, n) {
      throw new Error('Not supported!');
    }
    compileAG(e, n, r, s) {
      throw new Error('Not supported!');
    }
  },
  ri = class extends Je {
    constructor(e, n, r, s, a) {
      super(e, n, r, null);
      g(this, '_match');
      g(this, 'captures');
      g(this, '_cachedCompiledPatterns');
      (this._match = new qe(s, this.id)),
        (this.captures = a),
        (this._cachedCompiledPatterns = null);
    }
    dispose() {
      this._cachedCompiledPatterns &&
        (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null));
    }
    get debugMatchRegExp() {
      return `${this._match.source}`;
    }
    collectPatterns(e, n) {
      n.push(this._match);
    }
    compile(e, n) {
      return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, n, r, s) {
      return this._getCachedCompiledPatterns(e).compileAG(e, r, s);
    }
    _getCachedCompiledPatterns(e) {
      return (
        this._cachedCompiledPatterns ||
          ((this._cachedCompiledPatterns = new Ve()),
          this.collectPatterns(e, this._cachedCompiledPatterns)),
        this._cachedCompiledPatterns
      );
    }
  },
  Yn = class extends Je {
    constructor(e, n, r, s, a) {
      super(e, n, r, s);
      g(this, 'hasMissingPatterns');
      g(this, 'patterns');
      g(this, '_cachedCompiledPatterns');
      (this.patterns = a.patterns),
        (this.hasMissingPatterns = a.hasMissingPatterns),
        (this._cachedCompiledPatterns = null);
    }
    dispose() {
      this._cachedCompiledPatterns &&
        (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null));
    }
    collectPatterns(e, n) {
      for (const r of this.patterns) e.getRule(r).collectPatterns(e, n);
    }
    compile(e, n) {
      return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, n, r, s) {
      return this._getCachedCompiledPatterns(e).compileAG(e, r, s);
    }
    _getCachedCompiledPatterns(e) {
      return (
        this._cachedCompiledPatterns ||
          ((this._cachedCompiledPatterns = new Ve()),
          this.collectPatterns(e, this._cachedCompiledPatterns)),
        this._cachedCompiledPatterns
      );
    }
  },
  rn = class extends Je {
    constructor(e, n, r, s, a, o, i, l, c, u) {
      super(e, n, r, s);
      g(this, '_begin');
      g(this, 'beginCaptures');
      g(this, '_end');
      g(this, 'endHasBackReferences');
      g(this, 'endCaptures');
      g(this, 'applyEndPatternLast');
      g(this, 'hasMissingPatterns');
      g(this, 'patterns');
      g(this, '_cachedCompiledPatterns');
      (this._begin = new qe(a, this.id)),
        (this.beginCaptures = o),
        (this._end = new qe(i || '￿', -1)),
        (this.endHasBackReferences = this._end.hasBackReferences),
        (this.endCaptures = l),
        (this.applyEndPatternLast = c || !1),
        (this.patterns = u.patterns),
        (this.hasMissingPatterns = u.hasMissingPatterns),
        (this._cachedCompiledPatterns = null);
    }
    dispose() {
      this._cachedCompiledPatterns &&
        (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null));
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugEndRegExp() {
      return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(e, n) {
      return this._end.resolveBackReferences(e, n);
    }
    collectPatterns(e, n) {
      n.push(this._begin);
    }
    compile(e, n) {
      return this._getCachedCompiledPatterns(e, n).compile(e);
    }
    compileAG(e, n, r, s) {
      return this._getCachedCompiledPatterns(e, n).compileAG(e, r, s);
    }
    _getCachedCompiledPatterns(e, n) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new Ve();
        for (const r of this.patterns)
          e.getRule(r).collectPatterns(e, this._cachedCompiledPatterns);
        this.applyEndPatternLast
          ? this._cachedCompiledPatterns.push(
              this._end.hasBackReferences ? this._end.clone() : this._end,
            )
          : this._cachedCompiledPatterns.unshift(
              this._end.hasBackReferences ? this._end.clone() : this._end,
            );
      }
      return (
        this._end.hasBackReferences &&
          (this.applyEndPatternLast
            ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, n)
            : this._cachedCompiledPatterns.setSource(0, n)),
        this._cachedCompiledPatterns
      );
    }
  },
  ft = class extends Je {
    constructor(e, n, r, s, a, o, i, l, c) {
      super(e, n, r, s);
      g(this, '_begin');
      g(this, 'beginCaptures');
      g(this, 'whileCaptures');
      g(this, '_while');
      g(this, 'whileHasBackReferences');
      g(this, 'hasMissingPatterns');
      g(this, 'patterns');
      g(this, '_cachedCompiledPatterns');
      g(this, '_cachedCompiledWhilePatterns');
      (this._begin = new qe(a, this.id)),
        (this.beginCaptures = o),
        (this.whileCaptures = l),
        (this._while = new qe(i, os)),
        (this.whileHasBackReferences = this._while.hasBackReferences),
        (this.patterns = c.patterns),
        (this.hasMissingPatterns = c.hasMissingPatterns),
        (this._cachedCompiledPatterns = null),
        (this._cachedCompiledWhilePatterns = null);
    }
    dispose() {
      this._cachedCompiledPatterns &&
        (this._cachedCompiledPatterns.dispose(), (this._cachedCompiledPatterns = null)),
        this._cachedCompiledWhilePatterns &&
          (this._cachedCompiledWhilePatterns.dispose(), (this._cachedCompiledWhilePatterns = null));
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
      return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(e, n) {
      return this._while.resolveBackReferences(e, n);
    }
    collectPatterns(e, n) {
      n.push(this._begin);
    }
    compile(e, n) {
      return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, n, r, s) {
      return this._getCachedCompiledPatterns(e).compileAG(e, r, s);
    }
    _getCachedCompiledPatterns(e) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new Ve();
        for (const n of this.patterns)
          e.getRule(n).collectPatterns(e, this._cachedCompiledPatterns);
      }
      return this._cachedCompiledPatterns;
    }
    compileWhile(e, n) {
      return this._getCachedCompiledWhilePatterns(e, n).compile(e);
    }
    compileWhileAG(e, n, r, s) {
      return this._getCachedCompiledWhilePatterns(e, n).compileAG(e, r, s);
    }
    _getCachedCompiledWhilePatterns(e, n) {
      return (
        this._cachedCompiledWhilePatterns ||
          ((this._cachedCompiledWhilePatterns = new Ve()),
          this._cachedCompiledWhilePatterns.push(
            this._while.hasBackReferences ? this._while.clone() : this._while,
          )),
        this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, n || '￿'),
        this._cachedCompiledWhilePatterns
      );
    }
  },
  is = class D {
    static createCaptureRule(e, n, r, s, a) {
      return e.registerRule((o) => new ni(n, o, r, s, a));
    }
    static getCompiledRuleId(e, n, r) {
      return (
        e.id ||
          n.registerRule((s) => {
            if (((e.id = s), e.match))
              return new ri(
                e.$vscodeTextmateLocation,
                e.id,
                e.name,
                e.match,
                D._compileCaptures(e.captures, n, r),
              );
            if (typeof e.begin > 'u') {
              e.repository && (r = Qr({}, r, e.repository));
              let a = e.patterns;
              return (
                typeof a > 'u' && e.include && (a = [{ include: e.include }]),
                new Yn(
                  e.$vscodeTextmateLocation,
                  e.id,
                  e.name,
                  e.contentName,
                  D._compilePatterns(a, n, r),
                )
              );
            }
            return e.while
              ? new ft(
                  e.$vscodeTextmateLocation,
                  e.id,
                  e.name,
                  e.contentName,
                  e.begin,
                  D._compileCaptures(e.beginCaptures || e.captures, n, r),
                  e.while,
                  D._compileCaptures(e.whileCaptures || e.captures, n, r),
                  D._compilePatterns(e.patterns, n, r),
                )
              : new rn(
                  e.$vscodeTextmateLocation,
                  e.id,
                  e.name,
                  e.contentName,
                  e.begin,
                  D._compileCaptures(e.beginCaptures || e.captures, n, r),
                  e.end,
                  D._compileCaptures(e.endCaptures || e.captures, n, r),
                  e.applyEndPatternLast,
                  D._compilePatterns(e.patterns, n, r),
                );
          }),
        e.id
      );
    }
    static _compileCaptures(e, n, r) {
      let s = [];
      if (e) {
        let a = 0;
        for (const o in e) {
          if (o === '$vscodeTextmateLocation') continue;
          const i = parseInt(o, 10);
          i > a && (a = i);
        }
        for (let o = 0; o <= a; o++) s[o] = null;
        for (const o in e) {
          if (o === '$vscodeTextmateLocation') continue;
          const i = parseInt(o, 10);
          let l = 0;
          e[o].patterns && (l = D.getCompiledRuleId(e[o], n, r)),
            (s[i] = D.createCaptureRule(
              n,
              e[o].$vscodeTextmateLocation,
              e[o].name,
              e[o].contentName,
              l,
            ));
        }
      }
      return s;
    }
    static _compilePatterns(e, n, r) {
      let s = [];
      if (e)
        for (let a = 0, o = e.length; a < o; a++) {
          const i = e[a];
          let l = -1;
          if (i.include) {
            const c = as(i.include);
            switch (c.kind) {
              case 0:
              case 1:
                l = D.getCompiledRuleId(r[i.include], n, r);
                break;
              case 2:
                let u = r[c.ruleName];
                u && (l = D.getCompiledRuleId(u, n, r));
                break;
              case 3:
              case 4:
                const h = c.scopeName,
                  f = c.kind === 4 ? c.ruleName : null,
                  p = n.getExternalGrammar(h, r);
                if (p)
                  if (f) {
                    let d = p.repository[f];
                    d && (l = D.getCompiledRuleId(d, n, p.repository));
                  } else l = D.getCompiledRuleId(p.repository.$self, n, p.repository);
                break;
            }
          } else l = D.getCompiledRuleId(i, n, r);
          if (l !== -1) {
            const c = n.getRule(l);
            let u = !1;
            if (
              ((c instanceof Yn || c instanceof rn || c instanceof ft) &&
                c.hasMissingPatterns &&
                c.patterns.length === 0 &&
                (u = !0),
              u)
            )
              continue;
            s.push(l);
          }
        }
      return { patterns: s, hasMissingPatterns: (e ? e.length : 0) !== s.length };
    }
  },
  qe = class ls {
    constructor(e, n) {
      g(this, 'source');
      g(this, 'ruleId');
      g(this, 'hasAnchor');
      g(this, 'hasBackReferences');
      g(this, '_anchorCache');
      if (e && typeof e == 'string') {
        const r = e.length;
        let s = 0,
          a = [],
          o = !1;
        for (let i = 0; i < r; i++)
          if (e.charAt(i) === '\\' && i + 1 < r) {
            const c = e.charAt(i + 1);
            c === 'z'
              ? (a.push(e.substring(s, i)), a.push('$(?!\\n)(?<!\\n)'), (s = i + 2))
              : (c === 'A' || c === 'G') && (o = !0),
              i++;
          }
        (this.hasAnchor = o),
          s === 0 ? (this.source = e) : (a.push(e.substring(s, r)), (this.source = a.join('')));
      } else (this.hasAnchor = !1), (this.source = e);
      this.hasAnchor ? (this._anchorCache = this._buildAnchorCache()) : (this._anchorCache = null),
        (this.ruleId = n),
        typeof this.source == 'string'
          ? (this.hasBackReferences = ei.test(this.source))
          : (this.hasBackReferences = !1);
    }
    clone() {
      return new ls(this.source, this.ruleId);
    }
    setSource(e) {
      this.source !== e &&
        ((this.source = e), this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
    }
    resolveBackReferences(e, n) {
      if (typeof this.source != 'string')
        throw new Error('This method should only be called if the source is a string');
      let r = n.map((s) => e.substring(s.start, s.end));
      return (Zn.lastIndex = 0), this.source.replace(Zn, (s, a) => es(r[parseInt(a, 10)] || ''));
    }
    _buildAnchorCache() {
      if (typeof this.source != 'string')
        throw new Error('This method should only be called if the source is a string');
      let e = [],
        n = [],
        r = [],
        s = [],
        a,
        o,
        i,
        l;
      for (a = 0, o = this.source.length; a < o; a++)
        (i = this.source.charAt(a)),
          (e[a] = i),
          (n[a] = i),
          (r[a] = i),
          (s[a] = i),
          i === '\\' &&
            a + 1 < o &&
            ((l = this.source.charAt(a + 1)),
            l === 'A'
              ? ((e[a + 1] = '￿'), (n[a + 1] = '￿'), (r[a + 1] = 'A'), (s[a + 1] = 'A'))
              : l === 'G'
                ? ((e[a + 1] = '￿'), (n[a + 1] = 'G'), (r[a + 1] = '￿'), (s[a + 1] = 'G'))
                : ((e[a + 1] = l), (n[a + 1] = l), (r[a + 1] = l), (s[a + 1] = l)),
            a++);
      return { A0_G0: e.join(''), A0_G1: n.join(''), A1_G0: r.join(''), A1_G1: s.join('') };
    }
    resolveAnchors(e, n) {
      return !this.hasAnchor || !this._anchorCache || typeof this.source != 'string'
        ? this.source
        : e
          ? n
            ? this._anchorCache.A1_G1
            : this._anchorCache.A1_G0
          : n
            ? this._anchorCache.A0_G1
            : this._anchorCache.A0_G0;
    }
  },
  Ve = class {
    constructor() {
      g(this, '_items');
      g(this, '_hasAnchors');
      g(this, '_cached');
      g(this, '_anchorCache');
      (this._items = []),
        (this._hasAnchors = !1),
        (this._cached = null),
        (this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null });
    }
    dispose() {
      this._disposeCaches();
    }
    _disposeCaches() {
      this._cached && (this._cached.dispose(), (this._cached = null)),
        this._anchorCache.A0_G0 &&
          (this._anchorCache.A0_G0.dispose(), (this._anchorCache.A0_G0 = null)),
        this._anchorCache.A0_G1 &&
          (this._anchorCache.A0_G1.dispose(), (this._anchorCache.A0_G1 = null)),
        this._anchorCache.A1_G0 &&
          (this._anchorCache.A1_G0.dispose(), (this._anchorCache.A1_G0 = null)),
        this._anchorCache.A1_G1 &&
          (this._anchorCache.A1_G1.dispose(), (this._anchorCache.A1_G1 = null));
    }
    push(t) {
      this._items.push(t), (this._hasAnchors = this._hasAnchors || t.hasAnchor);
    }
    unshift(t) {
      this._items.unshift(t), (this._hasAnchors = this._hasAnchors || t.hasAnchor);
    }
    length() {
      return this._items.length;
    }
    setSource(t, e) {
      this._items[t].source !== e && (this._disposeCaches(), this._items[t].setSource(e));
    }
    compile(t) {
      if (!this._cached) {
        let e = this._items.map((n) => n.source);
        this._cached = new er(
          t,
          e,
          this._items.map((n) => n.ruleId),
        );
      }
      return this._cached;
    }
    compileAG(t, e, n) {
      return this._hasAnchors
        ? e
          ? n
            ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(t, e, n)),
              this._anchorCache.A1_G1)
            : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(t, e, n)),
              this._anchorCache.A1_G0)
          : n
            ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(t, e, n)),
              this._anchorCache.A0_G1)
            : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(t, e, n)),
              this._anchorCache.A0_G0)
        : this.compile(t);
    }
    _resolveAnchors(t, e, n) {
      let r = this._items.map((s) => s.resolveAnchors(e, n));
      return new er(
        t,
        r,
        this._items.map((s) => s.ruleId),
      );
    }
  },
  er = class {
    constructor(t, e, n) {
      g(this, 'scanner');
      (this.regExps = e), (this.rules = n), (this.scanner = t.createOnigScanner(e));
    }
    dispose() {
      typeof this.scanner.dispose == 'function' && this.scanner.dispose();
    }
    toString() {
      const t = [];
      for (let e = 0, n = this.rules.length; e < n; e++)
        t.push('   - ' + this.rules[e] + ': ' + this.regExps[e]);
      return t.join(`
`);
    }
    findNextMatchSync(t, e, n) {
      const r = this.scanner.findNextMatchSync(t, e, n);
      return r ? { ruleId: this.rules[r.index], captureIndices: r.captureIndices } : null;
    }
  },
  jt = class {
    constructor(t, e) {
      (this.languageId = t), (this.tokenType = e);
    }
  },
  oe,
  si =
    ((oe = class {
      constructor(e, n) {
        g(this, '_defaultAttributes');
        g(this, '_embeddedLanguagesMatcher');
        g(
          this,
          '_getBasicScopeAttributes',
          new ts((e) => {
            const n = this._scopeToLanguage(e),
              r = this._toStandardTokenType(e);
            return new jt(n, r);
          }),
        );
        (this._defaultAttributes = new jt(e, 8)),
          (this._embeddedLanguagesMatcher = new ai(Object.entries(n || {})));
      }
      getDefaultAttributes() {
        return this._defaultAttributes;
      }
      getBasicScopeAttributes(e) {
        return e === null ? oe._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(e);
      }
      _scopeToLanguage(e) {
        return this._embeddedLanguagesMatcher.match(e) || 0;
      }
      _toStandardTokenType(e) {
        const n = e.match(oe.STANDARD_TOKEN_TYPE_REGEXP);
        if (!n) return 8;
        switch (n[1]) {
          case 'comment':
            return 1;
          case 'string':
            return 2;
          case 'regex':
            return 3;
          case 'meta.embedded':
            return 0;
        }
        throw new Error('Unexpected match for standard token type!');
      }
    }),
    g(oe, '_NULL_SCOPE_METADATA', new jt(0, 0)),
    g(oe, 'STANDARD_TOKEN_TYPE_REGEXP', /\b(comment|string|regex|meta\.embedded)\b/),
    oe),
  ai = class {
    constructor(t) {
      g(this, 'values');
      g(this, 'scopesRegExp');
      if (t.length === 0) (this.values = null), (this.scopesRegExp = null);
      else {
        this.values = new Map(t);
        const e = t.map(([n, r]) => es(n));
        e.sort(), e.reverse(), (this.scopesRegExp = new RegExp(`^((${e.join(')|(')}))($|\\.)`, ''));
      }
    }
    match(t) {
      if (!this.scopesRegExp) return;
      const e = t.match(this.scopesRegExp);
      if (e) return this.values.get(e[1]);
    }
  },
  tr = class {
    constructor(t, e) {
      (this.stack = t), (this.stoppedEarly = e);
    }
  };
function cs(t, e, n, r, s, a, o, i) {
  const l = e.content.length;
  let c = !1,
    u = -1;
  if (o) {
    const p = oi(t, e, n, r, s, a);
    (s = p.stack), (r = p.linePos), (n = p.isFirstLine), (u = p.anchorPosition);
  }
  const h = Date.now();
  for (; !c; ) {
    if (i !== 0 && Date.now() - h > i) return new tr(s, !0);
    f();
  }
  return new tr(s, !1);
  function f() {
    const p = ii(t, e, n, r, s, u);
    if (!p) {
      a.produce(s, l), (c = !0);
      return;
    }
    const d = p.captureIndices,
      b = p.matchedRuleId,
      m = d && d.length > 0 ? d[0].end > r : !1;
    if (b === ti) {
      const _ = s.getRule(t);
      a.produce(s, d[0].start),
        (s = s.withContentNameScopesList(s.nameScopesList)),
        je(t, e, n, s, a, _.endCaptures, d),
        a.produce(s, d[0].end);
      const w = s;
      if (((s = s.parent), (u = w.getAnchorPos()), !m && w.getEnterPos() === r)) {
        (s = w), a.produce(s, l), (c = !0);
        return;
      }
    } else {
      const _ = t.getRule(b);
      a.produce(s, d[0].start);
      const w = s,
        k = _.getName(e.content, d),
        E = s.contentNameScopesList.pushAttributed(k, t);
      if (((s = s.push(b, r, u, d[0].end === l, null, E, E)), _ instanceof rn)) {
        const I = _;
        je(t, e, n, s, a, I.beginCaptures, d), a.produce(s, d[0].end), (u = d[0].end);
        const G = I.getContentName(e.content, d),
          P = E.pushAttributed(G, t);
        if (
          ((s = s.withContentNameScopesList(P)),
          I.endHasBackReferences &&
            (s = s.withEndRule(I.getEndWithResolvedBackReferences(e.content, d))),
          !m && w.hasSameRuleAs(s))
        ) {
          (s = s.pop()), a.produce(s, l), (c = !0);
          return;
        }
      } else if (_ instanceof ft) {
        const I = _;
        je(t, e, n, s, a, I.beginCaptures, d), a.produce(s, d[0].end), (u = d[0].end);
        const G = I.getContentName(e.content, d),
          P = E.pushAttributed(G, t);
        if (
          ((s = s.withContentNameScopesList(P)),
          I.whileHasBackReferences &&
            (s = s.withEndRule(I.getWhileWithResolvedBackReferences(e.content, d))),
          !m && w.hasSameRuleAs(s))
        ) {
          (s = s.pop()), a.produce(s, l), (c = !0);
          return;
        }
      } else if ((je(t, e, n, s, a, _.captures, d), a.produce(s, d[0].end), (s = s.pop()), !m)) {
        (s = s.safePop()), a.produce(s, l), (c = !0);
        return;
      }
    }
    d[0].end > r && ((r = d[0].end), (n = !1));
  }
}
function oi(t, e, n, r, s, a) {
  let o = s.beginRuleCapturedEOL ? 0 : -1;
  const i = [];
  for (let l = s; l; l = l.pop()) {
    const c = l.getRule(t);
    c instanceof ft && i.push({ rule: c, stack: l });
  }
  for (let l = i.pop(); l; l = i.pop()) {
    const { ruleScanner: c, findOptions: u } = ui(l.rule, t, l.stack.endRule, n, r === o),
      h = c.findNextMatchSync(e, r, u);
    if (h) {
      if (h.ruleId !== os) {
        s = l.stack.pop();
        break;
      }
      h.captureIndices &&
        h.captureIndices.length &&
        (a.produce(l.stack, h.captureIndices[0].start),
        je(t, e, n, l.stack, a, l.rule.whileCaptures, h.captureIndices),
        a.produce(l.stack, h.captureIndices[0].end),
        (o = h.captureIndices[0].end),
        h.captureIndices[0].end > r && ((r = h.captureIndices[0].end), (n = !1)));
    } else {
      s = l.stack.pop();
      break;
    }
  }
  return { stack: s, linePos: r, anchorPosition: o, isFirstLine: n };
}
function ii(t, e, n, r, s, a) {
  const o = li(t, e, n, r, s, a),
    i = t.getInjections();
  if (i.length === 0) return o;
  const l = ci(i, t, e, n, r, s, a);
  if (!l) return o;
  if (!o) return l;
  const c = o.captureIndices[0].start,
    u = l.captureIndices[0].start;
  return u < c || (l.priorityMatch && u === c) ? l : o;
}
function li(t, e, n, r, s, a) {
  const o = s.getRule(t),
    { ruleScanner: i, findOptions: l } = us(o, t, s.endRule, n, r === a),
    c = i.findNextMatchSync(e, r, l);
  return c ? { captureIndices: c.captureIndices, matchedRuleId: c.ruleId } : null;
}
function ci(t, e, n, r, s, a, o) {
  let i = Number.MAX_VALUE,
    l = null,
    c,
    u = 0;
  const h = a.contentNameScopesList.getScopeNames();
  for (let f = 0, p = t.length; f < p; f++) {
    const d = t[f];
    if (!d.matcher(h)) continue;
    const b = e.getRule(d.ruleId),
      { ruleScanner: m, findOptions: _ } = us(b, e, null, r, s === o),
      w = m.findNextMatchSync(n, s, _);
    if (!w) continue;
    const k = w.captureIndices[0].start;
    if (!(k >= i) && ((i = k), (l = w.captureIndices), (c = w.ruleId), (u = d.priority), i === s))
      break;
  }
  return l ? { priorityMatch: u === -1, captureIndices: l, matchedRuleId: c } : null;
}
function us(t, e, n, r, s) {
  return { ruleScanner: t.compileAG(e, n, r, s), findOptions: 0 };
}
function ui(t, e, n, r, s) {
  return { ruleScanner: t.compileWhileAG(e, n, r, s), findOptions: 0 };
}
function je(t, e, n, r, s, a, o) {
  if (a.length === 0) return;
  const i = e.content,
    l = Math.min(a.length, o.length),
    c = [],
    u = o[0].end;
  for (let h = 0; h < l; h++) {
    const f = a[h];
    if (f === null) continue;
    const p = o[h];
    if (p.length === 0) continue;
    if (p.start > u) break;
    for (; c.length > 0 && c[c.length - 1].endPos <= p.start; )
      s.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos), c.pop();
    if (
      (c.length > 0 ? s.produceFromScopes(c[c.length - 1].scopes, p.start) : s.produce(r, p.start),
      f.retokenizeCapturedWithRuleId)
    ) {
      const b = f.getName(i, o),
        m = r.contentNameScopesList.pushAttributed(b, t),
        _ = f.getContentName(i, o),
        w = m.pushAttributed(_, t),
        k = r.push(f.retokenizeCapturedWithRuleId, p.start, -1, !1, null, m, w),
        E = t.createOnigString(i.substring(0, p.end));
      cs(t, E, n && p.start === 0, p.start, k, s, !1, 0), ss(E);
      continue;
    }
    const d = f.getName(i, o);
    if (d !== null) {
      const m = (c.length > 0 ? c[c.length - 1].scopes : r.contentNameScopesList).pushAttributed(
        d,
        t,
      );
      c.push(new hi(m, p.end));
    }
  }
  for (; c.length > 0; )
    s.produceFromScopes(c[c.length - 1].scopes, c[c.length - 1].endPos), c.pop();
}
var hi = class {
  constructor(t, e) {
    g(this, 'scopes');
    g(this, 'endPos');
    (this.scopes = t), (this.endPos = e);
  }
};
function pi(t, e, n, r, s, a, o, i) {
  return new di(t, e, n, r, s, a, o, i);
}
function nr(t, e, n, r, s) {
  const a = ht(e, dt),
    o = is.getCompiledRuleId(n, r, s.repository);
  for (const i of a)
    t.push({ debugSelector: e, matcher: i.matcher, ruleId: o, grammar: s, priority: i.priority });
}
function dt(t, e) {
  if (e.length < t.length) return !1;
  let n = 0;
  return t.every((r) => {
    for (let s = n; s < e.length; s++) if (fi(e[s], r)) return (n = s + 1), !0;
    return !1;
  });
}
function fi(t, e) {
  if (!t) return !1;
  if (t === e) return !0;
  const n = e.length;
  return t.length > n && t.substr(0, n) === e && t[n] === '.';
}
var di = class {
  constructor(t, e, n, r, s, a, o, i) {
    g(this, '_rootId');
    g(this, '_lastRuleId');
    g(this, '_ruleId2desc');
    g(this, '_includedGrammars');
    g(this, '_grammarRepository');
    g(this, '_grammar');
    g(this, '_injections');
    g(this, '_basicScopeAttributesProvider');
    g(this, '_tokenTypeMatchers');
    if (
      ((this._rootScopeName = t),
      (this.balancedBracketSelectors = a),
      (this._onigLib = i),
      (this._basicScopeAttributesProvider = new si(n, r)),
      (this._rootId = -1),
      (this._lastRuleId = 0),
      (this._ruleId2desc = [null]),
      (this._includedGrammars = {}),
      (this._grammarRepository = o),
      (this._grammar = rr(e, null)),
      (this._injections = null),
      (this._tokenTypeMatchers = []),
      s)
    )
      for (const l of Object.keys(s)) {
        const c = ht(l, dt);
        for (const u of c) this._tokenTypeMatchers.push({ matcher: u.matcher, type: s[l] });
      }
  }
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const t of this._ruleId2desc) t && t.dispose();
  }
  createOnigScanner(t) {
    return this._onigLib.createOnigScanner(t);
  }
  createOnigString(t) {
    return this._onigLib.createOnigString(t);
  }
  getMetadataForScope(t) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(t);
  }
  _collectInjections() {
    const t = {
        lookup: (s) => (s === this._rootScopeName ? this._grammar : this.getExternalGrammar(s)),
        injections: (s) => this._grammarRepository.injections(s),
      },
      e = [],
      n = this._rootScopeName,
      r = t.lookup(n);
    if (r) {
      const s = r.injections;
      if (s) for (let o in s) nr(e, o, s[o], this, r);
      const a = this._grammarRepository.injections(n);
      a &&
        a.forEach((o) => {
          const i = this.getExternalGrammar(o);
          if (i) {
            const l = i.injectionSelector;
            l && nr(e, l, i, this, i);
          }
        });
    }
    return e.sort((s, a) => s.priority - a.priority), e;
  }
  getInjections() {
    return (
      this._injections === null && (this._injections = this._collectInjections()), this._injections
    );
  }
  registerRule(t) {
    const e = ++this._lastRuleId,
      n = t(e);
    return (this._ruleId2desc[e] = n), n;
  }
  getRule(t) {
    return this._ruleId2desc[t];
  }
  getExternalGrammar(t, e) {
    if (this._includedGrammars[t]) return this._includedGrammars[t];
    if (this._grammarRepository) {
      const n = this._grammarRepository.lookup(t);
      if (n) return (this._includedGrammars[t] = rr(n, e && e.$base)), this._includedGrammars[t];
    }
  }
  tokenizeLine(t, e, n = 0) {
    const r = this._tokenize(t, e, !1, n);
    return {
      tokens: r.lineTokens.getResult(r.ruleStack, r.lineLength),
      ruleStack: r.ruleStack,
      stoppedEarly: r.stoppedEarly,
    };
  }
  tokenizeLine2(t, e, n = 0) {
    const r = this._tokenize(t, e, !0, n);
    return {
      tokens: r.lineTokens.getBinaryResult(r.ruleStack, r.lineLength),
      ruleStack: r.ruleStack,
      stoppedEarly: r.stoppedEarly,
    };
  }
  _tokenize(t, e, n, r) {
    this._rootId === -1 &&
      ((this._rootId = is.getCompiledRuleId(
        this._grammar.repository.$self,
        this,
        this._grammar.repository,
      )),
      this.getInjections());
    let s;
    if (!e || e === sn.NULL) {
      s = !0;
      const c = this._basicScopeAttributesProvider.getDefaultAttributes(),
        u = this.themeProvider.getDefaults(),
        h = $e.set(0, c.languageId, c.tokenType, null, u.fontStyle, u.foregroundId, u.backgroundId),
        f = this.getRule(this._rootId).getName(null, null);
      let p;
      f ? (p = We.createRootAndLookUpScopeName(f, h, this)) : (p = We.createRoot('unknown', h)),
        (e = new sn(null, this._rootId, -1, -1, !1, null, p, p));
    } else (s = !1), e.reset();
    t =
      t +
      `
`;
    const a = this.createOnigString(t),
      o = a.content.length,
      i = new mi(n, t, this._tokenTypeMatchers, this.balancedBracketSelectors),
      l = cs(this, a, s, 0, e, i, !0, r);
    return (
      ss(a), { lineLength: o, lineTokens: i, ruleStack: l.stack, stoppedEarly: l.stoppedEarly }
    );
  }
};
function rr(t, e) {
  return (
    (t = Lo(t)),
    (t.repository = t.repository || {}),
    (t.repository.$self = {
      $vscodeTextmateLocation: t.$vscodeTextmateLocation,
      patterns: t.patterns,
      name: t.scopeName,
    }),
    (t.repository.$base = e || t.repository.$self),
    t
  );
}
var We = class Y {
    constructor(e, n, r) {
      (this.parent = e), (this.scopePath = n), (this.tokenAttributes = r);
    }
    static fromExtension(e, n) {
      let r = e,
        s = (e == null ? void 0 : e.scopePath) ?? null;
      for (const a of n)
        (s = Ft.push(s, a.scopeNames)), (r = new Y(r, s, a.encodedTokenAttributes));
      return r;
    }
    static createRoot(e, n) {
      return new Y(null, new Ft(null, e), n);
    }
    static createRootAndLookUpScopeName(e, n, r) {
      const s = r.getMetadataForScope(e),
        a = new Ft(null, e),
        o = r.themeProvider.themeMatch(a),
        i = Y.mergeAttributes(n, s, o);
      return new Y(null, a, i);
    }
    get scopeName() {
      return this.scopePath.scopeName;
    }
    toString() {
      return this.getScopeNames().join(' ');
    }
    equals(e) {
      return Y.equals(this, e);
    }
    static equals(e, n) {
      do {
        if (e === n || (!e && !n)) return !0;
        if (!e || !n || e.scopeName !== n.scopeName || e.tokenAttributes !== n.tokenAttributes)
          return !1;
        (e = e.parent), (n = n.parent);
      } while (!0);
    }
    static mergeAttributes(e, n, r) {
      let s = -1,
        a = 0,
        o = 0;
      return (
        r !== null && ((s = r.fontStyle), (a = r.foregroundId), (o = r.backgroundId)),
        $e.set(e, n.languageId, n.tokenType, null, s, a, o)
      );
    }
    pushAttributed(e, n) {
      if (e === null) return this;
      if (e.indexOf(' ') === -1) return Y._pushAttributed(this, e, n);
      const r = e.split(/ /g);
      let s = this;
      for (const a of r) s = Y._pushAttributed(s, a, n);
      return s;
    }
    static _pushAttributed(e, n, r) {
      const s = r.getMetadataForScope(n),
        a = e.scopePath.push(n),
        o = r.themeProvider.themeMatch(a),
        i = Y.mergeAttributes(e.tokenAttributes, s, o);
      return new Y(e, a, i);
    }
    getScopeNames() {
      return this.scopePath.getSegments();
    }
    getExtensionIfDefined(e) {
      var s;
      const n = [];
      let r = this;
      for (; r && r !== e; )
        n.push({
          encodedTokenAttributes: r.tokenAttributes,
          scopeNames: r.scopePath.getExtensionIfDefined(
            ((s = r.parent) == null ? void 0 : s.scopePath) ?? null,
          ),
        }),
          (r = r.parent);
      return r === e ? n.reverse() : void 0;
    }
  },
  V,
  sn =
    ((V = class {
      constructor(e, n, r, s, a, o, i, l) {
        g(this, '_stackElementBrand');
        g(this, '_enterPos');
        g(this, '_anchorPos');
        g(this, 'depth');
        (this.parent = e),
          (this.ruleId = n),
          (this.beginRuleCapturedEOL = a),
          (this.endRule = o),
          (this.nameScopesList = i),
          (this.contentNameScopesList = l),
          (this.depth = this.parent ? this.parent.depth + 1 : 1),
          (this._enterPos = r),
          (this._anchorPos = s);
      }
      equals(e) {
        return e === null ? !1 : V._equals(this, e);
      }
      static _equals(e, n) {
        return e === n
          ? !0
          : this._structuralEquals(e, n)
            ? We.equals(e.contentNameScopesList, n.contentNameScopesList)
            : !1;
      }
      static _structuralEquals(e, n) {
        do {
          if (e === n || (!e && !n)) return !0;
          if (!e || !n || e.depth !== n.depth || e.ruleId !== n.ruleId || e.endRule !== n.endRule)
            return !1;
          (e = e.parent), (n = n.parent);
        } while (!0);
      }
      clone() {
        return this;
      }
      static _reset(e) {
        for (; e; ) (e._enterPos = -1), (e._anchorPos = -1), (e = e.parent);
      }
      reset() {
        V._reset(this);
      }
      pop() {
        return this.parent;
      }
      safePop() {
        return this.parent ? this.parent : this;
      }
      push(e, n, r, s, a, o, i) {
        return new V(this, e, n, r, s, a, o, i);
      }
      getEnterPos() {
        return this._enterPos;
      }
      getAnchorPos() {
        return this._anchorPos;
      }
      getRule(e) {
        return e.getRule(this.ruleId);
      }
      toString() {
        const e = [];
        return this._writeString(e, 0), '[' + e.join(',') + ']';
      }
      _writeString(e, n) {
        var r, s;
        return (
          this.parent && (n = this.parent._writeString(e, n)),
          (e[n++] =
            `(${this.ruleId}, ${(r = this.nameScopesList) == null ? void 0 : r.toString()}, ${(s = this.contentNameScopesList) == null ? void 0 : s.toString()})`),
          n
        );
      }
      withContentNameScopesList(e) {
        return this.contentNameScopesList === e
          ? this
          : this.parent.push(
              this.ruleId,
              this._enterPos,
              this._anchorPos,
              this.beginRuleCapturedEOL,
              this.endRule,
              this.nameScopesList,
              e,
            );
      }
      withEndRule(e) {
        return this.endRule === e
          ? this
          : new V(
              this.parent,
              this.ruleId,
              this._enterPos,
              this._anchorPos,
              this.beginRuleCapturedEOL,
              e,
              this.nameScopesList,
              this.contentNameScopesList,
            );
      }
      hasSameRuleAs(e) {
        let n = this;
        for (; n && n._enterPos === e._enterPos; ) {
          if (n.ruleId === e.ruleId) return !0;
          n = n.parent;
        }
        return !1;
      }
      toStateStackFrame() {
        var e, n, r;
        return {
          ruleId: this.ruleId,
          beginRuleCapturedEOL: this.beginRuleCapturedEOL,
          endRule: this.endRule,
          nameScopesList:
            ((n = this.nameScopesList) == null
              ? void 0
              : n.getExtensionIfDefined(
                  ((e = this.parent) == null ? void 0 : e.nameScopesList) ?? null,
                )) ?? [],
          contentNameScopesList:
            ((r = this.contentNameScopesList) == null
              ? void 0
              : r.getExtensionIfDefined(this.nameScopesList)) ?? [],
        };
      }
      static pushFrame(e, n) {
        const r = We.fromExtension(
          (e == null ? void 0 : e.nameScopesList) ?? null,
          n.nameScopesList,
        );
        return new V(
          e,
          n.ruleId,
          n.enterPos ?? -1,
          n.anchorPos ?? -1,
          n.beginRuleCapturedEOL,
          n.endRule,
          r,
          We.fromExtension(r, n.contentNameScopesList),
        );
      }
    }),
    g(V, 'NULL', new V(null, 0, 0, 0, !1, null, null, null)),
    V),
  gi = class {
    constructor(t, e) {
      g(this, 'balancedBracketScopes');
      g(this, 'unbalancedBracketScopes');
      g(this, 'allowAny', !1);
      (this.balancedBracketScopes = t.flatMap((n) =>
        n === '*' ? ((this.allowAny = !0), []) : ht(n, dt).map((r) => r.matcher),
      )),
        (this.unbalancedBracketScopes = e.flatMap((n) => ht(n, dt).map((r) => r.matcher)));
    }
    get matchesAlways() {
      return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
      return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(t) {
      for (const e of this.unbalancedBracketScopes) if (e(t)) return !1;
      for (const e of this.balancedBracketScopes) if (e(t)) return !0;
      return this.allowAny;
    }
  },
  mi = class {
    constructor(t, e, n, r) {
      g(this, '_emitBinaryTokens');
      g(this, '_lineText');
      g(this, '_tokens');
      g(this, '_binaryTokens');
      g(this, '_lastTokenEndIndex');
      g(this, '_tokenTypeOverrides');
      (this.balancedBracketSelectors = r),
        (this._emitBinaryTokens = t),
        (this._tokenTypeOverrides = n),
        (this._lineText = null),
        (this._tokens = []),
        (this._binaryTokens = []),
        (this._lastTokenEndIndex = 0);
    }
    produce(t, e) {
      this.produceFromScopes(t.contentNameScopesList, e);
    }
    produceFromScopes(t, e) {
      var r;
      if (this._lastTokenEndIndex >= e) return;
      if (this._emitBinaryTokens) {
        let s = (t == null ? void 0 : t.tokenAttributes) ?? 0,
          a = !1;
        if (
          ((r = this.balancedBracketSelectors) != null && r.matchesAlways && (a = !0),
          this._tokenTypeOverrides.length > 0 ||
            (this.balancedBracketSelectors &&
              !this.balancedBracketSelectors.matchesAlways &&
              !this.balancedBracketSelectors.matchesNever))
        ) {
          const o = (t == null ? void 0 : t.getScopeNames()) ?? [];
          for (const i of this._tokenTypeOverrides)
            i.matcher(o) && (s = $e.set(s, 0, i.type, null, -1, 0, 0));
          this.balancedBracketSelectors && (a = this.balancedBracketSelectors.match(o));
        }
        if (
          (a && (s = $e.set(s, 0, 8, a, -1, 0, 0)),
          this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === s)
        ) {
          this._lastTokenEndIndex = e;
          return;
        }
        this._binaryTokens.push(this._lastTokenEndIndex),
          this._binaryTokens.push(s),
          (this._lastTokenEndIndex = e);
        return;
      }
      const n = (t == null ? void 0 : t.getScopeNames()) ?? [];
      this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: e, scopes: n }),
        (this._lastTokenEndIndex = e);
    }
    getResult(t, e) {
      return (
        this._tokens.length > 0 &&
          this._tokens[this._tokens.length - 1].startIndex === e - 1 &&
          this._tokens.pop(),
        this._tokens.length === 0 &&
          ((this._lastTokenEndIndex = -1),
          this.produce(t, e),
          (this._tokens[this._tokens.length - 1].startIndex = 0)),
        this._tokens
      );
    }
    getBinaryResult(t, e) {
      this._binaryTokens.length > 0 &&
        this._binaryTokens[this._binaryTokens.length - 2] === e - 1 &&
        (this._binaryTokens.pop(), this._binaryTokens.pop()),
        this._binaryTokens.length === 0 &&
          ((this._lastTokenEndIndex = -1),
          this.produce(t, e),
          (this._binaryTokens[this._binaryTokens.length - 2] = 0));
      const n = new Uint32Array(this._binaryTokens.length);
      for (let r = 0, s = this._binaryTokens.length; r < s; r++) n[r] = this._binaryTokens[r];
      return n;
    }
  },
  Ci = class {
    constructor(t, e) {
      g(this, '_grammars', new Map());
      g(this, '_rawGrammars', new Map());
      g(this, '_injectionGrammars', new Map());
      g(this, '_theme');
      (this._onigLib = e), (this._theme = t);
    }
    dispose() {
      for (const t of this._grammars.values()) t.dispose();
    }
    setTheme(t) {
      this._theme = t;
    }
    getColorMap() {
      return this._theme.getColorMap();
    }
    addGrammar(t, e) {
      this._rawGrammars.set(t.scopeName, t), e && this._injectionGrammars.set(t.scopeName, e);
    }
    lookup(t) {
      return this._rawGrammars.get(t);
    }
    injections(t) {
      return this._injectionGrammars.get(t);
    }
    getDefaults() {
      return this._theme.getDefaults();
    }
    themeMatch(t) {
      return this._theme.match(t);
    }
    grammarForScopeName(t, e, n, r, s) {
      if (!this._grammars.has(t)) {
        let a = this._rawGrammars.get(t);
        if (!a) return null;
        this._grammars.set(t, pi(t, a, e, n, r, s, this, this._onigLib));
      }
      return this._grammars.get(t);
    }
  },
  yi = class {
    constructor(e) {
      g(this, '_options');
      g(this, '_syncRegistry');
      g(this, '_ensureGrammarCache');
      (this._options = e),
        (this._syncRegistry = new Ci(ut.createFromRawTheme(e.theme, e.colorMap), e.onigLib)),
        (this._ensureGrammarCache = new Map());
    }
    dispose() {
      this._syncRegistry.dispose();
    }
    setTheme(e, n) {
      this._syncRegistry.setTheme(ut.createFromRawTheme(e, n));
    }
    getColorMap() {
      return this._syncRegistry.getColorMap();
    }
    loadGrammarWithEmbeddedLanguages(e, n, r) {
      return this.loadGrammarWithConfiguration(e, n, { embeddedLanguages: r });
    }
    loadGrammarWithConfiguration(e, n, r) {
      return this._loadGrammar(
        e,
        n,
        r.embeddedLanguages,
        r.tokenTypes,
        new gi(r.balancedBracketSelectors || [], r.unbalancedBracketSelectors || []),
      );
    }
    loadGrammar(e) {
      return this._loadGrammar(e, 0, null, null, null);
    }
    _loadGrammar(e, n, r, s, a) {
      const o = new Vo(this._syncRegistry, e);
      for (; o.Q.length > 0; )
        o.Q.map((i) => this._loadSingleGrammar(i.scopeName)), o.processQueue();
      return this._grammarForScopeName(e, n, r, s, a);
    }
    _loadSingleGrammar(e) {
      this._ensureGrammarCache.has(e) ||
        (this._doLoadSingleGrammar(e), this._ensureGrammarCache.set(e, !0));
    }
    _doLoadSingleGrammar(e) {
      const n = this._options.loadGrammar(e);
      if (n) {
        const r =
          typeof this._options.getInjections == 'function'
            ? this._options.getInjections(e)
            : void 0;
        this._syncRegistry.addGrammar(n, r);
      }
    }
    addGrammar(e, n = [], r = 0, s = null) {
      return this._syncRegistry.addGrammar(e, n), this._grammarForScopeName(e.scopeName, r, s);
    }
    _grammarForScopeName(e, n = 0, r = null, s = null, a = null) {
      return this._syncRegistry.grammarForScopeName(e, n, r, s, a);
    }
  },
  an = sn.NULL;
const _i = [
  'area',
  'base',
  'basefont',
  'bgsound',
  'br',
  'col',
  'command',
  'embed',
  'frame',
  'hr',
  'image',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];
class Ze {
  constructor(e, n, r) {
    (this.normal = n), (this.property = e), r && (this.space = r);
  }
}
Ze.prototype.normal = {};
Ze.prototype.property = {};
Ze.prototype.space = void 0;
function hs(t, e) {
  const n = {},
    r = {};
  for (const s of t) Object.assign(n, s.property), Object.assign(r, s.normal);
  return new Ze(n, r, e);
}
function on(t) {
  return t.toLowerCase();
}
class W {
  constructor(e, n) {
    (this.attribute = n), (this.property = e);
  }
}
W.prototype.attribute = '';
W.prototype.booleanish = !1;
W.prototype.boolean = !1;
W.prototype.commaOrSpaceSeparated = !1;
W.prototype.commaSeparated = !1;
W.prototype.defined = !1;
W.prototype.mustUseProperty = !1;
W.prototype.number = !1;
W.prototype.overloadedBoolean = !1;
W.prototype.property = '';
W.prototype.spaceSeparated = !1;
W.prototype.space = void 0;
let bi = 0;
const A = Se(),
  L = Se(),
  ps = Se(),
  y = Se(),
  N = Se(),
  Ne = Se(),
  H = Se();
function Se() {
  return 2 ** ++bi;
}
const ln = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: A,
        booleanish: L,
        commaOrSpaceSeparated: H,
        commaSeparated: Ne,
        number: y,
        overloadedBoolean: ps,
        spaceSeparated: N,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ut = Object.keys(ln);
class yn extends W {
  constructor(e, n, r, s) {
    let a = -1;
    if ((super(e, n), sr(this, 'space', s), typeof r == 'number'))
      for (; ++a < Ut.length; ) {
        const o = Ut[a];
        sr(this, Ut[a], (r & ln[o]) === ln[o]);
      }
  }
}
yn.prototype.defined = !0;
function sr(t, e, n) {
  n && (t[e] = n);
}
function Me(t) {
  const e = {},
    n = {};
  for (const [r, s] of Object.entries(t.properties)) {
    const a = new yn(r, t.transform(t.attributes || {}, r), s, t.space);
    t.mustUseProperty && t.mustUseProperty.includes(r) && (a.mustUseProperty = !0),
      (e[r] = a),
      (n[on(r)] = r),
      (n[on(a.attribute)] = r);
  }
  return new Ze(e, n, t.space);
}
const fs = Me({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: L,
    ariaAutoComplete: null,
    ariaBusy: L,
    ariaChecked: L,
    ariaColCount: y,
    ariaColIndex: y,
    ariaColSpan: y,
    ariaControls: N,
    ariaCurrent: null,
    ariaDescribedBy: N,
    ariaDetails: null,
    ariaDisabled: L,
    ariaDropEffect: N,
    ariaErrorMessage: null,
    ariaExpanded: L,
    ariaFlowTo: N,
    ariaGrabbed: L,
    ariaHasPopup: null,
    ariaHidden: L,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: N,
    ariaLevel: y,
    ariaLive: null,
    ariaModal: L,
    ariaMultiLine: L,
    ariaMultiSelectable: L,
    ariaOrientation: null,
    ariaOwns: N,
    ariaPlaceholder: null,
    ariaPosInSet: y,
    ariaPressed: L,
    ariaReadOnly: L,
    ariaRelevant: null,
    ariaRequired: L,
    ariaRoleDescription: N,
    ariaRowCount: y,
    ariaRowIndex: y,
    ariaRowSpan: y,
    ariaSelected: L,
    ariaSetSize: y,
    ariaSort: null,
    ariaValueMax: y,
    ariaValueMin: y,
    ariaValueNow: y,
    ariaValueText: null,
    role: null,
  },
  transform(t, e) {
    return e === 'role' ? e : 'aria-' + e.slice(4).toLowerCase();
  },
});
function ds(t, e) {
  return e in t ? t[e] : e;
}
function gs(t, e) {
  return ds(t, e.toLowerCase());
}
const wi = Me({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Ne,
      acceptCharset: N,
      accessKey: N,
      action: null,
      allow: null,
      allowFullScreen: A,
      allowPaymentRequest: A,
      allowUserMedia: A,
      alt: null,
      as: null,
      async: A,
      autoCapitalize: null,
      autoComplete: N,
      autoFocus: A,
      autoPlay: A,
      blocking: N,
      capture: null,
      charSet: null,
      checked: A,
      cite: null,
      className: N,
      cols: y,
      colSpan: null,
      content: null,
      contentEditable: L,
      controls: A,
      controlsList: N,
      coords: y | Ne,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: A,
      defer: A,
      dir: null,
      dirName: null,
      disabled: A,
      download: ps,
      draggable: L,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: A,
      formTarget: null,
      headers: N,
      height: y,
      hidden: A,
      high: y,
      href: null,
      hrefLang: null,
      htmlFor: N,
      httpEquiv: N,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: A,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: A,
      itemId: null,
      itemProp: N,
      itemRef: N,
      itemScope: A,
      itemType: N,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: A,
      low: y,
      manifest: null,
      max: null,
      maxLength: y,
      media: null,
      method: null,
      min: null,
      minLength: y,
      multiple: A,
      muted: A,
      name: null,
      nonce: null,
      noModule: A,
      noValidate: A,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: A,
      optimum: y,
      pattern: null,
      ping: N,
      placeholder: null,
      playsInline: A,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: A,
      referrerPolicy: null,
      rel: N,
      required: A,
      reversed: A,
      rows: y,
      rowSpan: y,
      sandbox: N,
      scope: null,
      scoped: A,
      seamless: A,
      selected: A,
      shadowRootClonable: A,
      shadowRootDelegatesFocus: A,
      shadowRootMode: null,
      shape: null,
      size: y,
      sizes: null,
      slot: null,
      span: y,
      spellCheck: L,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: y,
      step: null,
      style: null,
      tabIndex: y,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: A,
      useMap: null,
      value: L,
      width: y,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: N,
      axis: null,
      background: null,
      bgColor: null,
      border: y,
      borderColor: null,
      bottomMargin: y,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: A,
      declare: A,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: y,
      leftMargin: y,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: y,
      marginWidth: y,
      noResize: A,
      noHref: A,
      noShade: A,
      noWrap: A,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: y,
      rules: null,
      scheme: null,
      scrolling: L,
      standby: null,
      summary: null,
      text: null,
      topMargin: y,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: y,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: A,
      disableRemotePlayback: A,
      prefix: null,
      property: null,
      results: y,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: gs,
  }),
  Si = Me({
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    properties: {
      about: H,
      accentHeight: y,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: y,
      amplitude: y,
      arabicForm: null,
      ascent: y,
      attributeName: null,
      attributeType: null,
      azimuth: y,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: y,
      by: null,
      calcMode: null,
      capHeight: y,
      className: N,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: y,
      diffuseConstant: y,
      direction: null,
      display: null,
      dur: null,
      divisor: y,
      dominantBaseline: null,
      download: A,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: y,
      enableBackground: null,
      end: null,
      event: null,
      exponent: y,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: y,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Ne,
      g2: Ne,
      glyphName: Ne,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: y,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: y,
      horizOriginX: y,
      horizOriginY: y,
      id: null,
      ideographic: y,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: y,
      k: y,
      k1: y,
      k2: y,
      k3: y,
      k4: y,
      kernelMatrix: H,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: y,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: y,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: y,
      overlineThickness: y,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: y,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: N,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: y,
      pointsAtY: y,
      pointsAtZ: y,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: H,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: H,
      rev: H,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: H,
      requiredFeatures: H,
      requiredFonts: H,
      requiredFormats: H,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: y,
      specularExponent: y,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: y,
      strikethroughThickness: y,
      string: null,
      stroke: null,
      strokeDashArray: H,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: y,
      strokeOpacity: y,
      strokeWidth: null,
      style: null,
      surfaceScale: y,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: H,
      tabIndex: y,
      tableValues: null,
      target: null,
      targetX: y,
      targetY: y,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: H,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: y,
      underlineThickness: y,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: y,
      values: null,
      vAlphabetic: y,
      vMathematical: y,
      vectorEffect: null,
      vHanging: y,
      vIdeographic: y,
      version: null,
      vertAdvY: y,
      vertOriginX: y,
      vertOriginY: y,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: y,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: ds,
  }),
  ms = Me({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: 'xlink',
    transform(t, e) {
      return 'xlink:' + e.slice(5).toLowerCase();
    },
  }),
  Cs = Me({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: gs,
  }),
  ys = Me({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(t, e) {
      return 'xml:' + e.slice(3).toLowerCase();
    },
  }),
  vi = /[A-Z]/g,
  ar = /-[a-z]/g,
  ki = /^data[-\w.:]+$/i;
function Ai(t, e) {
  const n = on(e);
  let r = e,
    s = W;
  if (n in t.normal) return t.property[t.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === 'data' && ki.test(e)) {
    if (e.charAt(4) === '-') {
      const a = e.slice(5).replace(ar, Ei);
      r = 'data' + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = e.slice(4);
      if (!ar.test(a)) {
        let o = a.replace(vi, xi);
        o.charAt(0) !== '-' && (o = '-' + o), (e = 'data' + o);
      }
    }
    s = yn;
  }
  return new s(r, e);
}
function xi(t) {
  return '-' + t.toLowerCase();
}
function Ei(t) {
  return t.charAt(1).toUpperCase();
}
const Ri = hs([fs, wi, ms, Cs, ys], 'html'),
  _s = hs([fs, Si, ms, Cs, ys], 'svg'),
  or = {}.hasOwnProperty;
function Ii(t, e) {
  const n = e || {};
  function r(s, ...a) {
    let o = r.invalid;
    const i = r.handlers;
    if (s && or.call(s, t)) {
      const l = String(s[t]);
      o = or.call(i, l) ? i[l] : r.unknown;
    }
    if (o) return o.call(this, s, ...a);
  }
  return (r.handlers = n.handlers || {}), (r.invalid = n.invalid), (r.unknown = n.unknown), r;
}
const Ni = /["&'<>`]/g,
  Pi = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Ti = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  Li = /[|\\{}()[\]^$+*?.]/g,
  ir = new WeakMap();
function $i(t, e) {
  if (((t = t.replace(e.subset ? Mi(e.subset) : Ni, r)), e.subset || e.escapeOnly)) return t;
  return t.replace(Pi, n).replace(Ti, r);
  function n(s, a, o) {
    return e.format(
      (s.charCodeAt(0) - 55296) * 1024 + s.charCodeAt(1) - 56320 + 65536,
      o.charCodeAt(a + 2),
      e,
    );
  }
  function r(s, a, o) {
    return e.format(s.charCodeAt(0), o.charCodeAt(a + 1), e);
  }
}
function Mi(t) {
  let e = ir.get(t);
  return e || ((e = Oi(t)), ir.set(t, e)), e;
}
function Oi(t) {
  const e = [];
  let n = -1;
  for (; ++n < t.length; ) e.push(t[n].replace(Li, '\\$&'));
  return new RegExp('(?:' + e.join('|') + ')', 'g');
}
const Gi = /[\dA-Fa-f]/;
function Bi(t, e, n) {
  const r = '&#x' + t.toString(16).toUpperCase();
  return n && e && !Gi.test(String.fromCharCode(e)) ? r : r + ';';
}
const Di = /\d/;
function Fi(t, e, n) {
  const r = '&#' + String(t);
  return n && e && !Di.test(String.fromCharCode(e)) ? r : r + ';';
}
const ji = [
    'AElig',
    'AMP',
    'Aacute',
    'Acirc',
    'Agrave',
    'Aring',
    'Atilde',
    'Auml',
    'COPY',
    'Ccedil',
    'ETH',
    'Eacute',
    'Ecirc',
    'Egrave',
    'Euml',
    'GT',
    'Iacute',
    'Icirc',
    'Igrave',
    'Iuml',
    'LT',
    'Ntilde',
    'Oacute',
    'Ocirc',
    'Ograve',
    'Oslash',
    'Otilde',
    'Ouml',
    'QUOT',
    'REG',
    'THORN',
    'Uacute',
    'Ucirc',
    'Ugrave',
    'Uuml',
    'Yacute',
    'aacute',
    'acirc',
    'acute',
    'aelig',
    'agrave',
    'amp',
    'aring',
    'atilde',
    'auml',
    'brvbar',
    'ccedil',
    'cedil',
    'cent',
    'copy',
    'curren',
    'deg',
    'divide',
    'eacute',
    'ecirc',
    'egrave',
    'eth',
    'euml',
    'frac12',
    'frac14',
    'frac34',
    'gt',
    'iacute',
    'icirc',
    'iexcl',
    'igrave',
    'iquest',
    'iuml',
    'laquo',
    'lt',
    'macr',
    'micro',
    'middot',
    'nbsp',
    'not',
    'ntilde',
    'oacute',
    'ocirc',
    'ograve',
    'ordf',
    'ordm',
    'oslash',
    'otilde',
    'ouml',
    'para',
    'plusmn',
    'pound',
    'quot',
    'raquo',
    'reg',
    'sect',
    'shy',
    'sup1',
    'sup2',
    'sup3',
    'szlig',
    'thorn',
    'times',
    'uacute',
    'ucirc',
    'ugrave',
    'uml',
    'uuml',
    'yacute',
    'yen',
    'yuml',
  ],
  Wt = {
    nbsp: ' ',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '­',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    Agrave: 'À',
    Aacute: 'Á',
    Acirc: 'Â',
    Atilde: 'Ã',
    Auml: 'Ä',
    Aring: 'Å',
    AElig: 'Æ',
    Ccedil: 'Ç',
    Egrave: 'È',
    Eacute: 'É',
    Ecirc: 'Ê',
    Euml: 'Ë',
    Igrave: 'Ì',
    Iacute: 'Í',
    Icirc: 'Î',
    Iuml: 'Ï',
    ETH: 'Ð',
    Ntilde: 'Ñ',
    Ograve: 'Ò',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Otilde: 'Õ',
    Ouml: 'Ö',
    times: '×',
    Oslash: 'Ø',
    Ugrave: 'Ù',
    Uacute: 'Ú',
    Ucirc: 'Û',
    Uuml: 'Ü',
    Yacute: 'Ý',
    THORN: 'Þ',
    szlig: 'ß',
    agrave: 'à',
    aacute: 'á',
    acirc: 'â',
    atilde: 'ã',
    auml: 'ä',
    aring: 'å',
    aelig: 'æ',
    ccedil: 'ç',
    egrave: 'è',
    eacute: 'é',
    ecirc: 'ê',
    euml: 'ë',
    igrave: 'ì',
    iacute: 'í',
    icirc: 'î',
    iuml: 'ï',
    eth: 'ð',
    ntilde: 'ñ',
    ograve: 'ò',
    oacute: 'ó',
    ocirc: 'ô',
    otilde: 'õ',
    ouml: 'ö',
    divide: '÷',
    oslash: 'ø',
    ugrave: 'ù',
    uacute: 'ú',
    ucirc: 'û',
    uuml: 'ü',
    yacute: 'ý',
    thorn: 'þ',
    yuml: 'ÿ',
    fnof: 'ƒ',
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ξ',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    theta: 'θ',
    iota: 'ι',
    kappa: 'κ',
    lambda: 'λ',
    mu: 'μ',
    nu: 'ν',
    xi: 'ξ',
    omicron: 'ο',
    pi: 'π',
    rho: 'ρ',
    sigmaf: 'ς',
    sigma: 'σ',
    tau: 'τ',
    upsilon: 'υ',
    phi: 'φ',
    chi: 'χ',
    psi: 'ψ',
    omega: 'ω',
    thetasym: 'ϑ',
    upsih: 'ϒ',
    piv: 'ϖ',
    bull: '•',
    hellip: '…',
    prime: '′',
    Prime: '″',
    oline: '‾',
    frasl: '⁄',
    weierp: '℘',
    image: 'ℑ',
    real: 'ℜ',
    trade: '™',
    alefsym: 'ℵ',
    larr: '←',
    uarr: '↑',
    rarr: '→',
    darr: '↓',
    harr: '↔',
    crarr: '↵',
    lArr: '⇐',
    uArr: '⇑',
    rArr: '⇒',
    dArr: '⇓',
    hArr: '⇔',
    forall: '∀',
    part: '∂',
    exist: '∃',
    empty: '∅',
    nabla: '∇',
    isin: '∈',
    notin: '∉',
    ni: '∋',
    prod: '∏',
    sum: '∑',
    minus: '−',
    lowast: '∗',
    radic: '√',
    prop: '∝',
    infin: '∞',
    ang: '∠',
    and: '∧',
    or: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    there4: '∴',
    sim: '∼',
    cong: '≅',
    asymp: '≈',
    ne: '≠',
    equiv: '≡',
    le: '≤',
    ge: '≥',
    sub: '⊂',
    sup: '⊃',
    nsub: '⊄',
    sube: '⊆',
    supe: '⊇',
    oplus: '⊕',
    otimes: '⊗',
    perp: '⊥',
    sdot: '⋅',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    lang: '〈',
    rang: '〉',
    loz: '◊',
    spades: '♠',
    clubs: '♣',
    hearts: '♥',
    diams: '♦',
    quot: '"',
    amp: '&',
    lt: '<',
    gt: '>',
    OElig: 'Œ',
    oelig: 'œ',
    Scaron: 'Š',
    scaron: 'š',
    Yuml: 'Ÿ',
    circ: 'ˆ',
    tilde: '˜',
    ensp: ' ',
    emsp: ' ',
    thinsp: ' ',
    zwnj: '‌',
    zwj: '‍',
    lrm: '‎',
    rlm: '‏',
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    sbquo: '‚',
    ldquo: '“',
    rdquo: '”',
    bdquo: '„',
    dagger: '†',
    Dagger: '‡',
    permil: '‰',
    lsaquo: '‹',
    rsaquo: '›',
    euro: '€',
  },
  Ui = ['cent', 'copy', 'divide', 'gt', 'lt', 'not', 'para', 'times'],
  bs = {}.hasOwnProperty,
  cn = {};
let nt;
for (nt in Wt) bs.call(Wt, nt) && (cn[Wt[nt]] = nt);
const Wi = /[^\dA-Za-z]/;
function zi(t, e, n, r) {
  const s = String.fromCharCode(t);
  if (bs.call(cn, s)) {
    const a = cn[s],
      o = '&' + a;
    return n &&
      ji.includes(a) &&
      !Ui.includes(a) &&
      (!r || (e && e !== 61 && Wi.test(String.fromCharCode(e))))
      ? o
      : o + ';';
  }
  return '';
}
function Hi(t, e, n) {
  let r = Bi(t, e, n.omitOptionalSemicolons),
    s;
  if (
    ((n.useNamedReferences || n.useShortestReferences) &&
      (s = zi(t, e, n.omitOptionalSemicolons, n.attribute)),
    (n.useShortestReferences || !s) && n.useShortestReferences)
  ) {
    const a = Fi(t, e, n.omitOptionalSemicolons);
    a.length < r.length && (r = a);
  }
  return s && (!n.useShortestReferences || s.length < r.length) ? s : r;
}
function Pe(t, e) {
  return $i(t, Object.assign({ format: Hi }, e));
}
const qi = /^>|^->|<!--|-->|--!>|<!-$/g,
  Vi = ['>'],
  Ki = ['<', '>'];
function Xi(t, e, n, r) {
  return r.settings.bogusComments
    ? '<?' + Pe(t.value, Object.assign({}, r.settings.characterReferences, { subset: Vi })) + '>'
    : '<!--' + t.value.replace(qi, s) + '-->';
  function s(a) {
    return Pe(a, Object.assign({}, r.settings.characterReferences, { subset: Ki }));
  }
}
function Qi(t, e, n, r) {
  return (
    '<!' +
    (r.settings.upperDoctype ? 'DOCTYPE' : 'doctype') +
    (r.settings.tightDoctype ? '' : ' ') +
    'html>'
  );
}
function lr(t, e) {
  const n = String(t);
  if (typeof e != 'string') throw new TypeError('Expected character');
  let r = 0,
    s = n.indexOf(e);
  for (; s !== -1; ) r++, (s = n.indexOf(e, s + e.length));
  return r;
}
function Ji(t, e) {
  const n = e || {};
  return (t[t.length - 1] === '' ? [...t, ''] : t)
    .join((n.padRight ? ' ' : '') + ',' + (n.padLeft === !1 ? '' : ' '))
    .trim();
}
function Zi(t) {
  return t.join(' ').trim();
}
const Yi = /[ \t\n\f\r]/g;
function _n(t) {
  return typeof t == 'object' ? (t.type === 'text' ? cr(t.value) : !1) : cr(t);
}
function cr(t) {
  return t.replace(Yi, '') === '';
}
const M = Ss(1),
  ws = Ss(-1),
  el = [];
function Ss(t) {
  return e;
  function e(n, r, s) {
    const a = n ? n.children : el;
    let o = (r || 0) + t,
      i = a[o];
    if (!s) for (; i && _n(i); ) (o += t), (i = a[o]);
    return i;
  }
}
const tl = {}.hasOwnProperty;
function vs(t) {
  return e;
  function e(n, r, s) {
    return tl.call(t, n.tagName) && t[n.tagName](n, r, s);
  }
}
const bn = vs({
  body: rl,
  caption: zt,
  colgroup: zt,
  dd: il,
  dt: ol,
  head: zt,
  html: nl,
  li: al,
  optgroup: ll,
  option: cl,
  p: sl,
  rp: ur,
  rt: ur,
  tbody: hl,
  td: hr,
  tfoot: pl,
  th: hr,
  thead: ul,
  tr: fl,
});
function zt(t, e, n) {
  const r = M(n, e, !0);
  return !r || (r.type !== 'comment' && !(r.type === 'text' && _n(r.value.charAt(0))));
}
function nl(t, e, n) {
  const r = M(n, e);
  return !r || r.type !== 'comment';
}
function rl(t, e, n) {
  const r = M(n, e);
  return !r || r.type !== 'comment';
}
function sl(t, e, n) {
  const r = M(n, e);
  return r
    ? r.type === 'element' &&
        (r.tagName === 'address' ||
          r.tagName === 'article' ||
          r.tagName === 'aside' ||
          r.tagName === 'blockquote' ||
          r.tagName === 'details' ||
          r.tagName === 'div' ||
          r.tagName === 'dl' ||
          r.tagName === 'fieldset' ||
          r.tagName === 'figcaption' ||
          r.tagName === 'figure' ||
          r.tagName === 'footer' ||
          r.tagName === 'form' ||
          r.tagName === 'h1' ||
          r.tagName === 'h2' ||
          r.tagName === 'h3' ||
          r.tagName === 'h4' ||
          r.tagName === 'h5' ||
          r.tagName === 'h6' ||
          r.tagName === 'header' ||
          r.tagName === 'hgroup' ||
          r.tagName === 'hr' ||
          r.tagName === 'main' ||
          r.tagName === 'menu' ||
          r.tagName === 'nav' ||
          r.tagName === 'ol' ||
          r.tagName === 'p' ||
          r.tagName === 'pre' ||
          r.tagName === 'section' ||
          r.tagName === 'table' ||
          r.tagName === 'ul')
    : !n ||
        !(
          n.type === 'element' &&
          (n.tagName === 'a' ||
            n.tagName === 'audio' ||
            n.tagName === 'del' ||
            n.tagName === 'ins' ||
            n.tagName === 'map' ||
            n.tagName === 'noscript' ||
            n.tagName === 'video')
        );
}
function al(t, e, n) {
  const r = M(n, e);
  return !r || (r.type === 'element' && r.tagName === 'li');
}
function ol(t, e, n) {
  const r = M(n, e);
  return !!(r && r.type === 'element' && (r.tagName === 'dt' || r.tagName === 'dd'));
}
function il(t, e, n) {
  const r = M(n, e);
  return !r || (r.type === 'element' && (r.tagName === 'dt' || r.tagName === 'dd'));
}
function ur(t, e, n) {
  const r = M(n, e);
  return !r || (r.type === 'element' && (r.tagName === 'rp' || r.tagName === 'rt'));
}
function ll(t, e, n) {
  const r = M(n, e);
  return !r || (r.type === 'element' && r.tagName === 'optgroup');
}
function cl(t, e, n) {
  const r = M(n, e);
  return !r || (r.type === 'element' && (r.tagName === 'option' || r.tagName === 'optgroup'));
}
function ul(t, e, n) {
  const r = M(n, e);
  return !!(r && r.type === 'element' && (r.tagName === 'tbody' || r.tagName === 'tfoot'));
}
function hl(t, e, n) {
  const r = M(n, e);
  return !r || (r.type === 'element' && (r.tagName === 'tbody' || r.tagName === 'tfoot'));
}
function pl(t, e, n) {
  return !M(n, e);
}
function fl(t, e, n) {
  const r = M(n, e);
  return !r || (r.type === 'element' && r.tagName === 'tr');
}
function hr(t, e, n) {
  const r = M(n, e);
  return !r || (r.type === 'element' && (r.tagName === 'td' || r.tagName === 'th'));
}
const dl = vs({ body: Cl, colgroup: yl, head: ml, html: gl, tbody: _l });
function gl(t) {
  const e = M(t, -1);
  return !e || e.type !== 'comment';
}
function ml(t) {
  const e = new Set();
  for (const r of t.children)
    if (r.type === 'element' && (r.tagName === 'base' || r.tagName === 'title')) {
      if (e.has(r.tagName)) return !1;
      e.add(r.tagName);
    }
  const n = t.children[0];
  return !n || n.type === 'element';
}
function Cl(t) {
  const e = M(t, -1, !0);
  return (
    !e ||
    (e.type !== 'comment' &&
      !(e.type === 'text' && _n(e.value.charAt(0))) &&
      !(
        e.type === 'element' &&
        (e.tagName === 'meta' ||
          e.tagName === 'link' ||
          e.tagName === 'script' ||
          e.tagName === 'style' ||
          e.tagName === 'template')
      ))
  );
}
function yl(t, e, n) {
  const r = ws(n, e),
    s = M(t, -1, !0);
  return n &&
    r &&
    r.type === 'element' &&
    r.tagName === 'colgroup' &&
    bn(r, n.children.indexOf(r), n)
    ? !1
    : !!(s && s.type === 'element' && s.tagName === 'col');
}
function _l(t, e, n) {
  const r = ws(n, e),
    s = M(t, -1);
  return n &&
    r &&
    r.type === 'element' &&
    (r.tagName === 'thead' || r.tagName === 'tbody') &&
    bn(r, n.children.indexOf(r), n)
    ? !1
    : !!(s && s.type === 'element' && s.tagName === 'tr');
}
const rt = {
  name: [
    [
      `	
\f\r &/=>`.split(''),
      `	
\f\r "&'/=>\``.split(''),
    ],
    [
      `\0	
\f\r "&'/<=>`.split(''),
      `\0	
\f\r "&'/<=>\``.split(''),
    ],
  ],
  unquoted: [
    [
      `	
\f\r &>`.split(''),
      `\0	
\f\r "&'<=>\``.split(''),
    ],
    [
      `\0	
\f\r "&'<=>\``.split(''),
      `\0	
\f\r "&'<=>\``.split(''),
    ],
  ],
  single: [
    ["&'".split(''), '"&\'`'.split('')],
    ["\0&'".split(''), '\0"&\'`'.split('')],
  ],
  double: [
    ['"&'.split(''), '"&\'`'.split('')],
    ['\0"&'.split(''), '\0"&\'`'.split('')],
  ],
};
function bl(t, e, n, r) {
  const s = r.schema,
    a = s.space === 'svg' ? !1 : r.settings.omitOptionalTags;
  let o =
    s.space === 'svg'
      ? r.settings.closeEmptyElements
      : r.settings.voids.includes(t.tagName.toLowerCase());
  const i = [];
  let l;
  s.space === 'html' && t.tagName === 'svg' && (r.schema = _s);
  const c = wl(r, t.properties),
    u = r.all(s.space === 'html' && t.tagName === 'template' ? t.content : t);
  return (
    (r.schema = s),
    u && (o = !1),
    (c || !a || !dl(t, e, n)) &&
      (i.push('<', t.tagName, c ? ' ' + c : ''),
      o &&
        (s.space === 'svg' || r.settings.closeSelfClosing) &&
        ((l = c.charAt(c.length - 1)),
        (!r.settings.tightSelfClosing || l === '/' || (l && l !== '"' && l !== "'")) && i.push(' '),
        i.push('/')),
      i.push('>')),
    i.push(u),
    !o && (!a || !bn(t, e, n)) && i.push('</' + t.tagName + '>'),
    i.join('')
  );
}
function wl(t, e) {
  const n = [];
  let r = -1,
    s;
  if (e) {
    for (s in e)
      if (e[s] !== null && e[s] !== void 0) {
        const a = Sl(t, s, e[s]);
        a && n.push(a);
      }
  }
  for (; ++r < n.length; ) {
    const a = t.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : void 0;
    r !== n.length - 1 && a !== '"' && a !== "'" && (n[r] += ' ');
  }
  return n.join('');
}
function Sl(t, e, n) {
  const r = Ai(t.schema, e),
    s = t.settings.allowParseErrors && t.schema.space === 'html' ? 0 : 1,
    a = t.settings.allowDangerousCharacters ? 0 : 1;
  let o = t.quote,
    i;
  if (
    (r.overloadedBoolean && (n === r.attribute || n === '')
      ? (n = !0)
      : (r.boolean || r.overloadedBoolean) &&
        (typeof n != 'string' || n === r.attribute || n === '') &&
        (n = !!n),
    n == null || n === !1 || (typeof n == 'number' && Number.isNaN(n)))
  )
    return '';
  const l = Pe(
    r.attribute,
    Object.assign({}, t.settings.characterReferences, { subset: rt.name[s][a] }),
  );
  return n === !0 ||
    ((n = Array.isArray(n)
      ? (r.commaSeparated ? Ji : Zi)(n, { padLeft: !t.settings.tightCommaSeparatedLists })
      : String(n)),
    t.settings.collapseEmptyAttributes && !n)
    ? l
    : (t.settings.preferUnquoted &&
        (i = Pe(
          n,
          Object.assign({}, t.settings.characterReferences, {
            attribute: !0,
            subset: rt.unquoted[s][a],
          }),
        )),
      i !== n &&
        (t.settings.quoteSmart && lr(n, o) > lr(n, t.alternative) && (o = t.alternative),
        (i =
          o +
          Pe(
            n,
            Object.assign({}, t.settings.characterReferences, {
              subset: (o === "'" ? rt.single : rt.double)[s][a],
              attribute: !0,
            }),
          ) +
          o)),
      l + (i && '=' + i));
}
const vl = ['<', '&'];
function ks(t, e, n, r) {
  return n && n.type === 'element' && (n.tagName === 'script' || n.tagName === 'style')
    ? t.value
    : Pe(t.value, Object.assign({}, r.settings.characterReferences, { subset: vl }));
}
function kl(t, e, n, r) {
  return r.settings.allowDangerousHtml ? t.value : ks(t, e, n, r);
}
function Al(t, e, n, r) {
  return r.all(t);
}
const xl = Ii('type', {
  invalid: El,
  unknown: Rl,
  handlers: { comment: Xi, doctype: Qi, element: bl, raw: kl, root: Al, text: ks },
});
function El(t) {
  throw new Error('Expected node, not `' + t + '`');
}
function Rl(t) {
  const e = t;
  throw new Error('Cannot compile unknown node `' + e.type + '`');
}
const Il = {},
  Nl = {},
  Pl = [];
function Tl(t, e) {
  const n = e || Il,
    r = n.quote || '"',
    s = r === '"' ? "'" : '"';
  if (r !== '"' && r !== "'") throw new Error('Invalid quote `' + r + '`, expected `\'` or `"`');
  return {
    one: Ll,
    all: $l,
    settings: {
      omitOptionalTags: n.omitOptionalTags || !1,
      allowParseErrors: n.allowParseErrors || !1,
      allowDangerousCharacters: n.allowDangerousCharacters || !1,
      quoteSmart: n.quoteSmart || !1,
      preferUnquoted: n.preferUnquoted || !1,
      tightAttributes: n.tightAttributes || !1,
      upperDoctype: n.upperDoctype || !1,
      tightDoctype: n.tightDoctype || !1,
      bogusComments: n.bogusComments || !1,
      tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
      tightSelfClosing: n.tightSelfClosing || !1,
      collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
      allowDangerousHtml: n.allowDangerousHtml || !1,
      voids: n.voids || _i,
      characterReferences: n.characterReferences || Nl,
      closeSelfClosing: n.closeSelfClosing || !1,
      closeEmptyElements: n.closeEmptyElements || !1,
    },
    schema: n.space === 'svg' ? _s : Ri,
    quote: r,
    alternative: s,
  }.one(Array.isArray(t) ? { type: 'root', children: t } : t, void 0, void 0);
}
function Ll(t, e, n) {
  return xl(t, e, n, this);
}
function $l(t) {
  const e = [],
    n = (t && t.children) || Pl;
  let r = -1;
  for (; ++r < n.length; ) e[r] = this.one(n[r], r, t);
  return e.join('');
}
function gt(t, e) {
  const n = typeof t == 'string' ? {} : { ...t.colorReplacements },
    r = typeof t == 'string' ? t : t.name;
  for (const [s, a] of Object.entries((e == null ? void 0 : e.colorReplacements) || {}))
    typeof a == 'string' ? (n[s] = a) : s === r && Object.assign(n, a);
  return n;
}
function ye(t, e) {
  return t && ((e == null ? void 0 : e[t == null ? void 0 : t.toLowerCase()]) || t);
}
function Ml(t) {
  return Array.isArray(t) ? t : [t];
}
async function As(t) {
  return Promise.resolve(typeof t == 'function' ? t() : t).then((e) => e.default || e);
}
function wn(t) {
  return !t || ['plaintext', 'txt', 'text', 'plain'].includes(t);
}
function Ol(t) {
  return t === 'ansi' || wn(t);
}
function Sn(t) {
  return t === 'none';
}
function Gl(t) {
  return Sn(t);
}
function xs(t, e) {
  var r;
  if (!e) return t;
  t.properties || (t.properties = {}),
    (r = t.properties).class || (r.class = []),
    typeof t.properties.class == 'string' &&
      (t.properties.class = t.properties.class.split(/\s+/g)),
    Array.isArray(t.properties.class) || (t.properties.class = []);
  const n = Array.isArray(e) ? e : e.split(/\s+/g);
  for (const s of n) s && !t.properties.class.includes(s) && t.properties.class.push(s);
  return t;
}
function vt(t, e = !1) {
  var a;
  const n = t.split(/(\r?\n)/g);
  let r = 0;
  const s = [];
  for (let o = 0; o < n.length; o += 2) {
    const i = e ? n[o] + (n[o + 1] || '') : n[o];
    s.push([i, r]), (r += n[o].length), (r += ((a = n[o + 1]) == null ? void 0 : a.length) || 0);
  }
  return s;
}
function Bl(t) {
  const e = vt(t, !0).map(([s]) => s);
  function n(s) {
    if (s === t.length) return { line: e.length - 1, character: e[e.length - 1].length };
    let a = s,
      o = 0;
    for (const i of e) {
      if (a < i.length) break;
      (a -= i.length), o++;
    }
    return { line: o, character: a };
  }
  function r(s, a) {
    let o = 0;
    for (let i = 0; i < s; i++) o += e[i].length;
    return (o += a), o;
  }
  return { lines: e, indexToPos: n, posToIndex: r };
}
function Dl(t, e) {
  let n = 0;
  const r = [];
  for (const s of e)
    s > n && r.push({ ...t, content: t.content.slice(n, s), offset: t.offset + n }), (n = s);
  return (
    n < t.content.length && r.push({ ...t, content: t.content.slice(n), offset: t.offset + n }), r
  );
}
function Fl(t, e) {
  const n = Array.from(e instanceof Set ? e : new Set(e)).sort((r, s) => r - s);
  return n.length
    ? t.map((r) =>
        r.flatMap((s) => {
          const a = n
            .filter((o) => s.offset < o && o < s.offset + s.content.length)
            .map((o) => o - s.offset)
            .sort((o, i) => o - i);
          return a.length ? Dl(s, a) : s;
        }),
      )
    : t;
}
function jl(t, e, n, r) {
  const s = { content: t.content, explanation: t.explanation, offset: t.offset },
    a = e.map((l) => Es(t.variants[l])),
    o = new Set(a.flatMap((l) => Object.keys(l))),
    i = {};
  return (
    a.forEach((l, c) => {
      for (const u of o) {
        const h = l[u] || 'inherit';
        if (c === 0 && r) i[u] = h;
        else {
          const f = u === 'color' ? '' : u === 'background-color' ? '-bg' : `-${u}`,
            p = n + e[c] + (u === 'color' ? '' : f);
          i[p] = h;
        }
      }
    }),
    (s.htmlStyle = i),
    s
  );
}
function Es(t) {
  const e = {};
  return (
    t.color && (e.color = t.color),
    t.bgColor && (e['background-color'] = t.bgColor),
    t.fontStyle &&
      (t.fontStyle & ie.Italic && (e['font-style'] = 'italic'),
      t.fontStyle & ie.Bold && (e['font-weight'] = 'bold'),
      t.fontStyle & ie.Underline && (e['text-decoration'] = 'underline')),
    e
  );
}
function Ul(t) {
  return typeof t == 'string'
    ? t
    : Object.entries(t)
        .map(([e, n]) => `${e}:${n}`)
        .join(';');
}
const Rs = new WeakMap();
function kt(t, e) {
  Rs.set(t, e);
}
function Ke(t) {
  return Rs.get(t);
}
class Oe {
  constructor(...e) {
    g(this, '_stacks', {});
    g(this, 'lang');
    if (e.length === 2) {
      const [n, r] = e;
      (this.lang = r), (this._stacks = n);
    } else {
      const [n, r, s] = e;
      (this.lang = r), (this._stacks = { [s]: n });
    }
  }
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  static initial(e, n) {
    return new Oe(Object.fromEntries(Ml(n).map((r) => [r, an])), e);
  }
  getInternalStack(e = this.theme) {
    return this._stacks[e];
  }
  getScopes(e = this.theme) {
    return Wl(this._stacks[e]);
  }
  toJSON() {
    return { lang: this.lang, theme: this.theme, themes: this.themes, scopes: this.getScopes() };
  }
}
function Wl(t) {
  const e = [],
    n = new Set();
  function r(s) {
    var o;
    if (n.has(s)) return;
    n.add(s);
    const a = (o = s == null ? void 0 : s.nameScopesList) == null ? void 0 : o.scopeName;
    a && e.push(a), s.parent && r(s.parent);
  }
  return r(t), e;
}
function zl(t, e) {
  if (!(t instanceof Oe)) throw new j('Invalid grammar state');
  return t.getInternalStack(e);
}
function Hl() {
  const t = new WeakMap();
  function e(n) {
    if (!t.has(n.meta)) {
      let r = function (o) {
        if (typeof o == 'number') {
          if (o < 0 || o > n.source.length)
            throw new j(`Invalid decoration offset: ${o}. Code length: ${n.source.length}`);
          return { ...s.indexToPos(o), offset: o };
        } else {
          const i = s.lines[o.line];
          if (i === void 0)
            throw new j(
              `Invalid decoration position ${JSON.stringify(o)}. Lines length: ${s.lines.length}`,
            );
          if (o.character < 0 || o.character > i.length)
            throw new j(
              `Invalid decoration position ${JSON.stringify(o)}. Line ${o.line} length: ${i.length}`,
            );
          return { ...o, offset: s.posToIndex(o.line, o.character) };
        }
      };
      const s = Bl(n.source),
        a = (n.options.decorations || []).map((o) => ({ ...o, start: r(o.start), end: r(o.end) }));
      ql(a), t.set(n.meta, { decorations: a, converter: s, source: n.source });
    }
    return t.get(n.meta);
  }
  return {
    name: 'shiki:decorations',
    tokens(n) {
      var o;
      if (!((o = this.options.decorations) != null && o.length)) return;
      const s = e(this).decorations.flatMap((i) => [i.start.offset, i.end.offset]);
      return Fl(n, s);
    },
    code(n) {
      var u;
      if (!((u = this.options.decorations) != null && u.length)) return;
      const r = e(this),
        s = Array.from(n.children).filter((h) => h.type === 'element' && h.tagName === 'span');
      if (s.length !== r.converter.lines.length)
        throw new j(
          `Number of lines in code element (${s.length}) does not match the number of lines in the source (${r.converter.lines.length}). Failed to apply decorations.`,
        );
      function a(h, f, p, d) {
        const b = s[h];
        let m = '',
          _ = -1,
          w = -1;
        if (
          (f === 0 && (_ = 0),
          p === 0 && (w = 0),
          p === Number.POSITIVE_INFINITY && (w = b.children.length),
          _ === -1 || w === -1)
        )
          for (let E = 0; E < b.children.length; E++)
            (m += Is(b.children[E])),
              _ === -1 && m.length === f && (_ = E + 1),
              w === -1 && m.length === p && (w = E + 1);
        if (_ === -1)
          throw new j(`Failed to find start index for decoration ${JSON.stringify(d.start)}`);
        if (w === -1)
          throw new j(`Failed to find end index for decoration ${JSON.stringify(d.end)}`);
        const k = b.children.slice(_, w);
        if (!d.alwaysWrap && k.length === b.children.length) i(b, d, 'line');
        else if (!d.alwaysWrap && k.length === 1 && k[0].type === 'element') i(k[0], d, 'token');
        else {
          const E = { type: 'element', tagName: 'span', properties: {}, children: k };
          i(E, d, 'wrapper'), b.children.splice(_, k.length, E);
        }
      }
      function o(h, f) {
        s[h] = i(s[h], f, 'line');
      }
      function i(h, f, p) {
        var m;
        const d = f.properties || {},
          b = f.transform || ((_) => _);
        return (
          (h.tagName = f.tagName || 'span'),
          (h.properties = { ...h.properties, ...d, class: h.properties.class }),
          (m = f.properties) != null && m.class && xs(h, f.properties.class),
          (h = b(h, p) || h),
          h
        );
      }
      const l = [],
        c = r.decorations.sort(
          (h, f) => f.start.offset - h.start.offset || h.end.offset - f.end.offset,
        );
      for (const h of c) {
        const { start: f, end: p } = h;
        if (f.line === p.line) a(f.line, f.character, p.character, h);
        else if (f.line < p.line) {
          a(f.line, f.character, Number.POSITIVE_INFINITY, h);
          for (let d = f.line + 1; d < p.line; d++) l.unshift(() => o(d, h));
          a(p.line, 0, p.character, h);
        }
      }
      l.forEach((h) => h());
    },
  };
}
function ql(t) {
  for (let e = 0; e < t.length; e++) {
    const n = t[e];
    if (n.start.offset > n.end.offset)
      throw new j(
        `Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`,
      );
    for (let r = e + 1; r < t.length; r++) {
      const s = t[r],
        a = n.start.offset <= s.start.offset && s.start.offset < n.end.offset,
        o = n.start.offset < s.end.offset && s.end.offset <= n.end.offset,
        i = s.start.offset <= n.start.offset && n.start.offset < s.end.offset,
        l = s.start.offset < n.end.offset && n.end.offset <= s.end.offset;
      if (a || o || i || l) {
        if ((a && o) || (i && l)) continue;
        throw new j(
          `Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(s.start)} intersect.`,
        );
      }
    }
  }
}
function Is(t) {
  return t.type === 'text' ? t.value : t.type === 'element' ? t.children.map(Is).join('') : '';
}
const Vl = [Hl()];
function mt(t) {
  return [...(t.transformers || []), ...Vl];
}
var _e = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    'brightBlack',
    'brightRed',
    'brightGreen',
    'brightYellow',
    'brightBlue',
    'brightMagenta',
    'brightCyan',
    'brightWhite',
  ],
  Ht = {
    1: 'bold',
    2: 'dim',
    3: 'italic',
    4: 'underline',
    7: 'reverse',
    8: 'hidden',
    9: 'strikethrough',
  };
function Kl(t, e) {
  const n = t.indexOf('\x1B', e);
  if (n !== -1 && t[n + 1] === '[') {
    const r = t.indexOf('m', n);
    if (r !== -1)
      return { sequence: t.substring(n + 2, r).split(';'), startPosition: n, position: r + 1 };
  }
  return { position: t.length };
}
function pr(t) {
  const e = t.shift();
  if (e === '2') {
    const n = t.splice(0, 3).map((r) => Number.parseInt(r));
    return n.length !== 3 || n.some((r) => Number.isNaN(r)) ? void 0 : { type: 'rgb', rgb: n };
  } else if (e === '5') {
    const n = t.shift();
    if (n) return { type: 'table', index: Number(n) };
  }
}
function Xl(t) {
  const e = [];
  for (; t.length > 0; ) {
    const n = t.shift();
    if (!n) continue;
    const r = Number.parseInt(n);
    if (!Number.isNaN(r))
      if (r === 0) e.push({ type: 'resetAll' });
      else if (r <= 9) Ht[r] && e.push({ type: 'setDecoration', value: Ht[r] });
      else if (r <= 29) {
        const s = Ht[r - 20];
        s &&
          (e.push({ type: 'resetDecoration', value: s }),
          s === 'dim' && e.push({ type: 'resetDecoration', value: 'bold' }));
      } else if (r <= 37)
        e.push({ type: 'setForegroundColor', value: { type: 'named', name: _e[r - 30] } });
      else if (r === 38) {
        const s = pr(t);
        s && e.push({ type: 'setForegroundColor', value: s });
      } else if (r === 39) e.push({ type: 'resetForegroundColor' });
      else if (r <= 47)
        e.push({ type: 'setBackgroundColor', value: { type: 'named', name: _e[r - 40] } });
      else if (r === 48) {
        const s = pr(t);
        s && e.push({ type: 'setBackgroundColor', value: s });
      } else
        r === 49
          ? e.push({ type: 'resetBackgroundColor' })
          : r === 53
            ? e.push({ type: 'setDecoration', value: 'overline' })
            : r === 55
              ? e.push({ type: 'resetDecoration', value: 'overline' })
              : r >= 90 && r <= 97
                ? e.push({
                    type: 'setForegroundColor',
                    value: { type: 'named', name: _e[r - 90 + 8] },
                  })
                : r >= 100 &&
                  r <= 107 &&
                  e.push({
                    type: 'setBackgroundColor',
                    value: { type: 'named', name: _e[r - 100 + 8] },
                  });
  }
  return e;
}
function Ql() {
  let t = null,
    e = null,
    n = new Set();
  return {
    parse(r) {
      const s = [];
      let a = 0;
      do {
        const o = Kl(r, a),
          i = o.sequence ? r.substring(a, o.startPosition) : r.substring(a);
        if (
          (i.length > 0 &&
            s.push({ value: i, foreground: t, background: e, decorations: new Set(n) }),
          o.sequence)
        ) {
          const l = Xl(o.sequence);
          for (const c of l)
            c.type === 'resetAll'
              ? ((t = null), (e = null), n.clear())
              : c.type === 'resetForegroundColor'
                ? (t = null)
                : c.type === 'resetBackgroundColor'
                  ? (e = null)
                  : c.type === 'resetDecoration' && n.delete(c.value);
          for (const c of l)
            c.type === 'setForegroundColor'
              ? (t = c.value)
              : c.type === 'setBackgroundColor'
                ? (e = c.value)
                : c.type === 'setDecoration' && n.add(c.value);
        }
        a = o.position;
      } while (a < r.length);
      return s;
    },
  };
}
var Jl = {
  black: '#000000',
  red: '#bb0000',
  green: '#00bb00',
  yellow: '#bbbb00',
  blue: '#0000bb',
  magenta: '#ff00ff',
  cyan: '#00bbbb',
  white: '#eeeeee',
  brightBlack: '#555555',
  brightRed: '#ff5555',
  brightGreen: '#00ff00',
  brightYellow: '#ffff55',
  brightBlue: '#5555ff',
  brightMagenta: '#ff55ff',
  brightCyan: '#55ffff',
  brightWhite: '#ffffff',
};
function Zl(t = Jl) {
  function e(i) {
    return t[i];
  }
  function n(i) {
    return `#${i.map((l) => Math.max(0, Math.min(l, 255)).toString(16).padStart(2, '0')).join('')}`;
  }
  let r;
  function s() {
    if (r) return r;
    r = [];
    for (let c = 0; c < _e.length; c++) r.push(e(_e[c]));
    let i = [0, 95, 135, 175, 215, 255];
    for (let c = 0; c < 6; c++)
      for (let u = 0; u < 6; u++) for (let h = 0; h < 6; h++) r.push(n([i[c], i[u], i[h]]));
    let l = 8;
    for (let c = 0; c < 24; c++, l += 10) r.push(n([l, l, l]));
    return r;
  }
  function a(i) {
    return s()[i];
  }
  function o(i) {
    switch (i.type) {
      case 'named':
        return e(i.name);
      case 'rgb':
        return n(i.rgb);
      case 'table':
        return a(i.index);
    }
  }
  return { value: o };
}
function Yl(t, e, n) {
  const r = gt(t, n),
    s = vt(e),
    a = Zl(
      Object.fromEntries(
        _e.map((i) => {
          var l;
          return [
            i,
            (l = t.colors) == null
              ? void 0
              : l[`terminal.ansi${i[0].toUpperCase()}${i.substring(1)}`],
          ];
        }),
      ),
    ),
    o = Ql();
  return s.map((i) =>
    o.parse(i[0]).map((l) => {
      let c, u;
      l.decorations.has('reverse')
        ? ((c = l.background ? a.value(l.background) : t.bg),
          (u = l.foreground ? a.value(l.foreground) : t.fg))
        : ((c = l.foreground ? a.value(l.foreground) : t.fg),
          (u = l.background ? a.value(l.background) : void 0)),
        (c = ye(c, r)),
        (u = ye(u, r)),
        l.decorations.has('dim') && (c = ec(c));
      let h = ie.None;
      return (
        l.decorations.has('bold') && (h |= ie.Bold),
        l.decorations.has('italic') && (h |= ie.Italic),
        l.decorations.has('underline') && (h |= ie.Underline),
        { content: l.value, offset: i[1], color: c, bgColor: u, fontStyle: h }
      );
    }),
  );
}
function ec(t) {
  const e = t.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
  if (e)
    if (e[3]) {
      const r = Math.round(Number.parseInt(e[3], 16) / 2)
        .toString(16)
        .padStart(2, '0');
      return `#${e[1]}${e[2]}${r}`;
    } else
      return e[2]
        ? `#${e[1]}${e[2]}80`
        : `#${Array.from(e[1])
            .map((r) => `${r}${r}`)
            .join('')}80`;
  const n = t.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return n ? `var(${n[1]}-dim)` : t;
}
function vn(t, e, n = {}) {
  const { lang: r = 'text', theme: s = t.getLoadedThemes()[0] } = n;
  if (wn(r) || Sn(s)) return vt(e).map((l) => [{ content: l[0], offset: l[1] }]);
  const { theme: a, colorMap: o } = t.setTheme(s);
  if (r === 'ansi') return Yl(a, e, n);
  const i = t.getLanguage(r);
  if (n.grammarState) {
    if (n.grammarState.lang !== i.name)
      throw new j(
        `Grammar state language "${n.grammarState.lang}" does not match highlight language "${i.name}"`,
      );
    if (!n.grammarState.themes.includes(a.name))
      throw new j(
        `Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${a.name}"`,
      );
  }
  return nc(e, i, a, o, n);
}
function tc(...t) {
  if (t.length === 2) return Ke(t[1]);
  const [e, n, r = {}] = t,
    { lang: s = 'text', theme: a = e.getLoadedThemes()[0] } = r;
  if (wn(s) || Sn(a)) throw new j('Plain language does not have grammar state');
  if (s === 'ansi') throw new j('ANSI language does not have grammar state');
  const { theme: o, colorMap: i } = e.setTheme(a),
    l = e.getLanguage(s);
  return new Oe(Ct(n, l, o, i, r).stateStack, l.name, o.name);
}
function nc(t, e, n, r, s) {
  const a = Ct(t, e, n, r, s),
    o = new Oe(Ct(t, e, n, r, s).stateStack, e.name, n.name);
  return kt(a.tokens, o), a.tokens;
}
function Ct(t, e, n, r, s) {
  const a = gt(n, s),
    { tokenizeMaxLineLength: o = 0, tokenizeTimeLimit: i = 500 } = s,
    l = vt(t);
  let c = s.grammarState
      ? (zl(s.grammarState, n.name) ?? an)
      : s.grammarContextCode != null
        ? Ct(s.grammarContextCode, e, n, r, {
            ...s,
            grammarState: void 0,
            grammarContextCode: void 0,
          }).stateStack
        : an,
    u = [];
  const h = [];
  for (let f = 0, p = l.length; f < p; f++) {
    const [d, b] = l[f];
    if (d === '') {
      (u = []), h.push([]);
      continue;
    }
    if (o > 0 && d.length >= o) {
      (u = []), h.push([{ content: d, offset: b, color: '', fontStyle: 0 }]);
      continue;
    }
    let m, _, w;
    s.includeExplanation && ((m = e.tokenizeLine(d, c, i)), (_ = m.tokens), (w = 0));
    const k = e.tokenizeLine2(d, c, i),
      E = k.tokens.length / 2;
    for (let I = 0; I < E; I++) {
      const G = k.tokens[2 * I],
        P = I + 1 < E ? k.tokens[2 * I + 2] : d.length;
      if (G === P) continue;
      const B = k.tokens[2 * I + 1],
        de = ye(r[$e.getForeground(B)], a),
        ge = $e.getFontStyle(B),
        Ge = { content: d.substring(G, P), offset: b + G, color: de, fontStyle: ge };
      if (s.includeExplanation) {
        const le = [];
        if (s.includeExplanation !== 'scopeName')
          for (const ne of n.settings) {
            let ve;
            switch (typeof ne.scope) {
              case 'string':
                ve = ne.scope.split(/,/).map((At) => At.trim());
                break;
              case 'object':
                ve = ne.scope;
                break;
              default:
                continue;
            }
            le.push({ settings: ne, selectors: ve.map((At) => At.split(/ /)) });
          }
        Ge.explanation = [];
        let An = 0;
        for (; G + An < P; ) {
          const ne = _[w],
            ve = d.substring(ne.startIndex, ne.endIndex);
          (An += ve.length),
            Ge.explanation.push({
              content: ve,
              scopes: s.includeExplanation === 'scopeName' ? rc(ne.scopes) : sc(le, ne.scopes),
            }),
            (w += 1);
        }
      }
      u.push(Ge);
    }
    h.push(u), (u = []), (c = k.ruleStack);
  }
  return { tokens: h, stateStack: c };
}
function rc(t) {
  return t.map((e) => ({ scopeName: e }));
}
function sc(t, e) {
  const n = [];
  for (let r = 0, s = e.length; r < s; r++) {
    const a = e[r];
    n[r] = { scopeName: a, themeMatches: oc(t, a, e.slice(0, r)) };
  }
  return n;
}
function fr(t, e) {
  return t === e || (e.substring(0, t.length) === t && e[t.length] === '.');
}
function ac(t, e, n) {
  if (!fr(t[t.length - 1], e)) return !1;
  let r = t.length - 2,
    s = n.length - 1;
  for (; r >= 0 && s >= 0; ) fr(t[r], n[s]) && (r -= 1), (s -= 1);
  return r === -1;
}
function oc(t, e, n) {
  const r = [];
  for (const { selectors: s, settings: a } of t)
    for (const o of s)
      if (ac(o, e, n)) {
        r.push(a);
        break;
      }
  return r;
}
function Ns(t, e, n) {
  const r = Object.entries(n.themes)
      .filter((l) => l[1])
      .map((l) => ({ color: l[0], theme: l[1] })),
    s = r.map((l) => {
      const c = vn(t, e, { ...n, theme: l.theme }),
        u = Ke(c),
        h = typeof l.theme == 'string' ? l.theme : l.theme.name;
      return { tokens: c, state: u, theme: h };
    }),
    a = ic(...s.map((l) => l.tokens)),
    o = a[0].map((l, c) =>
      l.map((u, h) => {
        const f = { content: u.content, variants: {}, offset: u.offset };
        return (
          'includeExplanation' in n && n.includeExplanation && (f.explanation = u.explanation),
          a.forEach((p, d) => {
            const { content: b, explanation: m, offset: _, ...w } = p[c][h];
            f.variants[r[d].color] = w;
          }),
          f
        );
      }),
    ),
    i = s[0].state
      ? new Oe(
          Object.fromEntries(
            s.map((l) => {
              var c;
              return [l.theme, (c = l.state) == null ? void 0 : c.getInternalStack(l.theme)];
            }),
          ),
          s[0].state.lang,
        )
      : void 0;
  return i && kt(o, i), o;
}
function ic(...t) {
  const e = t.map(() => []),
    n = t.length;
  for (let r = 0; r < t[0].length; r++) {
    const s = t.map((l) => l[r]),
      a = e.map(() => []);
    e.forEach((l, c) => l.push(a[c]));
    const o = s.map(() => 0),
      i = s.map((l) => l[0]);
    for (; i.every((l) => l); ) {
      const l = Math.min(...i.map((c) => c.content.length));
      for (let c = 0; c < n; c++) {
        const u = i[c];
        u.content.length === l
          ? (a[c].push(u), (o[c] += 1), (i[c] = s[c][o[c]]))
          : (a[c].push({ ...u, content: u.content.slice(0, l) }),
            (i[c] = { ...u, content: u.content.slice(l), offset: u.offset + l }));
      }
    }
  }
  return e;
}
function yt(t, e, n) {
  let r, s, a, o, i, l;
  if ('themes' in n) {
    const { defaultColor: c = 'light', cssVariablePrefix: u = '--shiki-' } = n,
      h = Object.entries(n.themes)
        .filter((m) => m[1])
        .map((m) => ({ color: m[0], theme: m[1] }))
        .sort((m, _) => (m.color === c ? -1 : _.color === c ? 1 : 0));
    if (h.length === 0) throw new j('`themes` option must not be empty');
    const f = Ns(t, e, n);
    if (((l = Ke(f)), c && !h.find((m) => m.color === c)))
      throw new j(`\`themes\` option must contain the defaultColor key \`${c}\``);
    const p = h.map((m) => t.getTheme(m.theme)),
      d = h.map((m) => m.color);
    (a = f.map((m) => m.map((_) => jl(_, d, u, c)))), l && kt(a, l);
    const b = h.map((m) => gt(m.theme, n));
    (s = h
      .map((m, _) => (_ === 0 && c ? '' : `${u + m.color}:`) + (ye(p[_].fg, b[_]) || 'inherit'))
      .join(';')),
      (r = h
        .map(
          (m, _) => (_ === 0 && c ? '' : `${u + m.color}-bg:`) + (ye(p[_].bg, b[_]) || 'inherit'),
        )
        .join(';')),
      (o = `shiki-themes ${p.map((m) => m.name).join(' ')}`),
      (i = c ? void 0 : [s, r].join(';'));
  } else if ('theme' in n) {
    const c = gt(n.theme, n);
    a = vn(t, e, n);
    const u = t.getTheme(n.theme);
    (r = ye(u.bg, c)), (s = ye(u.fg, c)), (o = u.name), (l = Ke(a));
  } else throw new j('Invalid options, either `theme` or `themes` must be provided');
  return { tokens: a, fg: s, bg: r, themeName: o, rootStyle: i, grammarState: l };
}
function _t(
  t,
  e,
  n,
  r = {
    meta: {},
    options: n,
    codeToHast: (s, a) => _t(t, s, a),
    codeToTokens: (s, a) => yt(t, s, a),
  },
) {
  var p, d;
  let s = e;
  for (const b of mt(n)) s = ((p = b.preprocess) == null ? void 0 : p.call(r, s, n)) || s;
  let { tokens: a, fg: o, bg: i, themeName: l, rootStyle: c, grammarState: u } = yt(t, s, n);
  const { mergeWhitespaces: h = !0 } = n;
  h === !0 ? (a = cc(a)) : h === 'never' && (a = uc(a));
  const f = {
    ...r,
    get source() {
      return s;
    },
  };
  for (const b of mt(n)) a = ((d = b.tokens) == null ? void 0 : d.call(f, a)) || a;
  return lc(a, { ...n, fg: o, bg: i, themeName: l, rootStyle: c }, f, u);
}
function lc(t, e, n, r = Ke(t)) {
  var d, b, m;
  const s = mt(e),
    a = [],
    o = { type: 'root', children: [] },
    { structure: i = 'classic', tabindex: l = '0' } = e;
  let c = {
      type: 'element',
      tagName: 'pre',
      properties: {
        class: `shiki ${e.themeName || ''}`,
        style: e.rootStyle || `background-color:${e.bg};color:${e.fg}`,
        ...(l !== !1 && l != null ? { tabindex: l.toString() } : {}),
        ...Object.fromEntries(
          Array.from(Object.entries(e.meta || {})).filter(([_]) => !_.startsWith('_')),
        ),
      },
      children: [],
    },
    u = { type: 'element', tagName: 'code', properties: {}, children: a };
  const h = [],
    f = {
      ...n,
      structure: i,
      addClassToHast: xs,
      get source() {
        return n.source;
      },
      get tokens() {
        return t;
      },
      get options() {
        return e;
      },
      get root() {
        return o;
      },
      get pre() {
        return c;
      },
      get code() {
        return u;
      },
      get lines() {
        return h;
      },
    };
  if (
    (t.forEach((_, w) => {
      var I, G;
      w &&
        (i === 'inline'
          ? o.children.push({ type: 'element', tagName: 'br', properties: {}, children: [] })
          : i === 'classic' &&
            a.push({
              type: 'text',
              value: `
`,
            }));
      let k = { type: 'element', tagName: 'span', properties: { class: 'line' }, children: [] },
        E = 0;
      for (const P of _) {
        let B = {
          type: 'element',
          tagName: 'span',
          properties: { ...P.htmlAttrs },
          children: [{ type: 'text', value: P.content }],
        };
        const de = Ul(P.htmlStyle || Es(P));
        de && (B.properties.style = de);
        for (const ge of s)
          B =
            ((I = ge == null ? void 0 : ge.span) == null ? void 0 : I.call(f, B, w + 1, E, k, P)) ||
            B;
        i === 'inline' ? o.children.push(B) : i === 'classic' && k.children.push(B),
          (E += P.content.length);
      }
      if (i === 'classic') {
        for (const P of s)
          k = ((G = P == null ? void 0 : P.line) == null ? void 0 : G.call(f, k, w + 1)) || k;
        h.push(k), a.push(k);
      }
    }),
    i === 'classic')
  ) {
    for (const _ of s) u = ((d = _ == null ? void 0 : _.code) == null ? void 0 : d.call(f, u)) || u;
    c.children.push(u);
    for (const _ of s) c = ((b = _ == null ? void 0 : _.pre) == null ? void 0 : b.call(f, c)) || c;
    o.children.push(c);
  }
  let p = o;
  for (const _ of s) p = ((m = _ == null ? void 0 : _.root) == null ? void 0 : m.call(f, p)) || p;
  return r && kt(p, r), p;
}
function cc(t) {
  return t.map((e) => {
    const n = [];
    let r = '',
      s = 0;
    return (
      e.forEach((a, o) => {
        const l = !(a.fontStyle && a.fontStyle & ie.Underline);
        l && a.content.match(/^\s+$/) && e[o + 1]
          ? (s || (s = a.offset), (r += a.content))
          : r
            ? (l
                ? n.push({ ...a, offset: s, content: r + a.content })
                : n.push({ content: r, offset: s }, a),
              (s = 0),
              (r = ''))
            : n.push(a);
      }),
      n
    );
  });
}
function uc(t) {
  return t.map((e) =>
    e.flatMap((n) => {
      if (n.content.match(/^\s+$/)) return n;
      const r = n.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!r) return n;
      const [, s, a, o] = r;
      if (!s && !o) return n;
      const i = [{ ...n, offset: n.offset + s.length, content: a }];
      return (
        s && i.unshift({ content: s, offset: n.offset }),
        o && i.push({ content: o, offset: n.offset + s.length + a.length }),
        i
      );
    }),
  );
}
const hc = Tl;
function pc(t, e, n) {
  var a;
  const r = {
    meta: {},
    options: n,
    codeToHast: (o, i) => _t(t, o, i),
    codeToTokens: (o, i) => yt(t, o, i),
  };
  let s = hc(_t(t, e, n, r));
  for (const o of mt(n)) s = ((a = o.postprocess) == null ? void 0 : a.call(r, s, n)) || s;
  return s;
}
const dr = { light: '#333333', dark: '#bbbbbb' },
  gr = { light: '#fffffe', dark: '#1e1e1e' },
  mr = '__shiki_resolved';
function kn(t) {
  var i, l, c, u, h;
  if (t != null && t[mr]) return t;
  const e = { ...t };
  e.tokenColors && !e.settings && ((e.settings = e.tokenColors), delete e.tokenColors),
    e.type || (e.type = 'dark'),
    (e.colorReplacements = { ...e.colorReplacements }),
    e.settings || (e.settings = []);
  let { bg: n, fg: r } = e;
  if (!n || !r) {
    const f = e.settings ? e.settings.find((p) => !p.name && !p.scope) : void 0;
    (i = f == null ? void 0 : f.settings) != null && i.foreground && (r = f.settings.foreground),
      (l = f == null ? void 0 : f.settings) != null && l.background && (n = f.settings.background),
      !r &&
        (c = e == null ? void 0 : e.colors) != null &&
        c['editor.foreground'] &&
        (r = e.colors['editor.foreground']),
      !n &&
        (u = e == null ? void 0 : e.colors) != null &&
        u['editor.background'] &&
        (n = e.colors['editor.background']),
      r || (r = e.type === 'light' ? dr.light : dr.dark),
      n || (n = e.type === 'light' ? gr.light : gr.dark),
      (e.fg = r),
      (e.bg = n);
  }
  (e.settings[0] && e.settings[0].settings && !e.settings[0].scope) ||
    e.settings.unshift({ settings: { foreground: e.fg, background: e.bg } });
  let s = 0;
  const a = new Map();
  function o(f) {
    var d;
    if (a.has(f)) return a.get(f);
    s += 1;
    const p = `#${s.toString(16).padStart(8, '0').toLowerCase()}`;
    return (d = e.colorReplacements) != null && d[`#${p}`] ? o(f) : (a.set(f, p), p);
  }
  e.settings = e.settings.map((f) => {
    var m, _;
    const p =
        ((m = f.settings) == null ? void 0 : m.foreground) &&
        !f.settings.foreground.startsWith('#'),
      d =
        ((_ = f.settings) == null ? void 0 : _.background) &&
        !f.settings.background.startsWith('#');
    if (!p && !d) return f;
    const b = { ...f, settings: { ...f.settings } };
    if (p) {
      const w = o(f.settings.foreground);
      (e.colorReplacements[w] = f.settings.foreground), (b.settings.foreground = w);
    }
    if (d) {
      const w = o(f.settings.background);
      (e.colorReplacements[w] = f.settings.background), (b.settings.background = w);
    }
    return b;
  });
  for (const f of Object.keys(e.colors || {}))
    if (
      (f === 'editor.foreground' || f === 'editor.background' || f.startsWith('terminal.ansi')) &&
      !((h = e.colors[f]) != null && h.startsWith('#'))
    ) {
      const p = o(e.colors[f]);
      (e.colorReplacements[p] = e.colors[f]), (e.colors[f] = p);
    }
  return Object.defineProperty(e, mr, { enumerable: !1, writable: !1, value: !0 }), e;
}
async function Ps(t) {
  return Array.from(
    new Set(
      (
        await Promise.all(
          t
            .filter((e) => !Ol(e))
            .map(async (e) => await As(e).then((n) => (Array.isArray(n) ? n : [n]))),
        )
      ).flat(),
    ),
  );
}
async function Ts(t) {
  return (await Promise.all(t.map(async (n) => (Gl(n) ? null : kn(await As(n)))))).filter(
    (n) => !!n,
  );
}
let fc = 3;
function dc(t, e = 3) {
  e > fc || console.trace(`[SHIKI DEPRECATE]: ${t}`);
}
class Ee extends Error {
  constructor(e) {
    super(e), (this.name = 'ShikiError');
  }
}
class gc extends yi {
  constructor(n, r, s, a = {}) {
    super(n);
    g(this, '_resolvedThemes', new Map());
    g(this, '_resolvedGrammars', new Map());
    g(this, '_langMap', new Map());
    g(this, '_langGraph', new Map());
    g(this, '_textmateThemeCache', new WeakMap());
    g(this, '_loadedThemesCache', null);
    g(this, '_loadedLanguagesCache', null);
    (this._resolver = n),
      (this._themes = r),
      (this._langs = s),
      (this._alias = a),
      this._themes.map((o) => this.loadTheme(o)),
      this.loadLanguages(this._langs);
  }
  getTheme(n) {
    return typeof n == 'string' ? this._resolvedThemes.get(n) : this.loadTheme(n);
  }
  loadTheme(n) {
    const r = kn(n);
    return r.name && (this._resolvedThemes.set(r.name, r), (this._loadedThemesCache = null)), r;
  }
  getLoadedThemes() {
    return (
      this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]),
      this._loadedThemesCache
    );
  }
  setTheme(n) {
    let r = this._textmateThemeCache.get(n);
    r || ((r = ut.createFromRawTheme(n)), this._textmateThemeCache.set(n, r)),
      this._syncRegistry.setTheme(r);
  }
  getGrammar(n) {
    if (this._alias[n]) {
      const r = new Set([n]);
      for (; this._alias[n]; ) {
        if (((n = this._alias[n]), r.has(n)))
          throw new Ee(`Circular alias \`${Array.from(r).join(' -> ')} -> ${n}\``);
        r.add(n);
      }
    }
    return this._resolvedGrammars.get(n);
  }
  loadLanguage(n) {
    var o, i, l, c;
    if (this.getGrammar(n.name)) return;
    const r = new Set(
      [...this._langMap.values()].filter((u) => {
        var h;
        return (h = u.embeddedLangsLazy) == null ? void 0 : h.includes(n.name);
      }),
    );
    this._resolver.addLanguage(n);
    const s = {
      balancedBracketSelectors: n.balancedBracketSelectors || ['*'],
      unbalancedBracketSelectors: n.unbalancedBracketSelectors || [],
    };
    this._syncRegistry._rawGrammars.set(n.scopeName, n);
    const a = this.loadGrammarWithConfiguration(n.scopeName, 1, s);
    if (
      ((a.name = n.name),
      this._resolvedGrammars.set(n.name, a),
      n.aliases &&
        n.aliases.forEach((u) => {
          this._alias[u] = n.name;
        }),
      (this._loadedLanguagesCache = null),
      r.size)
    )
      for (const u of r)
        this._resolvedGrammars.delete(u.name),
          (this._loadedLanguagesCache = null),
          (i = (o = this._syncRegistry) == null ? void 0 : o._injectionGrammars) == null ||
            i.delete(u.scopeName),
          (c = (l = this._syncRegistry) == null ? void 0 : l._grammars) == null ||
            c.delete(u.scopeName),
          this.loadLanguage(this._langMap.get(u.name));
  }
  dispose() {
    super.dispose(),
      this._resolvedThemes.clear(),
      this._resolvedGrammars.clear(),
      this._langMap.clear(),
      this._langGraph.clear(),
      (this._loadedThemesCache = null);
  }
  loadLanguages(n) {
    for (const a of n) this.resolveEmbeddedLanguages(a);
    const r = Array.from(this._langGraph.entries()),
      s = r.filter(([a, o]) => !o);
    if (s.length) {
      const a = r
        .filter(([o, i]) => {
          var l;
          return (
            i &&
            ((l = i.embeddedLangs) == null ? void 0 : l.some((c) => s.map(([u]) => u).includes(c)))
          );
        })
        .filter((o) => !s.includes(o));
      throw new Ee(
        `Missing languages ${s.map(([o]) => `\`${o}\``).join(', ')}, required by ${a.map(([o]) => `\`${o}\``).join(', ')}`,
      );
    }
    for (const [a, o] of r) this._resolver.addLanguage(o);
    for (const [a, o] of r) this.loadLanguage(o);
  }
  getLoadedLanguages() {
    return (
      this._loadedLanguagesCache ||
        (this._loadedLanguagesCache = [
          ...new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)]),
        ]),
      this._loadedLanguagesCache
    );
  }
  resolveEmbeddedLanguages(n) {
    if ((this._langMap.set(n.name, n), this._langGraph.set(n.name, n), n.embeddedLangs))
      for (const r of n.embeddedLangs) this._langGraph.set(r, this._langMap.get(r));
  }
}
class mc {
  constructor(e, n) {
    g(this, '_langs', new Map());
    g(this, '_scopeToLang', new Map());
    g(this, '_injections', new Map());
    g(this, '_onigLib');
    (this._onigLib = {
      createOnigScanner: (r) => e.createScanner(r),
      createOnigString: (r) => e.createString(r),
    }),
      n.forEach((r) => this.addLanguage(r));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(e) {
    return this._langs.get(e);
  }
  loadGrammar(e) {
    return this._scopeToLang.get(e);
  }
  addLanguage(e) {
    this._langs.set(e.name, e),
      e.aliases &&
        e.aliases.forEach((n) => {
          this._langs.set(n, e);
        }),
      this._scopeToLang.set(e.scopeName, e),
      e.injectTo &&
        e.injectTo.forEach((n) => {
          this._injections.get(n) || this._injections.set(n, []),
            this._injections.get(n).push(e.scopeName);
        });
  }
  getInjections(e) {
    const n = e.split('.');
    let r = [];
    for (let s = 1; s <= n.length; s++) {
      const a = n.slice(0, s).join('.');
      r = [...r, ...(this._injections.get(a) || [])];
    }
    return r;
  }
}
let Fe = 0;
function Cc(t) {
  (Fe += 1),
    t.warnings !== !1 &&
      Fe >= 10 &&
      Fe % 10 === 0 &&
      console.warn(
        `[Shiki] ${Fe} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`,
      );
  let e = !1;
  if (!t.engine) throw new Ee('`engine` option is required for synchronous mode');
  const n = (t.langs || []).flat(1),
    r = (t.themes || []).flat(1).map(kn),
    s = new mc(t.engine, n),
    a = new gc(s, r, n, t.langAlias);
  let o;
  function i(w) {
    m();
    const k = a.getGrammar(typeof w == 'string' ? w : w.name);
    if (!k) throw new Ee(`Language \`${w}\` not found, you may need to load it first`);
    return k;
  }
  function l(w) {
    if (w === 'none') return { bg: '', fg: '', name: 'none', settings: [], type: 'dark' };
    m();
    const k = a.getTheme(w);
    if (!k) throw new Ee(`Theme \`${w}\` not found, you may need to load it first`);
    return k;
  }
  function c(w) {
    m();
    const k = l(w);
    o !== w && (a.setTheme(k), (o = w));
    const E = a.getColorMap();
    return { theme: k, colorMap: E };
  }
  function u() {
    return m(), a.getLoadedThemes();
  }
  function h() {
    return m(), a.getLoadedLanguages();
  }
  function f(...w) {
    m(), a.loadLanguages(w.flat(1));
  }
  async function p(...w) {
    return f(await Ps(w));
  }
  function d(...w) {
    m();
    for (const k of w.flat(1)) a.loadTheme(k);
  }
  async function b(...w) {
    return m(), d(await Ts(w));
  }
  function m() {
    if (e) throw new Ee('Shiki instance has been disposed');
  }
  function _() {
    e || ((e = !0), a.dispose(), (Fe -= 1));
  }
  return {
    setTheme: c,
    getTheme: l,
    getLanguage: i,
    getLoadedThemes: u,
    getLoadedLanguages: h,
    loadLanguage: p,
    loadLanguageSync: f,
    loadTheme: b,
    loadThemeSync: d,
    dispose: _,
    [Symbol.dispose]: _,
  };
}
async function yc(t) {
  t.engine ||
    dc(
      '`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.',
    );
  const [e, n, r] = await Promise.all([Ts(t.themes || []), Ps(t.langs || []), t.engine]);
  return Cc({ ...t, themes: e, langs: n, engine: r });
}
async function _c(t) {
  const e = await yc(t);
  return {
    getLastGrammarState: (...n) => tc(e, ...n),
    codeToTokensBase: (n, r) => vn(e, n, r),
    codeToTokensWithThemes: (n, r) => Ns(e, n, r),
    codeToTokens: (n, r) => yt(e, n, r),
    codeToHast: (n, r) => _t(e, n, r),
    codeToHtml: (n, r) => pc(e, n, r),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...e,
    getInternalContext: () => e,
  };
}
const un = Bs();
_c({
  themes: [
    De(() => import('./CVO1_9PV.js'), [], import.meta.url),
    De(() => import('./D0r3Knsf.js'), [], import.meta.url),
  ],
  langs: [
    De(() => import('./BVroogsP.js'), __vite__mapDeps([0, 1, 2]), import.meta.url),
    De(() => import('./BmNWnaFO.js'), __vite__mapDeps([3, 1, 2]), import.meta.url),
    De(() => import('./Defcyui7.js'), [], import.meta.url),
  ],
  engine: To(),
}).then((t) => {
  un.value = t;
});
function bc(t) {
  return Re(() =>
    un.value
      ? un.value.codeToHtml(t(), {
          lang: 'glob',
          theme: qt.value ? 'vitesse-dark' : 'vitesse-light',
          structure: 'inline',
        })
      : wc(t()),
  );
}
function wc(t) {
  return t.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
const Sc = ['innerHTML'],
  vc = { key: 0, 'max-h': '30vh', 'min-w-80': '', 'of-auto': '', p3: '' },
  kc = { key: 0, flex: '~ col gap-1' },
  Ac = { key: 1, 'text-center': '', italic: '', op50: '' },
  xc = { key: 1, 'max-h': '30vh', 'min-w-80': '', 'of-auto': '', p3: '' },
  Ec = { key: 0, flex: '~ col gap-1' },
  Rc = ['onClick'],
  Ic = { key: 1, 'text-center': '', italic: '', op50: '' },
  $c = it({
    __name: 'GlobItem',
    props: { glob: {}, popup: {}, active: { type: [Boolean, null], default: null } },
    setup(t) {
      const e = t,
        n = bc(() => e.glob.toString()),
        r = Re(() => (e.popup === 'files' && Rt.value.filesResolved) || e.popup === 'configs'),
        s = Re(() => {
          var c;
          return e.popup === 'files'
            ? (c = Rt.value.filesResolved) == null
              ? void 0
              : c.globToFiles.get(e.glob)
            : void 0;
        }),
        a = Re(() => (e.popup === 'configs' ? Rt.value.globToConfigs.get(e.glob) : void 0)),
        o = Cr();
      function i(c) {
        (Vt.filepath = ''), o.push(`/configs?index=${c + 1}`);
      }
      const l = it({
        setup:
          (c, { slots: u }) =>
          () => {
            var h;
            return (h = u.default) == null ? void 0 : h.call(u);
          },
      });
      return (c, u) => {
        const h = Hs,
          f = qs;
        return (
          z(),
          It(Rn(r.value ? Nt(Ds) : Nt(l)), null, {
            popper: Pt(({ shown: p, hide: d }) => {
              var b, m;
              return [
                p && c.popup === 'files'
                  ? (z(),
                    Z('div', vc, [
                      (b = s.value) != null && b.size
                        ? (z(),
                          Z('div', kc, [
                            u[0] || (u[0] = xe('div', null, 'Files that matches this glob', -1)),
                            (z(!0),
                            Z(
                              Nn,
                              null,
                              Pn(
                                s.value,
                                (_) => (
                                  z(),
                                  It(
                                    h,
                                    { key: _, filepath: _, 'font-mono': '', onClick: (w) => d() },
                                    null,
                                    8,
                                    ['filepath', 'onClick'],
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]))
                        : (z(), Z('div', Ac, ' No files matched this glob. ')),
                    ]))
                  : In('', !0),
                p && c.popup === 'configs'
                  ? (z(),
                    Z('div', xc, [
                      (m = a.value) != null && m.length
                        ? (z(),
                          Z('div', Ec, [
                            u[1] || (u[1] = xe('div', null, 'Configs that contains this glob', -1)),
                            (z(!0),
                            Z(
                              Nn,
                              null,
                              Pn(
                                a.value,
                                (_) => (
                                  z(),
                                  Z('div', { key: _.name, flex: '~ gap-2' }, [
                                    xe(
                                      'button',
                                      { 'btn-badge': '', onClick: (w) => i(_.index) },
                                      [
                                        Fs(f, { name: _.name, index: _.index }, null, 8, [
                                          'name',
                                          'index',
                                        ]),
                                      ],
                                      8,
                                      Rc,
                                    ),
                                  ])
                                ),
                              ),
                              128,
                            )),
                          ]))
                        : (z(), Z('div', Ic, ' No configs matched this glob. ')),
                    ]))
                  : In('', !0),
              ];
            }),
            default: Pt(() => [
              (z(),
              It(
                Rn(r.value ? 'button' : 'div'),
                {
                  'text-gray': '',
                  'font-mono': '',
                  class: yr(
                    c.active === !0 ? 'badge-active' : c.active === !1 ? 'badge op50' : 'badge',
                  ),
                },
                {
                  default: Pt(() => [
                    xe('span', { class: 'filter-hue-rotate-180', innerHTML: Nt(n) }, null, 8, Sc),
                  ]),
                  _: 1,
                },
                8,
                ['class'],
              )),
            ]),
            _: 1,
          })
        );
      };
    },
  });
export { ko as E, qs as _, $c as a, Hs as b, wc as c, Us as g, un as s };
