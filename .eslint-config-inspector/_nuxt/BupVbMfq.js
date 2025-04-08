import {
  e as H,
  i as S,
  l as R,
  o as f,
  w as N,
  c as m,
  k as C,
  a as v,
  q as Ke,
  s as _,
  t as K,
  n as w,
  Z as He,
  $ as Ge,
  S as oe,
  D as ue,
  a0 as we,
  a1 as Je,
  h as Ue,
  b as J,
  F as b,
  d as z,
  p as U,
  B as Ye,
  a2 as Qe,
  T as Xe,
  x as ve,
  y as Ze,
  U as ee,
  _ as qe,
  v as X,
  a3 as Z,
  z as re,
  W as et,
  a4 as tt,
} from './CTNqAv02.js';
import { g as nt, s as Ce, c as st, _ as rt, a as it } from './KJnl7Sfk.js';
const ot = { key: 1, op30: '' },
  ut = { key: 2 },
  lt = { op75: '' },
  at = H({
    __name: 'ColorizedRuleName',
    props: {
      name: {},
      prefix: {},
      url: {},
      as: {},
      deprecated: { type: Boolean },
      borderless: { type: Boolean },
      break: { type: Boolean },
    },
    setup(t) {
      const e = t,
        n = S(() => {
          if (e.prefix)
            return e.name.startsWith(e.prefix)
              ? { scope: e.prefix, name: e.name.slice(e.prefix.length).replace(/^\/+/, '') }
              : { scope: void 0, name: e.name };
          const r = e.name.split('/');
          return r.length === 1
            ? { scope: void 0, name: r[0] }
            : { scope: r[0], name: r.slice(1).join('/') };
        });
      return (r, i) => (
        f(),
        R(
          He(r.as || 'div'),
          {
            'of-hidden': '',
            'text-ellipsis': '',
            'ws-nowrap': '',
            'font-mono': '',
            class: w([r.deprecated ? 'line-through' : '', r.borderless ? '' : 'badge']),
          },
          {
            default: N(() => [
              n.value.scope
                ? (f(),
                  m(
                    'span',
                    {
                      key: 0,
                      style: Ke({
                        color: ('getPluginColor' in r ? r.getPluginColor : _(nt))(n.value.scope),
                      }),
                    },
                    K(n.value.scope),
                    5,
                  ))
                : C('', !0),
              n.value.scope ? (f(), m('span', ot, '/')) : C('', !0),
              n.value.scope && e.break ? (f(), m('br', ut)) : C('', !0),
              v('span', lt, K(n.value.name), 1),
            ]),
            _: 1,
          },
          8,
          ['class'],
        )
      );
    },
  });
function Ie(t) {
  const e = `${t}`;
  return e.endsWith('1') && t !== 11
    ? `${e}st`
    : e.endsWith('2') && t !== 12
      ? `${e}nd`
      : e.endsWith('3') && t !== 13
        ? `${e}rd`
        : `${t}th`;
}
function Ee(t) {
  return ct(t).replace(/\[\s*'--',\s*(\S.+),\s*'--'\s*\],?/g, '$1, // [!code muted]');
}
function ct(t) {
  return JSON.stringify(t, null, 2)
    .replace(/"(\w+)":/g, '$1:')
    .replace(/"/g, "'");
}
const ht = ['title'],
  $e = H({
    __name: 'RuleLevelIcon',
    props: {
      level: {},
      hasOptions: { type: Boolean },
      hasRedundantOptions: { type: Boolean },
      configIndex: {},
      class: {},
    },
    setup(t) {
      const e = t,
        n = S(() =>
          e.configIndex == null
            ? `Enabled as '${e.level}'`
            : `Enabled as '${e.level}', in the ${Ie(e.configIndex + 1)} config item`,
        ),
        r = S(
          () =>
            ({
              error: 'text-red op80',
              warn: 'text-yellow5 op80 dark:text-yellow4',
              off: 'text-gray op50',
            })[e.level],
        ),
        i = S(
          () =>
            ({
              error: 'i-ph-warning-circle-duotone',
              warn: 'i-ph-warning-duotone',
              off: 'i-ph-circle-half-tilt-duotone',
            })[e.level],
        );
      return (o, c) => (
        f(),
        m(
          'div',
          { relative: '', class: w([r.value, e.class]), title: n.value },
          [
            v('div', { class: w(i.value) }, null, 2),
            o.hasOptions
              ? (f(),
                m(
                  'div',
                  {
                    key: 0,
                    absolute: '',
                    'right--2px': '',
                    'top--2px': '',
                    'h-6px': '',
                    'w-6px': '',
                    'rounded-full': '',
                    'bg-current': '',
                    op75: '',
                    class: w(o.hasRedundantOptions ? 'text-blue5' : ''),
                  },
                  null,
                  2,
                ))
              : C('', !0),
          ],
          10,
          ht,
        )
      );
    },
  }),
  dt = [
    [/^(<!--)(.+)(-->)$/, !1],
    [/^(\/\*)(.+)(\*\/)$/, !1],
    [/^(\/\/|["'#]|;{1,2}|%{1,2}|--)(.*)$/, !0],
    [/^(\*)(.+)$/, !0],
  ];
function ft(t, e, n) {
  const r = [];
  for (const i of t) {
    if (n === 'v3') {
      const s = i.children.flatMap((l, u) => {
        if (l.type !== 'element') return l;
        const h = l.children[0];
        if (h.type !== 'text') return l;
        const a = u === i.children.length - 1;
        if (!ke(h.value, a)) return l;
        const g = h.value.split(/(\s+\/\/)/);
        if (g.length <= 1) return l;
        let y = [g[0]];
        for (let A = 1; A < g.length; A += 2) y.push(g[A] + (g[A + 1] || ''));
        return (
          (y = y.filter(Boolean)),
          y.length <= 1 ? l : y.map((A) => ({ ...l, children: [{ type: 'text', value: A }] }))
        );
      });
      s.length !== i.children.length && (i.children = s);
    }
    const o = i.children;
    let c = o.length - 1;
    n === 'v1' ? (c = 0) : e && (c = o.length - 2);
    for (let s = Math.max(c, 0); s < o.length; s++) {
      const l = o[s];
      if (l.type !== 'element') continue;
      const u = l.children.at(0);
      if ((u == null ? void 0 : u.type) !== 'text') continue;
      const h = s === o.length - 1,
        a = ke(u.value, h);
      if (a)
        if (e && !h && s !== 0) {
          const d = xe(o[s - 1], '{') && xe(o[s + 1], '}');
          r.push({
            info: a,
            line: i,
            token: l,
            isLineCommentOnly: o.length === 3 && l.children.length === 1,
            isJsxStyle: d,
          });
        } else
          r.push({
            info: a,
            line: i,
            token: l,
            isLineCommentOnly: o.length === 1 && l.children.length === 1,
            isJsxStyle: !1,
          });
    }
  }
  return r;
}
function xe(t, e) {
  if (t.type !== 'element') return !1;
  const n = t.children[0];
  return n.type !== 'text' ? !1 : n.value.trim() === e;
}
function ke(t, e) {
  let n = t.trimStart();
  const r = t.length - n.length;
  n = n.trimEnd();
  const i = t.length - n.length - r;
  for (const [o, c] of dt) {
    if (c && !e) continue;
    const s = o.exec(n);
    if (s) return [' '.repeat(r) + s[1], s[2], s[3] ? s[3] + ' '.repeat(i) : void 0];
  }
}
function pt(t) {
  const e = t.match(/(?:\/\/|["'#]|;{1,2}|%{1,2}|--)(\s*)$/);
  return e && e[1].trim().length === 0 ? t.slice(0, e.index) : t;
}
function gt(t, e, n, r) {
  return (
    r == null && (r = 'v3'),
    {
      name: t,
      code(i) {
        const o = i.children.filter((u) => u.type === 'element'),
          c = [];
        i.data ?? (i.data = {});
        const s = i.data;
        s._shiki_notation ??
          (s._shiki_notation = ft(o, ['jsx', 'tsx'].includes(this.options.lang), r));
        const l = s._shiki_notation;
        for (const u of l) {
          if (u.info[1].length === 0) continue;
          let h = o.indexOf(u.line);
          u.isLineCommentOnly && r !== 'v1' && h++;
          let a = !1;
          if (
            ((u.info[1] = u.info[1].replace(e, (...g) =>
              n.call(this, g, u.line, u.token, o, h) ? ((a = !0), '') : g[0],
            )),
            !a)
          )
            continue;
          r === 'v1' && (u.info[1] = pt(u.info[1]));
          const d = u.info[1].trim().length === 0;
          if ((d && (u.info[1] = ''), d && u.isLineCommentOnly)) c.push(u.line);
          else if (d && u.isJsxStyle)
            u.line.children.splice(u.line.children.indexOf(u.token) - 1, 3);
          else if (d) u.line.children.splice(u.line.children.indexOf(u.token), 1);
          else {
            const g = u.token.children[0];
            g.type === 'text' && (g.value = u.info.join(''));
          }
        }
        for (const u of c) {
          const h = i.children.indexOf(u),
            a = i.children[h + 1];
          let d = 1;
          (a == null ? void 0 : a.type) === 'text' &&
            (a == null ? void 0 : a.value) ===
              `
` &&
            (d = 2),
            i.children.splice(h, d);
        }
      },
    }
  );
}
function mt(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function yt(t = {}, e = '@shikijs/transformers:notation-map') {
  const { classMap: n = {}, classActivePre: r = void 0 } = t;
  return gt(
    e,
    new RegExp(`\\s*\\[!code (${Object.keys(n).map(mt).join('|')})(:\\d+)?\\]`),
    function ([i, o, c = ':1'], s, l, u, h) {
      const a = Number.parseInt(c.slice(1), 10);
      for (let d = h; d < Math.min(h + a, u.length); d++) this.addClassToHast(u[d], n[o]);
      return r && this.addClassToHast(this.pre, r), !0;
    },
    t.matchAlgorithm,
  );
}
const At = H({
  name: 'Shiki',
  props: { code: { type: String, required: !0 }, lang: { type: String, required: !0 } },
  setup(t) {
    const e = S(() =>
      Ce.value
        ? Ce.value.codeToHtml(t.code, {
            lang: t.lang,
            theme: Ge.value ? 'vitesse-dark' : 'vitesse-light',
            transformers: [
              {
                pre(n) {
                  n.properties.style = '';
                },
              },
              yt({ classMap: { muted: 'muted' } }, '@shikijs/transformers:notation-muted'),
            ],
          })
        : st(t.code),
    );
    return () => oe('div', { class: 'filter-hue-rotate-90', innerHTML: e.value });
  },
});
let le;
function _e(t) {
  return (le = !0), ['--', t, '--'];
}
function ae(t, e) {
  if (e === void 0 || typeof t != typeof e) return t;
  if (t === e) return _e(t);
  if (typeof t == 'object' && t !== null && e !== null) {
    if (Array.isArray(t) && Array.isArray(e) && t.length === e.length)
      return t.length === 0 ? _e(t) : t.map((n, r) => ae(n, e[r]));
    if (!Array.isArray(t) && !Array.isArray(e))
      return Object.keys(t).reduce((r, i) => ((r[i] = ae(t[i], e[i])), r), {});
  }
  return t;
}
function Se(t, e) {
  return (
    (le = !1),
    { options: t.map((r, i) => ae(r, i < e.length ? e[i] : void 0)), hasRedundantOptions: le }
  );
}
const vt = { 'min-w-100': '', p4: '', flex: '~ col gap-2' },
  Ct = { flex: '~ gap-1 items-center' },
  Et = { key: 0, ml1: '', op50: '' },
  xt = { key: 1, ml1: '', op50: '' },
  kt = { key: 3, op50: '' },
  _t = { key: 0, flex: '~ gap-2' },
  Bt = { flex: '~ col gap-2' },
  Dt = { flex: '~ gap-2 items-center wrap' },
  Ft = { 'items-center': '', 'justify-between': '', 'md:flex': '' },
  bt = { flex: '~ gap-1', op50: '' },
  Mt = { key: 2, op50: '' },
  Re = H({
    __name: 'RuleStateItem',
    props: { state: {}, isLocal: { type: Boolean } },
    setup(t) {
      const e = t,
        n = { error: 'text-red', warn: 'text-amber', off: 'text-gray' },
        r = S(() => ue.value.configs[e.state.configIndex]),
        i = S(() => we(e.state.name)),
        o = S(() => Se(e.state.options ?? [], i.value)),
        c = S(() => {
          var h, a;
          return !((h = e.state.options) != null && h.length) && (a = i.value) != null && a.length
            ? 'default'
            : 'state';
        }),
        s = Je({ viewType: c.value }),
        l = Ue();
      function u() {
        (Ye.rule = e.state.name), l.push('/configs');
      }
      return (h, a) => {
        var x, F, B, E, D;
        const d = $e,
          g = rt,
          y = it,
          A = At;
        return (
          f(),
          m('div', vt, [
            v('div', Ct, [
              J(d, { level: h.state.level, 'config-index': h.state.configIndex }, null, 8, [
                'level',
                'config-index',
              ]),
              h.state.level === 'off'
                ? (f(), m('span', Et, 'Turned '))
                : (f(), m('span', xt, 'Set to ')),
              v('span', { 'font-mono': '', class: w(n[h.state.level]) }, K(h.state.level), 3),
              h.isLocal
                ? (f(), m('div', kt, ' in this config '))
                : (f(),
                  m(
                    b,
                    { key: 2 },
                    [
                      a[5] || (a[5] = v('span', { op50: '' }, 'in', -1)),
                      v(
                        'button',
                        {
                          hover: '!color-base',
                          'text-gray': '',
                          onClick: a[0] || (a[0] = (k) => u()),
                        },
                        [
                          r.value.name
                            ? (f(),
                              R(
                                g,
                                {
                                  key: 0,
                                  name: r.value.name,
                                  px2: '',
                                  'font-mono': '',
                                  border: '~ base rounded',
                                },
                                null,
                                8,
                                ['name'],
                              ))
                            : C('', !0),
                          a[3] || (a[3] = v('span', { op50: '' }, ' the ', -1)),
                          z(' ' + K(_(Ie)(h.state.configIndex + 1)) + ' ', 1),
                          a[4] || (a[4] = v('span', { op50: '' }, ' config item ', -1)),
                        ],
                      ),
                    ],
                    64,
                  )),
            ]),
            h.isLocal
              ? C('', !0)
              : (f(),
                m('div', _t, [
                  r.value.files
                    ? (f(),
                      m(
                        b,
                        { key: 0 },
                        [
                          a[7] ||
                            (a[7] = v(
                              'div',
                              {
                                'i-ph-file-magnifying-glass-duotone': '',
                                my1: '',
                                'flex-none': '',
                                op75: '',
                              },
                              null,
                              -1,
                            )),
                          v('div', Bt, [
                            a[6] ||
                              (a[6] = v('div', { op50: '' }, ' Applies to files matching ', -1)),
                            v('div', Dt, [
                              (f(!0),
                              m(
                                b,
                                null,
                                U(
                                  (x = r.value.files) == null ? void 0 : x.flat(),
                                  (k, L) => (f(), R(y, { key: L, glob: k }, null, 8, ['glob'])),
                                ),
                                128,
                              )),
                            ]),
                          ]),
                        ],
                        64,
                      ))
                    : r.value.rules
                      ? (f(),
                        m(
                          b,
                          { key: 1 },
                          [
                            a[8] ||
                              (a[8] = v(
                                'div',
                                { 'i-ph-files-duotone': '', my1: '', 'flex-none': '', op75: '' },
                                null,
                                -1,
                              )),
                            a[9] ||
                              (a[9] = v(
                                'div',
                                { op50: '' },
                                ' Applied generally for all files ',
                                -1,
                              )),
                          ],
                          64,
                        ))
                      : C('', !0),
                ])),
            ((F = h.state.options) != null && F.length) || ((B = i.value) != null && B.length)
              ? (f(),
                m(
                  b,
                  { key: 1 },
                  [
                    v('div', Ft, [
                      v('div', bt, [
                        (E = h.state.options) != null && E.length
                          ? (f(),
                            m(
                              'button',
                              {
                                key: 0,
                                'btn-action': '',
                                class: w({ 'btn-action-active': s.viewType === 'state' }),
                                onClick: a[1] || (a[1] = (k) => (s.viewType = 'state')),
                              },
                              a[10] ||
                                (a[10] = [
                                  v(
                                    'div',
                                    {
                                      'i-ph-sliders-duotone': '',
                                      my1: '',
                                      'flex-none': '',
                                      op75: '',
                                    },
                                    null,
                                    -1,
                                  ),
                                  z(' Rule options '),
                                ]),
                              2,
                            ))
                          : C('', !0),
                        (D = i.value) != null && D.length
                          ? (f(),
                            m(
                              'button',
                              {
                                key: 1,
                                'btn-action': '',
                                class: w({ 'btn-action-active': s.viewType === 'default' }),
                                onClick: a[2] || (a[2] = (k) => (s.viewType = 'default')),
                              },
                              a[11] ||
                                (a[11] = [
                                  v(
                                    'div',
                                    {
                                      'i-ph-faders-duotone': '',
                                      my1: '',
                                      'flex-none': '',
                                      op75: '',
                                    },
                                    null,
                                    -1,
                                  ),
                                  z(' Option defaults '),
                                ]),
                              2,
                            ))
                          : C('', !0),
                      ]),
                    ]),
                    s.viewType === 'state'
                      ? (f(!0),
                        m(
                          b,
                          { key: 0 },
                          U(
                            o.value.options,
                            (k, L) => (
                              f(),
                              R(
                                A,
                                {
                                  key: L,
                                  lang: 'ts',
                                  code: _(Ee)(k),
                                  rounded: '',
                                  'bg-code': '',
                                  p2: '',
                                  'text-sm': '',
                                },
                                null,
                                8,
                                ['code'],
                              )
                            ),
                          ),
                          128,
                        ))
                      : C('', !0),
                    s.viewType === 'default'
                      ? (f(!0),
                        m(
                          b,
                          { key: 1 },
                          U(
                            i.value,
                            (k, L) => (
                              f(),
                              R(
                                A,
                                {
                                  key: L,
                                  lang: 'ts',
                                  code: _(Ee)(k),
                                  rounded: '',
                                  'bg-code': '',
                                  p2: '',
                                  'text-sm': '',
                                },
                                null,
                                8,
                                ['code'],
                              )
                            ),
                          ),
                          128,
                        ))
                      : C('', !0),
                  ],
                  64,
                ))
              : C('', !0),
            s.viewType === 'state' && o.value.hasRedundantOptions
              ? (f(),
                m(
                  'div',
                  Mt,
                  a[12] ||
                    (a[12] = [
                      z(' Options '),
                      v('span', { italic: '', op75: '' }, 'italicized', -1),
                      z(' match the default for the rule '),
                    ]),
                ))
              : C('', !0),
          ])
        );
      };
    },
  }),
  wt = { key: 0, 'max-h': '50vh' },
  It = { flex: '~ items-center gap-2', p3: '' },
  $t = { key: 2, grid: '~ cols-2 items-center gap1', mx2: '' },
  St = { key: 0, 'i-ph-check-square-duotone': '', op50: '' },
  Rt = { key: 1 },
  Ot = { key: 2, 'i-ph-wrench-duotone': '', op50: '' },
  Lt = { key: 3 },
  Nt = {
    key: 0,
    border: '~ red/25 rounded',
    'bg-red:5': '',
    px1: '',
    'text-xs': '',
    'text-red': '',
  },
  Tt = { key: 3, flex: '', 'flex-auto': '', 'flex-col': '', 'items-start': '', 'justify-end': '' },
  jt = { flex: '~ gap-2', mt1: '' },
  Pt = {
    key: 0,
    border: '~ red/25 rounded',
    'bg-red:5': '',
    px1: '',
    'text-xs': '',
    'text-red': '',
  },
  Vt = { key: 1, 'i-ph-check-square-duotone': '', op50: '' },
  zt = { key: 2, 'i-ph-wrench-duotone': '', op50: '' },
  Wt = H({
    __name: 'RuleItem',
    props: { rule: {}, ruleStates: {}, value: {}, class: {}, gridView: { type: Boolean } },
    emits: ['badgeClick', 'stateClick'],
    setup(t, { emit: e }) {
      const n = t,
        r = e;
      function i(s) {
        const { hasRedundantOptions: l } = Se(s ?? [], we(n.rule.name));
        return l;
      }
      const { copy: o } = Qe();
      function c(s) {
        return s && s[0].toUpperCase() + s.slice(1);
      }
      return (s, l) => {
        var y, A, x, F, B;
        const u = $e,
          h = Re,
          a = Xe('VDropdown'),
          d = at,
          g = qe;
        return (
          f(),
          m(
            b,
            null,
            [
              s.ruleStates
                ? (f(),
                  m(
                    'div',
                    {
                      key: 0,
                      flex: '~ items-center gap-0.5 justify-end',
                      'text-lg': '',
                      class: w(s.gridView ? 'absolute top-2 right-2 flex-col' : ''),
                    },
                    [
                      (f(!0),
                      m(
                        b,
                        null,
                        U(
                          s.ruleStates,
                          (E, D) => (
                            f(),
                            R(
                              a,
                              { key: D },
                              {
                                popper: N(({ shown: k }) => [
                                  k
                                    ? (f(), R(h, { key: 0, state: E }, null, 8, ['state']))
                                    : C('', !0),
                                ]),
                                default: N(() => {
                                  var k;
                                  return [
                                    J(
                                      u,
                                      {
                                        level: E.level,
                                        'config-index': E.configIndex,
                                        'has-options': !!((k = E.options) != null && k.length),
                                        'has-redundant-options': i(E.options),
                                      },
                                      null,
                                      8,
                                      [
                                        'level',
                                        'config-index',
                                        'has-options',
                                        'has-redundant-options',
                                      ],
                                    ),
                                  ];
                                }),
                                _: 2,
                              },
                              1024,
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    2,
                  ))
                : C('', !0),
              s.value != null
                ? (f(),
                  m(
                    'div',
                    {
                      key: 1,
                      class: w([n.class, s.gridView ? 'absolute top-2 right-2 flex-col' : '']),
                    },
                    [
                      J(
                        u,
                        {
                          level: _(Ze)(s.value),
                          'has-options': !!((y = _(ve)(s.value)) != null && y.length),
                          'has-redundant-options': i(_(ve)(s.value)),
                        },
                        null,
                        8,
                        ['level', 'has-options', 'has-redundant-options'],
                      ),
                    ],
                    2,
                  ))
                : C('', !0),
              v(
                'div',
                { class: w(n.class) },
                [
                  J(
                    a,
                    { 'inline-block': '' },
                    {
                      popper: N(({ shown: E }) => {
                        var D;
                        return [
                          E
                            ? (f(),
                              m('div', wt, [
                                v('div', It, [
                                  s.rule.invalid
                                    ? C('', !0)
                                    : (f(),
                                      R(
                                        g,
                                        {
                                          key: 0,
                                          'btn-action-sm': '',
                                          to: (D = s.rule.docs) == null ? void 0 : D.url,
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                          title: 'Docs',
                                        },
                                        {
                                          default: N(
                                            () =>
                                              l[2] ||
                                              (l[2] = [
                                                v('div', { 'i-ph-book-duotone': '' }, null, -1),
                                                z(' Docs '),
                                              ]),
                                          ),
                                          _: 1,
                                        },
                                        8,
                                        ['to'],
                                      )),
                                  v(
                                    'button',
                                    {
                                      'btn-action-sm': '',
                                      title: 'Copy',
                                      onClick: l[1] || (l[1] = (k) => _(o)(s.rule.name)),
                                    },
                                    l[3] ||
                                      (l[3] = [
                                        v('div', { 'i-ph-copy-duotone': '' }, null, -1),
                                        z(' Copy name '),
                                      ]),
                                  ),
                                  ee(s.$slots, 'popup-actions'),
                                ]),
                                ee(s.$slots, 'popup'),
                              ]))
                            : C('', !0),
                        ];
                      }),
                      default: N(() => [
                        J(
                          d,
                          {
                            name: s.rule.name,
                            prefix: s.rule.plugin,
                            deprecated: s.rule.deprecated,
                            borderless: s.gridView,
                            break: s.gridView,
                            'text-start': '',
                            as: 'button',
                            onClick: l[0] || (l[0] = (E) => r('badgeClick', E)),
                          },
                          null,
                          8,
                          ['name', 'prefix', 'deprecated', 'borderless', 'break'],
                        ),
                      ]),
                      _: 3,
                    },
                  ),
                ],
                2,
              ),
              s.gridView
                ? C('', !0)
                : (f(),
                  m('div', $t, [
                    (A = s.rule.docs) != null && A.recommended
                      ? X((f(), m('div', St, null, 512)), [[_(Z), '✅ Recommended']])
                      : (f(), m('div', Rt)),
                    s.rule.fixable
                      ? X((f(), m('div', Ot, null, 512)), [[_(Z), '🔧 Fixable']])
                      : (f(), m('div', Lt)),
                  ])),
              v(
                'div',
                { class: w(n.class), flex: '~ gap-2 items-center' },
                [
                  v(
                    'div',
                    {
                      class: w([
                        s.rule.deprecated ? 'line-through' : '',
                        s.rule.invalid ? 'text-red' : '',
                        s.gridView
                          ? 'op50 text-sm'
                          : 'op75 ws-nowrap of-hidden text-ellipsis line-clamp-1',
                      ]),
                    },
                    K(
                      s.rule.invalid
                        ? 'Invalid rule has no description'
                        : c((x = s.rule.docs) == null ? void 0 : x.description),
                    ),
                    3,
                  ),
                  !s.gridView && (s.rule.invalid || s.rule.deprecated)
                    ? (f(), m('div', Nt, K(s.rule.invalid ? 'INVALID' : 'DEPRECATED'), 1))
                    : C('', !0),
                ],
                2,
              ),
              s.gridView &&
              (s.rule.invalid ||
                s.rule.deprecated ||
                s.rule.fixable ||
                ((F = s.rule.docs) != null && F.recommended))
                ? (f(),
                  m('div', Tt, [
                    v('div', jt, [
                      s.rule.invalid || s.rule.deprecated
                        ? (f(), m('div', Pt, K(s.rule.invalid ? 'INVALID' : 'DEPRECATED'), 1))
                        : C('', !0),
                      (B = s.rule.docs) != null && B.recommended
                        ? X((f(), m('div', Vt, null, 512)), [[_(Z), '✅ Recommended']])
                        : C('', !0),
                      s.rule.fixable
                        ? X((f(), m('div', zt, null, 512)), [[_(Z), '🔧 Fixable']])
                        : C('', !0),
                    ]),
                  ]))
                : C('', !0),
            ],
            64,
          )
        );
      };
    },
  }),
  Sn = H({
    __name: 'RuleList',
    props: { rules: {}, getBind: { type: Function }, filter: { type: Function } },
    setup(t) {
      const e = t,
        n = S(() => (Array.isArray(e.rules) ? e.rules.map((s) => s.name) : Object.keys(e.rules)));
      function r(s) {
        return Array.isArray(e.rules) ? e.rules.find((l) => l.name === s) : tt(s);
      }
      function i(s) {
        return Array.isArray(e.rules) ? void 0 : e.rules[s];
      }
      const o = S(() =>
          re.value
            ? 'grid grid-cols-[repeat(auto-fill,minmax(min(100%,350px),1fr))] gap-2'
            : (Array.isArray(e.rules),
              'grid grid-cols-[max-content_max-content_max-content_1fr] gap-x-2 gap-y-2 items-center'),
        ),
        c = H({
          setup(s, { slots: l }) {
            return () => {
              var u, h;
              return re.value
                ? oe(
                    'div',
                    {
                      class:
                        'relative border border-base max-w-full rounded-lg p4 py3 flex flex-col gap-2 of-hidden justify-start',
                    },
                    (u = l.default) == null ? void 0 : u.call(l),
                  )
                : oe(b, (h = l.default) == null ? void 0 : h.call(l));
            };
          },
        });
      return (s, l) => {
        const u = Re,
          h = Wt;
        return (
          f(),
          m(
            'div',
            { class: w(o.value) },
            [
              (f(!0),
              m(
                b,
                null,
                U(n.value, (a) => {
                  var d;
                  return (
                    f(),
                    m(
                      b,
                      { key: a },
                      [
                        ((d = e.filter) == null ? void 0 : d.call(e, a)) !== !1
                          ? (f(),
                            R(
                              _(c),
                              { key: 0 },
                              {
                                default: N(() => {
                                  var g;
                                  return [
                                    J(
                                      h,
                                      et(
                                        {
                                          rule: r(a),
                                          'rule-states': Array.isArray(s.rules)
                                            ? _(ue).ruleToState.get(a) || []
                                            : void 0,
                                          'grid-view': _(re),
                                          value: i(a),
                                          ref_for: !0,
                                        },
                                        (g = s.getBind) == null ? void 0 : g.call(s, a),
                                      ),
                                      {
                                        popup: N(() => [
                                          ee(
                                            s.$slots,
                                            'popup',
                                            { ruleName: a, value: i(a) },
                                            () => [
                                              (f(!0),
                                              m(
                                                b,
                                                null,
                                                U(
                                                  _(ue).ruleToState.get(a) || [],
                                                  (y, A) => (
                                                    f(),
                                                    R(
                                                      u,
                                                      { key: A, border: 't base', state: y },
                                                      null,
                                                      8,
                                                      ['state'],
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ],
                                          ),
                                        ]),
                                        'popup-actions': N(() => [
                                          ee(s.$slots, 'popup-actions', { ruleName: a }),
                                        ]),
                                        _: 2,
                                      },
                                      1040,
                                      ['rule', 'rule-states', 'grid-view', 'value'],
                                    ),
                                  ];
                                }),
                                _: 2,
                              },
                              1024,
                            ))
                          : C('', !0),
                      ],
                      64,
                    )
                  );
                }),
                128,
              )),
            ],
            2,
          )
        );
      };
    },
  });
function T(t) {
  return Array.isArray ? Array.isArray(t) : Ne(t) === '[object Array]';
}
function Kt(t) {
  if (typeof t == 'string') return t;
  let e = t + '';
  return e == '0' && 1 / t == -1 / 0 ? '-0' : e;
}
function Ht(t) {
  return t == null ? '' : Kt(t);
}
function O(t) {
  return typeof t == 'string';
}
function Oe(t) {
  return typeof t == 'number';
}
function Gt(t) {
  return t === !0 || t === !1 || (Jt(t) && Ne(t) == '[object Boolean]');
}
function Le(t) {
  return typeof t == 'object';
}
function Jt(t) {
  return Le(t) && t !== null;
}
function M(t) {
  return t != null;
}
function ie(t) {
  return !t.trim().length;
}
function Ne(t) {
  return t == null
    ? t === void 0
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(t);
}
const Ut = "Incorrect 'index' type",
  Yt = (t) => `Invalid value for key ${t}`,
  Qt = (t) => `Pattern length exceeds max of ${t}.`,
  Xt = (t) => `Missing ${t} property in key`,
  Zt = (t) => `Property 'weight' in key '${t}' must be a positive integer`,
  Be = Object.prototype.hasOwnProperty;
class qt {
  constructor(e) {
    (this._keys = []), (this._keyMap = {});
    let n = 0;
    e.forEach((r) => {
      let i = Te(r);
      this._keys.push(i), (this._keyMap[i.id] = i), (n += i.weight);
    }),
      this._keys.forEach((r) => {
        r.weight /= n;
      });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Te(t) {
  let e = null,
    n = null,
    r = null,
    i = 1,
    o = null;
  if (O(t) || T(t)) (r = t), (e = De(t)), (n = ce(t));
  else {
    if (!Be.call(t, 'name')) throw new Error(Xt('name'));
    const c = t.name;
    if (((r = c), Be.call(t, 'weight') && ((i = t.weight), i <= 0))) throw new Error(Zt(c));
    (e = De(c)), (n = ce(c)), (o = t.getFn);
  }
  return { path: e, id: n, weight: i, src: r, getFn: o };
}
function De(t) {
  return T(t) ? t : t.split('.');
}
function ce(t) {
  return T(t) ? t.join('.') : t;
}
function en(t, e) {
  let n = [],
    r = !1;
  const i = (o, c, s) => {
    if (M(o))
      if (!c[s]) n.push(o);
      else {
        let l = c[s];
        const u = o[l];
        if (!M(u)) return;
        if (s === c.length - 1 && (O(u) || Oe(u) || Gt(u))) n.push(Ht(u));
        else if (T(u)) {
          r = !0;
          for (let h = 0, a = u.length; h < a; h += 1) i(u[h], c, s + 1);
        } else c.length && i(u, c, s + 1);
      }
  };
  return i(t, O(e) ? e.split('.') : e, 0), r ? n : n[0];
}
const tn = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  nn = {
    isCaseSensitive: !1,
    ignoreDiacritics: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (t, e) => (t.score === e.score ? (t.idx < e.idx ? -1 : 1) : t.score < e.score ? -1 : 1),
  },
  sn = { location: 0, threshold: 0.6, distance: 100 },
  rn = {
    useExtendedSearch: !1,
    getFn: en,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1,
  };
var p = { ...nn, ...tn, ...sn, ...rn };
const on = /[^ ]+/g;
function un(t = 1, e = 3) {
  const n = new Map(),
    r = Math.pow(10, e);
  return {
    get(i) {
      const o = i.match(on).length;
      if (n.has(o)) return n.get(o);
      const c = 1 / Math.pow(o, 0.5 * t),
        s = parseFloat(Math.round(c * r) / r);
      return n.set(o, s), s;
    },
    clear() {
      n.clear();
    },
  };
}
class me {
  constructor({ getFn: e = p.getFn, fieldNormWeight: n = p.fieldNormWeight } = {}) {
    (this.norm = un(n, 3)), (this.getFn = e), (this.isCreated = !1), this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    (this.keys = e),
      (this._keysMap = {}),
      e.forEach((n, r) => {
        this._keysMap[n.id] = r;
      });
  }
  create() {
    this.isCreated ||
      !this.docs.length ||
      ((this.isCreated = !0),
      O(this.docs[0])
        ? this.docs.forEach((e, n) => {
            this._addString(e, n);
          })
        : this.docs.forEach((e, n) => {
            this._addObject(e, n);
          }),
      this.norm.clear());
  }
  add(e) {
    const n = this.size();
    O(e) ? this._addString(e, n) : this._addObject(e, n);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let n = e, r = this.size(); n < r; n += 1) this.records[n].i -= 1;
  }
  getValueForItemAtKeyId(e, n) {
    return e[this._keysMap[n]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, n) {
    if (!M(e) || ie(e)) return;
    let r = { v: e, i: n, n: this.norm.get(e) };
    this.records.push(r);
  }
  _addObject(e, n) {
    let r = { i: n, $: {} };
    this.keys.forEach((i, o) => {
      let c = i.getFn ? i.getFn(e) : this.getFn(e, i.path);
      if (M(c)) {
        if (T(c)) {
          let s = [];
          const l = [{ nestedArrIndex: -1, value: c }];
          for (; l.length; ) {
            const { nestedArrIndex: u, value: h } = l.pop();
            if (M(h))
              if (O(h) && !ie(h)) {
                let a = { v: h, i: u, n: this.norm.get(h) };
                s.push(a);
              } else
                T(h) &&
                  h.forEach((a, d) => {
                    l.push({ nestedArrIndex: d, value: a });
                  });
          }
          r.$[o] = s;
        } else if (O(c) && !ie(c)) {
          let s = { v: c, n: this.norm.get(c) };
          r.$[o] = s;
        }
      }
    }),
      this.records.push(r);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function je(t, e, { getFn: n = p.getFn, fieldNormWeight: r = p.fieldNormWeight } = {}) {
  const i = new me({ getFn: n, fieldNormWeight: r });
  return i.setKeys(t.map(Te)), i.setSources(e), i.create(), i;
}
function ln(t, { getFn: e = p.getFn, fieldNormWeight: n = p.fieldNormWeight } = {}) {
  const { keys: r, records: i } = t,
    o = new me({ getFn: e, fieldNormWeight: n });
  return o.setKeys(r), o.setIndexRecords(i), o;
}
function q(
  t,
  {
    errors: e = 0,
    currentLocation: n = 0,
    expectedLocation: r = 0,
    distance: i = p.distance,
    ignoreLocation: o = p.ignoreLocation,
  } = {},
) {
  const c = e / t.length;
  if (o) return c;
  const s = Math.abs(r - n);
  return i ? c + s / i : s ? 1 : c;
}
function an(t = [], e = p.minMatchCharLength) {
  let n = [],
    r = -1,
    i = -1,
    o = 0;
  for (let c = t.length; o < c; o += 1) {
    let s = t[o];
    s && r === -1
      ? (r = o)
      : !s && r !== -1 && ((i = o - 1), i - r + 1 >= e && n.push([r, i]), (r = -1));
  }
  return t[o - 1] && o - r >= e && n.push([r, o - 1]), n;
}
const W = 32;
function cn(
  t,
  e,
  n,
  {
    location: r = p.location,
    distance: i = p.distance,
    threshold: o = p.threshold,
    findAllMatches: c = p.findAllMatches,
    minMatchCharLength: s = p.minMatchCharLength,
    includeMatches: l = p.includeMatches,
    ignoreLocation: u = p.ignoreLocation,
  } = {},
) {
  if (e.length > W) throw new Error(Qt(W));
  const h = e.length,
    a = t.length,
    d = Math.max(0, Math.min(r, a));
  let g = o,
    y = d;
  const A = s > 1 || l,
    x = A ? Array(a) : [];
  let F;
  for (; (F = t.indexOf(e, y)) > -1; ) {
    let I = q(e, { currentLocation: F, expectedLocation: d, distance: i, ignoreLocation: u });
    if (((g = Math.min(I, g)), (y = F + h), A)) {
      let j = 0;
      for (; j < h; ) (x[F + j] = 1), (j += 1);
    }
  }
  y = -1;
  let B = [],
    E = 1,
    D = h + a;
  const k = 1 << (h - 1);
  for (let I = 0; I < h; I += 1) {
    let j = 0,
      P = D;
    for (; j < P; )
      q(e, {
        errors: I,
        currentLocation: d + P,
        expectedLocation: d,
        distance: i,
        ignoreLocation: u,
      }) <= g
        ? (j = P)
        : (D = P),
        (P = Math.floor((D - j) / 2 + j));
    D = P;
    let ye = Math.max(1, d - P + 1),
      se = c ? a : Math.min(d + P, a) + h,
      G = Array(se + 2);
    G[se + 1] = (1 << I) - 1;
    for (let $ = se; $ >= ye; $ -= 1) {
      let Q = $ - 1,
        Ae = n[t.charAt(Q)];
      if (
        (A && (x[Q] = +!!Ae),
        (G[$] = ((G[$ + 1] << 1) | 1) & Ae),
        I && (G[$] |= ((B[$ + 1] | B[$]) << 1) | 1 | B[$ + 1]),
        G[$] & k &&
          ((E = q(e, {
            errors: I,
            currentLocation: Q,
            expectedLocation: d,
            distance: i,
            ignoreLocation: u,
          })),
          E <= g))
      ) {
        if (((g = E), (y = Q), y <= d)) break;
        ye = Math.max(1, 2 * d - y);
      }
    }
    if (
      q(e, {
        errors: I + 1,
        currentLocation: d,
        expectedLocation: d,
        distance: i,
        ignoreLocation: u,
      }) > g
    )
      break;
    B = G;
  }
  const L = { isMatch: y >= 0, score: Math.max(0.001, E) };
  if (A) {
    const I = an(x, s);
    I.length ? l && (L.indices = I) : (L.isMatch = !1);
  }
  return L;
}
function hn(t) {
  let e = {};
  for (let n = 0, r = t.length; n < r; n += 1) {
    const i = t.charAt(n);
    e[i] = (e[i] || 0) | (1 << (r - n - 1));
  }
  return e;
}
const te = String.prototype.normalize
  ? (t) =>
      t
        .normalize('NFD')
        .replace(
          /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,
          '',
        )
  : (t) => t;
class Pe {
  constructor(
    e,
    {
      location: n = p.location,
      threshold: r = p.threshold,
      distance: i = p.distance,
      includeMatches: o = p.includeMatches,
      findAllMatches: c = p.findAllMatches,
      minMatchCharLength: s = p.minMatchCharLength,
      isCaseSensitive: l = p.isCaseSensitive,
      ignoreDiacritics: u = p.ignoreDiacritics,
      ignoreLocation: h = p.ignoreLocation,
    } = {},
  ) {
    if (
      ((this.options = {
        location: n,
        threshold: r,
        distance: i,
        includeMatches: o,
        findAllMatches: c,
        minMatchCharLength: s,
        isCaseSensitive: l,
        ignoreDiacritics: u,
        ignoreLocation: h,
      }),
      (e = l ? e : e.toLowerCase()),
      (e = u ? te(e) : e),
      (this.pattern = e),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    const a = (g, y) => {
        this.chunks.push({ pattern: g, alphabet: hn(g), startIndex: y });
      },
      d = this.pattern.length;
    if (d > W) {
      let g = 0;
      const y = d % W,
        A = d - y;
      for (; g < A; ) a(this.pattern.substr(g, W), g), (g += W);
      if (y) {
        const x = d - W;
        a(this.pattern.substr(x), x);
      }
    } else a(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: n, ignoreDiacritics: r, includeMatches: i } = this.options;
    if (((e = n ? e : e.toLowerCase()), (e = r ? te(e) : e), this.pattern === e)) {
      let A = { isMatch: !0, score: 0 };
      return i && (A.indices = [[0, e.length - 1]]), A;
    }
    const {
      location: o,
      distance: c,
      threshold: s,
      findAllMatches: l,
      minMatchCharLength: u,
      ignoreLocation: h,
    } = this.options;
    let a = [],
      d = 0,
      g = !1;
    this.chunks.forEach(({ pattern: A, alphabet: x, startIndex: F }) => {
      const {
        isMatch: B,
        score: E,
        indices: D,
      } = cn(e, A, x, {
        location: o + F,
        distance: c,
        threshold: s,
        findAllMatches: l,
        minMatchCharLength: u,
        includeMatches: i,
        ignoreLocation: h,
      });
      B && (g = !0), (d += E), B && D && (a = [...a, ...D]);
    });
    let y = { isMatch: g, score: g ? d / this.chunks.length : 1 };
    return g && i && (y.indices = a), y;
  }
}
class V {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return Fe(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return Fe(e, this.singleRegex);
  }
  search() {}
}
function Fe(t, e) {
  const n = t.match(e);
  return n ? n[1] : null;
}
class dn extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'exact';
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const n = e === this.pattern;
    return { isMatch: n, score: n ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class fn extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-exact';
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const r = e.indexOf(this.pattern) === -1;
    return { isMatch: r, score: r ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class pn extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'prefix-exact';
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const n = e.startsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class gn extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-prefix-exact';
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const n = !e.startsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class mn extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'suffix-exact';
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const n = e.endsWith(this.pattern);
    return {
      isMatch: n,
      score: n ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1],
    };
  }
}
class yn extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'inverse-suffix-exact';
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const n = !e.endsWith(this.pattern);
    return { isMatch: n, score: n ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Ve extends V {
  constructor(
    e,
    {
      location: n = p.location,
      threshold: r = p.threshold,
      distance: i = p.distance,
      includeMatches: o = p.includeMatches,
      findAllMatches: c = p.findAllMatches,
      minMatchCharLength: s = p.minMatchCharLength,
      isCaseSensitive: l = p.isCaseSensitive,
      ignoreDiacritics: u = p.ignoreDiacritics,
      ignoreLocation: h = p.ignoreLocation,
    } = {},
  ) {
    super(e),
      (this._bitapSearch = new Pe(e, {
        location: n,
        threshold: r,
        distance: i,
        includeMatches: o,
        findAllMatches: c,
        minMatchCharLength: s,
        isCaseSensitive: l,
        ignoreDiacritics: u,
        ignoreLocation: h,
      }));
  }
  static get type() {
    return 'fuzzy';
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class ze extends V {
  constructor(e) {
    super(e);
  }
  static get type() {
    return 'include';
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let n = 0,
      r;
    const i = [],
      o = this.pattern.length;
    for (; (r = e.indexOf(this.pattern, n)) > -1; ) (n = r + o), i.push([r, n - 1]);
    const c = !!i.length;
    return { isMatch: c, score: c ? 0 : 1, indices: i };
  }
}
const he = [dn, ze, pn, gn, yn, mn, fn, Ve],
  be = he.length,
  An = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  vn = '|';
function Cn(t, e = {}) {
  return t.split(vn).map((n) => {
    let r = n
        .trim()
        .split(An)
        .filter((o) => o && !!o.trim()),
      i = [];
    for (let o = 0, c = r.length; o < c; o += 1) {
      const s = r[o];
      let l = !1,
        u = -1;
      for (; !l && ++u < be; ) {
        const h = he[u];
        let a = h.isMultiMatch(s);
        a && (i.push(new h(a, e)), (l = !0));
      }
      if (!l)
        for (u = -1; ++u < be; ) {
          const h = he[u];
          let a = h.isSingleMatch(s);
          if (a) {
            i.push(new h(a, e));
            break;
          }
        }
    }
    return i;
  });
}
const En = new Set([Ve.type, ze.type]);
class xn {
  constructor(
    e,
    {
      isCaseSensitive: n = p.isCaseSensitive,
      ignoreDiacritics: r = p.ignoreDiacritics,
      includeMatches: i = p.includeMatches,
      minMatchCharLength: o = p.minMatchCharLength,
      ignoreLocation: c = p.ignoreLocation,
      findAllMatches: s = p.findAllMatches,
      location: l = p.location,
      threshold: u = p.threshold,
      distance: h = p.distance,
    } = {},
  ) {
    (this.query = null),
      (this.options = {
        isCaseSensitive: n,
        ignoreDiacritics: r,
        includeMatches: i,
        minMatchCharLength: o,
        findAllMatches: s,
        ignoreLocation: c,
        location: l,
        threshold: u,
        distance: h,
      }),
      (e = n ? e : e.toLowerCase()),
      (e = r ? te(e) : e),
      (this.pattern = e),
      (this.query = Cn(this.pattern, this.options));
  }
  static condition(e, n) {
    return n.useExtendedSearch;
  }
  searchIn(e) {
    const n = this.query;
    if (!n) return { isMatch: !1, score: 1 };
    const { includeMatches: r, isCaseSensitive: i, ignoreDiacritics: o } = this.options;
    (e = i ? e : e.toLowerCase()), (e = o ? te(e) : e);
    let c = 0,
      s = [],
      l = 0;
    for (let u = 0, h = n.length; u < h; u += 1) {
      const a = n[u];
      (s.length = 0), (c = 0);
      for (let d = 0, g = a.length; d < g; d += 1) {
        const y = a[d],
          { isMatch: A, indices: x, score: F } = y.search(e);
        if (A) {
          if (((c += 1), (l += F), r)) {
            const B = y.constructor.type;
            En.has(B) ? (s = [...s, ...x]) : s.push(x);
          }
        } else {
          (l = 0), (c = 0), (s.length = 0);
          break;
        }
      }
      if (c) {
        let d = { isMatch: !0, score: l / c };
        return r && (d.indices = s), d;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
const de = [];
function kn(...t) {
  de.push(...t);
}
function fe(t, e) {
  for (let n = 0, r = de.length; n < r; n += 1) {
    let i = de[n];
    if (i.condition(t, e)) return new i(t, e);
  }
  return new Pe(t, e);
}
const ne = { AND: '$and', OR: '$or' },
  pe = { PATH: '$path', PATTERN: '$val' },
  ge = (t) => !!(t[ne.AND] || t[ne.OR]),
  _n = (t) => !!t[pe.PATH],
  Bn = (t) => !T(t) && Le(t) && !ge(t),
  Me = (t) => ({ [ne.AND]: Object.keys(t).map((e) => ({ [e]: t[e] })) });
function We(t, e, { auto: n = !0 } = {}) {
  const r = (i) => {
    let o = Object.keys(i);
    const c = _n(i);
    if (!c && o.length > 1 && !ge(i)) return r(Me(i));
    if (Bn(i)) {
      const l = c ? i[pe.PATH] : o[0],
        u = c ? i[pe.PATTERN] : i[l];
      if (!O(u)) throw new Error(Yt(l));
      const h = { keyId: ce(l), pattern: u };
      return n && (h.searcher = fe(u, e)), h;
    }
    let s = { children: [], operator: o[0] };
    return (
      o.forEach((l) => {
        const u = i[l];
        T(u) &&
          u.forEach((h) => {
            s.children.push(r(h));
          });
      }),
      s
    );
  };
  return ge(t) || (t = Me(t)), r(t);
}
function Dn(t, { ignoreFieldNorm: e = p.ignoreFieldNorm }) {
  t.forEach((n) => {
    let r = 1;
    n.matches.forEach(({ key: i, norm: o, score: c }) => {
      const s = i ? i.weight : null;
      r *= Math.pow(c === 0 && s ? Number.EPSILON : c, (s || 1) * (e ? 1 : o));
    }),
      (n.score = r);
  });
}
function Fn(t, e) {
  const n = t.matches;
  (e.matches = []),
    M(n) &&
      n.forEach((r) => {
        if (!M(r.indices) || !r.indices.length) return;
        const { indices: i, value: o } = r;
        let c = { indices: i, value: o };
        r.key && (c.key = r.key.src), r.idx > -1 && (c.refIndex = r.idx), e.matches.push(c);
      });
}
function bn(t, e) {
  e.score = t.score;
}
function Mn(t, e, { includeMatches: n = p.includeMatches, includeScore: r = p.includeScore } = {}) {
  const i = [];
  return (
    n && i.push(Fn),
    r && i.push(bn),
    t.map((o) => {
      const { idx: c } = o,
        s = { item: e[c], refIndex: c };
      return (
        i.length &&
          i.forEach((l) => {
            l(o, s);
          }),
        s
      );
    })
  );
}
class Y {
  constructor(e, n = {}, r) {
    (this.options = { ...p, ...n }),
      this.options.useExtendedSearch,
      (this._keyStore = new qt(this.options.keys)),
      this.setCollection(e, r);
  }
  setCollection(e, n) {
    if (((this._docs = e), n && !(n instanceof me))) throw new Error(Ut);
    this._myIndex =
      n ||
      je(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight,
      });
  }
  add(e) {
    M(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    const n = [];
    for (let r = 0, i = this._docs.length; r < i; r += 1) {
      const o = this._docs[r];
      e(o, r) && (this.removeAt(r), (r -= 1), (i -= 1), n.push(o));
    }
    return n;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: n = -1 } = {}) {
    const {
      includeMatches: r,
      includeScore: i,
      shouldSort: o,
      sortFn: c,
      ignoreFieldNorm: s,
    } = this.options;
    let l = O(e)
      ? O(this._docs[0])
        ? this._searchStringList(e)
        : this._searchObjectList(e)
      : this._searchLogical(e);
    return (
      Dn(l, { ignoreFieldNorm: s }),
      o && l.sort(c),
      Oe(n) && n > -1 && (l = l.slice(0, n)),
      Mn(l, this._docs, { includeMatches: r, includeScore: i })
    );
  }
  _searchStringList(e) {
    const n = fe(e, this.options),
      { records: r } = this._myIndex,
      i = [];
    return (
      r.forEach(({ v: o, i: c, n: s }) => {
        if (!M(o)) return;
        const { isMatch: l, score: u, indices: h } = n.searchIn(o);
        l && i.push({ item: o, idx: c, matches: [{ score: u, value: o, norm: s, indices: h }] });
      }),
      i
    );
  }
  _searchLogical(e) {
    const n = We(e, this.options),
      r = (s, l, u) => {
        if (!s.children) {
          const { keyId: a, searcher: d } = s,
            g = this._findMatches({
              key: this._keyStore.get(a),
              value: this._myIndex.getValueForItemAtKeyId(l, a),
              searcher: d,
            });
          return g && g.length ? [{ idx: u, item: l, matches: g }] : [];
        }
        const h = [];
        for (let a = 0, d = s.children.length; a < d; a += 1) {
          const g = s.children[a],
            y = r(g, l, u);
          if (y.length) h.push(...y);
          else if (s.operator === ne.AND) return [];
        }
        return h;
      },
      i = this._myIndex.records,
      o = {},
      c = [];
    return (
      i.forEach(({ $: s, i: l }) => {
        if (M(s)) {
          let u = r(n, s, l);
          u.length &&
            (o[l] || ((o[l] = { idx: l, item: s, matches: [] }), c.push(o[l])),
            u.forEach(({ matches: h }) => {
              o[l].matches.push(...h);
            }));
        }
      }),
      c
    );
  }
  _searchObjectList(e) {
    const n = fe(e, this.options),
      { keys: r, records: i } = this._myIndex,
      o = [];
    return (
      i.forEach(({ $: c, i: s }) => {
        if (!M(c)) return;
        let l = [];
        r.forEach((u, h) => {
          l.push(...this._findMatches({ key: u, value: c[h], searcher: n }));
        }),
          l.length && o.push({ idx: s, item: c, matches: l });
      }),
      o
    );
  }
  _findMatches({ key: e, value: n, searcher: r }) {
    if (!M(n)) return [];
    let i = [];
    if (T(n))
      n.forEach(({ v: o, i: c, n: s }) => {
        if (!M(o)) return;
        const { isMatch: l, score: u, indices: h } = r.searchIn(o);
        l && i.push({ score: u, key: e, value: o, idx: c, norm: s, indices: h });
      });
    else {
      const { v: o, n: c } = n,
        { isMatch: s, score: l, indices: u } = r.searchIn(o);
      s && i.push({ score: l, key: e, value: o, norm: c, indices: u });
    }
    return i;
  }
}
Y.version = '7.1.0';
Y.createIndex = je;
Y.parseIndex = ln;
Y.config = p;
Y.parseQuery = We;
kn(xn);
export { Y as F, Re as _, Sn as a, At as b, at as c, $e as d, ct as s };
